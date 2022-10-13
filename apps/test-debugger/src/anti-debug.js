(() => {
  function block() {
    setInterval(() => {
      // eslint-disable-next-line no-new-func
      Function('debugger')();
    }, 50);
  }
  try {
    block();
  } catch (err) {
    /** */
  }
})();
