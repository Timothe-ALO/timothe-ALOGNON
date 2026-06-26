# 📋 PLAN D'AJOUTS PORTFOLIO — Ubuntu Bridge Initiative
**Date:** 2026-06-26  
**Portfolio:** https://timothe-alo.github.io/timothe-ALOGNON/

---

## ✅ CE QUE TU AS DÉJÀ

### Labs actuels (5)
1. Déploiement & Hardening services réseau (CentOS 8)
2. Configuration Réseau Campus Multi-Sites (OSPF, HSRP, VLAN)
3. SOC - Splunk + TheHive + Cortex + MISP + Sophos UTM 9
4. (Lab 04 et 05 à vérifier dans le HTML complet)

### Certifications actuelles (7+)
- CompTIA Security+ (En cours)
- ISC² CC (En préparation)
- CISCO Intro to Cybersecurity (Completed)
- ALPHORM Services IP (Completed)
- Fortinet FCFC (Completed)
- CISCO Python Essentials 1 (Completed)
- TryHackMe CyberSecurity 101 (Completed)

### Skills actuelles
- Network (TCP/IP, Firewall, VPN, nftables) — 80%
- Linux Admin (CentOS 8, Apache, BIND) — 80%
- SOC & SIEM (Splunk, Wazuh, TheHive) — 75%
- Scripting & IA (Python, Bash) — 80%
- Web & PKI (HTTPS, TLS, Apache) — 70%
- Windows & Linux (AD, GPO, PowerShell) — 85%

---

## 🆕 CE QU'ON VA AJOUTER (STAGE 1, 2, 3 UBI)

### 1️⃣ SECTION CERTIFICATIONS — Ajouter

```html
<!-- APRÈS la ligne TryHackMe CyberSecurity 101 -->

<div class="cert-row">
  <div class="cert-badge">UBI</div>
  <div>
    <div class="cert-name">Ubuntu Bridge Initiative — Cybersecurity Internship (Cohort 1)</div>
    <div class="cert-issuer">Ubuntu Bridge Initiative</div>
  </div>
  <span class="cert-pill pill-active">Stage 1-3 Completed (2024-2026)</span>
</div>
```

**📍 Position:** Ligne ~1761 (après TryHackMe)

---

### 2️⃣ SECTION LABS — Ajouter 3 nouveaux labs (06, 07, 08)

#### 🔹 LAB 06 — Stage 1: Cryptographic Failure Investigation

```html
<!-- LAB 06 -->
<div class="lab-card" onclick="toggleLab(this)">
  <div class="lab-card-header">
    <div class="lab-num">06</div>
    <div class="lab-info">
      <div class="lab-title">Stage 1 — Cryptographic Failure Investigation (UBI Cohort 1)</div>
      <div class="lab-meta">
        <span class="lab-date">2024</span>
        <span class="lab-difficulty diff-medium">Intermédiaire</span>
      </div>
      <div class="lab-tags-row" style="margin-top:.4rem">
        <span class="lab-tag">Cryptanalysis</span>
        <span class="lab-tag">Base64</span>
        <span class="lab-tag">JWT</span>
        <span class="lab-tag">OWASP A02</span>
        <span class="lab-tag">NDPA 2023</span>
        <span class="lab-tag">ISC² Ethics</span>
      </div>
    </div>
    <div class="lab-toggle">+</div>
  </div>
  <div class="lab-body">
    <div class="lab-body-inner">
      <p class="lab-desc">
        Investigation forensique d'une compromission bancaire Sankofa impliquant des artefacts cryptographiques 
        faibles (tokens JWT avec alg:none, sessions Base64-encoded, logs proxy). Identification de 5 défaillances 
        cryptographiques selon OWASP Top 10 2021 A02:2021, cartographie des contrôles manquants, et évaluation 
        de l'impact réglementaire sous NDPA 2023 §40. Livré 4 rapports incluant une stance éthique basée sur 
        les canons ISC² Code of Ethics.
      </p>
      <div class="lab-achievements" style="margin-top:1rem">
        <div class="achievement-badge">✓ 5 Crypto Failures Identified</div>
        <div class="achievement-badge">✓ JWT Weakness Analysis</div>
        <div class="achievement-badge">✓ NDPA Breach Assessment</div>
      </div>
      <div class="lab-deliverables" style="margin-top:1rem">
        <strong>Deliverables:</strong>
        <ul style="margin-top:.5rem;padding-left:1.5rem;color:var(--muted2)">
          <li>D1 — Crypto Failure Mapping (5 vulnerabilities, OWASP classification)</li>
          <li>D2 — Decoded Artefact Appendix (Base64/JWT payloads analyzed)</li>
          <li>D3 — Five Controls the Board Should Approve (remediation roadmap)</li>
          <li>D4 — Ethics Stance (ISC² Canon III & IV analysis)</li>
        </ul>
      </div>
      <a href="#" class="lab-link">View Case Study →</a>
    </div>
  </div>
</div>
```

