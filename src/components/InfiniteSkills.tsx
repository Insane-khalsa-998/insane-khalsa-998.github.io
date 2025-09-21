import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiTypescript, SiVite, SiTailwindcss } from 'react-icons/si';

const skills = [
  { icon: FaHtml5, name: 'HTML5', color: '#E34F26' },
  { icon: FaCss3Alt, name: 'CSS3', color: '#1572B6' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: FaReact, name: 'React', color: '#61DAFB' },
  { icon: SiVite, name: 'Vite', color: '#646CFF' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' }
];

const InfiniteSkills = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-900 py-8">
      <motion.div
        className="flex space-x-8"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 bg-gray-800 px-6 py-3 rounded-full"
          >
            <skill.icon className="w-6 h-6" style={{ color: skill.color }} />
            <span className="text-white font-medium">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteSkills;