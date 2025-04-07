# Vercel Deployment Instructions

Follow these steps to deploy your landing page to Vercel:

## Method 1: Using Vercel's GitHub Integration (Recommended)

1. Go to [Vercel](https://vercel.com/) and sign in or create an account
2. Click "Add New..." > "Project"
3. Import your GitHub repository: `nadavyigal/Michal-landing-page-`
4. Keep all the default settings (Vercel will automatically detect Next.js)
5. Click "Deploy"
6. Once deployed, Vercel will provide you with a URL to access your site

**Advantages of this method:**
- Automatic deployments when you update your GitHub repository
- Custom domain support
- Analytics and monitoring
- Seamless CI/CD pipeline

## Method 2: Using Vercel CLI (Alternative)

If you prefer using the command line:

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## After Deployment

1. You can add a custom domain in the Vercel dashboard
2. Update the README.md with your new Vercel deployment URL
3. Enjoy your new landing page! 