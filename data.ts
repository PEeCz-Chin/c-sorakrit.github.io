import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  { 
    name: "Samitivej Chonburi",
    description: "Samitivej Chonburi Hospital (Web Application, Web Design, Queue System).",
    image_path: "/images/Samitivej.jpg",
    deployed_url: "https://samitivejchonburi.com",
    category: ["website"],
    framework: ["codeigniter", "nodejs"],
    language: ["javascript", "postgresql", "php"],
    key_techs: ["socket io"],
  },
  { 
    name: "Sport Galaxy",
    description: "It's a website for buying sports products from different countries.",
    image_path: "/images/sportgalaxy.png",
    deployed_url: "#",
    category: ["website"],
    framework: ["django"],
    language: ["python", "mongo"],
    key_techs: ["redis", "aws s3"],
  },
  { 
    name: "Bangkok Hospital Rayong",
    description: "It's a website for a hospital in Bangkok, Rayong.",
    image_path: "/images/rp.jpg",
    deployed_url: "https://www.bangkokhospitalrayong.com/",
    category: ["website"],
    framework: ["nodejs"],
    language: ["javascript", "php", "postgresql"],
    key_techs: [],
  },
  { 
    name: "DDIY",
    description: "Web application for the online home management system. ",
    image_path: "/images/ddiy.png",
    deployed_url: "https://dd-iy.com",
    category: ["website"],
    framework: ["codeigniter", "nodejs"],
    language: ["typescript", "mongo"],
    key_techs: ["aws s3", "stripe api", "jenkins"],
  },
  { 
    name: "Queue System of Phramongkutklao Hospital",
    description: "Manage Customize Queue System on site Medical Record Department, Phramongkutklao Hospital.",
    image_path: "/images/pmk.jpg",
    deployed_url: "#",
    category: ["application"],
    framework: ["codeigniter", "nodejs"],
    language: ["php", "javascript", "postgresql"],
    key_techs: ["socket io"],
  },
  { 
    name: "Queue System of Thonburi Bamrung Muang Hospital",
    description: "Checkup Department, Thonburi Bamrung Muang Hospital (Website).",
    image_path: "/images/thgbrm.jpg",
    deployed_url: "#",
    category: ["application"],
    framework: ["codeigniter", "nodejs"],
    language: ["php", "javascript", "postgresql"],
    key_techs: ["socket io"],
  },
  { 
    name: "Queue System of Institute of Dermatology",
    description: "Checkup Department and waiting queue system for treatment.",
    image_path: "/images/inderm.png",
    deployed_url: "#",
    category: ["application"],
    framework: ["codeigniter", "nodejs"],
    language: ["php", "javascript", "postgresql"],
    key_techs: ["socket io"],
  },
  { 
    name: "IoT control devices",
    description: "IoT Tuya Smart control and kaiterras devices of LPN Smart Room (LUMPINI CONDOMINIUM)",
    image_path: "/images/lpn-3.png",
    deployed_url: "#",
    category: ["application"],
    framework: ["nestjs"],
    language: ["typescript", "postgresql"],
    key_techs: ["aws s3", "mqtt", "wulian api", "docker", "redis", "jenkins"],
  },
  { 
    name: "Data Collection for Sports Authority of Thailand",
    description: "Data Storage System for Youth Athletes and Staffs of the Football Association of Thailand.",
    image_path: "/images/fa.png",
    deployed_url: "#",
    category: ["website"],
    framework: ["nestjs"],
    language: ["typescript", "postgresql"],
    key_techs: ["minio", "docker", "aws sqs", "jenkins"],
  },
  { 
    name: "Academy",
    description: "Registration system for Football Association.",
    image_path: "/images/fa.png",
    deployed_url: "#",
    category: ["website"],
    framework: ["nestjs"],
    language: ["typescript", "mongo"],
    key_techs: ["minio", "docker", "aws sqs", "jenkins"],
  },
  { 
    name: "Platform Data Management",
    description: "Data Management System of Football.",
    image_path: "/images/fa.png",
    deployed_url: "#",
    category: ["website"],
    framework: ["nestjs"],
    language: ["typescript", "postgresql"],
    key_techs: ["minio", "docker", "aws sqs", "jenkins"],
  },
  { 
    name: "Online Learning system for Football Association",
    description: "Online Learning System, Examination Announcements, and Interactive Videos.",
    image_path: "/images/fa.png",
    deployed_url: "#",
    category: ["website"],
    framework: ["nestjs"],
    language: ["typescript", "postgresql"],
    key_techs: ["minio", "docker", "aws sqs", "jenkins", "socket io"],
  },
  { 
    name: "OBCL",
    description: "Power and Communication Cable Management System",
    image_path: "/images/DA-Name.png",
    deployed_url: "#",
    category: ["website"],
    framework: ["nestjs"],
    language: ["typescript", "postgresql"],
    key_techs: ["minio", "docker", "jenkins", "apache kafka"],
  },
  { 
    name: "Tookdee Website Analytics",
    description: "A website for capturing data from cameras for analytics and verifying payment queue entries at the cashier.",
    image_path: "/images/td.png",
    deployed_url: "#",
    category: ["website"],
    framework: ["nestjs"],
    language: ["typescript", "postgresql"],
    key_techs: ["minio", "docker", "jenkins"],
  },
  { 
    name: "Intensive Voice",
    description: "A website for converting speech into text for analytics and compliance with legal restrictions on prohibited words.",
    image_path: "/images/DA-Name.png",
    deployed_url: "#",
    category: ["website"],
    framework: ["nestjs", "flask"],
    language: ["typescript", "postgresql", "python"],
    key_techs: ["minio", "docker", "jenkins"],
  },
  { 
    name: "People Counting",
    description: "A website for capturing data from cameras to conduct analytics for a leading shopping mall.",
    image_path: "/images/DA-Name.png",
    deployed_url: "#",
    category: ["website"],
    framework: ["nestjs"],
    language: ["typescript", "postgresql"],
    key_techs: ["minio", "docker", "jenkins", "bull-queue", "redis"],
  },
];
