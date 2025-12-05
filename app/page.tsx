'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Snowfall from '../components/Snowfall'
import PhotoGallery from '../components/PhotoGallery'
import CountdownTimer from '../components/CountdownTimer'
import Testimonials from '../components/Testimonials'
import EmailSignup from '../components/EmailSignup'

export default function Home() {
  const highlights = [
    {
      icon: "🔮",
      title: "Fortune Telling",
      description: "Discover what the future holds with our mystical fortune tellers. Experience the magic of crystal ball readings and tarot cards in our enchanted tent."
    },
    {
      icon: "📖",
      title: "Winter Storytelling",
      description: "Gather around our cozy fire pit for captivating winter tales. Professional storytellers will transport you to magical worlds filled with snow and wonder."
    },
    {
      icon: "☕",
      title: "Hot Cocoa Station",
      description: "Warm your heart and soul with our signature hot cocoa bar. Choose from various toppings including marshmallows, whipped cream, and cinnamon."
    }
  ]

  return (
    <div className="min-h-screen">
      <Snowfall />
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="winter-bg min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-script">
              Winter Festival
              <span className="block text-4xl md:text-6xl mt-2">2024</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience the magic of winter with fortune telling, enchanting stories, 
              warm cocoa, and unforgettable memories for the whole family
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-4"
            >
              <div className="text-2xl text-white font-semibold">
                📅 December 20-22, 2024
              </div>
              <div className="text-xl text-blue-100">
                🕰️ 6:00 PM - 10:00 PM Daily
              </div>
              <div className="text-lg text-blue-200">
                📍 Winter Wonderland Park, Main Street
              </div>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-full btn-glow"
            >
              Discover the Magic ✨
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-script">
              About Our Festival
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                For over a decade, our Winter Festival has been bringing communities together to celebrate 
                the magic and wonder of the winter season. What started as a small neighborhood gathering 
                has grown into a beloved regional tradition that attracts families from across the state.
              </p>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Our festival combines the mystical allure of fortune telling, the warmth of community 
                storytelling, and the simple pleasure of sharing hot cocoa under twinkling winter lights. 
                Every detail is crafted to create an atmosphere where magic feels real and memories are made.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10+</div>
                  <div className="text-slate-300">Years of Magic</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5000+</div>
                  <div className="text-slate-300">Happy Visitors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-slate-300">Family Friendly</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-script">
              Festival Highlights
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover the magical experiences that make our winter festival unforgettable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect p-8 rounded-lg text-center group cursor-pointer"
              >
                <div className="text-6xl mb-4 group-hover:animate-float">
                  {highlight.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {highlight.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Countdown Timer */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-purple-800">
        <div className="container mx-auto px-4">
          <CountdownTimer />
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Email Signup */}
      <EmailSignup />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-script">
              Join the Magic
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Ready to experience the wonder? Mark your calendars and prepare for an unforgettable winter celebration!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">📍 Event Details</h3>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Dates:</strong> December 20-22, 2024</p>
                  <p><strong>Time:</strong> 6:00 PM - 10:00 PM Daily</p>
                  <p><strong>Location:</strong> Winter Wonderland Park, Main Street</p>
                  <p><strong>Admission:</strong> Free for all ages</p>
                </div>
              </div>
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">📞 Contact Info</h3>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Phone:</strong> (555) 123-WINTER</p>
                  <p><strong>Email:</strong> info@winterfestival.com</p>
                  <p><strong>Website:</strong> www.winterfestival.com</p>
                  <p><strong>Social:</strong> @WinterFestivalMagic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 mb-4">
            © 2024 Winter Festival. All rights reserved. Created with ❄️ and ❤️
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
