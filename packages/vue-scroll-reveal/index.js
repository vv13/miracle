import ScrollReveal from 'scrollreveal'

const VueScrollReveal = {
  install(Vue, defaultOptions) {
    Vue.directive('scroll-reveal', {
      inserted: (el, binding) => {
        const options = generateOptions(defaultOptions, binding.value, binding.modifiers);

        if (typeof options.class === 'string') {
          el.classList.add(options.class);
          delete options.class;
        }

        ScrollReveal().reveal(el, options);
      },
      update: (el, binding) => {
        if (binding.value != binding.oldValue) {
          const options = generateOptions(defaultOptions, binding.value, binding.modifiers);

          ScrollReveal().reveal(el, options);
        }
      },
    });

    Object.defineProperty(Vue.prototype, '$sr', {
      get() {
        return ScrollReveal()
      },
    });
  },
};

export default VueScrollReveal;
