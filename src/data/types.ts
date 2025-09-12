export interface PersonalInfo {
    name: string;
    title: string;
    bio: string[];
    profileImage: string;
    email: string;
    location: string;
}

export interface SocialLinks {
    github?: string;
    linkedin?: string;
}

export interface ResumeInfo {
    downloadUrl: string;
    viewWorkUrl: string;
}

export interface HeroContent {
    subtitle: string;
    cta: {
        primary: string;
        secondary: string;
    };
}

export interface ExperienceItem {
    id: string;
    company: string;
    position: string;
    duration: string;
    location: string;
    description: string[];
    technologies: string[];
    logo?: string;
    companyUrl?: string;
}

export interface ExperienceContent {
    title: string;
    subtitle: string;
    items: ExperienceItem[];
}

export interface Skill {
    name: string;
    level: number; // 1-100
    category: string;
    icon?: string;
}

export interface SkillCategory {
    name: string;
    skills: Skill[];
    color: string; // For theming each category
}

export interface SkillsContent {
    title: string;
    subtitle: string;
    categories: SkillCategory[];
}

export interface ContentData {
    personal: PersonalInfo;
    social: SocialLinks;
    resume: ResumeInfo;
    hero: HeroContent;
    experience: ExperienceContent;
    skills: SkillsContent;
}