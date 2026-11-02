import React, { useState } from 'react';
import { Menu, X, Sparkles, HeartHandshake, Compass, FileText, CheckCircle, Home, Calendar } from 'lucide-react';
import { PageId } from '../types';

interface Props {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenEligibility: () => void;
  onOpenShelters: () => void;
}

export const Navbar: React.FC<Props> = ({
  activePage,
  onNavigate,
  onOpenEligibility,
  onOpenShelters,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Urgent Shelter Status Bar */}
      <div className="bg-[#3F6341] text-[#FFF9F2] text-xs py-2 px-4 border-b border-[#355337]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#F4A261] shrink-0" />
            <span className="truncate">
              <strong>Adelaide Shelter Alert:</strong> High kennel capacity across Wingfield & O’Halloran Hill. 48-hour weekend respite fosters needed.
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0 text-[11px] font-semibold">
            <button
              onClick={onOpenEligibility}
              className="underline hover:text-[#F4A261] transition-colors"
            >
              Check My Eligibility
            </button>
            <span className="text-stone-400" aria-hidden="true">·</span>
            <button
              onClick={onOpenShelters}
              className="hidden sm:inline-block underline hover:text-[#F4A261] transition-colors"
            >
              Shelter Directory
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Navigation conforming to 3-zone contract */}
      <header className="sticky top-0 z-40 bg-[#FFF9F2]/95 backdrop-blur-md border-b border-stone-200/80 transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element in display face) */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#333333] hover:text-[#5E8B60] transition-colors whitespace-nowrap shrink-0 font-display flex items-center gap-2"
          >
            <span className="text-[#5E8B60]">Pets & Protect</span>
            <span className="text-[#F4A261]">SA</span>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700" aria-label="Main Navigation">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-[#5E8B60] transition-colors whitespace-nowrap shrink-0 py-1 ${
                activePage === 'home' ? 'text-[#5E8B60] font-bold border-b-2 border-[#5E8B60]' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className={`hover:text-[#5E8B60] transition-colors whitespace-nowrap shrink-0 py-1 ${
                activePage === 'how-it-works' ? 'text-[#5E8B60] font-bold border-b-2 border-[#5E8B60]' : ''
              }`}
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('quiz')}
              className={`hover:text-[#5E8B60] transition-colors whitespace-nowrap shrink-0 py-1 ${
                activePage === 'quiz' ? 'text-[#5E8B60] font-bold border-b-2 border-[#5E8B60]' : ''
              }`}
            >
              Match Quiz
            </button>
            <button
              onClick={() => handleNavClick('outdoor')}
              className={`hover:text-[#5E8B60] transition-colors whitespace-nowrap shrink-0 py-1 ${
                activePage === 'outdoor' ? 'text-[#5E8B60] font-bold border-b-2 border-[#5E8B60]' : ''
              }`}
            >
              Outdoor & Volunteering
            </button>
            <button
              onClick={() => handleNavClick('stories')}
              className={`hover:text-[#5E8B60] transition-colors whitespace-nowrap shrink-0 py-1 ${
                activePage === 'stories' ? 'text-[#5E8B60] font-bold border-b-2 border-[#5E8B60]' : ''
              }`}
            >
              Stories & Reviews
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('apply')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#5E8B60] hover:bg-[#3F6341] rounded-xl shadow-xs transition-all whitespace-nowrap shrink-0"
            >
              <HeartHandshake className="w-4 h-4" />
              Apply to Foster
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-200/50"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FFF9F2] border-b border-stone-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-4 duration-150">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                activePage === 'home' ? 'bg-[#5E8B60]/10 text-[#5E8B60]' : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                activePage === 'how-it-works' ? 'bg-[#5E8B60]/10 text-[#5E8B60]' : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('quiz')}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                activePage === 'quiz' ? 'bg-[#5E8B60]/10 text-[#5E8B60]' : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              <span>60-Sec Match Quiz</span>
              <span className="text-[11px] font-bold text-[#F4A261] bg-[#F4A261]/10 px-2 py-0.5 rounded">Quick</span>
            </button>
            <button
              onClick={() => handleNavClick('outdoor')}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                activePage === 'outdoor' ? 'bg-[#5E8B60]/10 text-[#5E8B60]' : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              Adelaide Parks & Map
            </button>
            <button
              onClick={() => handleNavClick('stories')}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                activePage === 'stories' ? 'bg-[#5E8B60]/10 text-[#5E8B60]' : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              Foster Stories & Reviews
            </button>
            <button
              onClick={() => handleNavClick('apply')}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                activePage === 'apply' ? 'bg-[#5E8B60] text-white' : 'bg-[#5E8B60] text-white'
              }`}
            >
              <span>Apply to Foster (Free)</span>
              <HeartHandshake className="w-4 h-4" />
            </button>
            <div className="pt-2 grid grid-cols-2 gap-2 text-xs font-semibold">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEligibility();
                }}
                className="py-2 px-3 text-center rounded-lg bg-stone-100 text-stone-700 hover:bg-stone-200"
              >
                Eligibility Check
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenShelters();
                }}
                className="py-2 px-3 text-center rounded-lg bg-stone-100 text-stone-700 hover:bg-stone-200"
              >
                Shelter Directory
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Thumb Navigation Bar (Under 15% sticky cap) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFF9F2] border-t border-stone-200 px-2 py-1.5 flex items-center justify-around shadow-lg">
        <button
          onClick={() => handleNavClick('home')}
          className={`flex flex-col items-center py-1 px-2 text-[10px] font-semibold ${
            activePage === 'home' ? 'text-[#5E8B60]' : 'text-stone-500'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span>Home</span>
        </button>
        <button
          onClick={() => handleNavClick('quiz')}
          className={`flex flex-col items-center py-1 px-2 text-[10px] font-semibold ${
            activePage === 'quiz' ? 'text-[#5E8B60]' : 'text-stone-500'
          }`}
        >
          <Sparkles className="w-4 h-4 mb-0.5" />
          <span>Quiz</span>
        </button>
        <button
          onClick={() => handleNavClick('outdoor')}
          className={`flex flex-col items-center py-1 px-2 text-[10px] font-semibold ${
            activePage === 'outdoor' ? 'text-[#5E8B60]' : 'text-stone-500'
          }`}
        >
          <Compass className="w-4 h-4 mb-0.5" />
          <span>Parks</span>
        </button>
        <button
          onClick={() => handleNavClick('stories')}
          className={`flex flex-col items-center py-1 px-2 text-[10px] font-semibold ${
            activePage === 'stories' ? 'text-[#5E8B60]' : 'text-stone-500'
          }`}
        >
          <FileText className="w-4 h-4 mb-0.5" />
          <span>Stories</span>
        </button>
        <button
          onClick={() => handleNavClick('apply')}
          className={`flex flex-col items-center py-1 px-2 text-[10px] font-bold ${
            activePage === 'apply' ? 'text-[#E76F51]' : 'text-[#F4A261]'
          }`}
        >
          <HeartHandshake className="w-4 h-4 mb-0.5" />
          <span>Apply</span>
        </button>
      </div>
    </>
  );
};
