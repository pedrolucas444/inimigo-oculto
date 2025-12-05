(() => {
  const heartBtn = document.getElementById('heartBtn');
  const counterEl = document.getElementById('counter');
  const messageEl = document.getElementById('message');

  let count = 0;

  function updateCounter() {
    counterEl.textContent = String(count);
  }

  function showMessage(text, ms = 1400) {
    messageEl.textContent = text;
    messageEl.classList.add('show');
    setTimeout(() => {
      messageEl.classList.remove('show');
      messageEl.textContent = '';
    }, ms);
  }

  heartBtn.addEventListener('click', () => {
    // animate
    heartBtn.classList.remove('pulse');
    // force reflow to restart animation
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    void heartBtn.offsetWidth;
    heartBtn.classList.add('pulse');

    count += 1;
    updateCounter();

    if (count >= 10) {
      showMessage('volta vida');
      // reset after showing
      count = 0;
      setTimeout(updateCounter, 250);
    }
  });

  // init
  updateCounter();
})();
