import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { CraftBento } from './components/CraftBento';
import { WorkflowSection } from './components/WorkflowSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { BookingModal } from './components/BookingModal';
import { FadeInUp } from './components/FadeInUp';
import { SmoothScrollProvider, useSmoothScroll } from './context/SmoothScrollContext';
import { ProjectItem } from './data/portfolioData';

function PortfolioContent() {
  const { scrollTo, stop, start } = useSmoothScroll();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTopic, setBookingTopic] = useState('Video Editing Project');

  // Pause Lenis background scroll while modals are open
  useEffect(() => {
    if (selectedProject || isBookingOpen) {
      stop();
    } else {
      start();
    }
  }, [selectedProject, isBookingOpen, stop, start]);

  const handleOpenBooking = (topic = 'Video Editing Consultation') => {
    setBookingTopic(topic);
    setIsBookingOpen(true);
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      scrollTo(contactElem, -30);
    } else {
      handleOpenBooking('New Project Collaboration');
    }
  };

  const scrollToProjects = () => {
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      scrollTo(projectsElem, -30);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-neutral-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Navigation Header */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Page Flow with subtle entrance animations */}
      <main className="flex-1">
        {/* Hero Section */}
        <FadeInUp duration={750} delay={50}>
          <Hero onExploreProjects={scrollToProjects} />
        </FadeInUp>

        {/* Bio & Farhan Portrait Section */}
        <FadeInUp duration={700}>
          <AboutSection onSendMessage={() => handleOpenBooking('Direct Collaboration Message')} />
        </FadeInUp>

        {/* Featured Projects (Short-Form & Long-Form Infinite Tickers) */}
        <FadeInUp duration={700}>
          <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />
        </FadeInUp>

        {/* Craft & Technical Bento (Hand Notes 01 & 02) */}
        <FadeInUp duration={700}>
          <CraftBento />
        </FadeInUp>

        {/* Workflow & Stress-Free Collaborative Revision */}
        <FadeInUp duration={650}>
          <WorkflowSection />
        </FadeInUp>

        {/* Questions & FAQ Accordion */}
        <FadeInUp duration={650}>
          <FaqSection onBookCall={() => handleOpenBooking('Strategy & Discovery Call')} />
        </FadeInUp>

        {/* Contact Banner & Scope Submitter */}
        <FadeInUp duration={650}>
          <ContactSection />
        </FadeInUp>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Video Player Modal */}
      <VideoPlayerModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(title) => {
          setSelectedProject(null);
          handleOpenBooking(`Inquiry about edit style: ${title}`);
        }}
      />

      {/* Interactive Booking & Strategy Call Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialTopic={bookingTopic}
      />
    </div>
  );
}

export default function App() {
  return (
    <SmoothScrollProvider>
      <PortfolioContent />
    </SmoothScrollProvider>
  );
}
