import { Outlet } from 'react-router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function Root() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] font-sans selection:bg-[#FF6A00]/30 selection:text-[#F5F5F5]">
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}