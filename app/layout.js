import Navbar from '@/components/Nav/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import './globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar />
      <Hero />
      <About />
        </body>
    </html>
  );
}
