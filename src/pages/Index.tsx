import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import MissionSection from '@/components/sections/MissionSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import StatsSection from '@/components/sections/StatsSection';
import GallerySection from '@/components/sections/GallerySection';
import VideoSection from '@/components/sections/VideoSection';
import UpcomingSection from '@/components/sections/UpcomingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PressSection from '@/components/sections/PressSection';
import SponsorshipSection from '@/components/sections/SponsorshipSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section with storytelling */}
        <AboutSection />
        
        {/* Mission & Values */}
        <MissionSection />
        
        {/* Championships & Awards */}
        <div id="achievements">
          <AchievementsSection />
        </div>
        
        {/* Player Stats & Details */}
        <div id="stats">
          <StatsSection />
        </div>
        
        {/* Photo Gallery */}
        <div id="gallery">
          <GallerySection />
        </div>
        
        {/* Video Highlights */}
        <VideoSection />
        
        {/* Upcoming Matches */}
        <UpcomingSection />
        
        {/* Testimonials */}
        <TestimonialsSection />
        
        {/* Press & Media */}
        <PressSection />
        
        {/* Support & Sponsorship */}
        <SponsorshipSection />
        
        {/* Contact & Booking */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
