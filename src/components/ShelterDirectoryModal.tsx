import React from 'react';
import { X, MapPin, Phone, Mail, ExternalLink, AlertTriangle, Clock } from 'lucide-react';
import { ADELAIDE_SHELTERS } from '../data/campaignData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onApplyForShelter?: (shelterName: string) => void;
}

export const ShelterDirectoryModal: React.FC<Props> = ({ isOpen, onClose, onApplyForShelter }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FFF9F2] rounded-2xl border border-stone-200 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-800 rounded-full hover:bg-stone-100 transition-colors"
          aria-label="Close directory"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 text-[#5E8B60]">
          <MapPin className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">South Australia Shelter Network</span>
        </div>

        <h3 className="text-2xl font-bold text-[#333333] mb-2 font-display">
          Adelaide Partner Shelter Directory
        </h3>
        <p className="text-sm text-stone-600 mb-6">
          Contact our vetted partner shelters directly for emergency foster intakes, weekend pick-ups, or supply collections.
        </p>

        <div className="space-y-4">
          {ADELAIDE_SHELTERS.map((shelter) => (
            <div 
              key={shelter.id}
              className="p-5 bg-white rounded-xl border border-stone-200 shadow-xs hover:border-[#5E8B60]/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div>
                  <h4 className="font-bold text-base text-[#333333]">{shelter.name}</h4>
                  <p className="text-xs text-stone-500">{shelter.suburb}, SA · {shelter.address}</p>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    shelter.capacityStatus === 'Critical'
                      ? 'bg-red-100 text-red-800 border border-red-200'
                      : 'bg-amber-100 text-amber-800 border border-amber-200'
                  }`}>
                    <AlertTriangle className="w-3 h-3" />
                    {shelter.capacityStatus} Capacity
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-600 mb-3">{shelter.description}</p>

              <div className="mb-3 p-2.5 bg-[#FFF9F2] rounded-lg border border-stone-200/60">
                <p className="text-[11px] font-semibold text-[#5E8B60] uppercase tracking-wider mb-1">Current Urgent Placements Needed:</p>
                <div className="flex flex-wrap gap-1.5">
                  {shelter.urgentNeeds.map((need, idx) => (
                    <span key={idx} className="text-xs text-stone-700 bg-white px-2 py-0.5 rounded border border-stone-200">
                      {need}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-100 text-xs">
                <div className="flex flex-wrap items-center gap-4 text-stone-600">
                  <a href={`tel:${shelter.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-1.5 hover:text-[#5E8B60] font-semibold">
                    <Phone className="w-3.5 h-3.5 text-[#5E8B60]" />
                    {shelter.phone}
                  </a>
                  <a href={`mailto:${shelter.fosterEmail}`} className="flex items-center gap-1.5 hover:text-[#5E8B60]">
                    <Mail className="w-3.5 h-3.5 text-stone-400" />
                    {shelter.fosterEmail}
                  </a>
                </div>

                {onApplyForShelter && (
                  <button
                    onClick={() => {
                      onApplyForShelter(shelter.name);
                      onClose();
                    }}
                    className="text-xs font-bold text-[#F4A261] hover:text-[#e76f51] hover:underline"
                  >
                    Apply for this shelter →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
