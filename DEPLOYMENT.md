# 🚀 Winter Festival Website - Deployment Guide

## Quick Deployment to Vercel (Recommended)

### Option 1: GitHub + Vercel Integration (Easiest)

1. **Push to GitHub:**
   ```bash
   # Create a new repository on GitHub first, then:
   git remote add origin https://github.com/yourusername/winter-festival-website.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy via Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Connect your GitHub repository
   - Vercel will automatically detect it's a Next.js project
   - Click "Deploy" - Done! 🎉

3. **Automatic Deployments:**
   - Every push to `main` branch automatically deploys
   - Pull requests get preview deployments
   - Custom domains available

### Option 2: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   # or
   yarn global add vercel
   ```

2. **Deploy:**
   ```bash
   cd winter-festival-website
   vercel --prod
   ```

3. **Follow prompts:**
   - Login to Vercel
   - Choose settings (defaults work great)
   - Get your live URL instantly!

## Alternative Deployment Options

### Netlify
1. Drag and drop the project folder to [netlify.com/drop](https://netlify.com/drop)
2. Or connect via GitHub like Vercel

### AWS Amplify
```bash
npm install -g @aws-amplify/cli
amplify init
amplify add hosting
amplify publish
```

### Traditional Web Hosting
1. Build the project: `npm run build && npm run export`
2. Upload the `out/` folder to any web hosting service

## Environment Setup for Production

### Required Files Already Included:
- ✅ `vercel.json` - Vercel deployment configuration
- ✅ `next.config.js` - Next.js optimization settings
- ✅ `package.json` - Dependencies and scripts
- ✅ `.gitignore` - Excludes node_modules, etc.

### Optional Environment Variables:
Create `.env.local` file for:
```bash
# Email service integration (optional)
MAILCHIMP_API_KEY=your_api_key
SENDGRID_API_KEY=your_api_key

# Analytics (optional)
VERCEL_ANALYTICS_ID=your_analytics_id

# Custom domain (optional)
NEXT_PUBLIC_DOMAIN=your-domain.com
```

## Testing Before Deployment

### Local Development Server:
```bash
# Full Next.js development server (requires npm install)
npm run dev

# Simple preview server (no dependencies)
node server.js
```

### Production Build Test:
```bash
npm run build
npm start
```

## Post-Deployment Checklist

### ✅ Immediate Steps:
- [ ] Test website on mobile and desktop
- [ ] Verify email signup functionality
- [ ] Check image loading
- [ ] Test navigation smooth scrolling
- [ ] Confirm animations work properly

### ✅ SEO & Performance:
- [ ] Set up custom domain (optional)
- [ ] Configure Google Analytics (optional)
- [ ] Submit to Google Search Console
- [ ] Test Core Web Vitals scores
- [ ] Optimize images if needed

### ✅ Marketing:
- [ ] Share URL on social media
- [ ] Update existing festival marketing materials
- [ ] Add QR codes for mobile access
- [ ] Test email signup flow

## Troubleshooting

### Common Issues:

1. **Build Failures:**
   - Check Node.js version (needs 18+)
   - Verify all dependencies in package.json
   - Check for TypeScript errors

2. **Image Loading Issues:**
   - Update image URLs in components/PhotoGallery.tsx
   - Use absolute URLs for external images

3. **API Function Errors:**
   - Check pages/api/signup.ts for any syntax errors
   - Verify environment variables if using email services

### Support Resources:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Project GitHub Issues](https://github.com/yourusername/winter-festival-website/issues)

## Custom Domain Setup

### With Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificates are automatic!

### Domain Suggestions:
- winterfestival2024.com
- magicalwinterfest.org
- [yourtown]winterfest.com

---

## 🎉 Success! 

Once deployed, your Winter Festival website will be:
- ✨ Live and accessible worldwide
- 📱 Mobile-responsive and fast
- 🔍 SEO optimized
- 📊 Analytics-enabled
- 🚀 Automatically updated via Git

**Share your live URL and start promoting your magical winter festival!**
