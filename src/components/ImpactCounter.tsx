import React, { useState } from 'react';
import { Heart, Sparkles, TrendingUp, ShieldCheck, Calendar, Award } from 'lucide-react';

export const ImpactCounter: React.FC = () => {
  const [fosterOption, setFosterOption] = useState<'48h' | '1week' | '2weeks' | 'monthly'>('48h');

  const impactData = {
    '48h': {
      days: 3,
      stressReduction: '65%',
      kennelCostSaved: '$180',
      description: 'Gives an overwhelmed shelter dog quiet sleep, healthy outdoor walks, and fresh adoption photos.'
    },
    '1week': {
      days: 7,
      stressReduction: '85%',
      kennelCostSaved: '$420',
      description: 'Allows timid rescue dogs or recovering cats to decompress, build confidence, and learn house manners.'
    },
    '2weeks': {
      days: 14,
      stressReduction: '95%',
      kennelCostSaved: '$840',
      description: 'Supports full post-surgery veterinary recovery or mother cats with nursing neonatal kittens.'
    },
    'monthly': {
      days: 30,
      stressReduction: '99%',
      kennelCostSaved: '$1,800',
      description: 'Senior pet sanctuary or extended behavioural transformation before forever adoption.'
    }
  };

  const selected = impactData[fosterOption];

  return (
    <div className="bg-[#5E8B60] text-white rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden relative">
      {/* Decorative subtle background pattern */}
      <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -left-12 -top-12 w-64 h-64 bg-[#F4A261]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold mb-2">
              <TrendingUp className="w-3.5 h-3.5 text-[#F4A261]" />
              <span>Real-Time Adelaide Impact Counter</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#FFF9F2]">
              South Australia Shelter Relief Scoreboard
            </h3>
          </div>
          <span className="text-xs text-white/80 max-w-xs sm:text-right">
            Updated weekly in collaboration with AWL SA, RSPCA SA & local rescue networks.
          </span>
        </div>

        {/* 4 Core Quantitative Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-[#FFF9F2] tabular-nums">
              842
            </span>
            <p className="text-xs sm:text-sm font-semibold text-white/90 mt-1">Pets Sheltered in Homes</p>
            <p className="text-[11px] text-white/70 mt-0.5">Across Greater Adelaide this year</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-[#F4A261] tabular-nums">
              14,290
            </span>
            <p className="text-xs sm:text-sm font-semibold text-white/90 mt-1">Shelter Kennel Days Saved</p>
            <p className="text-[11px] text-white/70 mt-0.5">Directly freeing critical emergency space</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-[#FFF9F2] tabular-nums">
              $0
            </span>
            <p className="text-xs sm:text-sm font-semibold text-white/90 mt-1">Carer Out-of-Pocket Cost</p>
            <p className="text-[11px] text-white/70 mt-0.5">Food, crates & vet bills 100% covered</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-[#F4A261] tabular-nums">
              94.2%
            </span>
            <p className="text-xs sm:text-sm font-semibold text-white/90 mt-1">Forever Adoption Rate</p>
            <p className="text-[11px] text-white/70 mt-0.5">Fostered pets find homes 3x faster</p>
          </div>
        </div>

        {/* Interactive Impact Estimator */}
        <div className="bg-[#2D4932] p-6 sm:p-8 rounded-2xl border border-white/15">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white font-display flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#F4A261]" />
                Calculate Your Personal Foster Impact
              </h4>
              <p className="text-xs text-white/80">
                Choose how much time you can spare to see what a difference you make.
              </p>
            </div>

            {/* Segmented Duration Switcher */}
            <div className="flex items-center gap-1 p-1 bg-black/20 rounded-xl">
              <button
                onClick={() => setFosterOption('48h')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  fosterOption === '48h' ? 'bg-[#F4A261] text-white shadow-xs' : 'text-white/70 hover:text-white'
                }`}
              >
                48h Weekend
              </button>
              <button
                onClick={() => setFosterOption('1week')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  fosterOption === '1week' ? 'bg-[#F4A261] text-white shadow-xs' : 'text-white/70 hover:text-white'
                }`}
              >
                1 Week
              </button>
              <button
                onClick={() => setFosterOption('2weeks')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  fosterOption === '2weeks' ? 'bg-[#F4A261] text-white shadow-xs' : 'text-white/70 hover:text-white'
                }`}
              >
                2 Weeks
              </button>
              <button
                onClick={() => setFosterOption('monthly')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  fosterOption === 'monthly' ? 'bg-[#F4A261] text-white shadow-xs' : 'text-white/70 hover:text-white'
                }`}
              >
                1 Month
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10 items-center">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-xs text-white/70 block">Kennel Days Saved</span>
              <span className="text-2xl font-extrabold text-[#F4A261] font-display tabular-nums">+{selected.days} Days</span>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-xs text-white/70 block">Stress Reduction</span>
              <span className="text-2xl font-extrabold text-[#FFF9F2] font-display tabular-nums">{selected.stressReduction}</span>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-xs text-white/70 block">Shelter Respite Value</span>
              <span className="text-2xl font-extrabold text-[#F4A261] font-display tabular-nums">{selected.kennelCostSaved}</span>
            </div>
          </div>

          <p className="text-xs text-white/80 mt-4 leading-relaxed">
            <strong>Outcome:</strong> {selected.description}
          </p>
        </div>
      </div>
    </div>
  );
};
