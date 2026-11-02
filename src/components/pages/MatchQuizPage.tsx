import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, ArrowRight, RotateCcw, Heart, ShieldCheck, 
  Home, Clock, Activity, Award, Dog, Cat 
} from 'lucide-react';
import { PageId, QuizAnswers, PetRecommendation } from '../../types';

interface Props {
  onNavigate: (page: PageId) => void;
  onApplyWithMatch: (matchTitle: string) => void;
}

export const MatchQuizPage: React.FC<Props> = ({ onNavigate, onApplyWithMatch }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    housingType: '',
    availability: '',
    activityLevel: '',
    experience: '',
    preferredSize: '',
    duration: ''
  });
  const [result, setResult] = useState<PetRecommendation | null>(null);

  const questions = [
    {
      id: 'housingType',
      title: 'What is your current Adelaide housing situation?',
      subtitle: 'Apartments, units, and houses all have perfect shelter matches.',
      icon: Home,
      options: [
        { label: 'Apartment / Flat (No private yard)', value: 'Apartment', tip: 'Great for indoor cats, small dogs & polite senior companions' },
        { label: 'Unit / Townhouse with Courtyard', value: 'Townhouse', tip: 'Suits small-to-medium dogs with moderate exercise needs' },
        { label: 'House with Securely Fenced Yard', value: 'House with Yard', tip: 'Ideal for energetic working breeds like Kelpie or Border Collie mixes' },
        { label: 'Student Sharehouse / Shared Flat', value: 'Sharehouse', tip: 'Wonderful for friendly, social pets who love active housemates' },
        { label: 'Acreage or Hills Property', value: 'Acreage', tip: 'Expansive space for larger rescue dogs and energetic pairs' }
      ]
    },
    {
      id: 'availability',
      title: 'What does your weekly schedule look like?',
      subtitle: 'Be honest—shelters match animals to how much time you actually have.',
      icon: Clock,
      options: [
        { label: 'Weekends Only (Busy 9-to-5 during week)', value: 'Weekends', tip: '48-hour weekend respite (Friday afternoon to Monday morning)' },
        { label: 'Hybrid / Remote Worker (Home 3+ days/week)', value: 'Hybrid/Remote', tip: 'Flexible companionship during work calls and midday strolls' },
        { label: 'Full-Time Student (Flexible lecture hours)', value: 'Student', tip: 'Perfect for study break cuddling and weekend park walks' },
        { label: 'Retired or Full-Time Home Availability', value: 'Full Availability', tip: 'Exceptional for recovery respite, puppies, or senior pets' },
        { label: 'Shift Worker (Nurses, emergency, hospitality)', value: 'Shift Worker', tip: 'Great for low-maintenance independent cats and gentle older dogs' }
      ]
    },
    {
      id: 'activityLevel',
      title: 'What activity level do you prefer for your foster pet?',
      subtitle: 'From relaxed couch cuddles to morning beach jogs.',
      icon: Activity,
      options: [
        { label: 'Gentle & Calm (Short 15-20 min strolls & lots of sofa naps)', value: 'Low Activity', tip: 'Senior dogs, quiet recovery pets, or indoor cats' },
        { label: 'Moderate (Daily 30-45 min walk around the park)', value: 'Moderate Activity', tip: 'Adult retrievers, greyhounds, and friendly family mixes' },
        { label: 'High Energy (Trail runs, beach fetch, hiking Belair)', value: 'High Activity', tip: 'Young working breeds, kelpies, and active crossbreeds' },
        { label: 'Purely Indoor (Playful laser chasing & lap cuddles)', value: 'Indoor Cat', tip: 'Playful kittens or serene adult felines' }
      ]
    },
    {
      id: 'experience',
      title: 'What is your previous pet experience level?',
      subtitle: 'Zero experience is completely fine—we provide full training.',
      icon: Award,
      options: [
        { label: 'First-Time Carer (Never owned a pet before)', value: 'First Time', tip: 'We pair you with vetted, bombproof beginner-friendly pets' },
        { label: 'Experienced Pet Owner (Grew up with family pets)', value: 'Experienced', tip: 'Comfortable with basic feeding, walking, and house routines' },
        { label: 'Rescue & Shelter Veteran (Handled timid/reactive pets)', value: 'Rescue Veteran', tip: 'Skilled in patient decompression and behavioral guidance' }
      ]
    },
    {
      id: 'preferredSize',
      title: 'Do you have a preference on pet size or species?',
      subtitle: 'Adelaide shelters have urgent needs across all categories.',
      icon: Dog,
      options: [
        { label: 'Small Dog or Puppy (Under 10kg)', value: 'Small Dog', tip: 'Easy to handle, great for apartments and small cars' },
        { label: 'Medium Active Dog (10kg – 25kg)', value: 'Medium Dog', tip: 'Versatile adventure buddy for beaches and park loops' },
        { label: 'Large Gentle Dog (25kg+ like Staffy or Lab mix)', value: 'Large Dog', tip: 'The most urgent shelter need in Adelaide right now' },
        { label: 'Adult or Senior Cat (Quiet and independent)', value: 'Adult Cat', tip: 'Zero walking required, clean and purr-filled' },
        { label: 'Playful Kitten Pair (Fun double kitten energy)', value: 'Kittens', tip: 'Entertaining study companions for cozy homes' }
      ]
    },
    {
      id: 'duration',
      title: 'What foster duration fits best right now?',
      subtitle: 'Start small—you can always extend or try again later.',
      icon: Sparkles,
      options: [
        { label: '48-Hour Weekend Respite (Friday to Monday)', value: '48-Hour Weekend', tip: 'Our most flexible, low-commitment introductory option' },
        { label: '1 to 2 Weeks (School or uni break / holiday respite)', value: '1-2 Weeks', tip: 'Sufficient time to make a lasting behavioral impact' },
        { label: '2 to 4 Weeks (Medical recovery / quiet foster)', value: '2-4 Weeks', tip: 'High-impact support for injured or recovering shelter pets' },
        { label: 'Emergency On-Call Respite (When shelters overflow)', value: 'Emergency On-Call', tip: 'Ready to take a pet on 24 hours notice for a few nights' }
      ]
    }
  ];

  const handleSelectOption = (field: keyof QuizAnswers, value: string) => {
    const updated = { ...answers, [field]: value };
    setAnswers(updated);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateRecommendation(updated);
    }
  };

  const calculateRecommendation = (ans: QuizAnswers) => {
    let rec: PetRecommendation;

    if (ans.preferredSize.includes('Cat') || ans.preferredSize.includes('Kitten') || ans.activityLevel === 'Indoor Cat' || (ans.housingType === 'Apartment' && ans.availability === 'Shift Worker')) {
      rec = {
        profileTitle: 'The Indoor Purr-Fection Respite',
        petType: ans.preferredSize.includes('Kitten') ? 'Playful Kitten Pair' : 'Calm Adult House Cat',
        idealDuration: ans.duration || '48-Hour to 2-Week Respite',
        matchScore: 98,
        description: `Your ${ans.housingType.toLowerCase()} and schedule make you an ideal match for an Adelaide shelter cat. With indoor enrichment, a sunlit windowsill, and regular meals, cats decompress exceptionally well without needing outdoor yard space.`,
        suitablePetsExample: ['Milo & Pip (Ginger Brothers)', 'Luna the Tortoiseshell', 'Willow the Senior Lap Cat'],
        tipsForSuccess: [
          'Partner shelters supply all litter trays, organic litter, scratching posts, and wet/dry food.',
          'Keep your foster cat in a designated quiet bedroom for the first 24 hours to let them feel secure.',
          'Great study companion for students and remote focus workers.'
        ]
      };
    } else if (ans.availability === 'Weekends' || ans.duration === '48-Hour Weekend') {
      rec = {
        profileTitle: 'The 48-Hour Weekend Adventure Champion',
        petType: 'Energetic Medium Dog (Kelpie or Labrador Cross)',
        idealDuration: 'Friday 4:00 PM to Monday 9:00 AM',
        matchScore: 96,
        description: `Since you want weekend companionship, you are the #1 candidate for our Weekend Respite program. Take a shelter dog out of their kennel for 2 days of Adelaide park walks, coastal fresh air, and sofa relaxation.`,
        suitablePetsExample: ['Buster (Staffy Mix)', 'Daisy (Kelpie cross)', 'Sammy (Golden Lab)'],
        tipsForSuccess: [
          'Pick up your Friday kit packed with harness, food, bowls, and treats from Wingfield or O\'Halloran Hill.',
          'Head to Victoria Park or Henley Beach for morning fetch and socializing.',
          'Film a 10-second video of your dog being cute at home—it speeds up their forever adoption by 300%!'
        ]
      };
    } else if (ans.activityLevel === 'Low Activity' || ans.duration === '2-4 Weeks') {
      rec = {
        profileTitle: 'The Gentle Healer & Senior Sanctuary',
        petType: 'Quiet Adult Dog or Post-Surgery Recovery Companion',
        idealDuration: '1 to 3 Weeks Quiet Care',
        matchScore: 95,
        description: `Your calm environment is exactly what a recovering or senior rescue animal needs to thrive. You will help an animal heal away from concrete kennel floors while enjoying gentle companionship.`,
        suitablePetsExample: ['Archie (7yo Lab mix)', 'Bella (Quiet Beagle)', 'Charlie (Post-op Knee Recovery)'],
        tipsForSuccess: [
          'All veterinary follow-up appointments and prescription medications are 100% covered by the shelter.',
          'Provide a soft rug or orthopaedic bed near your desk or couch.',
          'Short, gentle 15-minute sniff walks around your Adelaide suburb are plenty.'
        ]
      };
    } else {
      rec = {
        profileTitle: 'The Adelaide Active Trail Partner',
        petType: 'Friendly Medium-to-Large Rescue Dog',
        idealDuration: '1 to 2 Weeks Flexible Placement',
        matchScore: 97,
        description: `With your space and availability, you can make a huge impact on South Australia’s highest shelter demographic: active medium-to-large dogs who need exercise and basic home guidance.`,
        suitablePetsExample: ['Barney (Staffy Cross)', 'Rusty (Red Kelpie)', 'Bella (Cattle Dog Mix)'],
        tipsForSuccess: [
          'Explore River Torrens Linear Park or Belair National Park on-leash.',
          'Shelter staff will brief you on loose-leash walking and positive reward techniques.',
          'Full cost of food, harness, and crate is 100% provided by partner shelters.'
        ]
      };
    }

    setResult(rec);
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({
      housingType: '',
      availability: '',
      activityLevel: '',
      experience: '',
      preferredSize: '',
      duration: ''
    });
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#5E8B60]">
          Interactive 60-Second Assessment
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#333333] font-display">
          Find Your Ideal Adelaide Foster Match
        </h1>
        <p className="text-xs sm:text-sm text-stone-600">
          Answer 6 quick lifestyle questions to discover which shelter pet species, size, and duration perfectly align with your Adelaide home.
        </p>
      </div>

      {!result ? (
        /* Quiz Interface */
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-md">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-bold text-stone-500 mb-2">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span className="text-[#5E8B60] font-mono">{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#5E8B60] transition-all duration-300 rounded-full"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Current Question */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#333333] font-display mb-1">
                {questions[currentStep].title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-500">
                {questions[currentStep].subtitle}
              </p>
            </div>

            {/* Options Grid */}
            <div className="space-y-3">
              {questions[currentStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(questions[currentStep].id as keyof QuizAnswers, opt.value)}
                  className="w-full p-4 text-left rounded-2xl border border-stone-200 hover:border-[#5E8B60] hover:bg-[#FFF9F2] transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <span className="font-bold text-sm text-[#333333] group-hover:text-[#5E8B60] block">
                      {opt.label}
                    </span>
                    <span className="text-xs text-stone-500 block mt-0.5">
                      {opt.tip}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-stone-400 group-hover:text-[#5E8B60] self-end sm:self-center shrink-0">
                    Select →
                  </span>
                </button>
              ))}
            </div>

            {/* Back Button */}
            {currentStep > 0 && (
              <div className="pt-4 border-t border-stone-100 flex justify-between items-center text-xs">
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="font-bold text-stone-500 hover:text-stone-800"
                >
                  ← Back to Previous Question
                </button>
                <span className="text-stone-400">Takes less than 1 minute</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Result Card */
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xl space-y-8 animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EBF3EC] text-[#3F6341] rounded-full text-xs font-bold mb-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5E8B60]" />
                <span>Personalised Assessment Result</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] font-display">
                {result.profileTitle}
              </h2>
            </div>
            <div className="bg-[#5E8B60] text-white p-4 rounded-2xl text-center shrink-0 min-w-[120px]">
              <span className="text-2xl font-black font-display tabular-nums">{result.matchScore}%</span>
              <span className="text-[11px] block font-medium text-white/80">Lifestyle Match</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-[#FFF9F2] rounded-2xl border border-stone-200/80">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#5E8B60] block mb-1">Recommended Species & Size</span>
              <p className="text-base font-bold text-[#333333]">{result.petType}</p>
            </div>
            <div className="p-4 bg-[#FFF9F2] rounded-2xl border border-stone-200/80">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4A261] block mb-1">Recommended Duration</span>
              <p className="text-base font-bold text-[#333333]">{result.idealDuration}</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base text-[#333333] mb-2">Why This is Your Ideal Match</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              {result.description}
            </p>
          </div>

          {/* Suitable Pets Waiting in Adelaide */}
          <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200">
            <span className="text-xs font-bold uppercase tracking-wider text-[#333333] block mb-2">
              Example Pets In Adelaide Shelters Matching You:
            </span>
            <div className="flex flex-wrap gap-2">
              {result.suitablePetsExample.map((pet, idx) => (
                <span key={idx} className="bg-white px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-semibold text-stone-700">
                  🐾 {pet}
                </span>
              ))}
            </div>
          </div>

          {/* Tips for Success */}
          <div>
            <h3 className="font-bold text-sm text-[#333333] mb-3">Carer Tips for Your Setup:</h3>
            <div className="space-y-2">
              {result.tipsForSuccess.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                  <CheckCircle2 className="w-4 h-4 text-[#5E8B60] shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => onApplyWithMatch(result.profileTitle)}
              className="w-full sm:flex-1 py-3.5 px-6 bg-[#F4A261] hover:bg-[#e76f51] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Apply With This Matched Profile</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleRestart}
              className="w-full sm:w-auto py-3.5 px-6 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Quiz</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
