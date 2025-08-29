# Environment Configuration Setup

## Create .env.local file

Create a new file called `.env.local` in your project root directory with this content:

```
# Google Analytics 4 Configuration
NEXT_PUBLIC_GA_TRACKING_ID=G-FVQVG1PN8K

# Google Tag Manager Configuration (optional - add later if needed)
# NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Domain for sitemap and robots.txt (update with your actual domain)
NEXT_PUBLIC_DOMAIN=https://your-domain.com
```

## Steps:
1. In your project root (same level as package.json)
2. Create a new file named exactly: `.env.local`
3. Copy and paste the content above
4. Save the file

## Important:
- The file starts with a dot: `.env.local`
- This file is automatically ignored by git (won't be committed)
- Next.js will automatically load these environment variables
