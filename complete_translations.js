// ========== COMPLETE TRANSLATION SYSTEM ==========
const translations = {
  fr: {
    // Sidebar
    role: "Cybersecurity Student",
    status: "Ouvert a un stage",
    menuTitle: "Menu",
    labsTitle: "Labs",
    contactTitle: "Contact",

    // Navigation
    homeNav: "Accueil",
    aboutNav: "À propos",
    skillsNav: "Skills",
    labsNav: "Projets & Labs",
    certsNav: "Certifications",
    contactNav: "Me contacter",

    // Page labels
    homeLabel: "01 - Accueil",
    homeTitle: "Ingénieur Cybersécurité",
    aboutLabel: "02 - À propos",
    aboutTitle: "Mon parcours",
    skillsLabel: "03 - Compétences",
    skillsTitle: "Domaines de maîtrise",
    labsLabel: "04 - Labs & Projets",
    labsTitle: "Réalisations pratiques",
    labsCount: " projets en Réseaux et Sécurité ( + 10 )",
    certsLabel: "05 — Certifications",
    certsTitle: "Parcours de certification",
    contactLabel: "06 - Contact",
    contactTitle: "Travaillons ensemble",

    // Contact page
    contactText: "Je suis à la recherche d'un <strong>stage en cybersécurité</strong>, sécurité réseau ou administration système.<br><br>N'hésite pas à me contacter pour discuter d'une opportunité ou d'un projet collaboratif.",
    contactAvail: "Disponible dès maintenant pour un stage",

    // Skills
    mastery: "Maîtrise",

    // Skill categories
    skillNetwork: "Sécurité Réseau",
    skillLinux: "Administration Linux",
    skillSOC: "Outils SOC & SIEM",
    skillScripting: "Automatisation",
    skillWeb: "Services Web & PKI",
    skillWindows: "Environnements Windows & Linux",
    skillOffensive: "Penetration Testing & Exploitation",
    skillIR: "DFIR & Threat Intelligence",

    // Labs difficulty
    diffEasy: "Débutant",
    diffMedium: "Intermédiaire",
    diffHard: "Avancé",

    // Lab 01
    lab01Title: "Déploiement & Hardening services réseau - CentOS 8 / Windows",
    lab01Desc: "Configuration complète d'une infrastructure réseau sous CentOS 8 : DNS avec BIND (zones forward/reverse), serveur web Apache HTTP/HTTPS avec TLS, SSH sécurisé avec clés, NTP et FTP. Documentation détaillée sur GitHub avec walkthroughs complets.",

    // Lab 02
    lab02Title: "Configuration d'un Réseau de Campus Multi-Sites",
    lab02Desc: "Configuration d'un réseau multi-sites de campus intégrant 3 grandes zones. L'objectif est de répondre aux besoins de connectivité, de sécurité et de redondance du Campus avec du routage dynamique OSPF authentifié et des règles de sécurité pour assurer une haute politique de moindre privilège.",

    // Lab 03
    lab03Title: "SOC - Splunk + TheHive + Cortex + Cassandra + MISP + Firewall ( Sophos UTM 9)",

    // Lab 05
    lab05Title: "Configuration FIREWALL - IPFIRE / Sophos UTM 9 / FORTIGATE",
    lab05Desc: "Configuration avancée de parefeu Fortigate et Sophos UTM 9 pour sécuriser un réseau de trois zones WAN,LAN et DMZ avec des protection commes les IDS/IPS , VPN , NAT et d'autres protections.",

    // Lab 06 (UBI Stage 1)
    lab06Title: "Stage 1 — Cryptographic Failure Investigation (UBI Cohort 1)",
    lab06Desc: "Investigation forensique d'une compromission bancaire Sankofa impliquant des artefacts cryptographiques faibles (tokens JWT avec alg:none, sessions Base64-encoded, logs proxy). Identification de 5 défaillances cryptographiques selon OWASP Top 10 2021 A02:2021, cartographie des contrôles manquants, et évaluation de l'impact réglementaire sous NDPA 2023 §40. Livré 4 rapports incluant une stance éthique basée sur les canons ISC² Code of Ethics.",
    lab06Deliverables: "Deliverables:",

    // Lab 07 (UBI Stage 2)
    lab07Title: "Stage 2 — Web Application Penetration Test (UBI Cohort 1)",
    lab07Desc: "Audit de sécurité complet de l'application web legacy PHP /legacy-admin/ de Sankofa. Découverte de 11 vulnérabilités critiques et hautes incluant SQL Injection (UNION-based), Reflected XSS, XXE (External Entity Injection), JWT algorithm confusion (alg:none bypass), et Open Redirect. Chaînage de 4 exploits pour accès non-autorisé menant à l'exfiltration de 312 enregistrements clients (~₦63M NGN). Scoring CVSS 3.1 avec vecteurs d'attaque documentés et recommandations de remediation priorisées.",
    lab07Tools: "Tools:",

    // Lab 08 (UBI Stage 3)
    lab08Title: "Stage 3 — Incident Response & Digital Forensics (UBI Cohort 1)",
    lab08Desc: "Investigation forensique complète d'une compromission de workstation finance (10.0.1.87) impliquant un accès SSH depuis un nœud Tor, escalade de privilèges via sudoers misconfiguration (GTFOBins shell-escape avec less), installation de 3 mécanismes de persistance (hook .bashrc, cron caché en mémoire, autostart XDG), beacon C2 HTTPS toutes les 3 minutes, et exfiltration de 312 enregistrements clients via SCP (31KB, ~₦63M NGN). Analyse de memory dump (Volatility 3), corrélation syslogs/netflow/SIEM, mapping de 11 techniques MITRE ATT&CK, extraction de 13 IOCs au format STIX 2.1, et rapport NIST 800-61r2.",

    // Certifications
    completed: "Completed",
    inProgress: "En cours",
    planned: "En préparation",
    planned2: "Prévu"
  },

  en: {
    // Sidebar
    role: "Cybersecurity Student",
    status: "Open to internships",
    menuTitle: "Menu",
    labsTitle: "Labs",
    contactTitle: "Contact",

    // Navigation
    homeNav: "Home",
    aboutNav: "About",
    skillsNav: "Skills",
    labsNav: "Projects & Labs",
    certsNav: "Certifications",
    contactNav: "Contact me",

    // Page labels
    homeLabel: "01 - Home",
    homeTitle: "Cybersecurity Engineer",
    aboutLabel: "02 - About",
    aboutTitle: "My journey",
    skillsLabel: "03 - Skills",
    skillsTitle: "Areas of expertise",
    labsLabel: "04 - Labs & Projects",
    labsTitle: "Practical achievements",
    labsCount: " projects in Networks & Security ( + 10 )",
    certsLabel: "05 — Certifications",
    certsTitle: "Certification path",
    contactLabel: "06 - Contact",
    contactTitle: "Let's work together",

    // Contact page
    contactText: "I am looking for a <strong>cybersecurity internship</strong>, network security or system administration role.<br><br>Feel free to contact me to discuss an opportunity or collaborative project.",
    contactAvail: "Available now for internship",

    // Skills
    mastery: "Proficiency",

    // Skill categories
    skillNetwork: "Network Security",
    skillLinux: "Linux Administration",
    skillSOC: "SOC & SIEM Tools",
    skillScripting: "Automation",
    skillWeb: "Web Services & PKI",
    skillWindows: "Windows & Linux Environments",
    skillOffensive: "Penetration Testing & Exploitation",
    skillIR: "DFIR & Threat Intelligence",

    // Labs difficulty
    diffEasy: "Beginner",
    diffMedium: "Intermediate",
    diffHard: "Advanced",

    // Lab 01
    lab01Title: "Network Services Deployment & Hardening - CentOS 8 / Windows",
    lab01Desc: "Complete network infrastructure setup on CentOS 8: DNS with BIND (forward/reverse zones), Apache HTTP/HTTPS web server with TLS, SSH secured with keys, NTP and FTP. Detailed documentation on GitHub with complete walkthroughs.",

    // Lab 02
    lab02Title: "Multi-Site Campus Network Configuration",
    lab02Desc: "Multi-site campus network configuration integrating 3 major zones. The objective is to meet the Campus's connectivity, security, and redundancy needs with authenticated OSPF dynamic routing and security rules to ensure a high least-privilege policy.",

    // Lab 03
    lab03Title: "SOC - Splunk + TheHive + Cortex + Cassandra + MISP + Firewall ( Sophos UTM 9)",

    // Lab 05
    lab05Title: "FIREWALL Configuration - IPFIRE / Sophos UTM 9 / FORTIGATE",
    lab05Desc: "Advanced firewall configuration of Fortigate and Sophos UTM 9 to secure a three-zone network (WAN, LAN, DMZ) with protections such as IDS/IPS, VPN, NAT and other security features.",

    // Lab 06 (UBI Stage 1)
    lab06Title: "Stage 1 — Cryptographic Failure Investigation (UBI Cohort 1)",
    lab06Desc: "Forensic investigation of a Sankofa banking compromise involving weak cryptographic artifacts (JWT tokens with alg:none, Base64-encoded sessions, proxy logs). Identification of 5 cryptographic failures according to OWASP Top 10 2021 A02:2021, mapping of missing controls, and assessment of regulatory impact under NDPA 2023 §40. Delivered 4 reports including an ethical stance based on ISC² Code of Ethics canons.",
    lab06Deliverables: "Deliverables:",

    // Lab 07 (UBI Stage 2)
    lab07Title: "Stage 2 — Web Application Penetration Test (UBI Cohort 1)",
    lab07Desc: "Comprehensive security audit of Sankofa's legacy PHP web application /legacy-admin/. Discovery of 11 critical and high vulnerabilities including SQL Injection (UNION-based), Reflected XSS, XXE (External Entity Injection), JWT algorithm confusion (alg:none bypass), and Open Redirect. Chaining 4 exploits for unauthorized access leading to exfiltration of 312 customer records (~₦63M NGN). CVSS 3.1 scoring with documented attack vectors and prioritized remediation recommendations.",
    lab07Tools: "Tools:",

    // Lab 08 (UBI Stage 3)
    lab08Title: "Stage 3 — Incident Response & Digital Forensics (UBI Cohort 1)",
    lab08Desc: "Complete forensic investigation of a finance workstation compromise (10.0.1.87) involving SSH access from a Tor node, privilege escalation via sudoers misconfiguration (GTFOBins shell-escape with less), installation of 3 persistence mechanisms (.bashrc hook, memory-resident cron, XDG autostart), C2 HTTPS beacon every 3 minutes, and exfiltration of 312 customer records via SCP (31KB, ~₦63M NGN). Memory dump analysis (Volatility 3), syslog/netflow/SIEM correlation, mapping of 11 MITRE ATT&CK techniques, extraction of 13 IOCs in STIX 2.1 format, and NIST 800-61r2 report.",

    // Certifications
    completed: "Completed",
    inProgress: "In Progress",
    planned: "Planned",
    planned2: "Planned"
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

  // ========== SIDEBAR ==========
  document.querySelector('.sb-role').textContent = t.role;
  document.querySelector('.sb-status span').textContent = t.status;

  // ========== NAVIGATION ==========
  const navSections = document.querySelectorAll('.nav-section');
  if (navSections[0]) navSections[0].textContent = t.menuTitle;
  if (navSections[1]) navSections[1].textContent = t.labsTitle;
  if (navSections[2]) navSections[2].textContent = t.contactTitle;

  const navItems = document.querySelectorAll('.nav-item');
  if (navItems[0]) navItems[0].innerHTML = '<span class="nav-icon">⌂</span> ' + t.homeNav;
  if (navItems[1]) navItems[1].innerHTML = '<span class="nav-icon">◈</span> ' + t.aboutNav;
  if (navItems[2]) navItems[2].innerHTML = '<span class="nav-icon">◆</span> ' + t.skillsNav;
  if (navItems[3]) navItems[3].innerHTML = '<span class="nav-icon">▣</span> ' + t.labsNav + '<span class="nav-badge" id="lab-count">' + document.querySelectorAll('.lab-card').length + '</span>';
  if (navItems[4]) navItems[4].innerHTML = '<span class="nav-icon">◉</span> ' + t.certsNav;
  if (navItems[5]) navItems[5].innerHTML = '<span class="nav-icon">◎</span> ' + t.contactNav;

  // ========== PAGE HEADERS ==========
  const pageLabels = document.querySelectorAll('.page-label');
  const pageTitles = document.querySelectorAll('.page-title');

  if (pageLabels[0]) pageLabels[0].textContent = t.homeLabel;
  if (pageTitles[0]) pageTitles[0].textContent = t.homeTitle;
  if (pageLabels[1]) pageLabels[1].textContent = t.aboutLabel;
  if (pageTitles[1]) pageTitles[1].textContent = t.aboutTitle;
  if (pageLabels[2]) pageLabels[2].textContent = t.skillsLabel;
  if (pageTitles[2]) pageTitles[2].textContent = t.skillsTitle;
  if (pageLabels[3]) pageLabels[3].textContent = t.labsLabel;
  if (pageTitles[3]) pageTitles[3].textContent = t.labsTitle;
  if (pageLabels[4]) pageLabels[4].textContent = t.certsLabel;
  if (pageTitles[4]) pageTitles[4].textContent = t.certsTitle;
  if (pageLabels[5]) pageLabels[5].textContent = t.contactLabel;
  if (pageTitles[5]) pageTitles[5].textContent = t.contactTitle;

  // ========== LABS COUNT ==========
  const labTotal = document.getElementById("lab-total");
  if (labTotal) labTotal.textContent = document.querySelectorAll('.lab-card').length + t.labsCount;

  // ========== CONTACT PAGE ==========
  const contactText = document.querySelector('.contact-text');
  if (contactText) contactText.innerHTML = t.contactText;
  const contactAvail = document.querySelector('.contact-avail');
  if (contactAvail) contactAvail.innerHTML = '<div class="pulse"></div>' + t.contactAvail;

  // ========== SKILLS ==========
  // Update "Maîtrise/Proficiency" labels
  document.querySelectorAll('.sc-bar-top span:first-child').forEach(span => {
    if (span.textContent.includes('Maîtr') || span.textContent.includes('Profi')) {
      span.textContent = t.mastery;
    }
  });

  // Update skill titles
  const skillTitles = document.querySelectorAll('.sc-title');
  if (skillTitles[0]) skillTitles[0].textContent = t.skillNetwork;
  if (skillTitles[1]) skillTitles[1].textContent = t.skillLinux;
  if (skillTitles[2]) skillTitles[2].textContent = t.skillSOC;
  if (skillTitles[3]) skillTitles[3].textContent = t.skillScripting;
  if (skillTitles[4]) skillTitles[4].textContent = t.skillWeb;
  if (skillTitles[5]) skillTitles[5].textContent = t.skillWindows;
  if (skillTitles[6]) skillTitles[6].textContent = t.skillOffensive;
  if (skillTitles[7]) skillTitles[7].textContent = t.skillIR;

  // ========== LABS ==========
  // Update difficulty badges
  document.querySelectorAll('.lab-difficulty').forEach(badge => {
    if (badge.classList.contains('diff-easy') || badge.textContent.includes('Début') || badge.textContent === 'Beginner') {
      badge.textContent = t.diffEasy;
    } else if (badge.classList.contains('diff-medium') || badge.textContent.includes('Inter') || badge.textContent === 'Intermediate') {
      badge.textContent = t.diffMedium;
    } else if (badge.classList.contains('diff-hard') || badge.textContent.includes('Avanc') || badge.textContent === 'Advanced') {
      badge.textContent = t.diffHard;
    }
  });

  // Update lab titles and descriptions
  const labTitles = document.querySelectorAll('.lab-title');
  const labDescs = document.querySelectorAll('.lab-desc');

  if (labTitles[0]) labTitles[0].textContent = t.lab01Title;
  if (labDescs[0]) labDescs[0].textContent = t.lab01Desc;

  if (labTitles[1]) labTitles[1].textContent = t.lab02Title;
  if (labDescs[1]) labDescs[1].textContent = t.lab02Desc;

  if (labTitles[2]) labTitles[2].textContent = t.lab03Title;

  if (labTitles[4]) labTitles[4].textContent = t.lab05Title;
  if (labDescs[4]) labDescs[4].textContent = t.lab05Desc;

  // UBI Labs
  if (labTitles[5]) labTitles[5].textContent = t.lab06Title;
  if (labDescs[5]) labDescs[5].textContent = t.lab06Desc;

  if (labTitles[6]) labTitles[6].textContent = t.lab07Title;
  if (labDescs[6]) labDescs[6].textContent = t.lab07Desc;

  if (labTitles[7]) labTitles[7].textContent = t.lab08Title;
  if (labDescs[7]) labDescs[7].textContent = t.lab08Desc;

  // Update "Deliverables:" and "Tools:" labels in UBI labs
  document.querySelectorAll('.lab-body-inner strong').forEach(strong => {
    if (strong.textContent.includes('Deliverables') || strong.textContent.includes('Deliverable')) {
      strong.textContent = t.lab06Deliverables;
    } else if (strong.textContent.includes('Tools')) {
      strong.textContent = t.lab07Tools;
    }
  });

  // ========== CERTIFICATIONS ==========
  document.querySelectorAll('.cert-pill').forEach(pill => {
    const text = pill.textContent.trim();
    if (text === 'Completed' || pill.classList.contains('pill-plan')) {
      pill.textContent = t.completed;
    } else if (text === 'En cours' || pill.classList.contains('pill-wip') || text === 'In Progress') {
      pill.textContent = t.inProgress;
    } else if (text === 'En préparation' || text === 'Prévu' || text === 'Planned') {
      pill.textContent = t.planned;
    }
  });

  // Save preference
  localStorage.setItem('preferredLang', lang);
}

// Load saved language preference on page load
const savedLang = localStorage.getItem('preferredLang') || 'fr';
if (savedLang === 'en') {
  switchLang('en');
}
