import ReactLogo from './Assets/React.png'
import TailwindcssLogo from './Assets/Tailwindcss.png'
import AnimejsLogo from './Assets/Anime.png'
import GithubLogo from './Assets/github.svg'
import ViteLogo from './Assets/Vite.png'
import ThreeJS from './Assets/ThreeJS.png'
import NodeLogo from './Assets/Node.png'
import NextLogo from './Assets/Next.png'
import FramerMotionLogo from './Assets/motion.svg'
import ReduxLogo from './Assets/Redux.png'
import ZustandLogo from './Assets/zustand.png'
import SupabaseLogo from './Assets/supabase.svg'
import GsapLogo from './Assets/gsap.png'


export const projects = [
    {
      name: 'Headphones Landing Page',
      description: (<>modern landing page for a headphones company featuring sleek design elements and smooth animations using <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Tailwind CSS</span>, <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Anime.js</span> and <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Framer Motion</span>. 'add to cart' functionality using <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Redux</span> to handle complex states and <span>Supabase</span> for the management of the database</>),
      techStack: [ReactLogo, TailwindcssLogo, AnimejsLogo, FramerMotionLogo, ReduxLogo, SupabaseLogo],
      projectUrl: 'https://headphones-ecommerce.onrender.com/',
      repoUrl: 'https://github.com/Cyberj1998/Headphones'
    },
    {
      name: '3D Interactive Website',
      description: (<>This React project showcases a stunning <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">3D model</span> of a floating island using <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Three.js</span> and <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">React-Three-Fiber</span>. The user can interact with the 3D model by rotating it using drag-and-drop gestures</>),
      techStack: [ViteLogo, ReactLogo, ThreeJS, TailwindcssLogo],
      projectUrl: 'https://threedworld.onrender.com',
      repoUrl: 'https://github.com/Cyberj1998/3DWorld'
    },
    {
      name: 'Anime Infinite Scroll',
      description: (<><span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Next.js</span> project to showcase the <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">server-side</span> actions, we also use the <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Framer Motion</span> library to create nice and smooth scroll animations</>),
      techStack: [NextLogo, TailwindcssLogo, FramerMotionLogo],
      projectUrl: 'https://animescroll.onrender.com',
      repoUrl: 'https://github.com/Cyberj1998/AnimeScroll'
    },
    {
      name: 'Node.js API/Landing Page',
      description: (<><span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Node.js</span> API that everyone can use to build amazing projects. Alongside that, I built this attractive landing page with <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Three.js</span> and Redux to showcase what you can do with this <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">API</span></>),
      techStack: [ViteLogo, ReactLogo, TailwindcssLogo, FramerMotionLogo, ThreeJS, NodeLogo, ReduxLogo],
      projectUrl: 'https://gamingchairslandingpage.onrender.com',
      repoUrl: 'https://github.com/Cyberj1998/GamingChairsLandingPage'
    },
    {
      name: 'T-Shirt Customization',
      description: (<>Modern T-shirt customization page with <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">3D interactive model</span> thanks to the power of <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Three.js</span>, and modern style using <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Tailwind CSS</span> and <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Framer Motion</span>.</>),
      techStack: [ViteLogo, ReactLogo, TailwindcssLogo, ThreeJS, FramerMotionLogo],
      projectUrl: 'https://t-shirt-customizer-e4c4.onrender.com',
      repoUrl: 'https://github.com/Cyberj1998/T-Shirt-Customizer'
    },
    {
      name: 'E-Commerce with Redux & Emailjs',
      description: (<>Full E-Commerce website with <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">node.js</span> server to store and load the products, add to cart functions with <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Redux</span> 3d models with <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">ThreeJs</span> and modern animations using <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Framer Motion.</span> Plus <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Supabase</span> for the control and management of the database</>),
      techStack: [ViteLogo, ReactLogo, TailwindcssLogo, FramerMotionLogo, ThreeJS, NodeLogo, ReduxLogo, SupabaseLogo],
      projectUrl: 'https://primeburgers.onrender.com',
      repoUrl: 'https://github.com/Cyberj1998/primeburgers'
    },
    {
      name: 'Sleek Design Landing Page',
      description: (<>Sleek and modern design of a landing page dedicated to <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">E-scooters</span>, modern responsive design using <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Tailwind CSS</span> and <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Three.js</span> to add 3D models to our website. Finally, some smooth animations using the power of <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Framer Motion</span> to catch the eye of the user even more.</>),
      techStack: [ViteLogo, ReactLogo, TailwindcssLogo, FramerMotionLogo, ThreeJS],
      projectUrl: 'https://e-scooter.onrender.com',
      repoUrl: 'https://github.com/Cyberj1998/e-scooter'
    },
    {
      name: 'A Modern Gaming Experience',
      description: (<>This modern website features a sleek, futuristic design that transforms the gaming experience. With captivating videos that draw users in and <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">GSAP</span> animations that flow smoothly, every interaction feels seamless. Built with <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Tailwind CSS</span>, the site ensures a responsive and aesthetically pleasing layout</>),
      techStack: [ViteLogo, ReactLogo, TailwindcssLogo, GsapLogo],
      projectUrl: 'https://gaming-website-ih46.onrender.com',
      repoUrl: 'https://github.com/Cyberj1998/gaming_website'
    },
    {
      name: 'Eye Catching Landing Page',
      description: (<>Fizzi is a landing page for a fictional soda brand that is anything but ordinary. It features an eye-catching design that uses the power of <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Three.js</span> and <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">GSAP</span> combined to create amazing animations with 3D models to catch the user's attention. It also utilizes <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Tailwind CSS</span> for further styling</>),
      techStack: [ViteLogo, ReactLogo, TailwindcssLogo, GsapLogo],
      projectUrl: 'https://fizzi.onrender.com',
      repoUrl: 'https://github.com/Cyberj1998/fizzi'
    },
    {
      name: 'Modern Design Next App',
      description: (<>Very modern design <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Next.js</span> website showcasing an AI company, using the power of <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Next.js</span> and <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Tailwind CSS</span> to create a stunning design and</>),
      techStack: [NextLogo, TailwindcssLogo],
      projectUrl: 'https://brainwave-538z.onrender.com/',
      repoUrl: 'https://github.com/Cyberj1998/Brainwave'
    },
    {
      name: 'Ecommerce App for a Coffe Shop',
      description: (<>Coffe Shop self ordering system with <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Redux</span> using <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">TailwindCss</span> and <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Gsap</span> to archive a modern and eye catching hero section, using the power of <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Supabase</span> to handle the backend and database management</>),
      techStack: [ViteLogo, ReactLogo, TailwindcssLogo, GsapLogo, SupabaseLogo, ReduxLogo],
      projectUrl: 'https://coffeeshop-ik7s.onrender.com/',
      repoUrl: 'https://github.com/Cyberj1998/CoffeeShop'
    }
]