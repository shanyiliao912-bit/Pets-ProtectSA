import React, { useState } from 'react';
import { 
  Heart, Star, MessageCircle, Share2, Sparkles, Filter, 
  ArrowRight, CheckCircle2, ChevronRight, SlidersHorizontal, ThumbsUp 
} from 'lucide-react';
import { PageId, FosterStory } from '../../types';
import { FOSTER_STORIES } from '../../data/campaignData';
import { CAMPAIGN_IMAGES } from '../../assets/images';

interface Props {
  onNavigate: (page: PageId) => void;
  onOpenContact: () => void;
}

export const FosterStoriesPage: React.FC<Props> = ({ onNavigate, onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeStory, setActiveStory] = useState<FosterStory>(FOSTER_STORIES[0]);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  // Simulated Community Social Feed Data
  const socialPosts = [
    {
      id: 1,
      author: 'jess_adelaide_paws',
      location: 'Henley Beach, SA',
      time: '2 hours ago',
      caption: 'Took our 48-hour foster buddy Cooper for his very first beach sunrise at Henley. Seeing him discover waves for the first time made my entire week! 🌊🐾 #PetsAndProtectSA #FosterLove',
      likes: 142,
      comments: 18,
      tag: 'Weekend Foster',
      image: CAMPAIGN_IMAGES.beachWalk
    },
    {
      id: 2,
      author: 'bowden_carers',
      location: 'Plant 4 Bowden',
      time: '1 day ago',
      caption: 'Morning coffee with foster boy Buster! From scared in a shelter pen to relaxing under our cafe table. Fostering in an apartment is so much easier than people think. ☕🐶 #PetsAndProtectSA',
      likes: 219,
      comments: 31,
      tag: 'Apartment Life',
      image: CAMPAIGN_IMAGES.dogPark
    },
    {
      id: 3,
      author: 'chloe_unisa_life',
      location: 'Prospect, SA',
      time: '2 days ago',
      caption: 'Study break with the foster brothers Milo & Pip! Free food and litter supplied by the shelter made this a dream during exam month. 📚✨ #PetsAndProtectSA',
      likes: 308,
      comments: 42,
      tag: 'Student Foster',
      image: CAMPAIGN_IMAGES.catCozy
    }
  ];

  const toggleLike = (id: number) => {
    if (likedPosts.includes(id)) {
      setLikedPosts(likedPosts.filter(p => p !== id));
    } else {
      setLikedPosts([...likedPosts, id]);
    }
  };

  const filteredStories = FOSTER_STORIES.filter(s => 
    selectedCategory === 'All' || s.category === selectedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 pb-24">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#5E8B60]">
          Verified Adelaide Testimonials
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#333333] font-display">
          Foster Stories & Community Reviews
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          See the tangible transformations that happen when South Australian locals open their doors for just a few days. Real people, real pets, and lives changed forever.
        </p>
      </div>

      {/* Community Rating Scoreboard */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <div className="text-center md:border-r border-stone-200 md:pr-6">
            <span className="text-4xl font-extrabold text-[#333333] font-display">4.9</span>
            <div className="flex justify-center gap-1 text-[#F4A261] my-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs text-stone-500 font-medium">From 420+ Adelaide Foster Carers</p>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-600">
            <div className="p-3 bg-[#FFF9F2] rounded-xl border border-stone-200">
              <span className="font-bold text-[#5E8B60] block mb-0.5">100% Zero-Cost Rating</span>
              <p>Carers consistently report no hidden expenses. Food, vet care, and equipment were always fully provided.</p>
            </div>
            <div className="p-3 bg-[#FFF9F2] rounded-xl border border-stone-200">
              <span className="font-bold text-[#5E8B60] block mb-0.5">Prompt Shelter Support</span>
              <p>98% of foster carers felt thoroughly supported with 24/7 emergency coordinator backup and behavioral advice.</p>
            </div>
            <div className="p-3 bg-[#FFF9F2] rounded-xl border border-stone-200">
              <span className="font-bold text-[#5E8B60] block mb-0.5">Emotional Reward</span>
              <p>94% of carers said short-term fostering significantly improved their mental health and weekend happiness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Before & After Transformation Spotlight */}
      <section className="bg-[#EBF3EC] rounded-3xl p-6 sm:p-12 border border-[#5E8B60]/30 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3F6341]">The 48-Hour Difference</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] font-display mt-1">
              Interactive Before & After Decompression
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Observe how a noisy concrete shelter kennel compares to a peaceful Adelaide home setting for <strong>{activeStory.petName}</strong>.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 p-1 bg-white rounded-xl border border-stone-200">
            {FOSTER_STORIES.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveStory(s)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  activeStory.id === s.id ? 'bg-[#5E8B60] text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {s.petName}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Side-by-Side Comparison Container */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-stone-200 space-y-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-stone-100 rounded-xl border border-stone-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                  Before: Inside Adelaide Shelter
                </span>
                <p className="text-xs text-stone-700 leading-relaxed font-medium">
                  {activeStory.beforeStatus}
                </p>
                <div className="mt-3 text-[11px] text-red-600 bg-red-50 p-2 rounded border border-red-100">
                  ⚠️ Elevated stress hormones, high noise exposure
                </div>
              </div>

              <div className="p-4 bg-[#FFF9F2] rounded-xl border border-[#5E8B60]/30">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#5E8B60] block mb-1">
                  After: 48h in {activeStory.suburb} Home
                </span>
                <p className="text-xs text-stone-800 leading-relaxed font-medium">
                  {activeStory.afterStatus}
                </p>
                <div className="mt-3 text-[11px] text-[#3F6341] bg-[#EBF3EC] p-2 rounded border border-[#5E8B60]/30 font-bold">
                  ✓ {activeStory.metrics.healthImprovement}
                </div>
              </div>
            </div>

            {/* Carer Quote */}
            <div className="p-4 bg-stone-50 rounded-xl border-l-4 border-[#F4A261] text-xs text-stone-700 italic">
              "{activeStory.quote}"
              <span className="block mt-1 font-bold text-stone-900 not-italic">
                — {activeStory.carerName}, {activeStory.suburb} ({activeStory.fosterDuration})
              </span>
            </div>
          </div>

          {/* Outcome Details */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-[#333333] font-display">
              The Lifesaving Result
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {activeStory.fullStory}
            </p>

            <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-stone-500">Shelter Days Avoided:</span>
                <span className="font-bold text-[#5E8B60]">{activeStory.metrics.shelterDaysAvoided} Days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-500">Forever Outcome:</span>
                <span className="font-bold text-[#333333]">{activeStory.metrics.adoptionOutcome}</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('apply')}
              className="w-full py-3 px-5 bg-[#5E8B60] hover:bg-[#3F6341] text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Offer Respite to a Pet Like {activeStory.petName}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Filterable Carer Stories Gallery */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E8B60]">Diverse Experiences</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] font-display mt-1">
              Stories from Across Adelaide
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-1.5">
            {['All', 'Weekend', 'Medical', 'Senior'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  selectedCategory === cat ? 'bg-[#333333] text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat === 'All' ? 'All Stories' : `${cat} Respite`}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStories.map((story) => (
            <div 
              key={story.id}
              className="p-6 bg-white rounded-3xl border border-stone-200 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[#5E8B60] uppercase tracking-wider">
                    {story.breed} · {story.age}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FFF9F2] text-stone-700 border border-stone-200">
                    {story.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#333333] font-display">
                  {story.petName} & {story.carerName} ({story.suburb})
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed italic">
                  "{story.quote}"
                </p>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {story.fullStory}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-[#5E8B60]">
                  ✓ {story.metrics.adoptionOutcome}
                </span>
                <button
                  onClick={() => onNavigate('apply')}
                  className="font-bold text-[#F4A261] hover:underline"
                >
                  Apply to Foster →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Simulated Social Media Feed (#PetsAndProtectSA) */}
      <section className="bg-stone-50 rounded-3xl p-6 sm:p-10 border border-stone-200 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5E8B60]">Live Adelaide Community</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] font-display">
            Tagged #PetsAndProtectSA
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Adelaide foster carers share their weekend adventures, beach walks, and cozy sofa moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialPosts.map((post) => {
            const isLiked = likedPosts.includes(post.id);
            return (
              <div 
                key={post.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="p-3.5 flex items-center justify-between text-xs border-b border-stone-100">
                    <div>
                      <span className="font-bold text-[#333333]">@{post.author}</span>
                      <p className="text-[10px] text-stone-400">{post.location}</p>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                      {post.tag}
                    </span>
                  </div>

                  <div className="aspect-square w-full overflow-hidden bg-stone-100">
                    <img
                      src={post.image}
                      alt="Community foster story photo"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4 space-y-2">
                    <p className="text-xs text-stone-700 leading-relaxed">
                      {post.caption}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`flex items-center gap-1.5 transition-colors ${
                      isLiked ? 'text-red-600 font-bold' : 'hover:text-red-500'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                    <span>{post.likes + (isLiked ? 1 : 0)}</span>
                  </button>

                  <span className="flex items-center gap-1 text-[11px] text-stone-400">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{post.comments} comments</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <p className="text-xs text-stone-500 mb-3">
            Want to share your foster journey with the Adelaide community? Tag your photos with <strong>#PetsAndProtectSA</strong>
          </p>
          <button
            onClick={onOpenContact}
            className="text-xs font-bold text-[#5E8B60] underline"
          >
            Submit Your Carer Story to Our Team →
          </button>
        </div>
      </section>
    </div>
  );
};
