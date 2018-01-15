module.exports = {
    routes: [
        { path: '/start',    component: require('./components/Start.vue').default  },
        { path: '/plan',    component: require('./components/Plan.vue').default  },
        { path: '/setUp',   component: require('./components/Configuration.vue').default  },
        { path: '/route',   component: require('./components/Route.vue').default  }
    ]
};