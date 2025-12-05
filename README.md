# Winter Festival Website 🎄❄️

A beautiful, interactive website for promoting a magical winter festival. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

### ✨ Core Features
- **Responsive Design**: Perfect on mobile, tablet, and desktop
- **Winter Theme**: Beautiful gradients, snowflake animations, and cozy vibes
- **Smooth Animations**: Framer Motion powered interactions
- **Photo Gallery**: Stunning winter festival images with modal view
- **Countdown Timer**: Real-time countdown to next year's festival
- **Email Signup**: Serverless function for collecting visitor emails

### 🎯 Festival Highlights
- **Fortune Telling**: Mystical crystal ball readings and tarot cards
- **Winter Storytelling**: Enchanting tales by cozy fire pits
- **Hot Cocoa Station**: Signature cocoa bar with delicious toppings

### 🛠 Technical Features
- **Next.js 14**: Modern React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling with custom winter theme
- **Framer Motion**: Smooth animations and page transitions
- **Responsive Images**: Optimized loading with Next.js Image component
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd winter-festival-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Deployment

This website is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click!

The site includes:
- Automatic Vercel Analytics integration
- Optimized build configuration
- Serverless API functions
- Static asset optimization

## Customization

### Updating Content
- **Festival dates**: Update in `app/page.tsx`
- **Highlights**: Modify the `highlights` array
- **Images**: Replace Unsplash URLs in `components/PhotoGallery.tsx`
- **Contact info**: Update in the contact section

### Styling
- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Animations**: Adjust Framer Motion settings in components
- **Typography**: Update fonts in `app/layout.tsx`

### Email Integration
The email signup currently logs to console. To integrate with real services:

1. Update `pages/api/signup.ts`
2. Add your preferred service (Mailchimp, SendGrid, etc.)
3. Configure environment variables

## Project Structure

```
winter-festival-website/
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx            # Main homepage component
├── components/
│   ├── Navigation.tsx       # Responsive navigation with smooth scroll
│   ├── Snowfall.tsx        # Animated falling snowflakes
│   ├── PhotoGallery.tsx    # Image gallery with modal view
│   ├── CountdownTimer.tsx   # Live countdown to next festival
│   ├── Testimonials.tsx     # Customer testimonials section
│   └── EmailSignup.tsx     # Email subscription form
├── pages/api/
│   └── signup.ts           # Serverless function for email signup
├── public/
│   └── images/             # Static images and assets
└── styles/                 # Additional CSS files
```

## Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic bundle splitting for faster loads
- **Static Generation**: Pre-rendered pages for better performance
- **Web Vitals**: Optimized for Core Web Vitals metrics

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please contact:
- Email: info@winterfestival.com
- Website: [Your Festival Website]

---

Built with ❄️ and ❤️ for bringing communities together through the magic of winter celebrations.
