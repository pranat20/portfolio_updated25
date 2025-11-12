import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Code, Terminal, GraduationCap, Link, Download, Mail, BookOpen, Layers, User } from 'lucide-react';

// =================================================================
// 🚨🚨 1. IMAGE IMPORTS: CORRECTED FILE NAMES AND PATHS
// The paths below MUST exactly match the spelling, capitalization, and spacing 
// of the files inside your 'assets/certificates' folder.
// =================================================================

import DeloitteCert from './assets/certificates/Deloitte.jpg'; 
import PythonCert from './assets/certificates/Data science.png'; // Corrected file extension and case
import CentradoKit from './assets/certificates/Street light.png'; // Corrected file extension and case
import Technocrats from './assets/certificates/Techethon Certificate .jpg'; // Corrected file name/extension
import UIUXCert from './assets/certificates/UI UX.png'; // Corrected file name/extension
import WebDevIntern from './assets/certificates/Elite.png'; // Corrected file name/extension
import IlluminateWorkshop from './assets/certificates/Illuminate Certificate.jpg'; // Corrected file name/extension
import CrafterverseHackathon from './assets/certificates/Craftverse Certificate hackathon.jpg'; // Corrected file name/extension
import ProfileImage from './assets/certificates/Photo.jpg';
import ResumePDF from './assets/certificates/Pranat_Pagar_Resume_Updated.pdf';