---

#### 🔹 LAB 07 — Stage 2: Web Application Penetration Test

```html
<!-- LAB 07 -->
<div class="lab-card" onclick="toggleLab(this)">
  <div class="lab-card-header">
    <div class="lab-num">07</div>
    <div class="lab-info">
      <div class="lab-title">Stage 2 — Web Application Penetration Test (UBI Cohort 1)</div>
      <div class="lab-meta">
        <span class="lab-date">2025</span>
        <span class="lab-difficulty diff-hard">Avancé</span>
      </div>
      <div class="lab-tags-row" style="margin-top:.4rem">
        <span class="lab-tag">OWASP Top 10</span>
        <span class="lab-tag">SQLi</span>
        <span class="lab-tag">XSS</span>
        <span class="lab-tag">XXE</span>
        <span class="lab-tag">JWT Bypass</span>
        <span class="lab-tag">CVSS 3.1</span>
        <span class="lab-tag">Burp Suite</span>
      </div>
    </div>
    <div class="lab-toggle">+</div>
  </div>
  <div class="lab-body">
    <div class="lab-body-inner">
      <p class="lab-desc">
        Audit de sécurité complet de l'application web legacy PHP /legacy-admin/ de Sankofa. Découverte de 11 
        vulnérabilités critiques et hautes incluant SQL Injection (UNION-based), Reflected XSS, XXE (External Entity 
        Injection), JWT algorithm confusion (alg:none bypass), et Open Redirect. Chaînage de 4 exploits pour accès 
        non-autorisé menant à l'exfiltration de 312 enregistrements clients (~₦63M NGN). Scoring CVSS 3.1 avec 
        vecteurs d'attaque documentés et recommandations de remediation priorisées. Rapport pentest professionnel 
        incluant POCs reproductibles et stance éthique.
      </p>
      <div class="lab-achievements" style="margin-top:1rem">
        <div class="achievement-badge">✓ 11 Vulnerabilities Found</div>
        <div class="achievement-badge">✓ 4-Hop Exploit Chain</div>
        <div class="achievement-badge">✓ CVSS Scoring Applied</div>
        <div class="achievement-badge">✓ ₦63M NGN Data Exposure</div>
      </div>
      <div class="lab-deliverables" style="margin-top:1rem">
        <strong>Deliverables:</strong>
        <ul style="margin-top:.5rem;padding-left:1.5rem;color:var(--muted2)">
          <li>D1 — Finding Catalogue (11 vulns with OWASP/CWE classification)</li>
          <li>D2 — Exploit Chain & Impact Analysis (4 hops, CVSS scoring)</li>
          <li>D3 — Formal Penetration Test Report (executive summary, remediation roadmap)</li>
          <li>D4 — Ethics Stance (responsible disclosure, ISC² Code compliance)</li>
        </ul>
      </div>
      <div class="lab-tech-stack" style="margin-top:1rem">
        <strong>Tools Used:</strong> Burp Suite Pro, SQLMap, JWT.io, CyberChef, curl, Python
      </div>
      <a href="#" class="lab-link">View Pentest Report →</a>
    </div>
  </div>
</div>
```

---

#### 🔹 LAB 08 — Stage 3: Incident Response & DFIR

