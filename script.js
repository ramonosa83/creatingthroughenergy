/* Creating Through Energy · interactions */

document.documentElement.classList.add('js');

var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Photo fallback ---------- */
var photo = document.getElementById('ramon-photo');
if (photo) {
  photo.addEventListener('error', function () {
    photo.classList.add('missing');
  });
}

/* ---------- Navbar morph ---------- */
var navbar = document.getElementById('navbar');
function onScroll() {
  if (window.scrollY > window.innerHeight * 0.75) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Email form (swap for your GHL form embed later) ---------- */
var form = document.getElementById('connect-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('email');
    if (!email.value || email.value.indexOf('@') === -1) {
      email.focus();
      return;
    }
    form.style.display = 'none';
    document.getElementById('form-success').hidden = false;
  });
}

/* ---------- GSAP animations ---------- */
if (window.gsap && !reduceMotion) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.hero-line', {
    opacity: 1,
    y: 0,
    duration: 1.1,
    ease: 'power3.out',
    stagger: 0.12,
    delay: 0.2
  });

  gsap.utils.toArray('.reveal').forEach(function (el) {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });
} else {
  /* Motion off or GSAP failed to load: show everything */
  document.querySelectorAll('.reveal, .hero-line').forEach(function (el) {
    el.style.opacity = 1;
    el.style.transform = 'none';
  });
}
