import React from 'react';
import { ArrowRight, Heart, Sparkles, ShieldCheck, CheckCircle2, ChevronRight, HelpCircle, MapPin, Users, Activity, Clock } from 'lucide-react';
import { PageId } from '../../types';
import { FOSTER_STORIES, ADELAIDE_SHELTERS, FAQ_LIST } from '../../data/campaignData';
import { CAMPAIGN_IMAGES } from '../../assets/images';
import { ImpactCounter } from '../ImpactCounter';

interface Props {
  onNavigate: (page: PageId) => void;
  onOpenEligibility: () => void;
  onOpenShelters: () => void;
}

export const HomePage: React.FC<Props> = ({ onNavigate, onOpenEligibility, onOpenShelters }) => {
  return (
    <div className="space-y-20 pb-16">
      {/* 1. Hero Section */}
      <section className="relative pt-6 sm:pt-10 lg:pt-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3EC] border border-[#5E8B60]/30 text-xs font-bold text-[#3F6341]">
                <span className="w-2 h-2 rounded-full bg-[#5E8B60]" />
                <span>Adelaide Short-Term Pet Fostering & Volunteering</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#333333] font-display leading-[1.1] text-balance">
                A Few Days Can Change a Life.
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
                Experience the pure joy of having a dog or cat without the long-term commitment. In South Australia, partner animal shelters cover <strong>100% of food, supplies, and vet care</strong>—you simply provide a welcoming home for 48 hours to two weeks.
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('quiz')}
                  className="px-6 py-3.5 bg-[#F4A261] hover:bg-[#e76f51] text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-center"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Take the 60-Sec Match Quiz</span>
                </button>

                <button
                  onClick={() => onNavigate('apply')}
                  className="px-6 py-3.5 bg-[#5E8B60] hover:bg-[#3F6341] text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-center"
                >
                  <Heart className="w-5 h-5 fill-current" />
                  <span>Apply to Foster (Free)</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center gap-6 text-xs text-stone-600">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#5E8B60]" />
                  <span>$0 Vet & Food Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#5E8B60]" />
                  <span>Renters Protected in SA</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#5E8B60]" />
                  <span>48h Weekend Options</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 lg:aspect-4/4">
                <img
                  src={CAMPAIGN_IMAGES.hero}
                  alt="Young Australian foster carer smiling with happy rescue dog in an Adelaide park"
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-xs text-stone-800">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-[#5E8B60] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      Adelaide Shelter Partner Network
                    </span>
                    <span className="text-[11px] font-semibold text-stone-500">Free Starter Kit</span>
                  </div>
                  <p className="text-[12px] text-stone-600">
                    "Fostering Barney over the long weekend was the best decision of my year. Pure love, zero stress." — Sarah, Norwood
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Adelaide Shelters Need Help */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5E8B60]">The Situation in South Australia</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333] font-display mt-1 mb-3">
            Why Adelaide Shelters Need Your Help
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Across Wingfield, O'Halloran Hill, and regional South Australia, shelters are operating at peak capacity due to rising living pressures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs hover:border-[#5E8B60]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#FDF1E7] text-[#F4A261] flex items-center justify-center font-bold mb-4">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#333333] mb-2 font-display">114% Shelter Capacity</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Shelters across SA frequently have zero empty kennels. Surrendered pets, strays, and court rescues need temporary refuge while awaiting adoption.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs hover:border-[#5E8B60]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#EBF3EC] text-[#5E8B60] flex items-center justify-center font-bold mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#333333] mb-2 font-display">Kennel Stress & Sensory Overload</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Even with devoted staff, echoing concrete kennels cause chronic stress. Just 48 hours in a quiet home reduces stress hormones by 65%.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs hover:border-[#5E8B60]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#FDF1E7] text-[#E76F51] flex items-center justify-center font-bold mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#333333] mb-2 font-display">3x Higher Adoption Speed</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Foster carers take everyday photos, write realistic personality notes, and discover if a pet loves cats, kids, or beach swims, helping them get adopted faster.
            </p>
          </div>
        </div>
      </section>

      {/* 3. How Short-Term Fostering Works (4 Simple Steps) */}
      <section className="bg-stone-100/70 py-16 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#5E8B60]">Simple & Accessible</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333] font-display mt-1">
                How Short-Term Fostering Works
              </h2>
            </div>
            <button
              onClick={() => onNavigate('how-it-works')}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#5E8B60] hover:text-[#3F6341]"
            >
              Learn about 48-Hour Weekend options
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-stone-200 relative">
              <span className="text-2xl font-extrabold text-[#5E8B60] font-display mb-3 block">01.</span>
              <h3 className="font-bold text-base text-[#333333] mb-1">Quick Match</h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Complete the 60-second assessment. We match your living situation (apartment, yard, or sharehouse) with an ideal pet.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 relative">
              <span className="text-2xl font-extrabold text-[#5E8B60] font-display mb-3 block">02.</span>
              <h3 className="font-bold text-base text-[#333333] mb-1">Collect Free Starter Kit</h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Pick up your matched pet along with their premium food, harness, bed, crate, toys, and veterinary medication.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 relative">
              <span className="text-2xl font-extrabold text-[#5E8B60] font-display mb-3 block">03.</span>
              <h3 className="font-bold text-base text-[#333333] mb-1">Provide Respite & Love</h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Enjoy companionship for 48 hours over the weekend, or 1 to 2 weeks of recovery respite. Our 24/7 hotline supports you.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 relative">
              <span className="text-2xl font-extrabold text-[#5E8B60] font-display mb-3 block">04.</span>
              <h3 className="font-bold text-base text-[#333333] mb-1">Return or Forever Adopt</h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Return your foster with detailed behavioral notes, or choose to permanently adopt first if your heart falls in love!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Foster Success Statistics (Live Scoreboard) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ImpactCounter />
      </section>

      {/* 5. Featured Foster Stories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E8B60]">Real Adelaide Impact</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333] font-display mt-1">
              Featured Foster Stories
            </h2>
          </div>
          <button
            onClick={() => onNavigate('stories')}
            className="inline-flex items-center gap-1 text-sm font-bold text-[#F4A261] hover:text-[#e76f51]"
          >
            <span>View All Stories & Before-Afters</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Luna */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-[#333333]">Luna (Kelpie Cross)</h3>
                  <p className="text-xs text-stone-500">Fostered by Sophie M. in Norwood · 48-Hour Weekend</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-[#EBF3EC] text-[#3F6341] rounded-full">
                  Weekend Respite
                </span>
              </div>
              <p className="text-sm text-stone-700 italic leading-relaxed">
                "{FOSTER_STORIES[0].quote}"
              </p>
              <div className="p-3 bg-[#FFF9F2] rounded-xl border border-stone-200/70 text-xs text-stone-700">
                <p><strong>Outcome:</strong> {FOSTER_STORIES[0].metrics.adoptionOutcome} ({FOSTER_STORIES[0].metrics.healthImprovement})</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
              <span className="text-stone-500">Adelaide Park Lands walker</span>
              <button onClick={() => onNavigate('stories')} className="font-bold text-[#5E8B60] hover:underline">
                Read full journey →
              </button>
            </div>
          </div>

          {/* Card 2: Milo & Pip */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-[#333333]">Milo & Pip (Rescue Brothers)</h3>
                  <p className="text-xs text-stone-500">Fostered by Chloe T. in Prospect · 10 Days Uni Break</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-[#FDF1E7] text-[#E76F51] rounded-full">
                  Apartment Kittens
                </span>
              </div>
              <p className="text-sm text-stone-700 italic leading-relaxed">
                "{FOSTER_STORIES[2].quote}"
              </p>
              <div className="p-3 bg-[#FFF9F2] rounded-xl border border-stone-200/70 text-xs text-stone-700">
                <p><strong>Outcome:</strong> {FOSTER_STORIES[2].metrics.adoptionOutcome}</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
              <span className="text-stone-500">Student foster program</span>
              <button onClick={() => onNavigate('stories')} className="font-bold text-[#5E8B60] hover:underline">
                Read full journey →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Benefits for Foster Carers */}
      <section className="bg-stone-50 py-16 border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E8B60]">Carer Advantages</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333] font-display mt-1 mb-3">
              Why Fostering Fits Your Adelaide Lifestyle
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              Designed specifically for busy young professionals, university students, renters, and active retirees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="font-bold text-base text-[#333333] mb-2 font-display">100% Free - Zero Financial Burden</h3>
              <p className="text-xs sm:text-sm text-stone-600">
                You never pay for food, treats, litter, worming tablets, flea treatments, or vet visits. Partner shelters supply everything upon collection.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="font-bold text-base text-[#333333] mb-2 font-display">Flexible Commitments</h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Going on holiday next month? Preparing for uni exams? Fostering has start and end dates that work strictly around your calendar.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="font-bold text-base text-[#333333] mb-2 font-display">Rental-Friendly in SA</h3>
              <p className="text-xs sm:text-sm text-stone-600">
                South Australian tenancy laws prohibit landlords from unreasonably denying pets. We provide official shelter foster documentation.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="font-bold text-base text-[#333333] mb-2 font-display">Outdoor & Mental Wellbeing</h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Discover Adelaide's beautiful coastal beaches (Henley & Glenelg) and Linear Park trails with an enthusiastic furry workout partner.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="font-bold text-base text-[#333333] mb-2 font-display">Trial Pet Ownership</h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Thinking about adopting in the future? Short-term fostering is the ultimate way to understand what pet size and energy level matches your routine.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="font-bold text-base text-[#333333] mb-2 font-display">First Priority to Adopt</h3>
              <p className="text-xs sm:text-sm text-stone-600">
                If you find your soulmate pet during placement, foster carers have exclusive right of first refusal before public adoption listings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Partner Shelter Logos & Network */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFF9F2] rounded-3xl border border-stone-200 p-8 sm:p-12 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5E8B60]">Trusted Network</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] font-display mt-1 mb-2">
            In Partnership with South Australia’s Animal Shelters
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto mb-8">
            All pets in our campaign are vetted, vaccinated, and registered with accredited South Australian animal welfare bodies.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ADELAIDE_SHELTERS.map((shelter) => (
              <div 
                key={shelter.id}
                onClick={onOpenShelters}
                className="p-4 bg-white rounded-xl border border-stone-200 hover:border-[#5E8B60] transition-colors cursor-pointer group"
              >
                <div className="font-extrabold text-sm sm:text-base text-stone-800 group-hover:text-[#5E8B60]">
                  {shelter.shortName}
                </div>
                <div className="text-[11px] text-stone-500 mt-1">{shelter.suburb}, SA</div>
                <span className="text-[10px] text-[#F4A261] font-semibold mt-2 inline-block">
                  View Needs →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Preview */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5E8B60]">Common Inquiries</span>
          <h2 className="text-3xl font-extrabold text-[#333333] font-display mt-1 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Quick answers to the top questions asked by first-time Adelaide foster carers.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_LIST.slice(0, 4).map((faq, idx) => (
            <div key={idx} className="p-5 bg-white rounded-2xl border border-stone-200">
              <h3 className="font-bold text-sm sm:text-base text-[#333333] mb-2 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-[#5E8B60] shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 pl-6 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => onNavigate('how-it-works')}
            className="text-xs sm:text-sm font-bold text-[#5E8B60] hover:text-[#3F6341] underline"
          >
            Read All Fostering Guides & SA Tenancy FAQs →
          </button>
        </div>
      </section>

      {/* 9. Final Call-to-Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#5E8B60] to-[#3F6341] text-white rounded-3xl p-8 sm:p-14 text-center shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-[#F4A261]">
              Start Saving Lives This Weekend
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight text-[#FFF9F2]">
              Ready to Give an Adelaide Shelter Pet a Cozy Weekend?
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              It takes just 2 minutes to apply. We'll match you with a dog or cat tailored to your space, routine, and weekend plans.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('quiz')}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#F4A261] hover:bg-[#e76f51] text-white font-bold text-base rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>Take the 60-Sec Match Quiz</span>
              </button>
              <button
                onClick={() => onNavigate('apply')}
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#3F6341] hover:bg-stone-100 font-bold text-base rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5 fill-current" />
                <span>Apply to Foster Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
