import m from 'mithril';

function view(ctrl, attrs) {
  return m('div', `Hello ${attrs.name}!`);
}

export default { view };
