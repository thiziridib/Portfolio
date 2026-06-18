/* =============================================
   PORTFOLIO THIZIRI DIB — script.js
   ============================================= */

/* ===== NAVIGATION ===== */
function goTo(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById('sec-' + id).classList.add('active');
  document.getElementById('nb-' + id).classList.add('active');
  window.scrollTo(0, 0);
}

/* ===== TABS PARCOURS ===== */
function switchTab(id, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-etudes').style.display = id === 'etudes' ? 'block' : 'none';
  document.getElementById('tab-xp').style.display    = id === 'xp'     ? 'block' : 'none';
}

/* ===== THEME TOGGLE ===== */
let isLight = false;
function toggleTheme() {
  isLight = !isLight;
  document.body.classList.toggle('light', isLight);
  const btn = document.getElementById('themeBtn');
  btn.innerHTML = isLight
    ? '<i class="fas fa-sun"></i> Mode sombre'
    : '<i class="fas fa-moon"></i> Mode clair';
}

/* ===== CV BUTTON ===== */
function cvClick(btn) {
  const orig = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-check"></i> CV bientôt disponible !';
  btn.style.background = '#00b894';
  btn.style.color = '#050d1a';
  setTimeout(() => {
    btn.innerHTML = orig;
    btn.style.background = '';
    btn.style.color = '';
  }, 2800);
}

/* ===== FORMULAIRE CONTACT ===== */
function sendMsg() {
  const btn = document.getElementById('sendBtn');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
  btn.disabled = true;
  setTimeout(() => {
    ['cname','cemail','cmsg'].forEach(id => {
      document.getElementById(id).value = '';
    });
    btn.style.display = 'none';
    const ok = document.getElementById('okMsg');
    ok.style.display = 'block';
    setTimeout(() => {
      ok.style.display = 'none';
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer le message';
      btn.disabled = false;
      btn.style.display = '';
    }, 3500);
  }, 1400);
}