// --- Configuration Data ---
const config = {
  colors: {
    primary: '#3B82F6', // Deep Blue Accent (New primary color)
    secondary: '#1E3A8A', // Richer Dark Blue (for button/nav hover and footer background)
    background: '#0F172A', // Deep Navy Blue (Formal Background)
    text: '#F1F5F9', // Light Off-White Text
    card: '#1F2937', // Slightly lighter card background
    detail: '#5C747B', // Muted gray for dividers/less important items
  },
  info: {
    name: "Pranat Pagar",
    tagline: "Software Development Engineer | Full Stack | AI/ML",
    profilePic: ProfileImage, // Placeholder image - REPLACE THIS URL
    linkedin: "https://linkedin.com/in/pranat-pagar-457469291",
    github: "https://github.com/pranat20",
    email: "ppagar602@gmail.com",
    resumeLink: ResumePDF, // Replace with actual link to your PDF
    about: [
      "Highly motivated and results-driven Software Development Engineer specializing in building scalable, robust web applications and leveraging data-driven solutions.",
      "Proficient in Java (DSA), Python (Django), Node.js and modern front-end frameworks like React. Proven ability to contribute immediately to core product development, optimize backend processes, and improve user experience.",
      "I thrive in dynamic engineering environments, focused on object-oriented programming, clean architecture, and continuous delivery.",
    ],
  },
  skills: {
    Programming: ['Java (DSA)', 'Python', 'C++', 'JavaScript'],
    WebDevelopment: ['Django', 'React.js', 'Node.js', 'REST APIs', 'HTML5', 'Tailwind CSS'],
    DatabasesTools: ['SQL', 'Oracle', 'Git', 'GitHub', 'TensorFlow', 'Tableau'],
    Domain: ['Data Structures & Algorithms', 'Object-Oriented Programming (OOP)', 'Embedded Systems', 'Computer Networks'],
  },
  experience: [
    {
      title: "Full Stack Developer Intern",
      company: "Elite Softwares, Pune",
      duration: "Feb – Apr 2025",
      icon: Briefcase,
      details: [
        "Engineered the authentication and session management backend using Django, resulting in a 30% reduction in reported login errors.",
        "Designed and implemented interactive JavaScript and CSS frontend features, which directly improved the application's overall user engagement by 20%.",
      ],
    },
    {
      title: "AI/ML & Data Science Intern",
      company: "ELEVATE LABS",
      duration: "May 2025",
      icon: Layers,
      details: [
        "Contributed to the development of AI/ML pipelines by performing data collection, cleaning, and preparation for project-related datasets.",
        "Explored initial concepts in TensorFlow and Tableau to support data visualization efforts."
      ],
    },
    {
      title: "Tech Team Member",
      company: "E-Cell DYPCOEI",
      duration: "Jul 2025 – Present",
      icon: Terminal,
      details: [
        "Provide active web development and technical support for institutional events and initiatives, including the successful hosting of the Smart India Hackathon (SIH)."
      ],
    },
  ],
  education: [
    {
      title: "Bachelor of Engineering - Computer Science",
      school: "Dr. D.Y. Patil College of Engineering & Innovation, SPPU",
      duration: "2023 – Expected 2027",
      icon: GraduationCap,
      details: [
        "Core coursework includes Data Structures & Algorithms, Operating Systems, Database Management Systems, and Object-Oriented Programming.",
        "Consistently applied theoretical knowledge through academic projects and hackathons."
      ],
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      school: "B.P Patil Jr. College of Science, Nashik",
      duration: "2021-2023",
      icon: BookOpen,
      details: [
        "Achieved 86.00% aggregate.",
      ],
    },
    {
      title: "Primary Certificate (CBSC)",
      school: "Kendriya Vidhyalay AFS, Ojhar, Nashik",
      duration: "2012-2021",
      icon: BookOpen,
      details: [
        "Achieved 77.00% aggregate.",
      ],
    },
  ],
  projects: [
    {
      name: "EV Station Finder",
      tech: "Django, JavaScript, OpenChargeMap API",
      description: "Developed a live web application by integrating the OpenChargeMap API to dynamically display over 50 real-time EV charging stations across India. Built a clean, mobile-responsive frontend using HTML/CSS with integrated Google Maps.",
      github: "https://github.com/pranat20/Ev-station-finder",
      demo: "https://ev-station-finder-qb8b.onrender.com/",
    },
    {
      name: "Edumate Exam PLanner",
      tech: "React + Vite, Tailwind CSS, Django + Django REST Framework, SQLite / PostgreSQL",
      description: "Developed a smart study planner that helps students manage subjects, track progress, and stay exam-ready. Built an interactive, mobile-responsive web app that auto-generates personalized study schedules, sends reminders, and provides clear progress insights to improve study consistency.",
      github: "https://github.com/pranat20/Edumate-exam-planner",
      demo: "https://edumate-exam-planner-frontend2.onrender.com/",
    },
    {
      name: "Student Result Management System",
      tech: "HTML, CSS, Bootstrap 5, PHP, MySql, XAMPP",
      description: "Developed a responsive web-based SRMS using PHP, MySQL, HTML, CSS, and Bootstrap to help colleges efficiently manage departments, students, subjects, marks, and results through a clean and user-friendly interface.",
      github: "https://github.com/pranat20/student-result-management-system",
      demo: "https://pranatdeploy.ct.ws/",
    },
    {
      name: "Latest News Portal ",
      tech: "React.js, Axios, React Router, FontAwesome Icons Backend Node.js, Express.js, Mongoose Database MongoDB Atlas API Source NewsData.io API",
      description: "Built a full-stack web application that fetches live news articles using the NewsData.io API. Designed a clean, responsive interface where users can read, like, and save their favorite articles, ensuring a smooth browsing experience across both desktop and mobile devices.",
      github: "https://github.com/pranat20/News-Portal-using-NewsData.io-API",
      demo: "https://news-portal-frontend-chi.vercel.app/",
    },
  ],
  // =================================================================
  // 🚨🚨 2. CONFIG UPDATE: Images are now correctly linked via the imported variables
  // =================================================================
  certificates: [
    { name: "Deloitte Australia Tech Job Simulation", issuer: "Forage", type: "Simulation", date: "2025", link: "#", image: DeloitteCert },
    { name: "Python for Data Science", issuer: "Infosys Springboard", type: "Certification", date: "2025", link: "#", image: PythonCert },
    { name: "Automatic Street Light (Centrado Kit)", issuer: "Infosys Springboard", type: "Course", date: "2025", link: "#", image: CentradoKit },
    { name: "Technocrats-2K25 (PBL Competition)", issuer: "D. Y. Patil College", type: "Achievement", date: "2025", link: "#", image: Technocrats },
    { name: "UI/UX Designer Intern", issuer: "Codec Technologies", type: "Internship", date: "2025", link: "#", image: UIUXCert },
    { name: "Web Developer Intern", issuer: "Elite Softwares", type: "Internship", date: "2025", link: "#", image: WebDevIntern },
    { name: "Illuminate Workshop Organizer", issuer: "E-Cell DYPCOEI (Guided by IIT Bombay)", type: "Leadership", date: "2025", link: "#", image: IlluminateWorkshop },
    { name: "Crafterverse Hackathon Participant", issuer: "PCCOER", type: "Hackathon", date: "2025", link: "#", image: CrafterverseHackathon }
  ],
};

// --- Framer Motion Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      // Stagger children globally for a smoother reveal
      staggerChildren: 0.1 
    } 
  },
};

const cardVariants = {
  offscreen: { y: 50, opacity: 0 }, // Reduced travel distance for faster feel
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.1, // Reduced bounce
      duration: 0.5 // Faster animation
    }
  }
};

