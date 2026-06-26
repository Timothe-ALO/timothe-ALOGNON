// ========== i18next PROFESSIONAL TRANSLATION SYSTEM ==========

// Initialize i18next
fetch('translations.json')
  .then(response => response.json())
  .then(resources => {
    i18next.init({
      lng: localStorage.getItem('preferredLang') || 'fr',
      fallbackLng: 'fr',
      resources: resources,
      interpolation: {
        escapeValue: false // Allow HTML
      }
    }, function(err, t) {
      if (err) {
        console.error('i18next init error:', err);
        return;
      }

      // Initial translation
      updateContent();

      // Set active button
      updateLangButtons();
    });
  });

function switchLang(lang) {
  i18next.changeLanguage(lang, (err, t) => {
    if (err) {
      console.error('Language change error:', err);
      return;
    }

    updateContent();
    updateLangButtons();
    localStorage.setItem('preferredLang', lang);
  });
}

function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === i18next.language);
  });
}

function updateContent() {
  const t = i18next.t.bind(i18next);
  const labCount = document.querySelectorAll('.lab-card').length;

  // ========== SIDEBAR ==========
  const sbRole = document.querySelector('.sb-role');
  const sbStatus = document.querySelector('.sb-status span');
  if (sbRole) sbRole.textContent = t('sidebar.role');
  if (sbStatus) sbStatus.textContent = t('sidebar.status');

  // ========== NAVIGATION SECTIONS ==========
  const navSections = document.querySelectorAll('.nav-section');
  if (navSections[0]) navSections[0].textContent = t('nav.menu');
  if (navSections[1]) navSections[1].textContent = t('nav.labs');
  if (navSections[2]) navSections[2].textContent = t('nav.contact');

  // ========== NAVIGATION ITEMS ==========
  const navItems = document.querySelectorAll('.nav-item');
  if (navItems[0]) navItems[0].innerHTML = `<span class="nav-icon">⌂</span> ${t('nav.home')}`;
  if (navItems[1]) navItems[1].innerHTML = `<span class="nav-icon">◈</span> ${t('nav.about')}`;
  if (navItems[2]) navItems[2].innerHTML = `<span class="nav-icon">◆</span> ${t('nav.skills')}`;
  if (navItems[3]) navItems[3].innerHTML = `<span class="nav-icon">▣</span> ${t('nav.projectsLabs')}<span class="nav-badge">${labCount}</span>`;
  if (navItems[4]) navItems[4].innerHTML = `<span class="nav-icon">◉</span> ${t('nav.certifications')}`;
  if (navItems[5]) navItems[5].innerHTML = `<span class="nav-icon">◎</span> ${t('nav.contactMe')}`;

  // ========== PAGE HEADERS ==========
  const pageLabels = document.querySelectorAll('.page-label');
  const pageTitles = document.querySelectorAll('.page-title');

  if (pageLabels[0]) pageLabels[0].textContent = t('pages.home.label');
  if (pageTitles[0]) pageTitles[0].textContent = t('pages.home.title');
  if (pageLabels[1]) pageLabels[1].textContent = t('pages.about.label');
  if (pageTitles[1]) pageTitles[1].textContent = t('pages.about.title');
  if (pageLabels[2]) pageLabels[2].textContent = t('pages.skills.label');
  if (pageTitles[2]) pageTitles[2].textContent = t('pages.skills.title');
  if (pageLabels[3]) pageLabels[3].textContent = t('pages.labs.label');
  if (pageTitles[3]) pageTitles[3].textContent = t('pages.labs.title');
  if (pageLabels[4]) pageLabels[4].textContent = t('pages.certs.label');
  if (pageTitles[4]) pageTitles[4].textContent = t('pages.certs.title');
  if (pageLabels[5]) pageLabels[5].textContent = t('pages.contact.label');
  if (pageTitles[5]) pageTitles[5].textContent = t('pages.contact.title');

  // ========== HOME PAGE CONTENT ==========
  const homeBio = document.getElementById('home-bio');
  const btnLabs = document.getElementById('btn-labs');
  const btnContact = document.getElementById('btn-contact');
  const metricYears = document.getElementById('metric-years');
  const metricLabs = document.getElementById('metric-labs');
  const metricServices = document.getElementById('metric-services');

  if (homeBio) homeBio.innerHTML = t('pages.home.bio');
  if (btnLabs) btnLabs.textContent = t('pages.home.btnLabs');
  if (btnContact) btnContact.textContent = t('pages.home.btnContact');
  if (metricYears) metricYears.textContent = t('pages.home.metricYears');
  if (metricLabs) metricLabs.textContent = t('pages.home.metricLabs');
  if (metricServices) metricServices.textContent = t('pages.home.metricServices');

  // ========== LABS COUNT ==========
  const labTotal = document.getElementById('lab-total');
  if (labTotal) labTotal.textContent = t('pages.labs.count', { count: labCount });

  // ========== CONTACT PAGE ==========
  const contactText = document.querySelector('.contact-text');
  const contactAvail = document.querySelector('.contact-avail');
  if (contactText) contactText.innerHTML = t('pages.contact.text');
  if (contactAvail) contactAvail.innerHTML = `<div class="pulse"></div>${t('pages.contact.availability')}`;

  // ========== SKILLS MASTERY ==========
  document.querySelectorAll('.sc-bar-top span:first-child').forEach(span => {
    if (span.textContent.includes('Maîtr') || span.textContent.includes('Profi')) {
      span.textContent = t('pages.skills.mastery');
    }
  });

  // ========== CERTIFICATIONS STATUS ==========
  document.querySelectorAll('.cert-pill.pill-completed').forEach(pill => {
    pill.textContent = t('certs.completed');
  });

  document.querySelectorAll('.cert-pill.pill-wip').forEach(pill => {
    pill.textContent = t('certs.inProgress');
  });

  // Leave pill-plan untouched (En préparation / Planned)
}
