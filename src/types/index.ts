export type PageId = 'home' | 'how-it-works' | 'quiz' | 'outdoor' | 'stories' | 'apply';

export interface ShelterPartner {
  id: string;
  name: string;
  shortName: string;
  suburb: string;
  address: string;
  phone: string;
  fosterEmail: string;
  urgentNeeds: string[];
  capacityStatus: 'Critical' | 'High' | 'Moderate';
  description: string;
  website: string;
}

export interface FosterStory {
  id: string;
  petName: string;
  species: 'dog' | 'cat';
  breed: string;
  age: string;
  carerName: string;
  suburb: string;
  fosterDuration: string;
  category: 'Weekend' | 'Medical' | 'Senior' | 'Foster-to-Adopt';
  quote: string;
  fullStory: string;
  beforeStatus: string;
  afterStatus: string;
  image: string;
  beforeImage?: string;
  metrics: {
    shelterDaysAvoided: number;
    healthImprovement: string;
    adoptionOutcome: string;
  };
}

export interface OutdoorLocation {
  id: string;
  name: string;
  suburb: string;
  type: 'park' | 'beach' | 'trail' | 'shelter-hub';
  distanceFromCBD: string;
  fenced: boolean;
  offLeash: boolean;
  waterFacilities: boolean;
  shade: boolean;
  description: string;
  bestFor: string;
  coordinates: { x: number; y: number }; // Relative coordinate on Adelaide vector map (0-100)
  highlight: string;
}

export interface CommunityEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  suburb: string;
  attendeesCount: number;
  type: 'Walk & Meet' | 'Shelter Open Day' | 'Uni Pop-Up' | 'Training Session';
  description: string;
}

export interface QuizAnswers {
  housingType: string;
  availability: string;
  activityLevel: string;
  experience: string;
  preferredSize: string;
  duration: string;
}

export interface PetRecommendation {
  profileTitle: string;
  petType: string;
  idealDuration: string;
  matchScore: number;
  description: string;
  suitablePetsExample: string[];
  tipsForSuccess: string[];
}

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  suburb: string;
  postcode: string;
  housingType: string;
  yardStatus: string;
  landlordConsent: string;
  availability: string;
  preferredDuration: string;
  petPreference: string[];
  hasOtherPets: string;
  otherPetDetails: string;
  experienceLevel: string;
  preferredShelter: string;
  notes: string;
  acceptedTerms: boolean;
}
