# Enterprise Chat - Privacy Policy Website

Privacy Policy page for Apple App Store review submission.

## Setup

```bash
cd privacy
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Deploy

Or use Vercel CLI:
```bash
npx vercel
```

## Routes

- `/` - Privacy Policy page
- `/privacy-policy/` - Alias for privacy policy
- `/terms/` - Terms of Service (if needed)

## For Apple Review

Submit the deployed URL (e.g., `https://your-app-privacy.vercel.app/`) in App Store Connect under:
- App Privacy > Privacy Policy URL
