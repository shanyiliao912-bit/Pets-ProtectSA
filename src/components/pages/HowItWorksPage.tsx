import React, { useState } from 'react';
import { 
  Clock, ShieldCheck, Heart, CheckCircle2, AlertCircle, FileText, 
  HelpCircle, ChevronDown, Sparkles, PhoneCall, Stethoscope, PackageCheck, 
  Home, Download, ArrowRight 
} from 'lucide-react';
import { PageId } from '../../types';
import { FAQ_LIST } from '../../data/campaignData';
import { CAMPAIGN_IMAGES } from '../../assets/images';

interface Props {
  onNavigate: (page: PageId) => void;
  onOpenContact: () => void;
}

export const HowItWorksPage: React.FC<Props> = ({ onNavigate, onOpenContact }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [faqSearch, setFaqSearch] = useState('');
  const [selectedPlacementTab, setSelectedPlacementTab] = useState<'48h' | '1week' | 'medical' | 'cat'>('48h');

  const filteredFaqs = FAQ_LIST.filter(f => 
    f.q.toLowerCase().includes(faqSearch.toLowerCase()) || 
    f.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 pb-20">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#5E8B60]">
          Clear, Transparent & Free
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#333333] font-display">
          How Short-Term Fostering Works
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          Whether you want a companion for a 48-hour weekend recharge or a two-week school holiday respite, South Australia's partner shelters make the journey effortless, safe, and 100% cost-free.
        </p>
      </div>

      {/* 5-Step Process */}
      <section className="bg-white rounded-3xl p-6 sm:p-12 border border-stone-200 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] font-display text-center mb-10">
          The 5-Step Carer Journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {/* Step 1 */}
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#5E8B60] text-white flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="font-bold text-base text-[#333333]">Apply Online</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Fill in our 2-minute application. Share your suburb, housing setup (flat or yard), and available dates.
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#5E8B60] text-white flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="font-bold text-base text-[#333333]">Tailored Match</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Our Adelaide coordinator pairs you with a pet whose personality, energy, and routine fit your exact schedule.
            </p>
          </div>

          {/* Step 3 */}
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#5E8B60] text-white flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="font-bold text-base text-[#333333]">Free Kit Pickup</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Collect your foster buddy from Wingfield, O'Halloran Hill, or local foster hub with food, bed, crate, and leash.
            </p>
          </div>

          {/* Step 4 */}
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#5E8B60] text-white flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h3 className="font-bold text-base text-[#333333]">Share the Love</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Walk, play, or snuggle on the couch! Snap cute photos and note how they behave in a real home setting.
            </p>
          </div>

          {/* Step 5 */}
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#F4A261] text-white flex items-center justify-center font-bold text-sm">
              5
            </div>
            <h3 className="font-bold text-base text-[#333333]">Return or Adopt</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Return on Monday morning with your notes. Or, if you can’t bear to say goodbye, adopt with carer priority!
            </p>
          </div>
        </div>
      </section>

      {/* Placement Options Showcase */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5E8B60]">Flexible Formats</span>
          <h2 className="text-3xl font-extrabold text-[#333333] font-display mt-1">
            Choose Your Placement Length
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            You don't need years of free time. Pick a timeline that matches your work schedule, study breaks, or lifestyle.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-stone-200/60 rounded-2xl max-w-xl mx-auto">
          <button
            onClick={() => setSelectedPlacementTab('48h')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              selectedPlacementTab === '48h' ? 'bg-[#5E8B60] text-white shadow-xs' : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            48-Hour Weekend Respite
          </button>
          <button
            onClick={() => setSelectedPlacementTab('1week')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              selectedPlacementTab === '1week' ? 'bg-[#5E8B60] text-white shadow-xs' : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            1 to 2-Week Placements
          </button>
          <button
            onClick={() => setSelectedPlacementTab('medical')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              selectedPlacementTab === 'medical' ? 'bg-[#5E8B60] text-white shadow-xs' : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            Post-Surgery Recovery
          </button>
          <button
            onClick={() => setSelectedPlacementTab('cat')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              selectedPlacementTab === 'cat' ? 'bg-[#5E8B60] text-white shadow-xs' : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            Apartment Cat Respite
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm">
          {selectedPlacementTab === '48h' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold text-[#F4A261] uppercase tracking-wide">Most Popular</span>
                <h3 className="text-2xl font-bold text-[#333333] font-display">
                  48-Hour Weekend Respite (Friday PM – Monday AM)
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Ideal for young professionals working 9-to-5 during the week, Flinders/UniSA students, or active couples wanting a dog for weekend beach and park trips.
                </p>
                <div className="space-y-2 text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5E8B60]" />
                    <span><strong>Pickup:</strong> Friday between 3:00 PM – 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5E8B60]" />
                    <span><strong>Return:</strong> Monday between 8:30 AM – 11:00 AM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5E8B60]" />
                    <span><strong>Impact:</strong> Gives an animal essential respite from loud concrete shelter kennels over the busiest adoption weekends.</span>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('apply')}
                    className="px-5 py-2.5 bg-[#5E8B60] text-white text-xs font-bold rounded-xl hover:bg-[#3F6341] transition-colors inline-flex items-center gap-2"
                  >
                    Apply for Weekend Respite
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-4/3 border border-stone-200">
                <img
                  src={CAMPAIGN_IMAGES.dogPark}
                  alt="Carer walking rescue dog on scenic riverside trail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {selectedPlacementTab === '1week' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold text-[#5E8B60] uppercase tracking-wide">Behavioral Reset</span>
                <h3 className="text-2xl font-bold text-[#333333] font-display">
                  1 to 2-Week Placements
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Best for remote and hybrid workers, holiday breaks, or people wanting to experience deeper companionship. Animals in 1-2 week placements learn basic house habits and loose-leash walking.
                </p>
                <div className="space-y-2 text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5E8B60]" />
                    <span><strong>Decompression Rule:</strong> Follows the "3-3-3 rule" allowing timid animals to fully show their loving nature.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5E8B60]" />
                    <span><strong>Shelter Relief:</strong> Saves up to 14 days of shelter accommodation and kennel cleaning costs.</span>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('apply')}
                    className="px-5 py-2.5 bg-[#5E8B60] text-white text-xs font-bold rounded-xl hover:bg-[#3F6341] transition-colors inline-flex items-center gap-2"
                  >
                    Apply for 1-2 Week Placement
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-4/3 border border-stone-200">
                <img
                  src={CAMPAIGN_IMAGES.beachWalk}
                  alt="Carer with rescue dog enjoying Adelaide beach"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {selectedPlacementTab === 'medical' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold text-[#E76F51] uppercase tracking-wide">Critical Care</span>
                <h3 className="text-2xl font-bold text-[#333333] font-display">
                  Post-Surgery & Quiet Medical Recovery
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Shelter environments are too noisy for animals recovering from desexing, dental procedures, or leg surgeries. We place them in quiet, low-activity homes with carpet or rugs where they can heal comfortably.
                </p>
                <div className="space-y-2 text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5E8B60]" />
                    <span><strong>Full Veterinary Cover:</strong> All follow-up clinic checks and medications supplied with zero fee.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5E8B60]" />
                    <span><strong>Ideal For:</strong> Quiet apartments, calm households, seniors, or work-from-home carers.</span>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('apply')}
                    className="px-5 py-2.5 bg-[#5E8B60] text-white text-xs font-bold rounded-xl hover:bg-[#3F6341] transition-colors inline-flex items-center gap-2"
                  >
                    Volunteer for Quiet Recovery
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-4/3 border border-stone-200">
                <img
                  src={CAMPAIGN_IMAGES.hero}
                  alt="Gentle rescue pet resting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {selectedPlacementTab === 'cat' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold text-[#F4A261] uppercase tracking-wide">Feline Friends</span>
                <h3 className="text-2xl font-bold text-[#333333] font-display">
                  Indoor Cat & Kitten Fostering
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  No yard? No problem! South Australia has hundreds of adult cats and kitten litters in need of safe indoor-only temporary fostering. Perfect for modern apartment dwellers, renters, and uni students.
                </p>
                <div className="space-y-2 text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5E8B60]" />
                    <span><strong>All Supplies Provided:</strong> Litter trays, premium food, scratchers, toys, and carrier crates.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5E8B60]" />
                    <span><strong>Quiet Companionship:</strong> Gentle study and work-from-home buddies who love sunlit windows.</span>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('apply')}
                    className="px-5 py-2.5 bg-[#5E8B60] text-white text-xs font-bold rounded-xl hover:bg-[#3F6341] transition-colors inline-flex items-center gap-2"
                  >
                    Apply for Cat Fostering
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-4/3 border border-stone-200">
                <img
                  src={CAMPAIGN_IMAGES.catCozy}
                  alt="Cozy rescue cat curling up in sunlit Adelaide room"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Adelaide Rental Pet Guidelines Section */}
      <section className="bg-[#EBF3EC] rounded-3xl p-6 sm:p-10 border border-[#5E8B60]/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-xs font-bold text-[#3F6341]">
              <ShieldCheck className="w-4 h-4 text-[#5E8B60]" />
              <span>South Australia Residential Tenancies Act Update</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] font-display">
              Renting in Adelaide? You Have Pet Rights.
            </h2>

            <p className="text-sm text-stone-700 leading-relaxed">
              Under recent South Australian rental legislation, landlords cannot arbitrarily refuse a tenant's application to have a pet without reasonable grounds (such as strata by-law restrictions or severe property suitability limits).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-700">
              <div className="p-3 bg-white rounded-xl border border-stone-200">
                <p className="font-bold text-[#333333] mb-1">Temporary Placement Letters</p>
                <p>Partner shelters supply an official shelter foster certificate confirming the pet is temporary, desexed, vaccinated, and insured.</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200">
                <p className="font-bold text-[#333333] mb-1">No Extra Bond Fee</p>
                <p>Under SA law, landlords cannot charge special "pet bonds". Your normal bond covers reasonable maintenance.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-stone-200 text-center space-y-3">
            <FileText className="w-10 h-10 text-[#5E8B60] mx-auto" />
            <h3 className="font-bold text-sm text-[#333333]">Landlord Foster Request Template</h3>
            <p className="text-xs text-stone-600">
              Pre-written sample email you can send to your property manager to request short-term fostering permission.
            </p>
            <button
              onClick={() => {
                alert("Sample Tenant Request Template:\n\nDear Property Manager / Landlord,\n\nI am writing to notify you that I would like to participate as a temporary volunteer foster carer through Pets & Protect SA (partnered with Animal Welfare League SA / RSPCA SA). This is a temporary short-term arrangement (e.g. 48 hours to 2 weeks). All veterinary care, supplies, and oversight are managed by the shelter. The animal is fully desexed and health-checked. Thank you for supporting our local community shelters!\n\nKind regards,\n[Your Name]");
              }}
              className="w-full py-2.5 px-4 bg-[#5E8B60] hover:bg-[#3F6341] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Copy Request Template
            </button>
          </div>
        </div>
      </section>

      {/* 24/7 Shelter Support & Cost-Free Guarantee */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
          <PackageCheck className="w-8 h-8 text-[#5E8B60] mb-3" />
          <h3 className="font-bold text-base text-[#333333] mb-2 font-display">100% Cost-Free Guarantee</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Shelters provide premium kibble, wet food, blankets, orthopaedic bedding, crates, lead, toys, flea/tick/worming treatments, and kitty litter. You never pay a single cent.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
          <PhoneCall className="w-8 h-8 text-[#F4A261] mb-3" />
          <h3 className="font-bold text-base text-[#333333] mb-2 font-display">24/7 Carer Emergency Helpline</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Never feel stranded. Every registered foster carer has direct phone access to Adelaide vet coordinators and behavioral staff for any queries day or night.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
          <Stethoscope className="w-8 h-8 text-[#E76F51] mb-3" />
          <h3 className="font-bold text-base text-[#333333] mb-2 font-display">Full Veterinary Care Covered</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            If your foster pet feels unwell or needs ear drops or stitches checked, appointments are handled directly through partner clinics in Wingfield, O'Halloran Hill, and Adelaide vet hubs.
          </p>
        </div>
      </section>

      {/* Interactive FAQ Search & Accordion */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5E8B60]">Got Questions?</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] font-display mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            Search our knowledge base for anything related to dog and cat fostering in South Australia.
          </p>

          <div className="mt-4">
            <input
              type="text"
              placeholder="Filter questions (e.g. rent, cost, weekend, cats, work)..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 bg-[#FFF9F2] focus:outline-hidden focus:border-[#5E8B60]"
            />
          </div>
        </div>

        <div className="space-y-3 max-w-3xl mx-auto">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-stone-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 text-left font-bold text-sm text-[#333333] flex items-center justify-between gap-4 hover:bg-stone-50"
                  aria-expanded={activeFaq === idx}
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#5E8B60] shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-stone-400 shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180 text-[#5E8B60]' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-[#FFF9F2]/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-6 text-stone-500 text-xs">
              No matching questions found. <button onClick={onOpenContact} className="text-[#5E8B60] underline font-bold">Ask our team directly</button>.
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Bar */}
      <div className="p-8 bg-[#5E8B60] text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div>
          <h3 className="text-2xl font-bold font-display text-[#FFF9F2]">Know What Suits Your Lifestyle?</h3>
          <p className="text-xs sm:text-sm text-white/80">Take our 60-second assessment to see which pet matches your space and routine.</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => onNavigate('quiz')}
            className="px-6 py-3 bg-[#F4A261] hover:bg-[#e76f51] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors whitespace-nowrap"
          >
            Take Match Quiz
          </button>
          <button
            onClick={() => onNavigate('apply')}
            className="px-6 py-3 bg-white text-[#3F6341] hover:bg-stone-100 text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors whitespace-nowrap"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};
