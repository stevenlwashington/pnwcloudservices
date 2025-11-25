export const navigation = {
  main: [
    {
      label: "Services",
      href: "#", // Dropdown trigger
      children: [
        { label: "Platform Modernization", href: "/platform-modernization" },
        { label: "Salesforce & CRM Strategy", href: "/salesforce-crm-strategy" },
        { label: "AI-Powered Productivity & Automation", href: "/ai-automation" },
        { label: "DevEx & DevOps", href: "/devex-devops" },
        { label: "Observability", href: "/observability" },
        { label: "Compliance & Governance", href: "/compliance-governance" },
        { label: "Cloud Strategy & Cost Optimization", href: "/cloud-strategy-cost-optimization" },
      ],
    },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  footer: {
    company: [
      { label: "Home", href: "/" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "Platform Modernization", href: "/platform-modernization" },
      { label: "Salesforce & CRM Strategy", href: "/salesforce-crm-strategy" },
      { label: "AI-Powered Productivity & Automation", href: "/ai-automation" },
      { label: "DevEx & DevOps", href: "/devex-devops" },
      { label: "Observability", href: "/observability" },
      { label: "Compliance & Governance", href: "/compliance-governance" },
      { label: "Cloud Strategy & Cost Optimization", href: "/cloud-strategy-cost-optimization" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/legal/privacy" }, // Placeholder route
      { label: "Terms of Use", href: "/legal/terms" }, // Placeholder route
    ],
  },
};
