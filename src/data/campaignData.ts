import { ShelterPartner, FosterStory, OutdoorLocation, CommunityEvent } from '../types';

export const ADELAIDE_SHELTERS: ShelterPartner[] = [
  {
    id: 'awl-sa',
    name: 'Animal Welfare League SA',
    shortName: 'AWL SA',
    suburb: 'Wingfield',
    address: '1-19 Cormack Road, Wingfield SA 5013',
    phone: '(08) 8348 1300',
    fosterEmail: 'foster@awl.org.au',
    urgentNeeds: ['Large dog weekend respite', 'Kitten nursery foster', 'Post-surgery quiet homes'],
    capacityStatus: 'Critical',
    description: 'South Australia’s premier animal welfare centre caring for over 4,000 lost and abandoned pets every year.',
    website: 'https://awl.org.au'
  },
  {
    id: 'rspca-sa',
    name: 'RSPCA South Australia',
    shortName: 'RSPCA SA',
    suburb: 'O’Halloran Hill',
    address: 'Samstag Animal Care Campus, Majors Road, O’Halloran Hill SA 5158',
    phone: '1300 477 722',
    fosterEmail: 'fostercare@rspcasa.org.au',
    urgentNeeds: ['Working dog breeds respite', 'Senior cats', '48-hour decompression care'],
    capacityStatus: 'High',
    description: 'Dedicated to preventing animal cruelty and finding safe temporary and permanent homes across SA.',
    website: 'https://rspcasa.org.au'
  },
  {
    id: 'sa-dog-rescue',
    name: 'SA Dog Rescue',
    shortName: 'SADR',
    suburb: 'Adelaide Metro Hub',
    address: 'Mobile Rescue Network & Adelaide Adoption Days',
    phone: '0408 812 770',
    fosterEmail: 'volunteer@sadogrescue.com',
    urgentNeeds: ['Urgent pound rescue dogs', 'Puppy pairs', 'Patience with timid rescues'],
    capacityStatus: 'Critical',
    description: '100% foster-based charity rescuing abandoned dogs and cats from regional councils and pounds across SA.',
    website: 'https://sadogrescue.com'
  },
  {
    id: 'cat-adoption-foundation',
    name: 'Cat Adoption Foundation SA',
    shortName: 'CAF SA',
    suburb: 'Findon',
    address: 'Findon Veterinary Foster Network, SA 5023',
    phone: '0421 959 514',
    fosterEmail: 'foster@cafoundation.org.au',
    urgentNeeds: ['Apartment-friendly indoor cats', 'Mother cats & neonatal litters'],
    capacityStatus: 'High',
    description: 'Specialised no-kill rescue dedicated to giving South Australian cats second chances through home-based foster care.',
    website: 'https://cafoundation.org.au'
  }
];

