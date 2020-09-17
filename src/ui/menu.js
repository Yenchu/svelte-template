import { pages } from './pages.js';

export const mainMenu = [
  { to: pages.home, text: 'Home' },
  { to: pages.about, text: 'About' },
  { to: pages.blog, text: 'Blog' }
];

export const authMenu = [
  { to: pages.login, text: 'Sign in' },
  { to: pages.register, text: 'Sign up' }
];