import Navbar from '@/components/Navbar';
import Footer from '@/components/SocialFooter';
import Link from 'next/link';
import {Button} from '@/components/Button';

export default function Home() {
  return (
    <main className="w-screen h-screen bg-home-bg bg-cover bg-center">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full">
        <div className="font-gotham font-light text-2xl">THIS IS</div>
        <div className="tracking-widest text-7xl font-gotham font-medium mt-4 mb-16">SAORSSA</div>
        <Button variant="border_dark" size="sm">Click me to explore</Button>
      </div>
      <Footer variant='dark' />
    </main>
  );
}