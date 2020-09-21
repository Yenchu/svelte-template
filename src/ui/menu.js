import { authPages, mainPages, settingsPages } from './pages.js';

export const mainMenu = [
  { to: mainPages.home, text: 'Home' },
  { to: mainPages.about, text: 'About' },
  { to: mainPages.settings, text: 'Settings' },
  { to: mainPages.blog, text: 'Blog' }
];

export const authMenu = [
  { to: authPages.login, text: 'Sign in' },
  { to: authPages.register, text: 'Sign up' }
];

export const settingsMenu = [
  { to: settingsPages.profile, text: "Profile" },
  { to: settingsPages.security, text: "Security" }
];
