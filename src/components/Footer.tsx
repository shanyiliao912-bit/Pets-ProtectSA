import React, { useState } from 'react';
import { Heart, Send, CheckCircle2, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { PageId } from '../types';

interface Props {
  onNavigate: (page: PageId) => void;
  onOpenShelters: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<Props> = ({ onNavigate, onOpenShelters, onOpenContact }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#243527] text-[#FFF9F2] pt-16 pb-24 lg:pb-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter & Action Banner */}
        <div className="bg-[#2E4532] rounded-2xl p-6 sm:p-10 border border-[#3E5C43] mb-14 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F4A261]">
                Adelaide Weekly Foster Dispatch
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-1 mb-2 font-display">
                Get Urgent Weekend Respite Alerts
              </h3>
              <p className="text-stone-300 text-sm max-w-lg">
                Receive curated weekend foster notices, new Adelaide dog-friendly walking maps, and upcoming community shelter pack walks. Zero spam.
              </p>
            </div>

            <div>
              {subscribed ? (
                <div className="flex items-center gap-3 bg-[#3F6341]/60 border border-[#5E8B60] p-4 rounded-xl text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#F4A261] shrink-0" />
                  <span>You're on the list! Watch your inbox for this Friday's Adelaide foster bulletin.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email (e.g. sarah@adelaide.edu.au)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl bg-[#1D2B20] border border-[#3E5C43] text-sm text-[#FFF9F2] placeholder-stone-400 focus:outline-hidden focus:border-[#F4A261]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#F4A261] hover:bg-[#e76f51] text-white text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
              <p className="text-[11px] text-stone-400 mt-2">
                Join 1,840+ Adelaide locals helping save shelter animals one weekend at a time.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Column Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 font-display text-2xl font-extrabold tracking-tight">
              <span className="text-[#5E8B60]">Pets & Protect</span>
              <span className="text-[#F4A261]">SA</span>
            </div>
            <p className="text-stone-300 text-sm leading-relaxed max-w-sm">
              Pets & Protect SA is an Adelaide grassroots social awareness campaign dedicated to relieving shelter overcrowding by connecting caring locals with short-term foster placements and flexible dog walking.
            </p>
            <div className="p-3 bg-[#1D2B20] rounded-xl border border-[#3E5C43] text-xs text-stone-300 space-y-1">
              <p className="font-semibold text-[#F4A261]">100% Cost-Free Guarantee</p>
              <p>Partner shelters supply all vet care, food, beds, and equipment. You supply the love.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('how-it-works')} className="hover:text-white transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quiz')} className="hover:text-white transition-colors">
                  60-Sec Match Quiz
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('outdoor')} className="hover:text-white transition-colors">
                  Outdoor Volunteering & Map
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('stories')} className="hover:text-white transition-colors">
                  Foster Stories & Reviews
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('apply')} className="hover:text-white transition-colors font-semibold text-[#F4A261]">
                  Apply to Foster
                </button>
              </li>
            </ul>
          </div>

          {/* Partner Shelters */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-4">SA Shelters</h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <button onClick={onOpenShelters} className="hover:text-white transition-colors text-left">
                  Animal Welfare League SA (Wingfield)
                </button>
              </li>
              <li>
                <button onClick={onOpenShelters} className="hover:text-white transition-colors text-left">
                  RSPCA SA (O'Halloran Hill)
                </button>
              </li>
              <li>
                <button onClick={onOpenShelters} className="hover:text-white transition-colors text-left">
                  SA Dog Rescue (Metro Adelaide)
                </button>
              </li>
              <li>
                <button onClick={onOpenShelters} className="hover:text-white transition-colors text-left">
                  Cat Adoption Foundation SA
                </button>
              </li>
              <li>
                <button onClick={onOpenShelters} className="text-[#F4A261] hover:underline font-semibold text-xs mt-2 block">
                  View Full Directory →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-4">Contact & Support</h4>
            <ul className="space-y-3 text-sm text-stone-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F4A261] shrink-0 mt-0.5" />
                <span>Adelaide, South Australia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F4A261] shrink-0" />
                <span>Foster Line: 1300 477 722</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F4A261] shrink-0" />
                <span>team@petsandprotectsa.org.au</span>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="mt-2 py-2 px-3 text-xs bg-[#3E5C43] hover:bg-[#4d7253] text-white font-semibold rounded-lg transition-colors w-full text-center"
                >
                  Ask a Question
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Traditional Custodians Acknowledgement */}
        <div className="pt-8 border-t border-stone-800 text-xs text-stone-400 leading-relaxed space-y-2 mb-6">
          <p>
            <strong>Acknowledgement of Country:</strong> Pets & Protect SA acknowledges the Kaurna people as the traditional custodians of the Adelaide Plains and across the lands and waters where we walk, care for animals, and live. We pay our deepest respect to Elders past, present, and emerging.
          </p>
        </div>

        {/* SEO Keywords & Copyright */}
        <div className="pt-6 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Pets & Protect SA. Community awareness initiative supporting South Australian shelter pets.
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] text-stone-400">
            <span>Dog Fostering Adelaide</span>
            <span aria-hidden="true">·</span>
            <span>Cat Fostering Adelaide</span>
            <span aria-hidden="true">·</span>
            <span>Animal Fostering SA</span>
            <span aria-hidden="true">·</span>
            <span>Volunteer With Dogs Adelaide</span>
            <span aria-hidden="true">·</span>
            <span>Temporary Pet Foster Care SA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
