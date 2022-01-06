export const debounce = (func, delay) => {
    let inDebounce;
    return function debounced(...args) {
      const context = this;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  };