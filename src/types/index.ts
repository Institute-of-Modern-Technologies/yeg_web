export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  subject: string;
  level: string;
  duration: string;
  image?: string; // Optional image path
}