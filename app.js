import m from 'mithril';

function view() {
  return m('div', 'Hello World!');
}

m.mount(document.getElementById('container'), { view });
