import './globals.css';
import Navbar from '../components/Nav/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';

export const metadata = {
  title: 'React Gym',
  description: 'A gym is a large room, usually containing special equipment, where people go to do physical exercise and get fit. The gym has exercise bikes and running machines. ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <title>React Gym</title>
    </head>
      <body>
      <Navbar />
      <Hero />
      <About />
         {children}
      </body>
    </html>
  );
}