export const FOSTER_STORIES: FosterStory[] = [
  {
    id: 'story-luna',
    petName: 'Luna',
    species: 'dog',
    breed: 'Kelpie Cross',
    age: '2 years',
    carerName: 'Sophie M.',
    suburb: 'Norwood',
    fosterDuration: '48-Hour Weekend',
    category: 'Weekend',
    quote: 'As a junior doctor working long weekday shifts, adopting wasn’t fair. But having Luna for 48 hours brought incredible joy to my weekend, and helped her decompress from kennel noise.',
    fullStory: 'Luna was hyper-vigilant inside the shelter after 3 weeks in boarding. Just two nights in a quiet Norwood flat with morning jogs around Victoria Park helped her relax completely. She showed her true affectionate nature, which was filmed for her adoption profile. She was adopted four days later!',
    beforeStatus: 'Anxious, barking in shelter run, overstimulated by concrete kennel echo',
    afterStatus: 'Calm, sleeping soundly on rug, perfectly loose-leash walking on park paths',
    image: '', // Will be mapped to generated photo
    metrics: {
      shelterDaysAvoided: 4,
      healthImprovement: 'Cortisol stress dropped by 65%',
      adoptionOutcome: 'Adopted by a family in Stirling'
    }
  },
  {
    id: 'story-buster',
    petName: 'Buster',
    species: 'dog',
    breed: 'Staffordshire Bull Terrier Mix',
    age: '4 years',
    carerName: 'Liam & Marcus',
    suburb: 'Bowden',
    fosterDuration: '2 Weeks Respite',
    category: 'Medical',
    quote: 'We live in a rental apartment in Bowden. The shelter supplied his orthopaedic bed, medication, and high-protein food. Zero out-of-pocket expenses, just pure gratitude.',
    fullStory: 'Buster needed 14 days of quiet recovery after minor cruciate surgery. In a crowded shelter with concrete floors, resting is nearly impossible. In Liam’s ground-floor apartment with a soft rug, Buster recovered ahead of schedule and learned basic house manners.',
    beforeStatus: 'Post-op confinement stress, frustrated by kennel enclosure',
    afterStatus: 'Fully healed surgical knee, house-trained, mastered gentle greeting',
    image: '',
    metrics: {
      shelterDaysAvoided: 14,
      healthImprovement: 'Full recovery, weight stabilized',
      adoptionOutcome: 'Adopted by an active couple in Glenelg'
    }
  },
  {
    id: 'story-milo-pip',
    petName: 'Milo & Pip',
    species: 'cat',
    breed: 'Domestic Short Hair (Brothers)',
    age: '5 months',
    carerName: 'Chloe T.',
    suburb: 'Prospect',
    fosterDuration: '10 Days Student Break',
    category: 'Weekend',
    quote: 'Fostering over university mid-sem break gave me study companions without worrying about what happens when exams end. The shelter even gave me litter and food trays.',
    fullStory: 'These two timid ginger brothers arrived during peak kitten season when Adelaide shelters were at 120% capacity. Chloe hosted them in her sunlit spare room. After 48 hours of gentle play with cardboard boxes and soft blankets, both were purring on her lap.',
    beforeStatus: 'Hissing behind shelter cubby, frightened of sudden movements',
    afterStatus: 'Confident lap cats, sociable, eager for head scratches',
    image: '',
    metrics: {
      shelterDaysAvoided: 10,
      healthImprovement: 'Gained healthy weight, fully socialised',
      adoptionOutcome: 'Adopted together by a family in Unley'
    }
  },
  {
    id: 'story-archie',
    petName: 'Archie',
    species: 'dog',
    breed: 'Labrador & Golden Retriever Mix',
    age: '7 years',
    carerName: 'Graeme & Helen',
    suburb: 'Brighton',
    fosterDuration: '1 Month Senior Respite',
    category: 'Senior',
    quote: 'We are active retirees who love walking down Brighton Beach every sunset. Fostering senior Archie gave us the companionship we missed without a 15-year commitment.',
    fullStory: 'Archie had surrendered after his elderly owner moved into residential care. The shelter was heartbreakingly loud for an older dog. Graeme and Helen gave him quiet dignity, coastal strolls, and belly rubs. Two weeks in, a visiting neighbour fell head over heels and officially adopted him!',
    beforeStatus: 'Depressed appetite, stiff joints from cold shelter floor',
    afterStatus: 'Revitalised stride, wagging tail, shining coat from beach walks',
    image: '',
    metrics: {
      shelterDaysAvoided: 30,
      healthImprovement: 'Joint stiffness reduced, bright eyes',
      adoptionOutcome: 'Foster-to-Adopt completed in Brighton'
    }
  }
];

