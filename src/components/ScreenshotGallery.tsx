import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface ScreenshotGalleryProps {
  images?: string[]
}

const ScreenshotGallery = ({ images = [] }: ScreenshotGalleryProps) => {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleNext = useCallback(() => {
    setSelectedIdx((prev) => (prev + 1) % images.length)
  }, [images.length])

  const handlePrev = useCallback(() => {
    setSelectedIdx((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!isFullscreen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'Escape') setIsFullscreen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isFullscreen, handleNext, handlePrev])

  if (images.length === 0) return null

  return (
    <>
      <div className="w-full">
        {/* Main Image */}
        <motion.div
          key={selectedIdx}
          initial={{ opacity: 0.6, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-xl cursor-pointer"
          onClick={() => setIsFullscreen(true)}
        >
          <img
            src={images[selectedIdx]}
            alt={`Screenshot ${selectedIdx + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>

        {/* Thumbnails */}
        <div className="mt-4 grid grid-cols-5 gap-3">
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`aspect-square rounded-lg border-2 transition-all duration-200 ${
                idx === selectedIdx ? 'border-blue-500 scale-105 z-10' : 'border-transparent'
              }`}
            >
              <img
                src={src}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          >
            <motion.button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors z-[60]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <XMarkIcon className="w-6 h-6" />
            </motion.button>
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.target === e.currentTarget && setIsFullscreen(false)}>
              {/* Left Arrow */}
              <motion.button
                onClick={handlePrev}
                className="absolute left-4 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </motion.button>

              {/* Image */}
              <motion.img
                src={images[selectedIdx]}
                alt={`Screenshot ${selectedIdx + 1}`}
                className="max-h-[90vh] max-w-[90vw] object-contain"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Right Arrow */}
              <motion.button
                onClick={handleNext}
                className="absolute right-4 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRightIcon className="w-6 h-6" />
              </motion.button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-800/50 px-3 py-1 rounded-full text-white text-sm">
                {selectedIdx + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ScreenshotGallery
