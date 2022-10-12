(() => {
  function block() {
    setInterval(() => {
      Function('debugger')();
    }, 50);
  }
  try {
    block();
  } catch (err) {
    /** */
  }
})();