export const ADELAIDE_OUTDOOR_LOCATIONS: OutdoorLocation[] = [
  {
    id: 'vic-park',
    name: 'Victoria Park / Pakapakanthi',
    suburb: 'Adelaide CBD / East Park Lands',
    type: 'park',
    distanceFromCBD: '1.2 km (5 min)',
    fenced: true,
    offLeash: true,
    waterFacilities: true,
    shade: true,
    description: 'Huge open grass parklands with fenced agility zones, expansive wetland walking paths, and shaded eucalyptus trees.',
    bestFor: 'High-energy dogs needing open sprint space and social play',
    coordinates: { x: 55, y: 48 },
    highlight: 'Dedicated off-leash wetland loop & fresh dog drinking fountains'
  },
  {
    id: 'north-adelaide-dog-park',
    name: 'North Adelaide Dog Park (Ngampa Yarta)',
    suburb: 'North Adelaide',
    type: 'park',
    distanceFromCBD: '2.5 km (7 min)',
    fenced: true,
    offLeash: true,
    waterFacilities: true,
    shade: true,
    description: 'Fully double-gated dual enclosures separating small/timid dogs from active large runners. Features obstacles and benches.',
    bestFor: 'First-time foster dogs getting used to outdoor socialization safely',
    coordinates: { x: 48, y: 38 },
    highlight: 'Dual small & large dog segregated fenced paddocks'
  },
  {
    id: 'river-torrens-trail',
    name: 'River Torrens Linear Park Trail',
    suburb: 'Adelaide to Lockleys',
    type: 'trail',
    distanceFromCBD: 'Direct trail along river',
    fenced: false,
    offLeash: false,
    waterFacilities: true,
    shade: true,
    description: 'Paved, scenic 30km walking corridor following the river red gums, pelicans, and ducks. On-leash only for stress-free calm walks.',
    bestFor: 'Gentle on-leash training, reactive or recovering foster dogs',
    coordinates: { x: 40, y: 44 },
    highlight: 'Continuous river views, zero vehicle traffic, tranquil shade'
  },
  {
    id: 'henley-beach',
    name: 'Henley Beach Coastal Esplanade',
    suburb: 'Henley Beach',
    type: 'beach',
    distanceFromCBD: '10.5 km (18 min)',
    fenced: false,
    offLeash: true,
    waterFacilities: true,
    shade: false,
    description: 'Broad flat sandy foreshore with tidal pools. Off-leash permitted before 10am and after 8pm in daylight savings, and all day in winter.',
    bestFor: 'Water-loving dogs, sunset strolls, and ocean paddle fetch',
    coordinates: { x: 20, y: 46 },
    highlight: 'Dog-friendly outdoor cafes at Henley Square for puppaccinos'
  },
  {
    id: 'glenelg-foreshore',
    name: 'Glenelg Foreshore & Patawalonga',
    suburb: 'Glenelg',
    type: 'beach',
    distanceFromCBD: '11.8 km (20 min)',
    fenced: false,
    offLeash: true,
    waterFacilities: true,
    shade: true,
    description: 'Scenic salt-breeze marina and beach stretch with wide promenade walks and gentle surf. Great for evening socialization.',
    bestFor: 'Confidence building around calm sights, sounds, and other dogs',
    coordinates: { x: 24, y: 62 },
    highlight: 'Marina walkway loops & grassy picnic reserves'
  },
  {
    id: 'belair-national-park',
    name: 'Belair National Park Walking Trails',
    suburb: 'Belair / Adelaide Hills',
    type: 'trail',
    distanceFromCBD: '12.0 km (18 min)',
    fenced: false,
    offLeash: false,
    waterFacilities: true,
    shade: true,
    description: 'One of the few SA National Parks where dogs on lead are welcomed. Lush native bushland, heritage pines, and gentle trails.',
    bestFor: 'Nature lovers wanting a peaceful bush walk with a gentle companion',
    coordinates: { x: 62, y: 72 },
    highlight: 'Kookaburras, shaded pine forest trails, and cool hills air'
  },
  {
    id: 'hazelwood-park',
    name: 'Hazelwood Park & First Creek',
    suburb: 'Burnside',
    type: 'park',
    distanceFromCBD: '5.2 km (10 min)',
    fenced: false,
    offLeash: true,
    waterFacilities: true,
    shade: true,
    description: 'Enormous majestic river red gums, winding shallow creek, and lush green lawns in the eastern foothills.',
    bestFor: 'Relaxed weekend strolls with shaded picnic spots',
    coordinates: { x: 66, y: 52 },
    highlight: 'Cool canopy shade even on 30°C sunny Adelaide afternoons'
  },
  {
    id: 'awl-wingfield-hub',
    name: 'AWL Wingfield Volunteer Hub',
    suburb: 'Wingfield',
    type: 'shelter-hub',
    distanceFromCBD: '11.5 km (15 min)',
    fenced: true,
    offLeash: false,
    waterFacilities: true,
    shade: true,
    description: 'Primary collection point for foster crates, food supplies, and veterinary appointments for North & West Adelaide carers.',
    bestFor: 'Foster carer induction, supply restocking, and volunteer dog walking',
    coordinates: { x: 42, y: 22 },
    highlight: 'Drive-through foster food pantry & dedicated foster liaison office'
  }
];

