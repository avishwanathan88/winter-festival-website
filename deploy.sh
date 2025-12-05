#!/bin/bash

echo "🎄❄️ Winter Festival Website Deployment Script ❄️🎄"
echo "=================================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "⚠️  Git not initialized. Initializing..."
    git init
    git add .
    git commit -m "Initial commit: Winter Festival website with enhanced snowflakes and images"
fi

echo "🎯 Deployment Options:"
echo ""
echo "1. 🚀 Deploy to Vercel (Recommended)"
echo "2. 📱 Deploy to Netlify" 
echo "3. ☁️  Deploy to GitHub Pages"
echo "4. 📋 Show manual deployment instructions"
echo ""

echo "📦 Your Winter Festival website includes:"
echo "   ✅ Beautiful winter theme with animated snowflakes"
echo "   ✅ Real winter images from Unsplash"
echo "   ✅ Mobile-responsive design"
echo "   ✅ Photo gallery with modal views"
echo "   ✅ Countdown timer to next festival"
echo "   ✅ Customer testimonials"
echo "   ✅ Email signup functionality"
echo "   ✅ SEO optimization"
echo ""

echo "🌟 VERCEL DEPLOYMENT (Easiest):"
echo "1. Go to https://vercel.com"
echo "2. Sign in with GitHub"
echo "3. Click 'New Project'"
echo "4. Import this repository"
echo "5. Click 'Deploy' - Done! 🎉"
echo ""

echo "📁 Project Structure Ready:"
echo "   📄 Next.js app with TypeScript"
echo "   🎨 Tailwind CSS styling"
echo "   🖼️  Real winter festival images"
echo "   ❄️  Enhanced snowfall animations"
echo "   🔧 Vercel configuration files"
echo ""

echo "🎊 Your website will be live at a URL like:"
echo "   https://winter-festival-website-abc123.vercel.app"
echo ""

echo "🔗 Need help? Check DEPLOYMENT.md for detailed instructions!"
echo ""
echo "🚀 Ready to go live and promote your magical winter festival!"
