import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Cropper from 'react-easy-crop'
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline'

interface ImageCropperProps {
  imageUrl: string
  onCropComplete: (croppedImage: string) => void
  onClose: () => void
  aspect?: number
}

interface Crop {
  x: number
  y: number
}

const ImageCropper = ({ 
  imageUrl, 
  onCropComplete, 
  onClose, 
  aspect = 4 / 3 
}: ImageCropperProps) => {
  const [crop, setCrop] = useState<Crop>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null)

  const onCropChange = useCallback((crop: Crop) => {
    setCrop(crop)
  }, [])

  const onZoomChange = useCallback((zoom: number) => {
    setZoom(zoom)
  }, [])

  const handleCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new Image()
      image.addEventListener('load', () => resolve(image))
      image.addEventListener('error', error => reject(error))
      image.src = url
    })

  const getCroppedImg = async (imageSrc: string, pixelCrop: any): Promise<string> => {
    const image = await createImage(imageSrc)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    if (!ctx) {
      throw new Error('No 2d context')
    }

    const maxSize = Math.max(image.width, image.height)
    const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2))

    canvas.width = safeArea
    canvas.height = safeArea

    ctx.translate(safeArea / 2, safeArea / 2)
    ctx.translate(-safeArea / 2, -safeArea / 2)

    ctx.drawImage(
      image,
      safeArea / 2 - image.width * 0.5,
      safeArea / 2 - image.height * 0.5
    )

    const data = ctx.getImageData(0, 0, safeArea, safeArea)

    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height

    ctx.putImageData(
      data,
      0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x,
      0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y
    )

    return canvas.toDataURL('image/jpeg')
  }

  const handleApplyCrop = async () => {
    if (croppedAreaPixels) {
      try {
        const croppedImage = await getCroppedImg(imageUrl, croppedAreaPixels)
        onCropComplete(croppedImage)
      } catch (error) {
        console.error('Error cropping image:', error)
      }
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-900 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Crop Image</h2>
          <div className="flex gap-2">
            <motion.button
              onClick={handleApplyCrop}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CheckIcon className="w-4 h-4" />
              Apply Crop
            </motion.button>
            <motion.button
              onClick={onClose}
              className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <XMarkIcon className="w-4 h-4" />
              Cancel
            </motion.button>
          </div>
        </div>

        {/* Cropper Container */}
        <div className="relative w-full h-96 bg-gray-800 rounded-lg overflow-hidden">
          <Cropper
            image={imageUrl}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            onCropChange={onCropChange}
            onZoomChange={onZoomChange}
            onCropComplete={handleCropComplete}
            showGrid={true}
            objectFit="contain"
            style={{
              containerStyle: {
                width: '100%',
                height: '100%',
                backgroundColor: '#1f2937'
              }
            }}
          />
        </div>

        {/* Zoom Controls */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Zoom: {zoom.toFixed(2)}x
          </label>
          <input
            type="range"
            min="1"
            max="3"
            step="0.1"
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        {/* Instructions */}
        <div className="mt-4 text-sm text-gray-400">
          <p>• Drag to move the crop area</p>
          <p>• Use the zoom slider to adjust the view</p>
          <p>• Click "Apply Crop" to save the cropped image</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ImageCropper 