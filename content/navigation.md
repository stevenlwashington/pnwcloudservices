# Navigation Specification — PNW Cloud Services

This document defines the structure of the site's navigation, including 
primary navigation, footer navigation, and route-to-label mappings.

---

## 1. Primary Navigation (Desktop)

### Left (Brand)
- **Logo + “PNW Cloud Services”**
  - At < 900px, text becomes “PNW Cloud”
  - Acts as a single home link → `/`

### Right (Menu Items)

#### **Services** (Dropdown)
- Platform Modernization → `/platform-modernization`
- Salesforce & CRM Strategy → `/salesforce-crm-strategy`
- AI-Powered Productivity & Automation → `/ai-automation`
- DevEx & DevOps → `/devex-devops`
- Observability → `/observability`
- Compliance & Governance → `/compliance-governance`
- Cloud Strategy & Cost Optimization → `/cloud-strategy-cost-optimization`

#### **Blog**
- `/blog`

#### **Contact**
- `/contact`

---

## 2. Mobile Navigation

- Collapsed hamburger icon on the right
- Slide-in drawer from right
- Contains the same links as desktop, in a stacked list:

1. Home
2. Services (accordion)
   - Platform Modernization
   - Salesforce & CRM Strategy
   - AI-Powered Productivity & Automation
   - DevEx & DevOps
   - Observability
   - Compliance & Governance
   - Cloud Strategy & Cost Optimization
3. Blog
4. Contact

---

## 3. Footer Navigation

### **Company**
- Home → `/`
- Contact → `/contact`

### **Services**
- Platform Modernization → `/platform-modernization`
- Salesforce & CRM Strategy → `/salesforce-crm-strategy`
- AI-Powered Productivity & Automation → `/ai-automation`
- DevEx & DevOps → `/devex-devops`
- Observability → `/observability`
- Compliance & Governance → `/compliance-governance`
- Cloud Strategy & Cost Optimization → `/cloud-strategy-cost-optimization`

### **Resources**
- Blog → `/blog`

### **Legal**
- Privacy Policy (future) → `/legal/privacy`
- Terms of Use (future) → `/legal/terms`

---

## 4. Route–Label Map (Source of Truth)

| Route | Label | Category |
|-------|--------|------------|
| `/` | Home | Core |
| `/platform-modernization` | Platform Modernization | Service |
| `/salesforce-crm-strategy` | Salesforce & CRM Strategy | Service |
| `/ai-automation` | AI-Powered Productivity & Automation | Service |
| `/devex-devops` | DevEx & DevOps | Service |
| `/observability` | Observability | Service |
| `/compliance-governance` | Compliance & Governance | Service |
| `/cloud-strategy-cost-optimization` | Cloud Strategy & Cost Optimization | Service |
| `/blog` | Blog | Resource |
| `/blog/[slug]` | Blog Post | Resource |
| `/contact` | Contact | Core |
| `/legal/privacy` | Privacy Policy | Legal |
| `/legal/terms` | Terms of Use | Legal |

---

## 5. Dropdown Logic

- **Services** appears as a dropdown in desktop view.
- In mobile view, **Services** becomes an accordion section.
- “Blog” and “Contact” remain single links in both views.

---

## 6. Future Expansion (Reserved)

These links are not in MVP but should be reserved in navigation planning.

- About → `/about`
- Careers → `/careers`
- Case Studies → `/case-studies`
- Events → `/events`

---

## 7. Notes for Developers

- Navigation content should be sourced from a single JSON or TS config object to avoid duplication.
- If using React/Vite:
  - Store nav schema in `/client/src/config/navigation.ts`
  - Mobile and desktop nav consume the same config.
- Footer columns should be dynamically generated from groups.

---

## 8. Versioning

**v1.0 — November 2025**  
Initial navigation specification.  
Future versions will track nav changes, new routes, and added dropdowns.

