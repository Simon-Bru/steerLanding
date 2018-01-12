module.exports = {
    routes: [
        { path: '/home', component: require('./components/Home.vue').default  },
        { path: '/setUp', component: require('./components/Guide.vue').default  },
        { path: '/plan', component: require('./components/Route.vue').default  }
    ]
};