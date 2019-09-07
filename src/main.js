// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "babel-polyfill"
require('./mock.js')

import post from './common/http.config.js'
Vue.prototype.$http = post

// import $ from 'jquery'
//二维码生成
import QRCode from 'qrcode'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//css样式引入
import './assets/global.css'
Vue.config.productionTip = false

Vue.component('button-counter', {//全局组件注册
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">全局组件点击+1 {{ count }} .</button>'
})
Vue.filter('capitalize', function (value) {//全局过滤器 首字母大写
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//wxt到此一游










/* import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = {
  template: '<router-view></router-view>'
}
const Default = {
  template: '<div>default</div>'
}
const Foo = {
  template: '<div>foo---999</div>'
}
const Bar = {
  template: '<div>bar</div>'
}
const Baz = {
  template: '<div>baz</div>'
}
const WithParams = {
  template: '<div>{{ $route.params.id }}</div>'
}
const Foobar = {
  template: '<div>foobar</div>'
}
const FooBar = {
  template: '<div>FooBar</div>'
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/',
      component: Home,
      children: [{
          path: '',
          component: Default
        },
        {
          path: 'foo',
          component: Foo
        },
        {
          path: 'bar',
          component: Bar
        },
        {
          path: 'baz',
          name: 'baz',
          component: Baz
        },
        {
          path: 'with-params/:id',
          component: WithParams
        },
        // relative redirect to a sibling route
        {
          path: 'relative-redirect',
          redirect: 'foo'
        }
      ]
    },
    // absolute redirect
    {
      path: '/absolute-redirect',
      redirect: '/bar'
    },
    // dynamic redirect, note that the target route `to` is available for the redirect function
    {
      path: '/dynamic-redirect/:id?',
      redirect: to => {
        const {
          hash,
          params,
          query
        } = to
        if (query.to === 'foo') {
          return {
            path: '/foo',
            query: null
          }
        }
        if (hash === '#baz') {
          return {
            name: 'baz',
            hash: ''
          }
        }
        if (params.id) {
          return '/with-params/:id'
        } else {
          return '/bar'
        }
      }
    },
    // named redirect
    {
      path: '/named-redirect',
      redirect: {
        name: 'baz'
      }
    },

    // redirect with params
    {
      path: '/redirect-with-params/:id',
      redirect: '/with-params/:id'
    },

    // redirect with caseSensitive
    {
      path: '/foobar',
      component: Foobar,
      caseSensitive: true
    },

    // redirect with pathToRegexpOptions
    {
      path: '/FooBar',
      component: FooBar,
      pathToRegexpOptions: {
        sensitive: true
      }
    },

    // catch all redirect
    {
      path: '*',
      redirect: '/'
    }
  ]
})

new Vue({
  router,
  template: `
    <div id="app">
      <h1>Redirect</h1>
      <ul>
        <li><router-link to="/relative-redirect">
          /relative-redirect (redirects to /foo)
        </router-link></li>
        <li><router-link to="/relative-redirect?foo=bar">
          /relative-redirect?foo=bar (redirects to /foo?foo=bar)
        </router-link></li>
        <li><router-link to="/absolute-redirect">
          /absolute-redirect (redirects to /bar)
        </router-link></li>
        <li><router-link to="/dynamic-redirect">
          /dynamic-redirect (redirects to /bar)
        </router-link></li>
        <li><router-link to="/dynamic-redirect/123">
          /dynamic-redirect/123 (redirects to /with-params/123)
        </router-link></li>
        <li><router-link to="/dynamic-redirect?to=foo">
          /dynamic-redirect?to=foo (redirects to /foo)
        </router-link></li>
        <li><router-link to="/dynamic-redirect#baz">
          /dynamic-redirect#baz (redirects to /baz)
        </router-link></li>
        <li><router-link to="/named-redirect">
          /named-redirect (redirects to /baz)
        </router-link></li>
        <li><router-link to="/redirect-with-params/123">
          /redirect-with-params/123 (redirects to /with-params/123)
        </router-link></li>
        <li><router-link to="/foobar">
          /foobar
        </router-link></li>
        <li><router-link to="/FooBar">
          /FooBar
        </router-link></li>
        <li><router-link to="/not-found">
          /not-found (redirects to /)
        </router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')
 */