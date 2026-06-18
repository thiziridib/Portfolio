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
  const link = document.createElement('a');
  link.href = 'pdf/Dib thiziri CV.pdf';
  link.download = 'Dib thiziri CV.pdf';
  link.click();
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
// CODE MODE TERMINAL
// =============================
document.getElementById("code-mode-btn").addEventListener("click", () => {
  const terminal = document.getElementById("terminal-overlay");
  terminal.style.display = terminal.style.display === "flex" ? "none" : "flex";
});

// Fermer le terminal en cliquant en dehors
document.getElementById("terminal-overlay").addEventListener("click", function(e) {
  if (e.target === this) this.style.display = "none";
});

// =============================
// TIMELINE ANIMATION
// =============================
function animateTimeline() {
  const items = document.querySelectorAll('#resume.active .timeline-item');
  items.forEach(item => {
    item.classList.add('visible');
  });
}