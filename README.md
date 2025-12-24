# PNW Cloud Services Website

Enterprise cloud services consulting website with contact form functionality.

## Environment Variables

Configure the following secrets in your Replit Secrets panel (or `.env` file for local development):

### Required Secrets

| Variable | Description | Where to Get It |
|----------|-------------|-----------------|
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile secret key for server-side bot verification | [Cloudflare Dashboard](https://dash.cloudflare.com) > Turnstile > Your Widget > Secret Key |
| `RESEND_API_KEY` | Resend API key for sending emails | [Resend Dashboard](https://resend.com/api-keys) |

### Required Environment Variables (Public Config)

| Variable | Description | Where to Get It |
|----------|-------------|-----------------|
| `VITE_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key (public) for client-side widget | [Cloudflare Dashboard](https://dash.cloudflare.com) > Turnstile > Your Widget > Site Key |

### Optional Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `CONTACT_TO_EMAIL` | Email address(es) to receive contact form submissions | `steven@pnwcloudservices.com` |
| `CONTACT_FROM_EMAIL` | Sender email for notifications (must be verified in Resend) | `noreply@pnwcloudservices.com` |

## Turnstile Configuration

The Turnstile **site key** (public) is configured via the `VITE_TURNSTILE_SITE_KEY` environment variable. This is NOT a secret - it is a public config value that is bundled into the client-side code at build time.

The Turnstile **secret key** (private) must ONLY be configured as a server-side environment variable (`TURNSTILE_SECRET_KEY`). Never commit or expose this key.

### Setting Up Turnstile

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Turnstile** in the sidebar
3. Create a new widget or use an existing one
4. Add your domains to the allowed hostnames:
   - Your production domain (e.g., `pnwcloudservices.com`)
   - Your Replit app domain (e.g., `yourapp.replit.app`)
   - `localhost` for local development
5. Copy the **Site Key** to update in `client/src/components/contact-form.tsx` if needed
6. Copy the **Secret Key** and add it to Replit Secrets as `TURNSTILE_SECRET_KEY`

## Security Notes

- All secrets are read from environment variables on the server
- Turnstile tokens are verified server-side before any emails are sent
- If verification fails, a 400 error is returned and no emails are dispatched
- The secret key is never exposed to the client or logged

## Development

```bash
npm run dev
```

## Build for Production

```bash
npm run build
npm start
```
