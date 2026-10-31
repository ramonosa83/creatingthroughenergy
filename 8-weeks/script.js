(function () {
  var bar = document.getElementById('progressBar');
  var fill = document.getElementById('lineFill');
  var timeline = document.querySelector('.timeline');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function update() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';

    var box = timeline.getBoundingClientRect();
    var anchor = window.innerHeight * 0.7;
    var pct = (anchor - box.top) / box.height;
    fill.style.transform = 'scaleY(' + Math.min(Math.max(pct, 0), 1) + ')';
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();

  // Copy stays fully visible unless this script can run the reveal.
  if (reduced || !('IntersectionObserver' in window)) return;

  var items = document.querySelectorAll('[data-reveal]');
  var seen = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        seen.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px' });

  document.documentElement.classList.add('reveal-on');
  items.forEach(function (el) { seen.observe(el); });
})();
