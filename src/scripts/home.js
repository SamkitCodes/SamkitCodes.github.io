(function () {
  var canvas = document.getElementById('queries');
  function draw() {
    var css = getComputedStyle(document.documentElement);
    var width = canvas.parentElement.clientWidth;
    var cols = width < 520 ? 60 : 100;
    var rows = 3000 / cols;
    var pitch = width / cols;
    var height = Math.round(pitch * rows);
    var ratio = window.devicePixelRatio || 1;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.aspectRatio = width + ' / ' + height;
    var ctx = canvas.getContext('2d');
    ctx.scale(ratio, ratio);
    // Counts from the thesis log: 1,582 + 1,029 + 122 + 267 = 3,000.
    var groups = [[1582, '--c1'], [1029, '--c2'], [122, '--c3'], [267, '--dot']];
    var i = 0;
    groups.forEach(function (group) {
      ctx.fillStyle = css.getPropertyValue(group[1]).trim();
      for (var n = 0; n < group[0]; n++, i++) {
        ctx.beginPath();
        ctx.arc((i % cols + 0.5) * pitch, (Math.floor(i / cols) + 0.5) * pitch, pitch * 0.36, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  }
  draw();
  addEventListener('resize', draw);
  if (matchMedia) matchMedia('(prefers-color-scheme: dark)').addEventListener('change', draw);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);

  var button = document.getElementById('copy');
  button.addEventListener('click', function () {
    var address = document.getElementById('email').textContent;
    function done() { button.textContent = 'Copied'; setTimeout(function () { button.textContent = 'Copy email'; }, 1800); }
    function fallback() {
      var range = document.createRange();
      range.selectNodeContents(document.getElementById('email'));
      var selection = getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      button.textContent = 'Press Cmd+C';
    }
    if (navigator.clipboard) navigator.clipboard.writeText(address).then(done, fallback); else fallback();
  });
})();
