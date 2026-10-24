import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read portfolio data from the frontend
let portfolioData = null;

function loadPortfolioData() {
  try {
    const portfolioPath = join(__dirname, '../../src/data/portfolio.ts');
    const fileContent = readFileSync(portfolioPath, 'utf-8');

    // Parse the TypeScript export - improved extraction
    const exports = {};

    // Extract profile
    const profileMatch = fileContent.match(/export const profile = \{([\s\S]*?)\n\};/);
    if (profileMatch) {
      exports.profile = parseObject(profileMatch[1]);
    }

    // Extract experience
    const experienceMatch = fileContent.match(/export const experience: Experience\[\] = \[([\s\S]*?)\n\];/);
    if (experienceMatch) {
      exports.experience = parseArray(experienceMatch[1]);
    }

    // Extract education from profile
    const educationMatch = fileContent.match(/education: \[([\s\S]*?)\],/);
    if (educationMatch) {
      exports.education = parseArray(educationMatch[1]);
    }

    // Extract projects
    const projectsMatch = fileContent.match(/export const projects: Project\[\] = \[([\s\S]*?)\n\];/);
    if (projectsMatch) {
      exports.projects = parseArray(projectsMatch[1]);
    }

    // Extract skills
    const skillsMatch = fileContent.match(/export const skills: Skill\[\] = \[([\s\S]*?)\n\];/);
    if (skillsMatch) {
      exports.skills = parseArray(skillsMatch[1]);
    }

    portfolioData = exports;
    return exports;
  } catch (error) {
    console.error('Error loading portfolio data:', error);
    return null;
  }
}

function parseObject(str) {
  const obj = {};
  // Handle key-value pairs with various value types
  const pairs = str.match(/(\w+):\s*([^,\n]+)/g);
  if (pairs) {
    pairs.forEach(pair => {
      const colonIndex = pair.indexOf(':');
      const key = pair.substring(0, colonIndex).trim();
      let value = pair.substring(colonIndex + 1).trim();

      // Remove trailing comma
      if (value.endsWith(',')) {
        value = value.slice(0, -1);
      }

      // Parse different value types
      if (value.startsWith("'") || value.startsWith('"') || value.startsWith('`')) {
        obj[key] = value.slice(1, -1);
      } else if (value === 'true' || value === 'false') {
        obj[key] = value === 'true';
      } else if (value === 'null' || value === 'undefined') {
        obj[key] = null;
      } else if (value.startsWith('[')) {
        obj[key] = parseArray(value);
      } else if (!isNaN(Number(value))) {
        obj[key] = Number(value);
      } else {
        obj[key] = value;
      }
    });
  }
  return obj;
}

function parseArray(str) {
  const items = [];
  // Remove outer brackets
  const content = str.trim().replace(/^\[|\]$/g, '');

  // Simple parsing for object arrays
  const objects = content.match(/\{[^}]+\}/g);
  if (objects) {
    objects.forEach(objStr => {
      items.push(parseObject(objStr));
    });
  } else {
    // Handle simple string arrays
    const strings = content.match(/['"`]([^'"`]*)['"`]/g);
    if (strings) {
      strings.forEach(s => items.push(s.slice(1, -1)));
    }
  }

  return items;
}

export function getProfile() {
  if (!portfolioData) loadPortfolioData();
  return portfolioData?.profile;
}

export function getExperience() {
  if (!portfolioData) loadPortfolioData();
  return portfolioData?.experience || [];
}

export function getEducation() {
  if (!portfolioData) loadPortfolioData();
  return portfolioData?.education || [];
}

export function getProjects() {
  if (!portfolioData) loadPortfolioData();
  return portfolioData?.projects || [];
}

export function getProjectByName(name) {
  const projects = getProjects();
  return projects.find(p => p.name.toLowerCase().includes(name.toLowerCase()));
}

export function getSkills() {
  if (!portfolioData) loadPortfolioData();
  return portfolioData?.skills || [];
}

export function getSkillsByCategory(category) {
  const skills = getSkills();
  return skills.filter(s => s.category === category);
}

export function searchProjects(query) {
  const projects = getProjects();
  const q = query.toLowerCase();
  return projects.filter(p => 
    p.name.toLowerCase().includes(q) ||
    p.description?.toLowerCase().includes(q) ||
    p.technologies?.some(t => t.toLowerCase().includes(q))
  );
}

export function getPortfolioContext() {
  if (!portfolioData) loadPortfolioData();
  return {
    profile: getProfile(),
    experience: getExperience(),
    education: getEducation(),
    projects: getProjects(),
    skills: getSkills()
  };
}
