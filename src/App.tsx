import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { HowItWorksPage } from './components/pages/HowItWorksPage';
import { MatchQuizPage } from './components/pages/MatchQuizPage';
import { OutdoorVolunteeringPage } from './components/pages/OutdoorVolunteeringPage';
import { FosterStoriesPage } from './components/pages/FosterStoriesPage';
import { ApplyPage } from './components/pages/ApplyPage';
import { EligibilityModal } from './components/EligibilityModal';
import { ShelterDirectoryModal } from './components/ShelterDirectoryModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [eligibilityOpen, setEligibilityOpen] = useState(false);
  const [sheltersOpen, setSheltersOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [prefilledPreference, setPrefilledPreference] = useState<string | undefined>(undefined);
  const [prefilledShelter, setPrefilledShelter] = useState<string | undefined>(undefined);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'how-it-works', 'quiz', 'outdoor', 'stories', 'apply'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApplyWithMatch = (matchTitle: string) => {
    setPrefilledPreference(matchTitle);
    navigateTo('apply');
  };

  const handleApplyForShelter = (shelterName: string) => {
    setPrefilledShelter(shelterName);
    navigateTo('apply');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F2] text-[#333333]">
      {/* Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={navigateTo}
        onOpenEligibility={() => setEligibilityOpen(true)}
        onOpenShelters={() => setSheltersOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenEligibility={() => setEligibilityOpen(true)}
            onOpenShelters={() => setSheltersOpen(true)}
          />
        )}

        {activePage === 'how-it-works' && (
          <HowItWorksPage
            onNavigate={navigateTo}
            onOpenContact={() => setContactOpen(true)}
          />
        )}

        {activePage === 'quiz' && (
          <MatchQuizPage
            onNavigate={navigateTo}
            onApplyWithMatch={handleApplyWithMatch}
          />
        )}

        {activePage === 'outdoor' && (
          <OutdoorVolunteeringPage
            onNavigate={navigateTo}
            onOpenContact={() => setContactOpen(true)}
          />
        )}

        {activePage === 'stories' && (
          <FosterStoriesPage
            onNavigate={navigateTo}
            onOpenContact={() => setContactOpen(true)}
          />
        )}

        {activePage === 'apply' && (
          <ApplyPage
            onNavigate={navigateTo}
            prefilledPreference={prefilledPreference}
            prefilledShelter={prefilledShelter}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenShelters={() => setSheltersOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Interactive Modals */}
      <EligibilityModal
        isOpen={eligibilityOpen}
        onClose={() => setEligibilityOpen(false)}
        onNavigate={navigateTo}
      />

      <ShelterDirectoryModal
        isOpen={sheltersOpen}
        onClose={() => setSheltersOpen(false)}
        onApplyForShelter={handleApplyForShelter}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
