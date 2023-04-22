import { Inter } from 'next/font/google';
import Navbar from '@/components/Nav/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import { Footer } from '@/components/Footer/Footer';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
