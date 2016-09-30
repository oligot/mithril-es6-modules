import m from 'mithril';
import Hello from './hello.js';

function view() {
  return m(Hello, { name: 'client' });
}

m.mount(document.getElementById('container'), { view });
