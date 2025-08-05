import { useState } from 'react'
import { motion } from 'framer-motion'
import ImageUploader from '../components/ImageUploader'

const ImageCropperDemo = () => {
  const [croppedImage, setCroppedImage] = useState<string | null>(null)

  const handleImageSelect = (imageUrl: string) => {
    setCroppedImage(imageUrl)
  }

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Image Cropper Demo
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Upload an image and crop it to your desired size and aspect ratio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800 rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Upload & Crop</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Square Crop (1:1)</h3>
                <ImageUploader
                  onImageSelect={handleImageSelect}
                  aspect={1}
                  className="mb-4"
                />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Landscape Crop (16:9)</h3>
                <ImageUploader
                  onImageSelect={handleImageSelect}
                  aspect={16 / 9}
                  className="mb-4"
                />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Portrait Crop (3:4)</h3>
                <ImageUploader
                  onImageSelect={handleImageSelect}
                  aspect={3 / 4}
                  className="mb-4"
                />
              </div>
            </div>
          </motion.div>

          {/* Preview Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800 rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Cropped Image Preview</h2>
            {croppedImage ? (
              <div className="space-y-4">
                <img
                  src={croppedImage}
                  alt="Cropped preview"
                  className="w-full h-64 object-cover rounded-lg border-2 border-blue-500"
                />
                <motion.button
                  onClick={() => setCroppedImage(null)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Clear Preview
                </motion.button>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 bg-gray-700 rounded-lg border-2 border-dashed border-gray-500">
                <div className="text-center text-gray-400">
                  <p className="text-lg">No image cropped yet</p>
                  <p className="text-sm">Upload and crop an image to see the preview</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-gray-800 rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Drag & Drop</h3>
              <p className="text-gray-300">Easily drag the crop area to position it exactly where you want</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Zoom Control</h3>
              <p className="text-gray-300">Use the zoom slider to get the perfect crop with precise control</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Aspect Ratios</h3>
              <p className="text-gray-300">Choose from different aspect ratios or set custom ones for your needs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ImageCropperDemo 