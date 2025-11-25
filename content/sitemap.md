/
├─ /platform-modernization
├─ /salesforce-crm-strategy
├─ /ai-automation
├─ /devex-devops
├─ /observability
├─ /compliance-governance
├─ /cloud-strategy-cost-optimization
├─ /blog
│   └─ /blog/[slug]
├─ /contact
└─ (system pages)
    ├─ /404
    └─ /legal/privacy (future)
-----------------------------------------------------------------------------------------
<! for devs/>

{
  "routes": [
    { "path": "/", "label": "Home", "nav": "hidden" },
    {
      "label": "Services",
      "children": [
        { "path": "/platform-modernization", "label": "Platform Modernization" },
        { "path": "/salesforce-crm-strategy", "label": "Salesforce & CRM Strategy" },
        { "path": "/ai-automation", "label": "AI-Powered Productivity & Automation" },
        { "path": "/devex-devops", "label": "DevEx & DevOps" },
        { "path": "/observability", "label": "Observability" },
        { "path": "/compliance-governance", "label": "Compliance & Governance" },
        { "path": "/cloud-strategy-cost-optimization", "label": "Cloud Strategy & Cost Optimization" }
      ]
    },
    { "path": "/blog", "label": "Blog" },
    { "path": "/contact", "label": "Contact" }
  ]
}
