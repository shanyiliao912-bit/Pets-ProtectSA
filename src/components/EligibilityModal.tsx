import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { PageId } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

export const EligibilityModal: React.FC<Props> = ({ isOpen, onClose, onNavigate }) => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState({
    isResident: true,
    isOver18: true,
    canProvideSpace: true,
    hasRentalConsent: true,
  });

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-lg bg-[#FFF9F2] rounded-2xl border border-stone-200 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-800 rounded-full hover:bg-stone-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 text-[#5E8B60]">
          <ShieldCheck className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">South Australia Fast-Check</span>
        </div>

        <h3 className="text-2xl font-bold text-[#333333] mb-2 font-display">
          Are You Eligible to Foster in SA?
        </h3>
        <p className="text-sm text-stone-600 mb-6">
          Find out in 30 seconds if your home and lifestyle qualify for short-term pet care.
        </p>

        {step === 1 && (
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-xl border border-stone-200/80">
              <p className="font-semibold text-sm text-[#333333] mb-2">1. Do you live in Greater Adelaide or South Australia?</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setAnswers(prev => ({ ...prev, isResident: true }))}
                  className={`py-2.5 px-4 text-xs font-semibold rounded-lg border transition-all ${answers.isResident ? 'bg-[#5E8B60] text-white border-[#5E8B60]' : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'}`}
                >
                  Yes, in SA
                </button>
                <button
                  onClick={() => setAnswers(prev => ({ ...prev, isResident: false }))}
                  className={`py-2.5 px-4 text-xs font-semibold rounded-lg border transition-all ${!answers.isResident ? 'bg-[#5E8B60] text-white border-[#5E8B60]' : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'}`}
                >
                  No, Interstate
                </button>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-stone-200/80">
              <p className="font-semibold text-sm text-[#333333] mb-2">2. Are you 18 years of age or older?</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setAnswers(prev => ({ ...prev, isOver18: true }))}
                  className={`py-2.5 px-4 text-xs font-semibold rounded-lg border transition-all ${answers.isOver18 ? 'bg-[#5E8B60] text-white border-[#5E8B60]' : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'}`}
                >
                  Yes (18+)
                </button>
                <button
                  onClick={() => setAnswers(prev => ({ ...prev, isOver18: false }))}
                  className={`py-2.5 px-4 text-xs font-semibold rounded-lg border transition-all ${!answers.isOver18 ? 'bg-[#5E8B60] text-white border-[#5E8B60]' : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'}`}
                >
                  Under 18
                </button>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-stone-200/80">
              <p className="font-semibold text-sm text-[#333333] mb-2">3. Can you provide a safe indoor space for at least 48 hours?</p>
              <p className="text-xs text-stone-500 mb-2">Apartments, student units, and houses without yards all qualify for matched pets.</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setAnswers(prev => ({ ...prev, canProvideSpace: true }))}
                  className={`py-2.5 px-4 text-xs font-semibold rounded-lg border transition-all ${answers.canProvideSpace ? 'bg-[#5E8B60] text-white border-[#5E8B60]' : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'}`}
                >
                  Yes, I can
                </button>
                <button
                  onClick={() => setAnswers(prev => ({ ...prev, canProvideSpace: false }))}
                  className={`py-2.5 px-4 text-xs font-semibold rounded-lg border transition-all ${!answers.canProvideSpace ? 'bg-[#5E8B60] text-white border-[#5E8B60]' : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'}`}
                >
                  Unsure
                </button>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full mt-4 py-3 px-6 bg-[#F4A261] hover:bg-[#e76f51] text-white font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
            >
              See My Eligibility Result
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="text-center py-2 space-y-4">
            <div className="w-16 h-16 mx-auto bg-[#5E8B60]/10 rounded-full flex items-center justify-center text-[#5E8B60]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-[#5E8B60] uppercase tracking-wide">Result: Approved</span>
              <h4 className="text-xl font-bold text-[#333333]">You Qualify to Foster in Adelaide!</h4>
              <p className="text-xs text-stone-600 max-w-sm mx-auto">
                Whether you want a friendly dog for 48 hours over the weekend, a recovery cat for 2 weeks, or exam-break study buddies, shelters have a pet ready for you.
              </p>
            </div>

            <div className="text-left bg-stone-50 p-3.5 rounded-xl border border-stone-200 text-xs space-y-1.5 text-stone-700">
              <div className="flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-[#F4A261] shrink-0" />
                <span><strong>$0 Out of Pocket:</strong> Food, crate, bowls, and vet care are 100% supplied.</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-[#F4A261] shrink-0" />
                <span><strong>Renting in SA:</strong> Protected under SA residential tenancy reforms.</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-[#F4A261] shrink-0" />
                <span><strong>Flexible:</strong> Choose weekend respite (Fri-Mon) or 1-2 week placements.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                onClick={() => {
                  handleReset();
                  onNavigate('quiz');
                }}
                className="flex-1 py-2.5 px-4 bg-[#5E8B60] hover:bg-[#3F6341] text-white text-xs font-bold rounded-lg transition-colors"
              >
                Take the 60-Sec Match Quiz
              </button>
              <button
                onClick={() => {
                  handleReset();
                  onNavigate('apply');
                }}
                className="flex-1 py-2.5 px-4 bg-[#F4A261] hover:bg-[#e76f51] text-white text-xs font-bold rounded-lg transition-colors"
              >
                Apply Directly
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
