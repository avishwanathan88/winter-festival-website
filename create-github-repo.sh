#!/bin/bash

echo "🎄❄️ Winter Festival Website - GitHub Setup ❄️🎄"
echo "=================================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🎯 Setting up your Winter Festival website for GitHub deployment...${NC}"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: Please run this script from the winter-festival-website directory${NC}"
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}📁 Initializing Git repository...${NC}"
    git init
    git add .
    git commit -m "Initial commit: Complete Winter Festival website"
fi

echo -e "${GREEN}✅ Git repository ready!${NC}"
echo ""
echo -e "${BLUE}📋 NEXT STEPS TO GO LIVE:${NC}"
echo ""
echo "1. 🔗 CREATE GITHUB REPOSITORY:"
echo "   • Go to https://github.com/new"
echo "   • Repository name: winter-festival-website"
echo "   • Make it Public"
echo "   • Click 'Create repository'"
echo ""
echo "2. 🚀 CONNECT AND PUSH:"
echo -e "   ${YELLOW}git remote add origin https://github.com/YOUR-USERNAME/winter-festival-website.git${NC}"
echo -e "   ${YELLOW}git branch -M main${NC}"
echo -e "   ${YELLOW}git push -u origin main${NC}"
echo ""
echo "3. 🌟 DEPLOY TO VERCEL:"
echo "   • Go to https://vercel.com"
echo "   • Sign up with GitHub"
echo "   • Click 'New Project'"
echo "   • Import 'winter-festival-website'"
echo "   • Click 'Deploy'"
echo ""
echo -e "${GREEN}🎉 Your website will be LIVE in ~2 minutes!${NC}"
echo ""
echo "📱 Features included in your deployment:"
echo "   ✅ Beautiful winter theme with animated snowflakes"
echo "   ✅ Real winter festival images"
echo "   ✅ Mobile-responsive design"
echo "   ✅ Photo gallery with modal views"
echo "   ✅ Live countdown timer"
echo "   ✅ Customer testimonials"
echo "   ✅ Email signup functionality"
echo "   ✅ SEO optimization"
echo "   ✅ Professional navigation"
echo ""
echo -e "${BLUE}🔗 After deployment, your site will be at:${NC}"
echo "   https://winter-festival-website-abc123.vercel.app"
echo ""
echo -e "${GREEN}🎊 Ready to promote your magical winter festival!${NC}"
