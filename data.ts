import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi, AiFillCheckCircle } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: AiFillCheckCircle,
    title: "Tech Lead Backend Development",
    about:
      `
      I am a technology leader and provide guidance on the use of libraries in the project we are currently working on to enhance<br/> 
      the capabilities of personnel in the team.
      <br/><br/>
      
      Supervise, control, and improve code quality, code structure, design/modify database structures for maximum efficiency<br/> in software operation. 
      <br/><br/>

      Monitor, troubleshoot, and identify errors (bugs) occurring in both the development and production bases, and address them accordingly.
      <br/><br/>

      
      Ready and willing to fulfill duties both during and outside of regular working hours, wholeheartedly prepared to perform tasks,<br/>
       and serve as a consultant to colleagues effectively, except when engaged in prior commitments, unreachable, inconvenient,<br/> or located in a different province, etc.
      <br/><br/>
      `,
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      `
      Handling databases, servers, APIs, Docker, and version control using popular frameworks and having over 6 years of<br/>
      experience development.
      `,
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      `
      I can develop robust  Restful API using <b>NestJS API</b>  & <b>Node API</b> 
      <br/><br/>

      I can design the code structure, architecture, and data flow for the team, as well as create various common helpers,<br/>
      allowing the team to continue development without compromising the timeline.
      `,
  }
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "97",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "97",
  },
  {
    Icon: BsCircleFill,
    name: "NodeJS Framework",
    level: "97",
  },
  {
    Icon: BsCircleFill,
    name: "NestJS Framework",
    level: "97",
  },
  {
    Icon: BsCircleFill,
    name: "Golang",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "PostgreSQL",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "MySQL",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "MongoDB",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Elasticsearch",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "TypeORM",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "PrismaORM",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "RabbitMQ",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Kafka Message Broker",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Redis",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "WebSocket",
    level: "90"
  }
  {
    Icon: BsCircleFill,
    name: "Aws S3 Object-Storage",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Min.io Object-Storage",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Microservice Pattern",
    level: "95",
  }
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "ClickUp Task Management",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Lark Management",
    level: "85",
  }
  {
    Icon: BsCircleFill,
    name: "JIRA Atlassian",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "GitLab / GitHub",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "Slack / Microsoft Team / Zoom / Google Meet",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "Nexus Repository",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Jenkins",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Grafana K6",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Docker, Compose, Network",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "SonarQube",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "JAEGER Tracing",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Firebase",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Stripe API",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Draw.io",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "ER Diagram",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Software Architecture",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Flowchart Diagram",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Activity Diagram",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Sequence Diagram",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Class Diagram",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Software Diagram",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "System Design (DMZ)",
    level: "90",
  }
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
