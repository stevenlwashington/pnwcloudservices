import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Platform Modernization",
  "Salesforce & CRM Strategy",
  "AI & Automation",
  "DevEx & DevOps"
];

export function Highlights() {
  return (
    <section className="py-16 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-90">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-lg md:text-2xl font-bold tracking-tight">
              <CheckCircle2 className="w-6 h-6 text-secondary" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
