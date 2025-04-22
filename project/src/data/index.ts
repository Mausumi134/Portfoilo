import { 
  Project, 
  Certificate, 
  Skill, 
  Achievement, 
  EducationItem, 
  NavItem,
  SocialLink
} from '../types';

import deanList from "../assets/dean-list.jpg"
import contributionImg from "../assets/certificate masumi.jpg"
import geeksforgeeks from "../assets/geeksforgeeks.jpg"
import leetcode from "../assets/leetcode.jpg"
import mercerMettal from '../assets/mercerMettal.png'
import hackerRank from "../assets/hackerRank.jpg"
import wevdev from "../assets/webdevCertificate.png"
import resume from "../assets/resume.pdf"
import dineserve from "../assets/dineserve.png"
import rentUp from "../assets/rentUp.png"
import sproud from "../assets/sprout.jpg"

export const navItems: NavItem[] = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Achievements', href: 'achievements' },
  { label: 'Education', href: 'education' },
  { label: 'Blog', href: 'blog' },
  { label: 'Contact', href: 'contact' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Rent UP',
    description: 'A full-stack rental PG platform with secure booking system and advanced filters for location, budget, and amenities. Built real-time search and filtering for personalized rental PG bookings.',
    technologies: ['MERN Stack', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Responsive Web Design'],
    image: rentUp,
    githubLink: 'https://github.com/Mausumi134/RentUP',
    period: 'Sep 2024 – Nov 2024'
  },
  {
    id: 2,
    title: 'DineReserve',
    description: 'Restaurant Reservation System with real-time menu browsing, pricing, and ordering for customers. Designed an admin dashboard for efficient reservation and order management.',
    technologies: ['React', 'JavaScript', 'MongoDB', 'Node.js', 'Express.js'],
    image: dineserve,
    githubLink: 'https://github.com/Mausumi134/Restaurant-Food-reservation-System',
    period: 'Feb 2024 - May 2024'
  },
  {
    id: 3,
    title: 'Sprout-Pregnancy-Helper',
    description: 'A Pregnancy Helper website with features for tracking food, exercise, sleep, mental health, and vaccinations. Created a postpartum care resource platform and secured 3rd place in the Mercer Mettle Hackathon.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    image: sproud,
    githubLink: 'https://github.com/Mausumi134/Sprout-Pregnancy-Helper',
    period: 'Jan 2024 - Mar 2024'
  }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Certificate of Achievement',
    issuer: 'Mercer Mettl',
    date: 'October 2024',
    link: '#'
  },
  {
    id: 2,
    title: 'Full-Stack Web Developer',
    issuer: 'LinkedIn',
    date: 'January 2023',
    link: 'https://www.linkedin.com/learning/certificates/49cc2e3c877d7b5ae4477e1fda0d105c16b3cee2fdda4b1204d6aaef02111bf1'
  },
  {
    id: 3,
    title: 'Software Engineer Intern Certificate',
    issuer: 'HackerRank',
    date: '2023',
    link: 'https://www.hackerrank.com/certificates/738a85a7b3a0'
  }
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['C++', 'Java', 'JavaScript', 'C', 'PHP']
  },
  {
    category: 'Technologies/Frameworks',
    items: ['HTML', 'CSS', 'React JS', 'Node JS', 'Git', 'GitHub']
  },
  {
    category: 'Core Skills',
    items: ['Data Structures and Algorithms', 'Problem-Solving', 'Project Management', 'Adaptability']
  }
];

export const achievements: Achievement[] = [
  
  {
    id: 1,
    title: 'LeetCode Expert',
    description: 'Solved 600+ problems on LeetCode with a 1796 rating',
    image: leetcode,
    link:"https://leetcode.com/u/Mausumighadei/"
  },
  {
    id: 2,
    title: "Dean's Top 10%",
    description: "One among Dean's top 10% students at University",
    image:deanList,
    // link:
  },
  {
    id: 3,
    title: 'certified by HackRank',
    description: "got certified by HackRank as Software Engineer Intern",
    image:hackerRank,
    link:"https://www.hackerrank.com/certificates/738a85a7b3a0"
  },
  {
    id: 4,
    title: 'Top 50 Teams',
    description: 'Secured Top 50 Teams in the VISIONARY Hackathon',
    image: mercerMettal
  },
  {
    id: 5,
    title: 'Certified by Linkedin',
    description: 'Completed LinkedIn’s Full Stack Development certification, showcasing expertise in building dynamic web applications.',
    image:wevdev,
    link:"https://www.linkedin.com/learning/certificates/49cc2e3c877d7b5ae4477e1fda0d105c16b3cee2fdda4b1204d6aaef02111bf1",
  },
  {
    id: 6,
    title: 'Open Source Contributor',
    description: 'Contributed to Hacktoberfest as an open source contributor',
    image:contributionImg,
    link:"https://www.holopin.io/@mausumi134#badges"
  }
];

export const education: EducationItem[] = [
  {
    institution: 'Lovely Professional University',
    degree: 'Computer Science and Engineering — CGPA: 8.96',
    grade: '8.96 CGPA',
    period: '2022 – 2026',
    location: 'Jalandhar, Punjab'
  },
  {
    institution: 'Vyasanagar Higher Secondary School',
    degree: '12th with Science',
    grade: '80.33%',
    period: '2018 – 2019',
    location: 'Jajpur, Odisha'
  },
  {
    institution: 'Saraswati Sishu Vidya Mandir',
    degree: '10th with Science',
    grade: '91.33%',
    period: '2016 – 2017',
    location: 'Jajpur, Odisha'
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    url: 'mailto:mausumighadei@gmail.com',
    icon: 'Mail'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/mausumi-ghadei-006466229',
    icon: 'Linkedin'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Mausumi134/',
    icon: 'Github'
  },
  {
    name: 'Phone',
    url: 'tel:+916372606980',
    icon: 'Phone'
  }
  
];

export const personalInfo = {
  name: 'Mausumi Ghadei',
  title: 'Software Developer',
  location: 'Jajpur, Odisha 755019',
  collegeLocation : 'Phagwara Punjab India 144411',
  email: 'mausumighadei@gmail.com',
  phone: '+91-63726069800',
  about: `I'm a Computer Science and Engineering student at Lovely Professional University with a passion for full-stack development and problem-solving. My journey in tech has been driven by a curiosity to build innovative solutions and contribute to the developer community.
I have expertise in MERN stack development, along with a strong foundation in data structures and algorithms. With hands-on experience in building full-stack applications and active participation in hackathons, I've developed skills in creating efficient, user-centered solutions.
I'm constantly improving my skills through competitive programming platforms like LeetCode, CodeChef, and GeeksforGeeks while exploring new technologies and frameworks.`,
  resumeLink: resume
};