export const UPCOMING_EVENTS: CommunityEvent[] = [
  {
    id: 'event-1',
    title: 'Adelaide Park Lands Foster Pack Walk',
    date: 'Saturday, 14 Nov',
    time: '9:30 AM – 11:30 AM',
    location: 'Victoria Park / Pakapakanthi Grandstand',
    suburb: 'Adelaide',
    attendeesCount: 48,
    type: 'Walk & Meet',
    description: 'A relaxed guided walk for current foster carers, potential fosters, and rescue dogs. Behaviour trainers on hand with free treats and advice.'
  },
  {
    id: 'event-2',
    title: 'Henley Sunset Sandy Paws Social',
    date: 'Wednesday, 18 Nov',
    time: '5:30 PM – 7:00 PM',
    location: 'Henley Square to Grange Jetty',
    suburb: 'Henley Beach',
    attendeesCount: 34,
    type: 'Walk & Meet',
    description: 'Wind down after work with a coastal walk. Meet volunteer dog walkers and learn how to foster for just 48 hours over the weekend.'
  },
  {
    id: 'event-3',
    title: 'University of Adelaide Paws & De-stress Session',
    date: 'Tuesday, 24 Nov',
    time: '12:00 PM – 2:00 PM',
    location: 'Barr Smith Lawns, North Terrace Campus',
    suburb: 'Adelaide CBD',
    attendeesCount: 112,
    type: 'Uni Pop-Up',
    description: 'Come cuddle calm rescue dogs, talk with student foster carers, and discover how flexible exam-break fostering works.'
  },
  {
    id: 'event-4',
    title: 'Foster Carer 101 & First Aid Workshop',
    date: 'Sunday, 29 Nov',
    time: '10:00 AM – 12:30 PM',
    location: 'Samstag Animal Care Campus',
    suburb: 'O’Halloran Hill',
    attendeesCount: 26,
    type: 'Training Session',
    description: 'Hands-on practical training covering basic canine body language, safe introduction to homes, and decompression techniques.'
  }
];

export const FAQ_LIST = [
  {
    q: 'Does it cost anything to foster a pet in Adelaide?',
    a: 'Zero. Fostering through Pets & Protect SA partner shelters is 100% cost-free. Partner shelters provide all premium food, bowls, bedding, crates, harnesses, leads, kitty litter, flea/worming treatments, and cover all veterinary healthcare.'
  },
  {
    q: 'Can I foster if I rent an apartment or house in South Australia?',
    a: 'Yes! Under recent reforms to the South Australian Residential Tenancies Act, landlords cannot unreasonably refuse a tenant’s request to have a pet. Furthermore, because short-term fostering (such as 48 hours to 2 weeks) is temporary, partner shelters provide official carer letters that make approvals smooth and hassle-free.'
  },
  {
    q: 'What is 48-Hour Weekend Fostering?',
    a: 'Our signature "Weekend Respite" lets you pick up a shelter dog or cat on Friday afternoon and return them Monday morning. This provides the animal with vital decompression away from shelter noise and gives you joyful pet companionship without weekday schedule conflicts.'
  },
  {
    q: 'I work 9-to-5 or study full-time. Am I eligible?',
    a: 'Absolutely. Many of our shelter dogs and adult cats are happy to relax during office hours if exercised before and after work. We also have many work-from-home and weekend-only placements specifically suited to young professionals and students.'
  },
  {
    q: 'What happens if I get attached and want to adopt?',
    a: 'This is affectionately known as "foster failing", and we celebrate it! Foster carers always get first priority to formally adopt their foster pet before they are listed publicly.'
  },
  {
    q: 'What if the pet isn’t the right fit or an emergency arises?',
    a: 'You are never trapped. Every foster carer has access to a 24/7 shelter emergency support line. If a placement does not work out or your circumstances suddenly change, partner shelters arrange a swift, guilt-free return or transfer to another carer.'
  }
];

export const ADELAIDE_SUBURBS = [
  'Adelaide CBD (5000)',
  'North Adelaide (5006)',
  'Norwood (5067)',
  'Unley (5061)',
  'Prospect (5082)',
  'Bowden (5007)',
  'Glenelg (5045)',
  'Henley Beach (5022)',
  'Brighton (5048)',
  'Marion (5043)',
  'Mawson Lakes (5095)',
  'Modbury (5092)',
  'Stirling / Adelaide Hills (5152)',
  'Port Adelaide (5015)',
  'Salisbury (5108)',
  'Campbelltown (5074)',
  'Mitcham (5062)',
  'Burnside (5066)',
  'West Beach (5024)',
  'Mount Barker (5251)',
  'Other South Australia Suburb'
];
