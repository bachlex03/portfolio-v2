import Link from 'next/link';
import { FaGithub, FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
const icons = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/bachlex03?tab=repositories',
  },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/lxbach1608/',
  },
  {
    icon: <FaFacebook />,
    path: 'https://www.facebook.com/bale1608',
  },
  {
    icon: <FiInstagram />,
    path: '',
  },
  {
    icon: <FaTwitter />,
    path: '',
  },
];

const Social = () => {
  return (
    <>
      <div className="flex gap-6 mt-3">
        {icons.map((item, index) => {
          return (
            <Link key={index} href={item.path} className="p-3 border-four border rounded-full text-third hover:border-secondary hover:text-secondary transition-all duration-300 hover:-translate-y-2">
              {item.icon}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Social;
