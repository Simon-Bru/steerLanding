const fs                    = require('fs'),
      express               = require('express'),
      request                  = require('request'),
    { createBundleRenderer }= require('vue-server-renderer'),
      csrf                  = require('csurf'),
      bodyParser            = require('body-parser'),
      cookieParser          = require('cookie-parser');

// Mail chimp variables
const mailchimpInstance = 'us17',
      mailchimpApiKey   = 'b74565d00af3ec7a90d7d0e656b70bdc-us17';
      listUniqueId      = 'c23d0f0093';

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

// Prevent CORS
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(csrf({ cookie: true }));
// 
// app.get('/form', function (req, res) {
//   // pass the csrfToken to the view
//   res.render('send', { csrfToken: req.csrfToken() });
// });

// Serve static assets from ./dist on the /dist route.
app.use('/dist', express.static('dist'));

// app.use(function (req, res, next) {
//   var token = req.csrfToken();
//   res.cookie('XSRF-TOKEN', token);
//   res.locals.csrfToken = token;
//   next();
// });

// Render all other routes with the bundleRenderer.
app.get('*', (req, res) => {
  bundleRenderer
    // Renders directly to the response stream.
    // The argument is passed as "context" to main.server.js in the SSR bundle.
    .renderToStream({url: req.path})
    .pipe(res);
});

app.post('/subscribe', (req, res) => {
  if(req.query.email){

    var options = {
      url: 'https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64')
      },
      body: JSON.stringify({
        'email_address': req.query.email,
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
          
          if (rBody.status < 300 || (rBody.status === 400 && rBody.title === "Member Exists")) {
            res.send(200);
          } else {
            res.send(rBody.status);
          }
        });
  } else {
    res.send(422);
  }
});

// Bind the app to this port.
app.listen(8080);
