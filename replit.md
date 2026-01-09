# PNW Cloud Services Website

## Overview

This is an enterprise cloud services consulting website for PNW Cloud Services, built as a full-stack application. The site showcases cloud consulting services including platform modernization, AI automation, Salesforce/CRM strategy, DevEx/DevOps, observability, and compliance governance. It features a contact form with bot protection, Calendly integration for scheduling consultations, and a blog section.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with custom theme variables defined in CSS
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript compiled with esbuild for production
- **API Pattern**: RESTful endpoints under `/api/*`
- **Development**: Vite middleware integration for HMR

### Key Design Patterns
1. **Monorepo Structure**: Client code in `client/`, server in `server/`, shared types in `shared/`
2. **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`
3. **Component Organization**: UI primitives in `components/ui/`, feature components alongside pages
4. **Separate Dev/Prod Entrypoints**: `server/index-dev.ts` for development with Vite, `server/index-prod.ts` for production with static file serving

### Contact Form Flow
1. Client-side Zod validation with React Hook Form
2. Cloudflare Turnstile bot verification (client widget + server token verification)
3. Server validates and stores submission
4. Resend API sends notification emails

### Scheduling Integration
- Calendly popup widget integration via `lib/calendly.ts`
- Lazy-loads Calendly script on first CTA click
- Centralized CTA component `ScheduleFreeConsultationCTA` with analytics hooks

### Reusable CTA Components
- **IntentPicker**: Reusable intent-based CTA section at `/client/src/components/cta/IntentPicker.tsx`
  - Features gradient text dropdown with three options: "review my platform strategy", "share my project details", "explore modernization options"
  - Each option shows contextual description and action button (Calendly or navigation)
  - Accepts `headline` prop to customize the main text (e.g., "Let's talk about your platforms." or "Start Your Modernization Roadmap.")
  - Used on: Home page, Platform Modernization page
- **GlowCTA**: Button component with blue-cyan-emerald gradient glow effect on hover at `/client/src/components/cta/GlowCTA.tsx`

## External Dependencies

### Third-Party Services
- **Email**: Resend API (`RESEND_API_KEY`) for sending contact form notifications
- **Bot Protection**: Cloudflare Turnstile (`TURNSTILE_SECRET_KEY` for server, `VITE_TURNSTILE_SITE_KEY` for client)
- **Scheduling**: Calendly popup widget (URL: `https://calendly.com/steven-pnwcloudservices/intro`)
- **Analytics**: Microsoft Clarity integration hooks (optional)

### Database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` with Drizzle-Zod integration for validation
- **Connection**: Requires `DATABASE_URL` environment variable
- **Current Storage**: MemStorage class for in-memory storage (database can be provisioned later)

### Required Environment Variables
| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | PostgreSQL connection string |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile server-side verification |
| `VITE_TURNSTILE_SITE_KEY` | Cloudflare Turnstile client-side widget |
| `RESEND_API_KEY` | Email sending via Resend |
| `CONTACT_TO_EMAIL` | Recipient for contact form submissions |
| `CONTACT_FROM_EMAIL` | Sender email (must be verified in Resend) |

### Build & Development Commands
- `npm run dev` - Start development server with Vite HMR
- `npm run build` - Build client and server for production
- `npm start` - Run production server
- `npm run db:push` - Push Drizzle schema to database

## Error Handling & Monitoring

### Error Pages
- **404 Page**: Branded "Page Not Found" at `/client/src/pages/not-found.tsx` with navigation links
- **500 Page**: Branded error page at `/client/src/pages/error.tsx` for server errors
- **ErrorBoundary**: React error boundary at `/client/src/components/ErrorBoundary.tsx` with minimal self-contained fallback

### Current Monitoring (Built-in)
- **Microsoft Clarity**: Session recordings, heatmaps, and user behavior analytics (integrated in index.html)
- **Cloudflare Web Analytics**: Page views and performance metrics (integrated in index.html)
- **Console Error Logging**: ErrorBoundary logs errors to console and sends to Clarity

### Production Monitoring Options
For advanced monitoring, integrate external services:
- **Datadog**: Full-stack monitoring, logs, traces, alerting ($15+/host/mo)
- **New Relic**: APM, infrastructure monitoring ($99+/mo)
- **Splunk**: Log aggregation and analytics

### SEO Documentation
- **Keyword Strategy**: See `/docs/SEO-KEYWORDS.md` for prioritized keywords by service area