```html
<!-- LAB 08 -->
<div class="lab-card" onclick="toggleLab(this)">
  <div class="lab-card-header">
    <div class="lab-num">08</div>
    <div class="lab-info">
      <div class="lab-title">Stage 3 — Incident Response & Digital Forensics (UBI Cohort 1)</div>
      <div class="lab-meta">
        <span class="lab-date">2026</span>
        <span class="lab-difficulty diff-hard">Avancé</span>
      </div>
      <div class="lab-tags-row" style="margin-top:.4rem">
        <span class="lab-tag">DFIR</span>
        <span class="lab-tag">Volatility 3</span>
        <span class="lab-tag">MITRE ATT&CK</span>
        <span class="lab-tag">NIST 800-61r2</span>
        <span class="lab-tag">STIX 2.1</span>
        <span class="lab-tag">IOC Extraction</span>
        <span class="lab-tag">Linux Forensics</span>
      </div>
    </div>
    <div class="lab-toggle">+</div>
  </div>
  <div class="lab-body">
    <div class="lab-body-inner">
      <p class="lab-desc">
        Investigation forensique complète d'une compromission de workstation finance (10.0.1.87) impliquant un 
        accès SSH depuis un nœud Tor, escalade de privilèges via sudoers misconfiguration (GTFOBins shell-escape 
        avec less), installation de 3 mécanismes de persistance (hook .bashrc, cron caché en mémoire, autostart 
        XDG), beacon C2 HTTPS toutes les 3 minutes, et exfiltration de 312 enregistrements clients via SCP (31KB, 
        ~₦63M NGN). Analyse de memory dump (Volatility 3 linux.pslist), corrélation de syslogs/netflow/SIEM, 
        mapping de 11 techniques MITRE ATT&CK (T1078.003, T1548.003, T1546.004, T1053.003, T1071.001, T1048.002), 
        extraction de 13 IOCs au format STIX 2.1, et rédaction de rapport d'incident NIST 800-61r2 pour CISO/Legal 
        incluant root cause, impact réglementaire NDPA 2023, et 8 recommandations de policy changes.
      </p>
      <div class="lab-achievements" style="margin-top:1rem">
        <div class="achievement-badge">✓ 3 Malicious Processes Identified</div>
        <div class="achievement-badge">✓ 11 ATT&CK Techniques Mapped</div>
        <div class="achievement-badge">✓ 13 IOCs Extracted (STIX 2.1)</div>
        <div class="achievement-badge">✓ 54min Time-to-Exfiltration</div>
        <div class="achievement-badge">✓ Ghost Cron Mechanism Discovered</div>
      </div>
      <div class="lab-deliverables" style="margin-top:1rem">
        <strong>Deliverables:</strong>
        <ul style="margin-top:.5rem;padding-left:1.5rem;color:var(--muted2)">
          <li>D1 — Process Triage (3 suspicious processes, false-positive ruling)</li>
          <li>D2 — Incident Timeline (12 events, initial access → containment)</li>
          <li>D3 — IOC List (13 indicators + STIX 2.1 bundle)</li>
          <li>D4 — MITRE ATT&CK Technique Map (11 techniques across 7 tactics)</li>
          <li>D5 — Formal Incident Report (6 pages, CISO/Legal-ready, NIST PICERL)</li>
        </ul>
      </div>
      <div class="lab-tech-stack" style="margin-top:1rem">
        <strong>Tools Used:</strong> Volatility 3, Python (python-docx, stix2), syslog analysis, netflow correlation, Wazuh SIEM
      </div>
      <a href="#" class="lab-link">View IR Report →</a>
    </div>
  </div>
</div>
```

**📍 Position:** Après ton LAB 05 actuel (vers ligne ~1650)

---

### 3️⃣ SECTION SKILLS — Mettre à jour

#### 🔸 Skill Card [03] SOC — Ajouter ces tags :

```html
<span class="sc-tag">Volatility 3</span>
<span class="sc-tag">DFIR</span>
<span class="sc-tag">IOC Extraction</span>
<span class="sc-tag">MITRE ATT&CK</span>
<span class="sc-tag">STIX 2.1</span>
```

**📍 Position:** Ligne ~1426 (dans les tags existants de SOC)

---

#### 🔸 Skill Card [04] Scripting & IA — Ajouter ces tags :

```html
<span class="sc-tag">python-docx</span>
<span class="sc-tag">Report Automation</span>
<span class="sc-tag">STIX 2.1 Library</span>
```

**📍 Position:** Ligne ~1439 (dans les tags existants)

---

#### 🔸 NOUVELLE Skill Card [07] — Offensive Security

```html
<div class="skill-card">
  <div class="sc-cat">[07] Offensive Security</div>
  <div class="sc-title">Penetration Testing & Exploitation</div>
  <div class="sc-bar-wrap">
    <div class="sc-bar-top"><span>Maîtrise</span><span>75%</span></div>
    <div class="sc-bar">
      <div class="sc-bar-fill" data-w="75"></div>
    </div>
  </div>
  <div class="sc-tags">
    <span class="sc-tag">OWASP Top 10</span>
    <span class="sc-tag">Burp Suite</span>
    <span class="sc-tag">SQLi / XSS / XXE</span>
    <span class="sc-tag">JWT Attacks</span>
    <span class="sc-tag">CVSS Scoring</span>
    <span class="sc-tag">Exploit Chaining</span>
    <span class="sc-tag">GTFOBins</span>
  </div>
</div>
```

