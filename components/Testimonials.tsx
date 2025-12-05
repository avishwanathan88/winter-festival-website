'use client'

import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Local Resident",
    text: "The fortune telling booth was absolutely amazing! The mystic knew things about me that I had never told anyone. My family and I had such a magical time!",
    rating: 5
  },
  {
    id: 2,
    name: "Mike Chen",
    location: "Visiting from Seattle",
    text: "The storytelling by the fire was enchanting. Our kids were completely captivated, and the hot cocoa was the perfect touch for a cold winter evening.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Festival Volunteer",
    text: "I've volunteered for three years now, and every year the festival gets more magical. The community spirit and the joy on families' faces make it all worthwhile.",
    rating: 5
  },
  {
    id: 4,
    name: "David Thompson",
    location: "First-time Visitor",
    text: "We traveled 200 miles to attend, and it was absolutely worth it! The winter decorations were breathtaking, and the activities kept our whole family entertained.",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Park",
    location: "Longtime Attendee",
    text: "This has become our family's favorite holiday tradition. The festival creates such beautiful memories - the kids already ask when we can go back!",
    rating: 5
  },
  {
    id: 6,
    name: "James Wilson",
    location: "Photography Enthusiast",
    text: "As a photographer, I was blown away by how photogenic everything was. The ice sculptures, the twinkling lights, the happy faces - pure magic to capture!",
    rating: 5
  }
]

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-script">
            What Our Visitors Say
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Don't just take our word for it - hear from families and individuals who've experienced the magic
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect p-6 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              <p className="text-white mb-4 leading-relaxed">"{testimonial.text}"</p>
              <div className="border-t border-white/20 pt-4">
                <h4 className="font-semibold text-white">{testimonial.name}</h4>
                <p className="text-purple-200 text-sm">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
