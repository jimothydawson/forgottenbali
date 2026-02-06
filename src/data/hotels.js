/**
 * Forgotten Bali - Hotel / Sanctuary Data
 * Extracted from hotel detail pages for reusability.
 */

export const hotels = [
  {
    slug: "wakagangga",
    title: "WakaGangga",
    description:
      "Black sand beaches and sunset horizons at WakaGangga Resort in Tabanan, Bali.",
    days: "Day 1-2",
    location: "Tabanan",
    heroImage: "/assets/WakaGangga/aerial-beach.jpg",
    subtitle:
      "Where the journey begins. Black sand beaches and golden sunsets on Bali's untouched west coast.",
    dailyDetails: [
      {
        label: "Night 1",
        activity:
          "Gathering at WakaGangga for a slow reset on the volcanic west coast.",
      },
      {
        label: "Day 2",
        activity:
          "Exploring the UNESCO-listed Jatiluwih rice terraces before moving north.",
      },
    ],
    whyTitle: "The Perfect Reset",
    whyText: [
      "After a long flight, the last thing you need is the chaos of South Bali's tourist zones. WakaGangga offers something rare: genuine tranquility just an hour from the airport.",
      "Set on a dramatic black sand beach in Tabanan, this boutique property is where Bali's spiritual heritage meets untouched nature. The volcanic sands, the crashing waves, the endless horizon — it's the reset you didn't know you needed.",
      "Watch the sun sink into the Indian Ocean from your private terrace. Let the rhythm of the waves wash away the jet lag. Tomorrow, we head to the mountains.",
    ],
    whyImage: "/assets/WakaGangga/bedroom.jpg",
    gallery: [
      { url: "/assets/WakaGangga/aerial-beach.jpg", caption: "Remote volcanic sands." },
      { url: "/assets/WakaGangga/pool-sunset.jpg", caption: "Golden hour at the infinity pool." },
      { url: "/assets/WakaGangga/bedroom.jpg", caption: "Hand-carved traditional luxury." },
      { url: "/assets/WakaGangga/bath.jpg", caption: "Balinese open-air bathing." },
      { url: "/assets/WakaGangga/restaurant-sunset.jpg", caption: "Dinner by the breaking waves." },
    ],
    amenities: [
      { title: "Private Villas", detail: "Thatched-roof bungalows with private terraces" },
      { title: "Infinity Pool", detail: "Ocean-facing pool overlooking the beach" },
      { title: "Air Conditioning", detail: "Climate-controlled comfort in all rooms" },
      { title: "Free Wi-Fi", detail: "Stay connected throughout the property" },
      { title: "Restaurant & Bar", detail: "Fresh seafood and Indonesian cuisine" },
      { title: "Spa Services", detail: "Traditional Balinese massage treatments" },
    ],
    nextHotel: { name: "Munduk Moding Plantation", slug: "mmp" },
  },
  {
    slug: "mmp",
    title: "Munduk Moding Plantation",
    description:
      "Above the clouds at Munduk Moding Plantation - the iconic infinity pool and coffee plantation resort in Bali's highlands.",
    days: "Days 2-4",
    location: "Munduk",
    badge: "The Star",
    heroImage: "/assets/munduk-moding/Infinity-Pools-1024x683.webp",
    subtitle:
      "Above the clouds. The iconic infinity pool that defines Bali's highland luxury. Three nights of mountain magic.",
    dailyDetails: [
      { label: "Nights 2-4", activity: "Immersed in mountain luxury above the clouds." },
      { label: "Day 3", activity: "A deep dive into working coffee plantation heritage." },
      { label: "Day 4", activity: "Trekking the twin falls of Banyumala." },
    ],
    whyTitle: "The Star of the Show",
    whyText: [
      "This is the moment you've been waiting for. Munduk Moding Plantation isn't just a hotel — it's an experience that has graced a thousand Instagram feeds for good reason.",
      "Perched at 1,000 meters above sea level, the resort offers commanding views over rolling coffee plantations and jungle valleys that disappear into the clouds below. The famous infinity pool appears to float in the mist.",
      "We spend three nights here — the longest stay of the trip — because some places deserve to be savored, not rushed. Morning yoga overlooking the valley. Afternoon coffee plantation tours. Evenings watching the fog roll in.",
      "This is where wild luxury lives.",
    ],
    whyImage: "/assets/munduk-moding/Sunset-View-1-1024x683.webp",
    gallery: [
      { url: "/assets/munduk-moding/Infinity-Pools-1024x683.webp", caption: "Swimming above the clouds." },
      { url: "/assets/munduk-moding/Bali-Jacuzzi-1024x683.webp", caption: "Warm mountain rituals." },
      { url: "/assets/munduk-moding/Sunset-View-1-1024x683.webp", caption: "The misty mountain horizon." },
      { url: "/assets/munduk-moding/Coffee-in-Bali-1024x683.webp", caption: "A working plantation heritage." },
      { url: "/assets/munduk-moding/Bali-Fire-Pit-1024x683.webp", caption: "Evenings by the fire." },
    ],
    included: [
      {
        title: "Morning Yoga",
        detail:
          "Start each day with yoga on the resort's dedicated deck, overlooking the misty valley. Suitable for all levels.",
      },
      {
        title: "Coffee Plantation Tour",
        detail:
          "Learn how Bali's famous coffee is grown, harvested, and roasted. Includes tasting of specialty brews.",
      },
      {
        title: "Infinity Pool Access",
        detail:
          "The iconic pool is yours to enjoy. Best at sunrise when the mist sits heavy in the valley below.",
      },
      {
        title: "Guided Meditations",
        detail:
          "Morning and evening meditation sessions with James, designed for both beginners and experienced practitioners.",
      },
    ],
    amenities: [
      { title: "Private Villas", detail: "Individual cottages with panoramic views" },
      { title: "Famous Infinity Pool", detail: "The iconic cloud-level pool experience" },
      { title: "Air Conditioning", detail: "Cool mountain air, with AC backup" },
      { title: "Free Wi-Fi", detail: "Reliable connection throughout" },
      { title: "On-site Restaurant", detail: "Farm-to-table dining with valley views" },
      { title: "Spa & Wellness", detail: "Traditional treatments and massage" },
    ],
    nextHotel: { name: "Sanglung Villas", slug: "sanglung" },
  },
  {
    slug: "sanglung",
    title: "Sanglung Villas",
    description:
      "Total seclusion and breathtaking ocean views at Sanglung Villas in North Bali.",
    days: "Days 5-6",
    location: "Tejakula",
    heroImage: "/assets/sanglung/pool.jpg",
    subtitle:
      "The North Ridge. Total seclusion on a remote ridge overlooking the Bali Sea. This is the forgotten Bali.",
    dailyDetails: [
      { label: "Day 5", activity: "Trekking Sekumpul en route to the North coast." },
      { label: "Nights 5-6", activity: "Raw luxury and total ridge-top seclusion." },
      {
        label: "Day 6",
        activity: "Yeh Mampeh waterfalls and sunrise snorkeling at Tejakula.",
      },
    ],
    whyTitle: "North Coast Seclusion",
    whyText: [
      "As we cross the central mountains and descend towards the dry north coast, the landscape shifts. Sanglung Villas sits on a remote ridge, disconnected from the world.",
      "This is raw, untouched luxury. Each villa is a private sanctuary with its own infinity pool that seems to merge with the ocean on the distant horizon. There are no neighbors, no traffic, just the sound of the wind in the trees.",
      "From here, we explore the secret waterfalls and coastal temples that remain unknown to the tourist crowds. It's a place for deep reflection and absolute presence.",
    ],
    whyImage: "/assets/sanglung/ocean-view.jpg",
    gallery: [
      { url: "/assets/sanglung/pool.jpg", caption: "The edge of the North Ridge." },
      { url: "/assets/sanglung/ocean-view.jpg", caption: "Endless sea horizons." },
      { url: "/assets/sanglung/garden.jpg", caption: "Tropical seclusion." },
      { url: "/assets/sanglung/breakfast.jpg", caption: "Private morning moments." },
      { url: "/assets/sanglung/pool-ocean-view.jpg", caption: "Where the pool meets the sky." },
    ],
    amenities: [
      { title: "Private Infinity Pool", detail: "Each villa features its own pool with sea views" },
      { title: "Total Privacy", detail: "Remote location far from the tourist trail" },
      { title: "Ocean Views", detail: "Commanding views over the Bali Sea" },
      { title: "In-Villa Dining", detail: "Fresh, local meals served on your private terrace" },
      { title: "Yoga Deck", detail: "Perfect for sunrise practice above the ridge" },
      { title: "Local Guiding", detail: "Direct access to the north's hidden treasures" },
    ],
    nextHotel: { name: "Bambootel", slug: "bambootel" },
  },
  {
    slug: "bambootel",
    title: "Bambootel",
    description:
      "Sustainable luxury and bamboo architecture in the heart of Tampaksiring, Bali.",
    days: "Days 7-8",
    location: "Tampaksiring",
    heroImage: "/assets/bambootel-sawah-view/overview.jpg",
    subtitle:
      "Sacred Bamboo. Sustainable luxury in the heart of Bali's holy springs district. Architecture that breathes.",
    dailyDetails: [
      {
        label: "Day 7",
        activity: "Crossing the caldera toward the misty valley of Tampaksiring.",
      },
      {
        label: "Nights 7-8",
        activity: "Living architecture in the heart of the holy springs zone.",
      },
      { label: "Day 8", activity: "Sacred water rituals and private temple guidance." },
    ],
    whyTitle: "Living with Nature",
    whyText: [
      "In the village of Tampaksiring, famous for its holy springs and master woodcarvers, lies Bambootel. A testament to Bali's creative spirit and environmental stewardship.",
      "Constructed almost entirely from sustainable bamboo, the resort's architecture is a fluid, organic part of the jungle landscape. It\u2019s where innovative design meets ancestral wisdom.",
      "We stay here to be close to the island's spiritual heart. Tirta Empul and Pura Mengening are just minutes away, allowing us to arrive at sunrise, before the crowds, for a private purification ritual.",
    ],
    whyImage: "/assets/bambootel-sawah-view/jungle-setting.jpg",
    gallery: [
      { url: "/assets/bambootel-sawah-view/overview.jpg", caption: "The cathedral of bamboo." },
      {
        url: "/assets/bambootel-sawah-view/jungle-setting.jpg",
        caption: "Immersed in the Tampaksiring valley.",
      },
      { url: "/assets/bambootel-sawah-view/aerial-pool.jpg", caption: "Private jungle pools." },
      {
        url: "/assets/bambootel-sawah-view/room-exterior.jpg",
        caption: "Sustainable living architecture.",
      },
      {
        url: "/assets/bambootel-sawah-view/dinner-sunset.jpg",
        caption: "Culinary spirit in the wild.",
      },
    ],
    amenities: [
      { title: "Bamboo Architecture", detail: "Innovative, eco-friendly design using local bamboo" },
      { title: "Jungle Setting", detail: "Deep immersion in the Tampaksiring river valley" },
      { title: "Near Holy Springs", detail: "Minutes from Bali's most sacred water temples" },
      { title: "Gourmet Dining", detail: "Plant-forward cuisine and local delicacies" },
      { title: "Eco-Luxury", detail: "Zero-waste principles without compromising comfort" },
      { title: "Spiritual Tours", detail: "Curated access to local ceremonies and blessings" },
    ],
    nextHotel: { name: "Maya Sanur", slug: "maya-sanur" },
  },
  {
    slug: "maya-sanur",
    title: "Maya Sanur",
    description:
      "Beachfront elegance and a soft landing in Sanur for the final night of the expedition.",
    days: "Day 9-10",
    location: "Sanur",
    heroImage: "/assets/maya-sanur/pool.jpg",
    subtitle:
      "The Soft Landing. Beachfront elegance in Sanur for our final night together. A luxury conclusion to a wild journey.",
    dailyDetails: [
      { label: "Day 9", activity: "Final temple visits before a descent to the coast." },
      {
        label: "Night 9",
        activity: "Farewell sunset and celebratory dinner on the lagoon.",
      },
      { label: "Day 10", activity: "Slow morning in Sanur before your journey home." },
    ],
    whyTitle: "A Coastal Farewell",
    whyText: [
      'After nine days in the wild mountains and remote ridges, we return to the coast for a gentle decompression. Sanur, with its quiet lagoon and paved boardwalk, is the perfect "soft landing."',
      "Maya Sanur represents the pinnacle of modern Balinese beachfront luxury. We gather here for our final evening — a celebratory sunset followed by a farewell dinner where we reflect on the path we've traveled.",
      "Walk the beach at dawn, watch the traditional jukung boats, and enjoy the effortless comfort of one of Bali's most refined resorts before your journey home.",
    ],
    whyImage: "/assets/maya-sanur/pool-beach-overview.jpg",
    gallery: [
      { url: "/assets/maya-sanur/pool.jpg", caption: "The signature lagoon pool." },
      { url: "/assets/maya-sanur/pool-beach-overview.jpg", caption: "Direct access to the lagoon." },
      { url: "/assets/maya-sanur/bedroom.jpg", caption: "Modern beachfront elegance." },
      { url: "/assets/maya-sanur/restaurant.jpg", caption: "Gourmet coastal moments." },
      { url: "/assets/maya-sanur/pool-beach.jpg", caption: "A soft landing by the sea." },
    ],
    amenities: [
      { title: "Beachfront Location", detail: "Direct access to Sanur's calm lagoon beach" },
      { title: "Rooftop Garden", detail: "Panoramic views over the ocean and islands" },
      { title: "Luxury Spa", detail: "World-class treatments in a serene setting" },
      { title: "Sanctuary Pool", detail: "The resort's signature lagoon-style pool" },
      { title: "Fine Dining", detail: "Award-winning culinary experiences" },
      { title: "Beach Boardwalk", detail: "Kilometers of paved walking and cycling paths" },
    ],
    nextHotel: { name: "Forgotten Bali Home", slug: "/" },
  },
];
