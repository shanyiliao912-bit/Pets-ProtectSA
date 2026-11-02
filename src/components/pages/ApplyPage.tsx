import React, { useState } from 'react';
import { 
  HeartHandshake, CheckCircle2, ShieldCheck, Heart, Sparkles, 
  Download, Printer, Phone, Mail, Clock, ArrowRight 
} from 'lucide-react';
import { PageId, ApplicationFormData } from '../../types';
import { ADELAIDE_SUBURBS, ADELAIDE_SHELTERS } from '../../data/campaignData';

interface Props {
  onNavigate: (page: PageId) => void;
  prefilledPreference?: string;
  prefilledShelter?: string;
}

export const ApplyPage: React.FC<Props> = ({ 
  onNavigate, 
  prefilledPreference, 
  prefilledShelter 
}) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    email: '',
    phone: '',
    suburb: ADELAIDE_SUBURBS[0],
    postcode: '5000',
    housingType: 'Apartment',
    yardStatus: 'No yard / Balcony only',
    landlordConsent: 'Yes, rental permits pets under SA law',
    availability: '48-Hour Weekend Respite (Fri-Mon)',
    preferredDuration: '48 Hours',
    petPreference: prefilledPreference ? [prefilledPreference] : ['Medium Dog (10-25kg)'],
    hasOtherPets: 'No',
    otherPetDetails: '',
    experienceLevel: 'First-time foster carer',
    preferredShelter: prefilledShelter || ADELAIDE_SHELTERS[0].name,
    notes: prefilledPreference ? `Matched via Quiz: ${prefilledPreference}` : '',
    acceptedTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  const handleCheckboxChange = (preference: string) => {
    if (formData.petPreference.includes(preference)) {
      setFormData({
        ...formData,
        petPreference: formData.petPreference.filter(p => p !== preference)
      });
    } else {
      setFormData({
        ...formData,
        petPreference: [...formData.petPreference, preference]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptedTerms) {
      alert('Please confirm that you agree to provide safe, temporary care under shelter guidelines.');
      return;
    }
    const generatedRef = `SA-FOSTER-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefNumber(generatedRef);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#5E8B60]">
          2-Minute Volunteer Registration
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#333333] font-display">
          Apply to Foster in Adelaide
        </h1>
        <p className="text-sm text-stone-600 leading-relaxed">
          Join our community of South Australian foster carers. 100% cost-free, flexible weekend or multi-week placements, and all vet care and food provided.
        </p>
      </div>

      {submitted ? (
        /* Celebratory Confirmation Screen */
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-stone-200 shadow-xl space-y-8 animate-in fade-in duration-300">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto bg-[#EBF3EC] rounded-full flex items-center justify-center text-[#5E8B60]">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5E8B60]">Application Received</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] font-display">
                Thank You, {formData.fullName}!
              </h2>
              <p className="text-sm text-stone-600 max-w-md mx-auto">
                You’re taking a life-changing step to relieve shelter overcrowding in South Australia.
              </p>
            </div>

            {/* Reference Badge */}
            <div className="inline-block p-4 bg-[#FFF9F2] rounded-2xl border border-stone-200/80 text-left max-w-sm w-full">
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="text-stone-500">Your Carer Reference:</span>
                <span className="font-mono font-bold text-[#5E8B60] text-sm">{refNumber}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-stone-500">Pickup Hub:</span>
                <span className="font-semibold text-stone-800">{formData.preferredShelter}</span>
              </div>
            </div>
          </div>

          {/* Next Steps Timeline */}
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-4">
            <h3 className="font-bold text-sm text-[#333333] font-display">What Happens Next:</h3>
            <div className="space-y-3 text-xs text-stone-600">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#5E8B60] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <strong className="text-stone-800">Shelter Phone Review (Within 24 Hours):</strong>
                  <p>Our foster coordinator will give you a friendly call or SMS to confirm your weekend plans and matched pet profile.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#5E8B60] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <strong className="text-stone-800">Starter Kit Collection:</strong>
                  <p>Collect your companion and free starter kit (premium food, bowls, bedding, harness, and treats) from your designated shelter.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#5E8B60] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <strong className="text-stone-800">24/7 Carer Support:</strong>
                  <p>You’ll receive a dedicated SMS link with emergency numbers, training tips, and dog park recommendations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => window.print()}
              className="flex-1 py-3 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4" />
              Print / Save Application PDF
            </button>
            <button
              onClick={() => onNavigate('outdoor')}
              className="flex-1 py-3 px-4 bg-[#5E8B60] hover:bg-[#3F6341] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              Explore Adelaide Dog Parks
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* The Application Form */
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-md space-y-8">
          {/* Section 1: Contact Details */}
          <div>
            <h2 className="text-lg font-bold text-[#333333] mb-4 pb-2 border-b border-stone-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#5E8B60] text-white text-xs flex items-center justify-center font-bold">1</span>
              <span>Your Details</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-stone-700 mb-1">Full Legal Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-200 bg-[#FFF9F2] focus:outline-hidden focus:border-[#5E8B60]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address *</label>
                <input
                  required
                  type="email"
                  placeholder="sarah@example.com.au"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-200 bg-[#FFF9F2] focus:outline-hidden focus:border-[#5E8B60]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Mobile Phone *</label>
                <input
                  required
                  type="tel"
                  placeholder="0400 123 456"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-200 bg-[#FFF9F2] focus:outline-hidden focus:border-[#5E8B60]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">South Australia Suburb *</label>
                <select
                  value={formData.suburb}
                  onChange={e => setFormData({ ...formData, suburb: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-200 bg-[#FFF9F2] focus:outline-hidden focus:border-[#5E8B60]"
                >
                  {ADELAIDE_SUBURBS.map((sub, idx) => (
                    <option key={idx} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Postcode *</label>
                <input
                  required
                  type="text"
                  maxLength={4}
                  placeholder="5000"
                  value={formData.postcode}
                  onChange={e => setFormData({ ...formData, postcode: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-200 bg-[#FFF9F2] focus:outline-hidden focus:border-[#5E8B60]"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Housing & Renting Situation */}
          <div>
            <h2 className="text-lg font-bold text-[#333333] mb-4 pb-2 border-b border-stone-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#5E8B60] text-white text-xs flex items-center justify-center font-bold">2</span>
              <span>Housing & Space</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Housing Type *</label>
                <select
                  value={formData.housingType}
                  onChange={e => setFormData({ ...formData, housingType: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-200 bg-[#FFF9F2] focus:outline-hidden focus:border-[#5E8B60]"
                >
                  <option value="Apartment / Flat">Apartment / Flat</option>
                  <option value="Unit / Townhouse">Unit / Townhouse</option>
                  <option value="House (Stand-alone)">House (Stand-alone)</option>
                  <option value="Student Sharehouse">Student Sharehouse</option>
                  <option value="Semi-Rural / Hills Property">Semi-Rural / Hills Property</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Yard / Outdoor Access *</label>
                <select
                  value={formData.yardStatus}
                  onChange={e => setFormData({ ...formData, yardStatus: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-200 bg-[#FFF9F2] focus:outline-hidden focus:border-[#5E8B60]"
                >
                  <option value="Secure high fences (1.8m+)">Secure high fences (1.8m+)</option>
                  <option value="Low/medium fence (1.2m)">Low/medium fence (1.2m)</option>
                  <option value="Enclosed courtyard / patio">Enclosed courtyard / patio</option>
                  <option value="Balcony only (Apartment)">Balcony only (Apartment)</option>
                  <option value="No yard / indoor only">No yard / indoor only</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-stone-700 mb-1">Are you renting or own your home? *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <label className="flex items-center gap-2 p-3 rounded-xl border border-stone-200 bg-[#FFF9F2] cursor-pointer text-xs">
                    <input
                      type="radio"
                      name="rentOrOwn"
                      defaultChecked
                      className="text-[#5E8B60]"
                    />
                    <span>Renting (Protected under SA tenancy laws)</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 rounded-xl border border-stone-200 bg-[#FFF9F2] cursor-pointer text-xs">
                    <input
                      type="radio"
                      name="rentOrOwn"
                      className="text-[#5E8B60]"
                    />
                    <span>Home Owner / Family Home</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Availability & Duration Preference */}
          <div>
            <h2 className="text-lg font-bold text-[#333333] mb-4 pb-2 border-b border-stone-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#5E8B60] text-white text-xs flex items-center justify-center font-bold">3</span>
              <span>Availability & Pet Preferences</span>
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Preferred Placement Format *</label>
                <select
                  value={formData.availability}
                  onChange={e => setFormData({ ...formData, availability: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-200 bg-[#FFF9F2] focus:outline-hidden focus:border-[#5E8B60]"
                >
                  <option value="48-Hour Weekend Respite (Fri-Mon)">48-Hour Weekend Respite (Friday PM – Monday AM)</option>
                  <option value="1-Week Placement">1-Week Placement</option>
                  <option value="2-Week Placement (Holiday / Decompression)">2-Week Placement (Holiday / Decompression)</option>
                  <option value="Medical / Quiet Post-Op Care">Medical / Quiet Post-Op Care</option>
                  <option value="Emergency On-Call Respite">Emergency On-Call Respite</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-2">Pets You Are Open to Fostering (Select all that apply) *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'Small Dog or Puppy (<10kg)',
                    'Medium Dog (10-25kg)',
                    'Large Gentle Giant (25kg+)',
                    'Adult / Senior Cat',
                    'Kitten Pair',
                    'Post-Surgery Quiet Respite'
                  ].map((pref, idx) => (
                    <label key={idx} className="flex items-center gap-2 p-2.5 rounded-xl border border-stone-200 bg-[#FFF9F2] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.petPreference.includes(pref)}
                        onChange={() => handleCheckboxChange(pref)}
                        className="rounded text-[#5E8B60] focus:ring-[#5E8B60]"
                      />
                      <span>{pref}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Any other pets currently living with you?</label>
                  <select
                    value={formData.hasOtherPets}
                    onChange={e => setFormData({ ...formData, hasOtherPets: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-200 bg-[#FFF9F2] focus:outline-hidden focus:border-[#5E8B60]"
                  >
                    <option value="No">No other pets (Household is pet-free)</option>
                    <option value="Yes, friendly resident dog">Yes, friendly resident dog</option>
                    <option value="Yes, resident cat">Yes, resident cat</option>
                    <option value="Yes, caged birds / pocket pets">Yes, caged birds / pocket pets</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Preferred Partner Shelter Hub *</label>
                  <select
                    value={formData.preferredShelter}
                    onChange={e => setFormData({ ...formData, preferredShelter: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-200 bg-[#FFF9F2] focus:outline-hidden focus:border-[#5E8B60]"
                  >
                    {ADELAIDE_SHELTERS.map((s) => (
                      <option key={s.id} value={s.name}>{s.name} ({s.suburb})</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Additional notes or questions for the shelter team</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Work from home Mondays, close to River Torrens trail, preferred start weekend..."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-200 bg-[#FFF9F2] focus:outline-hidden focus:border-[#5E8B60]"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Terms & Declarations */}
          <div className="pt-2 border-t border-stone-200 space-y-4">
            <label className="flex items-start gap-3 cursor-pointer text-xs text-stone-700">
              <input
                type="checkbox"
                required
                checked={formData.acceptedTerms}
                onChange={e => setFormData({ ...formData, acceptedTerms: e.target.checked })}
                className="mt-0.5 rounded text-[#5E8B60] focus:ring-[#5E8B60]"
              />
              <span>
                I agree to provide a safe, loving temporary environment for my foster pet in South Australia. I understand that food, equipment, and vet care are 100% provided by the shelter, and that I have access to 24/7 coordinator support.
              </span>
            </label>

            <button
              type="submit"
              className="w-full py-4 px-6 bg-[#F4A261] hover:bg-[#e76f51] text-white text-base font-bold rounded-2xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <HeartHandshake className="w-5 h-5" />
              <span>Submit Foster Application (100% Free)</span>
            </button>
            <p className="text-[11px] text-center text-stone-500">
              Zero registration fees · Confidential · Supported by South Australia's Animal Shelter Network
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
