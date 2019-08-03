import Vue from 'vue';

const components = require.context('.', true, /\.vue$/);
components.keys().forEach((key) => {
  const name = key.replace(/^\.\//, '').replace(/\.vue$/, '');
  const component = components(key);
  Vue.component(name, component.default);
});
