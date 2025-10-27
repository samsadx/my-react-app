import type React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaFacebook } from 'react-icons/fa';

const FeatureSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#0d0d0f]">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Turn long videos into viral shorts <span className="text-[#4de877]">for every platform</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            OpusClip's AI automatically finds the most engaging moments in your videos and turns them
            into perfectly formatted clips for every social media platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={feature.id}
            />
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#131313] to-[#1a1a1a] rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Publish to all social platforms in one click
              </h3>
              <p className="text-gray-300 mb-6">
                Connect your social accounts and publish your clips to all platforms simultaneously.
                Optimize your content for each platform automatically.
              </p>
              <div className="flex flex-wrap gap-4">
                <PlatformIcon icon={<FaYoutube />} color="#FF0000" />
                <PlatformIcon icon={<FaInstagram />} color="#E1306C" />
                <PlatformIcon icon={<FaLinkedin />} color="#0077B5" />
                <PlatformIcon icon={<FaTiktok />} color="#000000" />
                <PlatformIcon icon={<FaTwitter />} color="#1DA1F2" />
                <PlatformIcon icon={<FaFacebook />} color="#4267B2" />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
                alt="Social media publishing"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -top-4 -right-4 bg-[#5a2cf7] text-white text-sm font-bold py-2 px-4 rounded-full">
                All platforms
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#131313] to-[#1a1a1a] p-6 rounded-xl hover:shadow-lg transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="bg-[#5a2cf7]/20 w-12 h-12 flex items-center justify-center rounded-full mb-4 text-[#5a2cf7]">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

interface PlatformIconProps {
  icon: React.ReactNode;
  color: string;
}

const PlatformIcon: React.FC<PlatformIconProps> = ({ icon, color }) => {
  return (
    <div
      className="w-12 h-12 flex items-center justify-center rounded-full text-white text-xl"
      style={{ backgroundColor: color }}
    >
      {icon}
    </div>
  );
};

const features = [
  {
    id: 1,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 8L4 12L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>,
    title: 'AI-Powered Video Clipping',
    description: 'Our AI automatically identifies the most engaging moments in your videos to create viral-worthy clips.'
  },
  {
    id: 2,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 3V7C14 7.55228 14.4477 8 15 8H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    title: 'Auto Caption & Transcription',
    description: 'Automatically add accurate captions to your video clips to increase engagement and accessibility.'
  },
  {
    id: 3,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 16H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>,
    title: 'Vertical & Horizontal Formats',
    description: 'Create clips in both vertical and horizontal formats optimized for different social platforms.'
  },
  {
    id: 4,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>,
    title: 'Save Time & Effort',
    description: 'Cut down video editing time by 90% and focus on creating content instead of tedious editing.'
  },
  {
    id: 5,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z" stroke="currentColor" strokeWidth="2" />
    </svg>,
    title: 'Visual Enhancement',
    description: 'Enhance video quality, add visual effects, and optimize color to make your clips stand out.'
  },
  {
    id: 6,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 19L3.5 13.5L9 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 5L20.5 10.5L15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    title: 'Multi-Format Export',
    description: 'Export your clips in multiple formats including MP4, GIF, and more, optimized for each platform.'
  }
];

export default FeatureSection;
