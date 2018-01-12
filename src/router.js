module.exports = {
    routes: [
        { path: '/home',    component: require('./components/Home.vue').default  },
        { path: '/setUp',   component: require('./components/Configuration.vue').default  },
        { path: '/plan',    component: require('./components/Plan.vue').default  },
        { path: '/route',   component: require('./components/Route.vue').default  }
    ]
};