'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // Copyright year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Mobile menu
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  const setMenu = open => {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { setMenu(false); toggle.focus(); } });

  // Back to top
  const top = document.querySelector('.to-top');
  if (top) top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Contact form
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('form-status');
  const labels = { name: 'name', email: 'email address', subject: 'subject', message: 'message' };
  const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  const check = f => {
    const v = f.value.trim();
    let msg = '';
    if (!v) msg = `Enter your ${labels[f.id]}.`;
    else if (f.id === 'email' && !emailOk(v)) msg = 'Enter a valid email address, like name@example.com.';
    document.getElementById(f.id + '-err').textContent = msg;
    f.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  };
  const fields = [...form.querySelectorAll('input,textarea')];
  fields.forEach(f => f.addEventListener('blur', () => check(f)));
  form.addEventListener('submit', e => {
    e.preventDefault();
    const results = fields.map(check);
    status.className = 'status';
    if (results.includes(false)) {
      status.classList.add('bad');
      status.textContent = 'Fix the highlighted fields and try again.';
      fields[results.indexOf(false)].focus();
      return;
    }
    const g = id => form.elements[id].value.trim();
    const body = `Name: ${g('name')}\nEmail: ${g('email')}\n\n${g('message')}`;
    window.location.href = `mailto:u128413@gmail.com?subject=${encodeURIComponent(g('subject'))}&body=${encodeURIComponent(body)}`;
    status.classList.add('ok');
    status.textContent = 'Your email app should open with the message ready. Press send there to deliver it.';
  });
});
