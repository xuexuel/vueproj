import 'normalize.css';
import '@/styles/element-variables.scss';
import '@/styles/index.scss';
import '@/icons/components';
import '@/permission';
import '@/utils/error-log';
import '@/pwa/register-service-worker';

import ElementUI from 'element-ui';
import Vue, { DirectiveOptions } from 'vue';
import SvgIcon from 'vue-svgicon';

import App from '@/App.vue';
import * as directives from '@/directives';
import * as filters from '@/filters';
import i18n from '@/lang';
import router from '@/router';
import store from '@/store';
import { AppModule } from '@/store/modules/app';

// 将我们注册的国际化组件实例诸如element中
Vue.use(ElementUI, {
  size: AppModule.size, // Set element-ui default size
  i18n: (key: string, value: string) => i18n.t(key, value)
})

Vue.use(SvgIcon, {
  tagName: 'svg-icon', // 图标组件名称
  defaultWidth: '1em',
  defaultHeight: '1em'
})

// Register global directives
Object.keys(directives).forEach(key => {
  Vue.directive(key, (directives as { [key: string ]: DirectiveOptions })[key])
})

// Register global filter functions
Object.keys(filters).forEach(key => {
  Vue.filter(key, (filters as { [key: string ]: Function })[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
