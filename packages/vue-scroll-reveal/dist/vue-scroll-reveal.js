"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _scrollreveal = _interopRequireDefault(require("scrollreveal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const VueScrollReveal = {
  install(Vue, defaultOptions) {
    Vue.directive('scroll-reveal', {
      inserted: (el, binding) => {
        const options = Object.assign({}, defaultOptions, binding.value);

        if (typeof options.class === 'string') {
          el.classList.add(options.class);
          delete options.class;
        }

        (0, _scrollreveal.default)().reveal(el, options);
      },
      update: (el, binding) => {
        if (binding.value != binding.oldValue) {
          const options = Object.assign({}, defaultOptions, binding.value);
          (0, _scrollreveal.default)().reveal(el, options);
        }
      }
    });
    Object.defineProperty(Vue.prototype, '$sr', {
      get() {
        return (0, _scrollreveal.default)();
      }

    });
  }

};
var _default = VueScrollReveal;
exports.default = _default;