const iconButtonVariants = {
  hover: { scale: 1.1, rotate: 5 },
  tap: { scale: 0.9 },
};

// --- Components ---

// Reusable Section Wrapper
const Section = ({ id, title, children }) => (
  <motion.section
    id={id}
    className="min-h-[80vh] py-16 md:py-24 px-4 sm:px-8 lg:px-16"
    initial="hidden"
    // IMPROVEMENT: Use 'amount: 0.05' and 'once: true' for better performance
    whileInView="visible"
    viewport={{ once: true, amount: 0.05 }} 
    variants={sectionVariants}
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-text relative">
      <span className="text-primary">{title}</span>
      <div className="w-24 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
    </h2>
    {children}
  </motion.section>
);

// Hero Section
const Hero = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-background text-text p-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="text-center max-w-4xl flex flex-col items-center"
    >
      {/* Profile Picture */}
      <motion.img
        src={config.info.profilePic}
        alt="Pranat Pagar Profile"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-2xl mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/3B82F6/0F172A?text=PP" }}
      />
      
      {/* Name (Below Pic) - Matched SDE tagline style, slightly bolder */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-2 text-text tracking-wider"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {config.info.name}
      </motion.h2>

      {/* SDE Title (Slightly smaller than name) */}
      <motion.h1
        className="text-lg md:text-xl font-semibold mb-12 text-primary tracking-widest"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        SOFTWARE DEVELOPMENT ENGINEER
      </motion.h1>

      <div className="flex justify-center space-x-6">
        <motion.a
          href="#projects"
          className="px-8 py-3 bg-primary text-background font-semibold rounded-full shadow-2xl hover:bg-secondary transition duration-300 transform hover:-translate-y-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Projects
        </motion.a>
        <motion.a
          href={config.info.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border border-text text-text font-semibold rounded-full hover:bg-text hover:text-background transition duration-300 transform hover:-translate-y-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="inline h-5 w-5 mr-2" /> Resume
        </motion.a>
      </div>
    </motion.div>
  </section>
);

// About Section
const About = () => (
  <Section id="about" title="About Me">
    <div className="max-w-4xl mx-auto p-8 bg-card rounded-xl shadow-2xl border-t-2 border-primary/50">
      <div className="space-y-6 text-lg text-text/80">
        {config.info.about.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </div>
  </Section>
);

// Skills Section
const Skills = () => (
  <Section id="skills" title="Technical Skills">
    <div className="max-w-6xl mx-auto space-y-10">
      {Object.entries(config.skills).map(([category, skillList], categoryIndex) => (
        // IMPROVEMENT: Applied motion directly to the category div for a better effect
        <motion.div 
          key={category} 
          className="bg-card p-6 rounded-xl shadow-xl"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          transition={{ delay: categoryIndex * 0.1 }}
        >
          <h3
            className="text-2xl font-bold mb-4 text-primary border-b border-detail pb-2"
          >
            {category}
          </h3>
          <div className="flex flex-wrap gap-3 mt-4">
            {skillList.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-card text-text text-sm rounded-full font-medium cursor-default transition-all border border-detail"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05, backgroundColor: config.colors.primary, color: config.colors.card }}
                viewport={{ once: true, amount: 0.1 }}
                // Removed redundant delay here, inherited from parent stagger
                transition={{ duration: 0.3 }} 
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

// Reusable Timeline Item Component (Used by Experience and Education)
const TimelineItem = ({ data, index }) => (
    <motion.div
      className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      {/* Empty placeholder for alignment on large screens */}
      <div className="hidden md:block w-[48%]"></div>
      
      {/* Icon Circle - Centered and z-index 20 */}
      <div className="w-10 h-10 bg-primary rounded-full absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20 hidden md:flex">
          {React.createElement(data.icon, { className: 'w-6 h-6 text-background' })}
      </div>
      
      {/* Card - Width is 48% on desktop, pushing content outward */}
      <div 
          className={`w-full md:w-[48%] p-4 rounded-xl shadow-2xl bg-card transition duration-500 hover:bg-secondary 
          ${index % 2 === 0 
              ? 'md:ml-[52%] md:pl-6' // Right side card: pushed to the right
              : 'md:mr-[52%] md:text-right md:pr-6' // Left side card: pushed to the left
          }`}
      >
          <h3 className="text-xl font-bold text-primary">{data.title}</h3>
          <p className="text-text/80 font-medium">{data.company || data.school}</p>
          <p className="text-sm italic mb-2 text-primary/70">{data.duration}</p>
          <ul className={`list-disc space-y-0.5 text-text/80 ${index % 2 === 0 ? 'pl-5' : 'md:list-none md:text-right md:pl-0'}`}>
              {data.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
              ))}
          </ul>
      </div>
    </motion.div>
);

// Experience Section - Timeline
const Experience = () => (
  <Section id="experience" title="Professional Experience">
    <div className="relative min-h-[500px] w-full mx-auto md:px-16">
      {/* Vertical Line - z-index 10 */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-secondary h-full hidden md:block z-10"></div>

      {config.experience.map((exp, index) => (
        <TimelineItem key={index} data={exp} index={index} />
      ))}
    </div>
  </Section>
);

// Education Section - Timeline
const Education = () => (
  <Section id="education" title="Education">
    <div className="relative min-h-[300px] w-full mx-auto md:px-16">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-secondary h-full hidden md:block z-10"></div>

      {config.education.map((edu, index) => (
        <TimelineItem key={index} data={edu} index={index} />
      ))}
    </div>
  </Section>
);

// Project Card Component
const ProjectCard = ({ project, index }) => (
  <motion.div
    className="bg-card p-6 rounded-xl shadow-2xl border-t-4 border-primary/50 flex flex-col h-full"
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.2 }}
    variants={cardVariants}
    // IMPROVEMENT: Removed index delay, relying on section's stagger
    transition={{ delay: 0 }} 
    whileHover={{ scale: 1.03, boxShadow: `0 10px 20px rgba(0, 0, 0, 0.5)` }}
  >
    <h3 className="text-2xl font-bold mb-2 text-primary">{project.name}</h3>
    <p className="text-sm font-light italic mb-4 text-text/70">{project.tech}</p>
    <p className="text-text/90 mb-6 flex-grow">{project.description}</p>
    
    <div className="mt-auto flex space-x-4">
      <motion.a 
        href={project.github} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center text-text hover:text-primary transition-colors"
        variants={iconButtonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <Code className="h-5 w-5 mr-1" /> Code
      </motion.a>
      <motion.a 
        href={project.demo} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center text-text hover:text-primary transition-colors"
        variants={iconButtonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <Link className="h-5 w-5 mr-1" /> Demo
      </motion.a>
    </div>
  </motion.div>
);

// Projects Section
const Projects = () => (
  <Section id="projects" title="Academic Projects">
    {/* IMPROVEMENT: Removed index delay in ProjectCard, using section stagger for smoother loading */}
    <motion.div 
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      // Added explicit stagger children here
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }} 
    >
      {config.projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </motion.div>
  </Section>
);

// Certificates Section with Modal
const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const CertCard = ({ cert, index }) => (
    <motion.div
      className="bg-card p-4 rounded-xl shadow-md cursor-pointer hover:shadow-primary/50 transition duration-300 transform hover:-translate-y-1 border-b-4 border-primary"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      // IMPROVEMENT: Reduced delay for faster UI feel
      transition={{ delay: index * 0.05, duration: 0.4 }} 
      onClick={() => setSelectedCert(cert)}
    >
      <div className="flex items-center space-x-3 mb-2">
        <BookOpen className="h-6 w-6 text-primary" />
        <h3 className="text-lg font-semibold text-text">{cert.name}</h3>
      </div>
      <p className="text-sm text-text/70">Issuer: {cert.issuer}</p>
      <p className="text-xs italic mb-4 text-primary/70">{cert.type}   {cert.date}</p>
      <p className="text-xs font-medium text-text mt-2">Click to View Details</p>
    </motion.div>
  );

  const Modal = ({ cert, onClose }) => (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-card p-6 rounded-xl max-w-lg w-full shadow-2xl border-t-4 border-primary"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.3 }} // Faster modal transition
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <h3 className="text-2xl font-bold mb-2 text-primary">{cert.name}</h3>
        <p className="text-text/80 mb-1">Issued by: <span className="font-semibold">{cert.issuer}</span></p>
        <p className="text-sm italic mb-4 text-primary/70">{cert.type}  {cert.date}</p>
        
        {/* CERTIFICATE IMAGE DISPLAY */}
        <div className="my-4 border-4 border-detail p-1 rounded-lg max-h-96 overflow-y-auto">
            <img 
                src={cert.image} 
                alt={`${cert.name} Certificate`} 
                className="w-full h-auto rounded-sm object-contain"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/D32F2F/FFFFFF?text=Image+Not+Found" }} 
            />
        </div>

        <p className="text-text/90 mb-4 text-sm">
          This credential validates my practical skills and knowledge acquired during the {cert.type.toLowerCase()} program.
        </p>

        <button 
          onClick={onClose} 
          className="mt-6 w-full py-2 bg-secondary text-text rounded-lg hover:bg-secondary/70 transition-colors"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );

  return (
    <Section id="certificates" title="Certificates & Achievements">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {config.certificates.map((cert, index) => (
          <CertCard key={index} cert={cert} index={index} />
        ))}
      </div>
      <AnimatePresence>
        {selectedCert && <Modal cert={selectedCert} onClose={() => setSelectedCert(null)} />}
      </AnimatePresence>
    </Section>
  );
};

// Fixed Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certificates", href: "#certificates" },
  ];

  const NavLink = ({ href, children }) => {
    const handleClick = () => {
      setIsOpen(false); 
    };

    return (
      <a
        href={href}
        onClick={handleClick}
        className="text-text hover:text-primary transition-colors text-lg font-medium p-2 block md:inline"
      >
        {children}
      </a>
    );
  };

  return (
    <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-2xl font-bold text-primary">
            P.P.
          </a>
          
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            {links.map(link => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t border-secondary"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map(link => (
                <NavLink key={link.name} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


// Footer Component
const Footer = () => (
  <footer className="bg-secondary text-text py-8 px-4 sm:px-8 lg:px-16">
    <div className="max-w-7xl mx-auto text-center">
      <h3 className="text-3xl font-bold text-primary mb-4">Let's Connect!</h3>
      <p className="text-text/80 mb-6">I am actively seeking a Summer 2026 SDE/Backend Internship opportunity.</p>

      <div className="flex justify-center space-x-6 mb-8">
        <motion.a 
          href={config.info.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-text hover:text-primary transition-colors"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.742 7 2.434v6.801z"/></svg>
        </motion.a>
        <motion.a 
          href={config.info.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-text hover:text-primary transition-colors"
          whileHover={{ scale: 1.2, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577v-2.01c-3.338.723-4.042-1.609-4.042-1.609-.547-1.385-1.332-1.757-1.332-1.757-1.09-.745.084-.73.084-.73 1.206.084 1.838 1.237 1.838 1.237 1.07 1.837 2.809 1.305 3.493.996.108-.775.419-1.305.762-1.604-2.67-.305-5.474-1.335-5.474-5.932 0-1.31.468-2.383 1.236-3.228-.124-.303-.535-1.523.117-3.172 0 0 1.008-.323 3.302 1.233 2.37-.655 4.888-.655 7.258 0 2.294-1.556 3.302-1.233 3.302-1.233.652 1.649.24 2.869.118 3.172.768.845 1.236 1.918 1.236 3.228 0 4.612-2.808 5.626-5.485 5.922.428.36.816 1.077.816 2.179v3.235c0 .317.218.692.825.577C19.565 21.8 23 17.302 23 12c0-6.627-5.373-12-12-12z"/></svg>
        </motion.a>
        <motion.a 
          href={`mailto:${config.info.email}`}
          className="text-text hover:text-primary transition-colors"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Mail className="w-8 h-8" />
        </motion.a>
      </div>

      <div className="border-t border-background/20 pt-4 mt-4">
        <p className="text-sm text-text/60">
          © Designed & Developed by Pranat Pagar Computer Engineering Student 2023-2027</p>
      </div>
    </div>
  </footer>
);


// --- Main App Component ---
const App = () => (
  <div className="font-sans bg-background min-h-screen text-text">
    <style dangerouslySetInnerHTML={{__html: `
      html {
        scroll-behavior: smooth;
        background-color: ${config.colors.background};
      }
      ::selection {
        background: ${config.colors.primary};
        color: ${config.colors.background};
      }
      /* Custom Scrollbar for a sleek look */
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: ${config.colors.detail};
      }
      ::-webkit-scrollbar-thumb {
        background: ${config.colors.primary};
        border-radius: 4px;
      }
      /* Fix for Framer Motion / Tailwind gradient text clip */
      .bg-clip-text {
        -webkit-background-clip: text;
        background-clip: text;
      }
    `}} />
    
    <Navbar />
    <main>
      <Hero />
      <div className="w-full h-px bg-primary opacity-20"></div> 
      <About />
      <div className="w-full h-px bg-primary opacity-20"></div>
      <Experience />
      <div className="w-full h-px bg-primary opacity-20"></div>
      <Education />
      <div className="w-full h-px bg-primary opacity-20"></div>
      <Projects />
      <div className="w-full h-px bg-primary opacity-20"></div>
      <Skills />
      <div className="w-full h-px bg-primary opacity-20"></div>
      <Certificates />
    </main>
    <Footer />
  </div>
);

export default App;