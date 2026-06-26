// ========== FAST MODERN TRANSLATION SYSTEM ==========
const translations = {
  fr: {
    // Sidebar
    "sb-role": "Cybersecurity Student",
    "sb-status": "Ouvert a un stage",

    // Navigation
    "nav-home": "Accueil",
    "nav-about": "À propos",
    "nav-skills": "Skills",
    "nav-labs": "Projets & Labs",
    "nav-certs": "Certifications",
    "nav-contact": "Me contacter",

    // Page headers
    "page-home-label": "01 - Accueil",
    "page-home-title": "Ingénieur Cybersécurité",
    "page-about-label": "02 - À propos",
    "page-about-title": "Mon parcours",
    "page-skills-label": "03 - Compétences",
    "page-skills-title": "Domaines de maîtrise",
    "page-labs-label": "04 - Labs & Projets",
    "page-labs-title": "Réalisations pratiques",
    "page-certs-label": "05 — Certifications",
    "page-certs-title": "Parcours de certification",
    "page-contact-label": "06 - Contact",
    "page-contact-title": "Travaillons ensemble",

    // Home page
    "home-bio": "Passionné par la <strong>sécurité des infrastructures réseau</strong> et l'administration système Linux/Windows. En quête de mon premier <strong>stage en cybersécurité</strong> - Admin IT, SOC analyst ou Technicien Réseaux Informatiques.",
    "btn-labs": "Voir mes labs →",
    "btn-contact": "Me contacter",
    "metric-years": "ans de formation",
    "metric-labs": "labs pratiques",
    "metric-services": "services configurés",

    // Contact
    "contact-text": "Je suis à la recherche d'un <strong>stage en cybersécurité</strong>, sécurité réseau ou administration système.<br><br>N'hésite pas à me contacter pour discuter d'une opportunité ou d'un projet collaboratif.",
    "contact-avail": "Disponible dès maintenant pour un stage",

    // Skills
    "skill-mastery": "Maîtrise",

    // Certs status
    "cert-completed": "Completed",
    "cert-inprogress": "En cours",
    "cert-planned": "En préparation"
  },

  en: {
    // Sidebar
    "sb-role": "Cybersecurity Student",
    "sb-status": "Open to internships",

    // Navigation
    "nav-home": "Home",
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-labs": "Projects & Labs",
    "nav-certs": "Certifications",
    "nav-contact": "Contact me",

    // Page headers
    "page-home-label": "01 - Home",
    "page-home-title": "Cybersecurity Engineer",
    "page-about-label": "02 - About",
    "page-about-title": "My journey",
    "page-skills-label": "03 - Skills",
    "page-skills-title": "Areas of expertise",
    "page-labs-label": "04 - Labs & Projects",
    "page-labs-title": "Practical achievements",
    "page-certs-label": "05 — Certifications",
    "page-certs-title": "Certification path",
    "page-contact-label": "06 - Contact",
    "page-contact-title": "Let's work together",

    // Home page
    "home-bio": "Passionate about <strong>network infrastructure security</strong> and Linux/Windows system administration. Looking for my first <strong>cybersecurity internship</strong> - IT Admin, SOC analyst or Network Technician.",
    "btn-labs": "View my labs →",
    "btn-contact": "Contact me",
    "metric-years": "years of training",
    "metric-labs": "practical labs",
    "metric-services": "services configured",

    // Contact
    "contact-text": "I am looking for a <strong>cybersecurity internship</strong>, network security or system administration role.<br><br>Feel free to contact me to discuss an opportunity or collaborative project.",
    "contact-avail": "Available now for internship",

    // Skills
    "skill-mastery": "Proficiency",

    // Certs status
    "cert-completed": "Completed",
    "cert-inprogress": "In Progress",
    "cert-planned": "Planned"
  }
};

let currentLang = 'fr';

function switchLang(lang) {
  currentLang = lang;

  // Update button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  const t = translations[lang];

  // ========== FAST METHOD: data-i18n attributes ==========
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });

  // ========== UPDATE NAVIGATION (special handling for badges) ==========
  const navItems = document.querySelectorAll('.nav-item');
  const labCount = document.querySelectorAll('.lab-card').length;

  if (navItems[0]) navItems[0].innerHTML = '<span class="nav-icon">⌂</span> ' + t['nav-home'];
  if (navItems[1]) navItems[1].innerHTML = '<span class="nav-icon">◈</span> ' + t['nav-about'];
  if (navItems[2]) navItems[2].innerHTML = '<span class="nav-icon">◆</span> ' + t['nav-skills'];
  if (navItems[3]) navItems[3].innerHTML = '<span class="nav-icon">▣</span> ' + t['nav-labs'] + '<span class="nav-badge">' + labCount + '</span>';
  if (navItems[4]) navItems[4].innerHTML = '<span class="nav-icon">◉</span> ' + t['nav-certs'];
  if (navItems[5]) navItems[5].innerHTML = '<span class="nav-icon">◎</span> ' + t['nav-contact'];

  // ========== UPDATE NAV SECTIONS ==========
  const navSections = document.querySelectorAll('.nav-section');
  if (navSections[0]) navSections[0].textContent = lang === 'fr' ? 'Menu' : 'Menu';
  if (navSections[1]) navSections[1].textContent = 'Labs';
  if (navSections[2]) navSections[2].textContent = 'Contact';

  // ========== UPDATE LABS COUNT ==========
  const labTotal = document.getElementById("lab-total");
  if (labTotal) labTotal.textContent = labCount + (lang === 'fr' ? ' projets' : ' projects');

  // ========== UPDATE SKILL MASTERY ==========
  document.querySelectorAll('.sc-bar-top span:first-child').forEach(span => {
    if (span.textContent.includes('Maîtr') || span.textContent.includes('Profi')) {
      span.textContent = t['skill-mastery'];
    }
  });

  // ========== UPDATE CERT STATUS (only completed ones) ==========
  document.querySelectorAll('.cert-pill.pill-completed').forEach(pill => {
    pill.textContent = t['cert-completed'];
  });

  document.querySelectorAll('.cert-pill.pill-wip').forEach(pill => {
    pill.textContent = t['cert-inprogress'];
  });

  // DON'T touch pill-plan (those are "En préparation"/"Prévu")

  // Save preference
  localStorage.setItem('preferredLang', lang);
}

// Load saved language on page load
const savedLang = localStorage.getItem('preferredLang') || 'fr';
if (savedLang === 'en') {
  switchLang('en');
}
