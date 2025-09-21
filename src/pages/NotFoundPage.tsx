import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, HomeIcon, CodeBracketIcon, UserIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import BackButton from '../components/BackButton';

interface SiteLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const NotFoundPage = () => {
  const navigate = useNavigate();

  const siteLinks: SiteLink[] = [
    { name: 'Home', href: '/', icon: HomeIcon, description: 'Return to the homepage' },
    { name: 'Projects', href: '/#projects', icon: CodeBracketIcon, description: 'View my projects' },
    { name: 'About', href: '/#about', icon: UserIcon, description: 'Learn more about me' },
    { name: 'Contact', href: '/#contact', icon: EnvelopeIcon, description: 'Get in touch' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Back Button */}
      <BackButton label="Back to Projects" />

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4 py-20">
        <motion.div
          className="max-w-4xl w-full mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Text */}
          <motion.div
            className="mx-auto max-w-md mb-8 text-6xl font-bold text-blue-500"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            404
              style={{ width: '100%', height: 'auto' }}
            />
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              The page you're looking for doesn't exist. Here are some helpful links:
            </p>
          </motion.div>

          {/* Site Links Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {siteLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 transition-all duration-300 border border-gray-700 flex flex-col items-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.4 + index * 0.1 }}
              >
                <link.icon className="w-10 h-10 text-blue-400 mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">{link.name}</h3>
                <p className="text-gray-400 text-sm">{link.description}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* Home Button */}
          <motion.button
            onClick={() => navigate('/')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Return Home
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;