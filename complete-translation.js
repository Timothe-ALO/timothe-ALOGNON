// COMPLETE CONTENT - FR & EN versions
const CONTENT = {
  en: {
    // Sidebar
    role: 'Cybersecurity Student',
    status: 'Open to internships',

    // Nav
    navHome: 'Home',
    navAbout: 'About',
    navSkills: 'Skills',
    navLabs: 'Projects & Labs',
    navCerts: 'Certifications',
    navContact: 'Contact me',

    // Home
    homeEyebrow: 'Cybersecurity Student - 3rd year',
    homeTitle: 'Cybersecurity<br>Engineer',
    homeBio: 'Passionate about <strong>network infrastructure security</strong> and Linux/Windows system administration. <strong>Open to work opportunities</strong> in cybersecurity.',
    btnLabs: 'View my labs →',
    btnContact: 'Contact me',
    metricYears: 'years of training',
    metricLabs: 'practical labs',
    metricServices: 'services configured',

    // About
    aboutLabel: '02 - About',
    aboutTitle: 'Who am I?',

    // Skills
    skillsLabel: '03 - Skills',
    skillsTitle: 'Areas of expertise',
    skillMastery: 'Proficiency',

    // Labs
    labsLabel: '04 - Labs & Projects',
    labsTitle: 'Practical achievements',

    // Certs
    certsLabel: '05 — Certifications',
    certsTitle: 'Certification path',

    // Contact
    contactLabel: '06 - Contact',
    contactTitle: "Let's work together",
    contactText: 'I am looking for a <strong>cybersecurity internship</strong>, network security or system administration role.<br><br>Feel free to contact me to discuss an opportunity or collaborative project.',
    contactAvail: 'Available now for internship'
  },

  fr: {
    // Sidebar
    role: 'Étudiant en Cybersécurité',
    status: 'Ouvert à un stage',

    // Nav
    navHome: 'Accueil',
    navAbout: 'À propos',
    navSkills: 'Compétences',
    navLabs: 'Projets & Labs',
    navCerts: 'Certifications',
    navContact: 'Me contacter',

    // Home
    homeEyebrow: 'Étudiant en Cybersécurité - 3ème année',
    homeTitle: 'Ingénieur<br>Cybersécurité',
    homeBio: 'Passionné par la <strong>sécurité des infrastructures réseau</strong> et l\'administration système Linux/Windows. <strong>Ouvert aux opportunités de travail</strong> en cybersécurité.',
    btnLabs: 'Voir mes labs →',
    btnContact: 'Me contacter',
    metricYears: 'ans de formation',
    metricLabs: 'labs pratiques',
    metricServices: 'services configurés',

    // About
    aboutLabel: '02 - À propos',
    aboutTitle: 'Qui suis-je ?',

    // Skills
    skillsLabel: '03 - Compétences',
    skillsTitle: 'Domaines de maîtrise',
    skillMastery: 'Maîtrise',

    // Labs
    labsLabel: '04 - Labs & Projets',
    labsTitle: 'Réalisations pratiques',

    // Certs
    certsLabel: '05 — Certifications',
    certsTitle: 'Parcours de certification',

    // Contact
    contactLabel: '06 - Contact',
    contactTitle: 'Travaillons ensemble',
    contactText: 'Je suis à la recherche d\'un <strong>stage en cybersécurité</strong>, sécurité réseau ou administration système.<br><br>N\'hésite pas à me contacter pour discuter d\'une opportunité ou d\'un projet collaboratif.',
    contactAvail: 'Disponible dès maintenant pour un stage'
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function loadLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const c = CONTENT[lang];

  // Set body data attribute for CSS targeting
  document.body.setAttribute('data-lang', lang);

  // Update buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Sidebar
  document.querySelector('.sb-role').textContent = c.role;
  document.querySelector('.sb-status span').textContent = c.status;

  // Nav items
  const navItems = document.querySelectorAll('.nav-item');
  navItems[0].innerHTML = `<span class="nav-icon">⌂</span> ${c.navHome}`;
  navItems[1].innerHTML = `<span class="nav-icon">◈</span> ${c.navAbout}`;
  navItems[2].innerHTML = `<span class="nav-icon">◆</span> ${c.navSkills}`;
  const labCount = document.querySelectorAll('.lab-card').length;
  navItems[3].innerHTML = `<span class="nav-icon">▣</span> ${c.navLabs}<span class="nav-badge" id="lab-count">${labCount}</span>`;
  navItems[4].innerHTML = `<span class="nav-icon">◉</span> ${c.navCerts}`;
  navItems[5].innerHTML = `<span class="nav-icon">◎</span> ${c.navContact}`;

  // Home
  document.querySelector('.home-eyebrow').textContent = c.homeEyebrow;
  document.querySelector('.home-bio').innerHTML = c.homeBio;
  document.querySelector('.btn-solid').textContent = c.btnLabs;
  document.querySelector('.btn-outline').textContent = c.btnContact;

  // Metrics
  const metrics = document.querySelectorAll('.metric-label');
  metrics[0].textContent = c.metricYears;
  metrics[1].textContent = c.metricLabs;
  metrics[2].textContent = c.metricServices;

  // Translate lab difficulties
  document.querySelectorAll('.lab-difficulty').forEach(el => {
    if (el.textContent.includes('Intermédiaire') || el.textContent.includes('Intermediate')) {
      el.textContent = lang === 'fr' ? 'Intermédiaire' : 'Intermediate';
    }
    if (el.textContent.includes('Avancé') || el.textContent.includes('Advanced')) {
      el.textContent = lang === 'fr' ? 'Avancé' : 'Advanced';
    }
    if (el.textContent.includes('Débutant') || el.textContent.includes('Beginner')) {
      el.textContent = lang === 'fr' ? 'Débutant' : 'Beginner';
    }
  });

  // Translate "View on GitHub" links
  document.querySelectorAll('.lab-link').forEach(el => {
    if (el.textContent.includes('Voir sur GitHub') || el.textContent.includes('View on GitHub')) {
      el.textContent = lang === 'fr' ? 'Voir sur GitHub →' : 'View on GitHub →';
    }
  });

  // Translate cert status pills
  document.querySelectorAll('.cert-pill').forEach(el => {
    if (el.classList.contains('pill-completed')) {
      el.textContent = lang === 'fr' ? 'Terminé' : 'Completed';
    }
    if (el.classList.contains('pill-wip')) {
      el.textContent = lang === 'fr' ? 'En cours' : 'In Progress';
    }
    if (el.classList.contains('pill-plan')) {
      el.textContent = lang === 'fr' ? 'Prévu' : 'Planned';
    }
  });
}

// Load saved language on page load
document.addEventListener('DOMContentLoaded', () => {
  loadLanguage(currentLang);
});
