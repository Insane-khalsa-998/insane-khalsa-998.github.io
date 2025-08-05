import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PhotoIcon } from '@heroicons/react/24/outline'
import ImageCropper from './ImageCropper'

interface ImageUploaderProps {
  onImageSelect: (imageUrl: string) => void
  aspect?: number
  className?: string
}

const ImageUploader = ({ 
  onImageSelect, 
  aspect = 4 / 3, 
  className = "" 
}: ImageUploaderProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showCropper, setShowCropper] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setSelectedImage(result)
        setShowCropper(true)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCropComplete = (croppedImage: string) => {
    onImageSelect(croppedImage)
    setShowCropper(false)
    setSelectedImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleCloseCropper = () => {
    setShowCropper(false)
    setSelectedImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className={className}>
      {/* File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Upload Button */}
      <motion.button
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <PhotoIcon className="w-5 h-5" />
        Select Image
      </motion.button>

      {/* Cropper Modal */}
      <AnimatePresence>
        {showCropper && selectedImage && (
          <ImageCropper
            imageUrl={selectedImage}
            onCropComplete={handleCropComplete}
            onClose={handleCloseCropper}
            aspect={aspect}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default ImageUploader 