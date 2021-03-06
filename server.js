const fs                    = require('fs'),
      express               = require('express'),
      request               = require('request'),
    { createBundleRenderer }= require('vue-server-renderer'),
      csrf                  = require('csurf'),
      bodyParser            = require('body-parser'),
      cookieParser          = require('cookie-parser');

// Mail chimp variables
const mailchimpInstance = process.env.MC_INSTANCE || 'us17',
      mailchimpApiKey   = process.env.MC_API_KEY || '';
      listUniqueId      = process.env.MC_UNIQUE_ID || '',
      port = process.env.PORT || 8080;


const bundleRenderer = createBundleRenderer(
  // Load the SSR bundle with require.
  require('./dist/vue-ssr-bundle.json'),
  {
    // Yes, I know, readFileSync is bad practice. It's just shorter to read here.
    template: fs.readFileSync('./index.html', 'utf-8')
  }
);

// Create the express app.
const app = express();

app.set('trust proxy', true);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
// Prevent CORS
app.use(csrf({ cookie: true }));

// Serve static assets from ./dist on the /dist route.
app.use('/dist', express.static('dist'));

app.use(function (req, res, next) {
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
});

// Render all other routes with the bundleRenderer.
app.get('*', (req, res) => {
  bundleRenderer
    // Renders directly to the response stream.
    // The argument is passed as "context" to main.server.js in the SSR bundle.
    .renderToStream({ url: req.path, _csrf: req.csrfToken() })
    .pipe(res);
});

app.post('/subscribe', (req, res) => {
  const email = req.body.email;
  if(email){

    var options = {
      url: 'https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64')
      },
      body: JSON.stringify({
        'email_address': email,
        'status': 'subscribed'
      })
    };

    // Mailchimp authentication
    request
        .post(options, (err, response, body) => {
          if(err) {
            console.log(err);
          }
          const rBody = JSON.parse(response.body);

          if (rBody.status === 'subscribed' || (rBody.status === 400 && rBody.title === "Member Exists")) {
            res.sendStatus(200);
          } else {
            console.log(rBody);
            res.sendStatus(400);
          }
        });
  } else {
    res.sendStatus(422);
  }
});

// Bind the app to this port.
app.listen(port);
