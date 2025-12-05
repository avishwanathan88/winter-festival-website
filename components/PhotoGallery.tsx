'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&q=80',
    alt: 'Winter festival snowflake decorations',
    title: 'Magical Decorations'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
    alt: 'Hot cocoa with marshmallows',
    title: 'Warm Cocoa Station'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1544537150-6e4b999de2a2?w=800&q=80',
    alt: 'Fortune teller with crystal ball',
    title: 'Mystical Fortune Telling'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80',
    alt: 'Storytelling by candlelight',
    title: 'Enchanting Stories'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
    alt: 'Winter festival activities',
    title: 'Family Fun Activities'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
    alt: 'Ice sculptures',
    title: 'Beautiful Ice Art'
  }
]

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-script">
            Memories from Our Festival
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Relive the magical moments and see what makes our winter festival so special
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                className="relative max-w-4xl max-h-[80vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const image = galleryImages.find(img => img.id === selectedImage)
                  return image ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                    />
                  ) : null
                })()}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all"
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default PhotoGallery
