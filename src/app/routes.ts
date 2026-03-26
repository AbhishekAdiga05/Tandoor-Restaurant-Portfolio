import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import Root from './Root';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'menu', Component: Menu },
      { path: 'reviews', Component: Reviews },
      { path: 'contact', Component: Contact },
    ],
  },
]);