module.exports = {
    routes: [
        { path: '/start',       component: require('./components/Start.vue').default  },
        { path: '/plan',        component: require('./components/Plan.vue').default  },
        { path: '/route',       component: require('./components/Route.vue').default  },
        { path: '/contact',     component: require('./components/Contact.vue').default  }
    ]
};