**📍 Position:** Après la Skill Card [06] Windows & Linux (ligne ~1467)

---

#### 🔸 NOUVELLE Skill Card [08] — Incident Response

```html
<div class="skill-card">
  <div class="sc-cat">[08] Incident Response & Forensics</div>
  <div class="sc-title">DFIR & Threat Intelligence</div>
  <div class="sc-bar-wrap">
    <div class="sc-bar-top"><span>Maîtrise</span><span>80%</span></div>
    <div class="sc-bar">
      <div class="sc-bar-fill" data-w="80"></div>
    </div>
  </div>
  <div class="sc-tags">
    <span class="sc-tag">NIST SP 800-61r2</span>
    <span class="sc-tag">Volatility 3</span>
    <span class="sc-tag">Memory Forensics</span>
    <span class="sc-tag">Log Correlation</span>
    <span class="sc-tag">MITRE ATT&CK Mapping</span>
    <span class="sc-tag">IOC Extraction</span>
    <span class="sc-tag">STIX 2.1</span>
    <span class="sc-tag">Chain of Custody</span>
  </div>
</div>
```

**📍 Position:** Après la nouvelle Skill Card [07]

---

### 4️⃣ SECTION HOME — Mettre à jour la métrique "Labs"

```javascript
// Ligne ~1306 environ (dans le JS de la page home)
// AVANT:
<div class="metric-val">5<span>+</span></div>
<div class="metric-label">Labs & Projets</div>

// APRÈS:
<div class="metric-val">8<span>+</span></div>
<div class="metric-label">Labs & Projets</div>
```

---

### 5️⃣ NAVIGATION — Mettre à jour le badge counter

```html
<!-- Ligne ~1250 environ -->
<!-- AVANT: -->
<span class="nav-badge" id="lab-count">5</span>

<!-- APRÈS: -->
<span class="nav-badge" id="lab-count">8</span>
```

---

## 📊 RÉSUMÉ DES CHANGEMENTS

| Section | Action | Quantité |
|---------|--------|----------|
| **Certifications** | Ajouter UBI Cohort 1 | +1 cert |
| **Labs** | Ajouter Stage 1, 2, 3 | +3 labs (06, 07, 08) |
| **Skills** | Ajouter tags existants | +8 tags |
| **Skills** | Créer 2 nouvelles cards | +2 skill cards (Offensive Security, IR & Forensics) |
| **Metrics** | Mettre à jour compteur | 5 → 8 labs |

---

## 🎯 ORDRE D'IMPLÉMENTATION RECOMMANDÉ

1. ✅ **Certifications** (5 min) — Ajouter la ligne UBI
2. ✅ **Labs 06, 07, 08** (20 min) — Copier-coller les 3 blocs HTML
3. ✅ **Skills** (10 min) — Ajouter les tags + 2 nouvelles cards
4. ✅ **Métriques** (2 min) — Changer 5 → 8
5. ✅ **Git push** (2 min) — Commit + push vers GitHub Pages

**Temps total estimé:** ~40 minutes

---

## 🚀 COMMANDES GIT APRÈS MODIFS

```bash
cd D:\Portofolio
git status
git add index.html
git commit -m "feat: Add UBI Cohort 1 achievements (Stage 1-3) - 3 new labs, 2 skill cards, certifications"
git push origin main
```

---

## 📝 NOTES IMPORTANTES

- **Images manquantes :** Les 3 nouveaux labs n'ont pas de screenshots actuellement. Options :
  1. Laisser sans images pour l'instant
  2. Ajouter des screenshots génériques (terminal, rapport PDF preview)
  3. Créer des screenshots après soumission demain

- **Liens "View Report" :** Actuellement `href="#"`. Tu peux :
  1. Les laisser en `#` (désactivés)
  2. Uploader tes PDFs anonymisés sur GitHub et linker
  3. Créer un repo privé et partager le lien aux recruteurs sur demande

- **Description trop longue ?** Les descriptions des labs 07 et 08 sont détaillées (style case study). Si tu préfères plus court, dis-moi et je condense.

---

**PRÊT À IMPLÉMENTER ?** Dis-moi quand tu veux qu'on commence les modifs ! 🚀
