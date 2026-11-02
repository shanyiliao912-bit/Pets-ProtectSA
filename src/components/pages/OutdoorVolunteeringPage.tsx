import React, { useState } from 'react';
import { 
  MapPin, Compass, Waves, Trees, Footprints, Calendar, 
  CheckCircle2, Users, Clock, ExternalLink, Filter, Search, Award 
} from 'lucide-react';
import { PageId, OutdoorLocation } from '../../types';
import { ADELAIDE_OUTDOOR_LOCATIONS, UPCOMING_EVENTS } from '../../data/campaignData';
import { CAMPAIGN_IMAGES } from '../../assets/images';

interface Props {
  onNavigate: (page: PageId) => void;
  onOpenContact: () => void;
}

export const OutdoorVolunteeringPage: React.FC<Props> = ({ onNavigate, onOpenContact }) => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<OutdoorLocation>(ADELAIDE_OUTDOOR_LOCATIONS[0]);
  const [rsvpdEvents, setRsvpdEvents] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredLocations = ADELAIDE_OUTDOOR_LOCATIONS.filter(loc => {
    const matchesType = selectedType === 'all' || loc.type === selectedType;
    const matchesSearch = loc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          loc.suburb.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          loc.bestFor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const toggleRsvp = (eventId: string) => {
    if (rsvpdEvents.includes(eventId)) {
      setRsvpdEvents(rsvpdEvents.filter(id => id !== eventId));
    } else {
      setRsvpdEvents([...rsvpdEvents, eventId]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 pb-24">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#5E8B60]">
          Adelaide Outdoor Active Living
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#333333] font-display">
          Dog-Friendly Parks, Trails & Beaches
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          You don't need to foster for weeks to make a difference. Volunteer for a weekend walk, join community pack walks along the River Torrens, or take an active shelter dog for a sunset beach sprint.
        </p>
      </div>

      {/* Hero Banner Feature */}
      <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-200">
        <div className="aspect-16/9 md:aspect-21/9 w-full relative">
          <img
            src={CAMPAIGN_IMAGES.beachWalk}
            alt="Foster dog enjoying sunset sprint at Henley Beach South Australia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 md:left-10 md:bottom-10 max-w-xl text-white space-y-2">
            <span className="inline-block px-3 py-1 bg-[#F4A261] text-white text-xs font-bold rounded-full uppercase tracking-wider">
              "Doggy Day Out" Lending Program
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Lend Your Weekend Energy to a Shelter Dog
            </h2>
            <p className="text-xs sm:text-sm text-white/90">
              Pick up an approved shelter dog on Saturday morning for a 3-hour hike in Belair or a stroll at Victoria Park. Return them happy, relaxed, and tuckered out!
            </p>
            <div className="pt-2 flex gap-3">
              <button
                onClick={() => onNavigate('apply')}
                className="px-5 py-2.5 bg-white text-[#333333] hover:bg-stone-100 text-xs font-bold rounded-xl shadow-xs transition-colors"
              >
                Sign Up as a Volunteer Walker
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Adelaide Map & Directory */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E8B60]">Interactive Guide</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] font-display mt-1">
              Adelaide Pet-Friendly Spots & Shelter Hubs
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Select any spot on the map or list below to view fencing, off-leash zones, water stations, and travel distance from Adelaide CBD.
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Search parks, beaches, suburbs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-200 bg-[#FFF9F2] focus:outline-hidden focus:border-[#5E8B60]"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              selectedType === 'all' ? 'bg-[#5E8B60] text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            All Locations ({ADELAIDE_OUTDOOR_LOCATIONS.length})
          </button>
          <button
            onClick={() => setSelectedType('park')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              selectedType === 'park' ? 'bg-[#5E8B60] text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Fenced Parks & Agility
          </button>
          <button
            onClick={() => setSelectedType('beach')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              selectedType === 'beach' ? 'bg-[#5E8B60] text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Coastal Beaches
          </button>
          <button
            onClick={() => setSelectedType('trail')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              selectedType === 'trail' ? 'bg-[#5E8B60] text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Scenic Walking Trails
          </button>
          <button
            onClick={() => setSelectedType('shelter-hub')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              selectedType === 'shelter-hub' ? 'bg-[#5E8B60] text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Shelter Pickup Hubs
          </button>
        </div>

        {/* Interactive Map & Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Interactive Map Canvas */}
          <div className="lg:col-span-7 bg-[#EBF3EC] rounded-2xl p-4 border border-[#5E8B60]/30 relative aspect-4/3 overflow-hidden shadow-inner flex flex-col justify-between">
            {/* Map Header Overlay */}
            <div className="flex items-center justify-between text-[11px] font-bold text-[#3F6341] bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#5E8B60]/20 z-10">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#5E8B60]" />
                Greater Adelaide Dog Map (Gulf St Vincent to Adelaide Hills)
              </span>
              <span className="text-stone-500 font-mono">GPS · SA Metro</span>
            </div>

            {/* Custom SVG Vector Base Map of Adelaide Coast & Parklands */}
            <svg 
              viewBox="0 0 100 100" 
              className="absolute inset-0 w-full h-full pointer-events-none select-none opacity-40"
            >
              {/* Gulf St Vincent Coastline */}
              <path 
                d="M 12 0 Q 18 35, 22 55 T 26 100 L 0 100 L 0 0 Z" 
                fill="#d8e8f2" 
              />
              {/* River Torrens Line */}
              <path 
                d="M 90 20 Q 55 42, 38 45 T 18 47" 
                fill="none" 
                stroke="#5b92b6" 
                strokeWidth="1.5" 
                strokeDasharray="2,2" 
              />
              {/* Adelaide CBD Park Lands Ring */}
              <rect 
                x="46" 
                y="42" 
                width="14" 
                height="14" 
                fill="#c6decb" 
                stroke="#5E8B60" 
                strokeWidth="0.8" 
                rx="2" 
              />
              {/* Hills Region */}
              <path 
                d="M 75 0 L 100 0 L 100 100 L 70 100 Q 65 70, 75 35 Z" 
                fill="#d5e3d7" 
              />
            </svg>

            {/* Clickable Map Pins */}
            <div className="absolute inset-0 p-6">
              {filteredLocations.map((loc) => {
                const isSelected = selectedLocation.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all group z-20 focus:outline-hidden ${
                      isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                    }`}
                    title={loc.name}
                  >
                    <div className={`p-2 rounded-full shadow-md flex items-center justify-center transition-colors ${
                      isSelected 
                        ? 'bg-[#E76F51] text-white ring-4 ring-white' 
                        : loc.type === 'beach'
                        ? 'bg-sky-600 text-white'
                        : loc.type === 'shelter-hub'
                        ? 'bg-[#F4A261] text-white'
                        : 'bg-[#5E8B60] text-white'
                    }`}>
                      {loc.type === 'beach' ? (
                        <Waves className="w-3.5 h-3.5" />
                      ) : loc.type === 'trail' ? (
                        <Footprints className="w-3.5 h-3.5" />
                      ) : (
                        <MapPin className="w-3.5 h-3.5" />
                      )}
                    </div>
                    {/* Hover Tooltip */}
                    <div className="hidden sm:group-hover:block absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 whitespace-nowrap bg-[#333333] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-lg pointer-events-none">
                      {loc.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Map Legend */}
            <div className="z-10 bg-white/90 backdrop-blur-xs p-2 rounded-xl border border-stone-200 text-[10px] flex items-center gap-3 text-stone-600 self-start">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#5E8B60]" />
                Parks
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-sky-600" />
                Beaches
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#F4A261]" />
                Shelter Hubs
              </span>
            </div>
          </div>

          {/* Location Detail Card */}
          <div className="lg:col-span-5 bg-stone-50 rounded-2xl p-6 border border-stone-200 space-y-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[11px] font-bold text-[#5E8B60] uppercase tracking-wider">
                  {selectedLocation.suburb} · {selectedLocation.distanceFromCBD}
                </span>
                <h3 className="text-xl font-bold text-[#333333] font-display mt-0.5">
                  {selectedLocation.name}
                </h3>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 bg-white rounded border border-stone-200 text-stone-600">
                {selectedLocation.type.toUpperCase()}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {selectedLocation.description}
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-2 gap-2 text-xs text-stone-700 pt-2 border-t border-stone-200">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className={`w-3.5 h-3.5 ${selectedLocation.offLeash ? 'text-[#5E8B60]' : 'text-stone-300'}`} />
                <span>{selectedLocation.offLeash ? 'Off-Leash Permitted' : 'Strictly On-Leash'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className={`w-3.5 h-3.5 ${selectedLocation.fenced ? 'text-[#5E8B60]' : 'text-stone-300'}`} />
                <span>{selectedLocation.fenced ? 'Fully Fenced Area' : 'Open Boundaries'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className={`w-3.5 h-3.5 ${selectedLocation.waterFacilities ? 'text-[#5E8B60]' : 'text-stone-300'}`} />
                <span>{selectedLocation.waterFacilities ? 'Dog Water Fountains' : 'Bring Own Water'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className={`w-3.5 h-3.5 ${selectedLocation.shade ? 'text-[#5E8B60]' : 'text-stone-300'}`} />
                <span>{selectedLocation.shade ? 'Abundant Gum Shade' : 'Limited Shade'}</span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs">
              <p className="font-semibold text-[#333333] mb-1">Best For:</p>
              <p className="text-stone-600">{selectedLocation.bestFor}</p>
            </div>

            <div className="p-3 bg-[#FFF9F2] rounded-xl border border-stone-200 text-xs text-stone-700">
              <p className="font-semibold text-[#5E8B60] mb-0.5">Local Adelaide Tip:</p>
              <p>{selectedLocation.highlight}</p>
            </div>

            <button
              onClick={() => {
                const query = encodeURIComponent(`${selectedLocation.name}, Adelaide South Australia`);
                window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
              }}
              className="w-full py-2.5 px-4 bg-[#5E8B60] hover:bg-[#3F6341] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Open in Google Maps Directions</span>
              <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
            </button>
          </div>
        </div>
      </section>

      {/* Community Events & Walking Clubs Calendar */}
      <section className="bg-stone-50 rounded-3xl p-6 sm:p-10 border border-stone-200 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E8B60]">Join the Movement</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] font-display mt-1">
              Adelaide Community Pack Walks & Pop-Ups
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Connect with fellow animal lovers, walk shelter dogs with certified trainers, or attend our university cuddle sessions.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="text-xs font-bold text-[#5E8B60] hover:underline"
          >
            Host a Community Walk →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {UPCOMING_EVENTS.map((evt) => {
            const isRsvpd = rsvpdEvents.includes(evt.id);
            return (
              <div 
                key={evt.id}
                className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#EBF3EC] text-[#3F6341]">
                      {evt.type}
                    </span>
                    <span className="text-xs text-stone-500 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-stone-400" />
                      {evt.attendeesCount + (isRsvpd ? 1 : 0)} Attending
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#333333] font-display">
                    {evt.title}
                  </h3>

                  <div className="space-y-1 text-xs text-stone-600">
                    <p className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#F4A261]" />
                      <strong>{evt.date}</strong> · {evt.time}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#5E8B60]" />
                      {evt.location} ({evt.suburb})
                    </p>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed pt-1">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => toggleRsvp(evt.id)}
                    className={`py-2 px-4 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isRsvpd
                        ? 'bg-[#5E8B60] text-white shadow-xs'
                        : 'bg-[#FFF9F2] text-[#333333] border border-stone-200 hover:border-[#5E8B60]'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {isRsvpd ? 'RSVP Confirmed' : 'RSVP Free Spot'}
                  </button>

                  <span className="text-[11px] text-stone-400">All dog friendly</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Volunteer Dog Walking Callout */}
      <div className="bg-[#3F6341] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#FFF9F2]">
          Cannot House a Pet Right Now?
        </h3>
        <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto">
          Volunteer dog walking at Wingfield or O'Halloran Hill shelters is the perfect zero-commitment option. Get your steps in while giving rescue dogs sunshine and love!
        </p>
        <button
          onClick={() => onNavigate('apply')}
          className="px-6 py-3 bg-[#F4A261] hover:bg-[#e76f51] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors inline-flex items-center gap-2"
        >
          Sign Up for Volunteer Dog Walking
        </button>
      </div>
    </div>
  );
};
