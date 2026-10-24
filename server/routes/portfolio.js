import express from 'express';
import {
  getProfile,
  getExperience,
  getEducation,
  getProjects,
  getSkills,
  getProjectByName,
  searchProjects,
  getSkillsByCategory
} from '../services/portfolioService.js';

const router = express.Router();

router.get('/profile', (req, res) => {
  try {
    const profile = getProfile();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load profile' });
  }
});

router.get('/experience', (req, res) => {
  try {
    const experience = getExperience();
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load experience' });
  }
});

router.get('/education', (req, res) => {
  try {
    const education = getEducation();
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load education' });
  }
});

router.get('/projects', (req, res) => {
  try {
    const projects = getProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load projects' });
  }
});

router.get('/projects/search', (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ error: 'Query parameter "q" is required' });
    }
    const results = searchProjects(q);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search projects' });
  }
});

router.get('/projects/:name', (req, res) => {
  try {
    const { name } = req.params;
    const project = getProjectByName(name);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load project' });
  }
});

router.get('/skills', (req, res) => {
  try {
    const skills = getSkills();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load skills' });
  }
});

router.get('/skills/category/:category', (req, res) => {
  try {
    const { category } = req.params;
    const skills = getSkillsByCategory(category);
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load skills by category' });
  }
});

export default router;
