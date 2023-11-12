import { IconType } from "react-icons";
export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  category: Category[];
  framework: Frameworks[];
  language: Languages[];
  key_techs: Techs[];
}

export type Category = "website" | "application";
export type Frameworks = "nestjs" | "nodejs" | "django" | "laravel" | "codeigniter" | "flask"
export type Languages = "javascript" | "typescript" | "php" | "python" | "postgresql" | "mongo" | "mysql"
export type Techs = "apache kafka" | "bull-queue" | "aws sqs" | "redis" | "jenkins" | "docker" | "minio" | "aws s3" | "socket io" | "stripe api" | "mqtt" | "wulian api"
