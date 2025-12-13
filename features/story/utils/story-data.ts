import { BadgeCheck, Bike, Car, MapPin, Mountain, Ruler, UtensilsCrossed } from "lucide-react";
import { Tour } from "../types/story.types";



export const stories: Tour[] = [
    {
        id: 1,
        title: "MANALI – LEH – KHARDUNGLA",
        subtitle: "Your Himalayan MTB Adventure",
        date: "23 Aug 2024 - 01 Sep 2024",
        seat: "3 seats available",
        excerpt:
            "Experience the legendary Manali–Leh–Khardungla MTB expedition — a transformative journey across some of the highest and most scenic roads in the world.",
        description: `A 10-day Himalayan mountain biking adventure across glacial lakes, high passes, snow peaks, vast plains, cold deserts, and preserved culture. This world-renowned route is designed for riders seeking altitude, endurance, and spectacular landscapes.`,
        price: 74990,

        leftImage: "/images/bada-bhangal.webp",
        mapImage: "/images/tour-map.png",
        contourImage: "/images/contour.png",
        link: "/stories/1/manali",
        className: "absolute top-20 left-[8%] rotate-[-5deg]",
        video: "/videos/2.webm",
        source: { lat: 32.2432, lng: 77.1890 },
        destination: { lat: 34.1526, lng: 77.5771 },

        reviews: [
            { category: "Scenery & Views", rating: 5, max: 5 },
            { category: "Adventure Activities", rating: 5, max: 5 },
            { category: "Hospitality & Stay", rating: 4, max: 5 },
            { category: "Food & Local Cuisine", rating: 4, max: 5 },
            { category: "Travel Convenience", rating: 3, max: 5 }
        ],

        images: [
            "/images/manali/manali1.jpg",
            "/images/manali/manali2.jpeg",
            "/images/manali/manali3.jpeg",
            "/images/manali/manali4.jpg",
            "/images/manali/manali5.jpg",
            "/images/manali/manali6.jpg",
            "/images/manali/manali7.jpeg",
            "/images/manali/manali8.jpeg",
            "/images/manali/manali9.jpg",
            "/images/manali/manali10.jpg",
            "/images/manali/manali11.jpg",
            "/images/manali/manali12.jpeg",
            "/images/manali/manali13.webp",
            "/images/manali/manali14.jpeg",
            "/images/manali/manali15.jpg",
            "/images/manali/manali16.jpeg",
            "/images/manali/manali17.webp",
            "/images/manali/manali18.webp",
            "/images/manali/manali19.jpeg",
            "/images/manali/manali20.webp"
        ],

        // -----------------------------
        // MAIN CONTENT SECTIONS
        // -----------------------------
        content: [
            // STORY
            {
                type: "story",
                title: "Details",
                data: {
                    title: "Your Himalayan MTB Adventure Begins",
                    user_experience:
                        "Your journey begins in Manali (2,050m), surrounded by cedar forests and the roar of the Beas River. A short acclimatization ride prepares you for the high-altitude expedition ahead. The Cycle Circle team briefs you on the route, altitude protocols, nutrition strategy, and the monumental passes you will conquer in the coming days.",
                    author: "Cycle Circle Team",
                    date: "2024",
                    author_img: "/images/manali/rider-img.jpg"
                }
            },

            // ITINERARY
            {
                type: "itinerary",
                title: "Itinerary",
                data: [
                    {
                        day: "Day 0",
                        title: "Arrival in Manali",
                        description: [
                            "Arrive in Manali (2,050m)",
                            "Check-in & acclimatization ride",
                            "Group briefing on route & guidelines",
                            "Overnight in Manali"
                        ]
                    },
                    {
                        day: "Day 1",
                        title: "Manali → Sissu",
                        distance: "79 km",
                        description: [
                            "Ride via Rohtang Pass (3,978m)",
                            "Cross Palchan, Kothi & Khoksar",
                            "Overnight at Sissu"
                        ]
                    },
                    {
                        day: "Day 2",
                        title: "Sissu → Jispa",
                        distance: "52 km",
                        description: [
                            "Ascent to Gondla & descent to Tandi",
                            "Cross Chandra–Bhaga confluence",
                            "Overnight camping at Jispa (3,200m)"
                        ]
                    },
                    {
                        day: "Day 3",
                        title: "Jispa → Zing Zing Bar",
                        distance: "45 km",
                        description: [
                            "Steady ascent from Darcha",
                            "Visit Deepak Taal / Patseo Lake",
                            "Camp at Zing Zing Bar (4,270m)"
                        ]
                    },
                    {
                        day: "Day 4",
                        title: "Zing Zing Bar → Sarchu",
                        distance: "56 km",
                        passes: "Baralacha La (4,850m)",
                        description: [
                            "Climb to Baralacha La",
                            "Descend into Sarchu plains",
                            "Camp at Sarchu (4,290m)"
                        ]
                    },
                    {
                        day: "Day 5",
                        title: "Sarchu → Whiskey Nala",
                        distance: "47 km",
                        passes: "Nakee La (4,769m)",
                        description: [
                            "Gata Loops – 21 legendary hairpin bends",
                            "Descend to Whiskey Nala",
                            "Overnight camping"
                        ]
                    },
                    {
                        day: "Day 6",
                        title: "Whiskey Nala → Tsokar / Debring",
                        distance: "93 km",
                        passes: "Lachung La (5,059m)",
                        description: [
                            "Ride toward Pang",
                            "Climb to the flat More Plains",
                            "Camp at TsoKar Lake or Debring"
                        ]
                    },
                    {
                        day: "Day 7",
                        title: "Tsokar → Lato",
                        distance: "83 km",
                        passes: "Tanglang La (5,328m)",
                        description: [
                            "Climb to Tanglang La, one of the world’s highest passes",
                            "Wonderful descent to Lato (4,014m)"
                        ]
                    },
                    {
                        day: "Day 8",
                        title: "Lato → Leh",
                        distance: "70 km",
                        description: [
                            "Ride through scenic valleys",
                            "Pass Thiksey Monastery & Chortens Garden",
                            "Arrive in Leh (3,500m)"
                        ]
                    },
                    {
                        day: "Day 9",
                        title: "Leh → Khardung La → Leh",
                        distance: "45 km (Ride)",
                        description: [
                            "Ride to Khardung La, world’s highest motorable pass",
                            "Unmatched views from the summit",
                            "Return to Leh by vehicle & closing celebration"
                        ]
                    },
                    {
                        day: "Day 10",
                        title: "Departure",
                        description: [
                            "Depart from Leh (3,500m)",
                            "Keep buffer days for weather conditions"
                        ]
                    }
                ]
            },

            // PACKING LIST
            {
                type: "packing",
                title: "What to Pack?",
                data: [
                    // Essentials from PDF
                    { name: "Warm Clothes", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Jersey / Dry-fit T-shirts", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Gel-filled Cycling Shorts", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Full Finger Gloves", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Raincoat", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Shoes", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Socks", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Helmet", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Sunglasses", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Sunscreen & Creams", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Personal Medicines", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },

                    // Bike Accessories
                    { name: "Headlight", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Tail Light", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Water Bottles (2)", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Power Bank", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Phone Holder (Optional)", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Lube", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" }
                ]
            },

            // TESTIMONIALS
            {
                type: "testimonial",
                title: "Testimonials",
                data: [
                    {
                        name: "Riders From Last Expedition",
                        role: "Group Feedback",
                        comment:
                            "The Cycle Circle team handled altitude, logistics, nutrition, and riding support amazingly well. Every climb, descent, and campsite felt safe and unforgettable.",
                        image: "/images/manali/rider-img.jpg"
                    },
                    {
                        name: "Himalayan MTB Participant",
                        role: "Adventure Cyclist",
                        comment:
                            "Climbing Baralacha La, Lachung La, and Tanglang La was life-changing. The crew, the landscapes, the challenge — absolutely incredible.",
                        image: "/images/manali/rider-img.jpg"
                    }
                ]
            },

            // GALLERY
            {
                type: "gallery",
                title: "Gallery",
                data: [
                    "/images/manali/manali1.jpg",
                    "/images/manali/manali2.jpeg",
                    "/images/manali/manali3.jpeg",
                    "/images/manali/manali4.jpg",
                    "/images/manali/manali5.jpg",
                    "/images/manali/manali6.jpg",
                    "/images/manali/manali7.jpeg",
                    "/images/manali/manali8.jpeg",
                    "/images/manali/manali9.jpg",
                    "/images/manali/manali10.jpg",
                    "/images/manali/manali11.jpg",
                    "/images/manali/manali12.jpeg",
                    "/images/manali/manali13.webp",
                    "/images/manali/manali14.jpeg",
                    "/images/manali/manali15.jpg",
                    "/images/manali/manali16.jpeg",
                    "/images/manali/manali17.webp",
                    "/images/manali/manali18.webp",
                    "/images/manali/manali19.jpeg",
                    "/images/manali/manali20.webp"
                ]
            }
        ],

        // -----------------------------
        // RIGHT PANEL DETAILS
        // -----------------------------
        rightPanelDetails: [
            { icon: Bike, text: "10-Day Himalayan MTB Expedition" },
            { icon: Mountain, text: "Highest Pass: Khardung La (5,359m)" },
            { icon: Ruler, text: "Total Distance: ~570 km" },
            { icon: MapPin, text: "Stay: Hotels + Camping" },
            { icon: UtensilsCrossed, text: "Meals: Breakfast, Dinner & Ride Nutrition" },
            { icon: BadgeCheck, text: "Difficulty: High Altitude – Moderate to Hard" },
            { icon: Car, text: "Support Vehicle: Innova / Jeep / Tempo + Rescue Team" }
        ]
    },
    {
        id: 2,
        title: "SPITI – The Middle Land",
        subtitle: "Where Time Stops and Your Soul Moves!",
        date: "7 Days | 450 km | 10,000m⁺",
        excerpt:
            "A high-altitude MTB expedition through Spiti — the Middle Land between India & Tibet — filled with monasteries, cold-desert terrain, remote villages, and breathtaking Himalayan landscapes.",
        description: `Spiti Valley, a high-altitude cold desert between India and Tibet, offers awe-inspiring landscapes, ancient monasteries, and thrilling MTB adventure routes. Ride through rugged mountains, pristine lakes, and centuries-old cultures in a journey designed for serious adventure cyclists.`,

        price: 1390, // USD, as mentioned on page 24 of PDF

        leftImage: "/images/spiti-img.jpg",
        mapImage: "/images/spiti/spiti-map.png",
        contourImage: "/images/spiti/spiti-contour.png",
        link: "/stories/2/spiti",
        className: "absolute top-20 left-[8%] rotate-[-5deg]",
        video: "/videos/1.webm",
        source: { lat: 31.633, lng: 76.756 },      // Chandigarh approx
        destination: { lat: 32.2432, lng: 77.189 }, // Manali approx

        reviews: [
            { category: "Scenery & Views", rating: 5, max: 5 },
            { category: "Adventure Activities", rating: 5, max: 5 },
            { category: "Cultural Immersion", rating: 5, max: 5 },
            { category: "Hospitality & Stay", rating: 4, max: 5 },
            { category: "Food & Local Cuisine", rating: 4, max: 5 },
        ],

        images: [
            "/images/manali/manali1.jpg",
            "/images/manali/manali2.jpeg",
            "/images/manali/manali3.jpeg",
            "/images/manali/manali4.jpg",
            "/images/manali/manali5.jpg",
            "/images/manali/manali6.jpg",
            "/images/manali/manali7.jpeg",
            "/images/manali/manali8.jpeg",
            "/images/manali/manali9.jpg",
            "/images/manali/manali10.jpg",
            "/images/manali/manali11.jpg",
            "/images/manali/manali12.jpeg",
            "/images/manali/manali13.webp",
            "/images/manali/manali14.jpeg",
            "/images/manali/manali15.jpg",
            "/images/manali/manali16.jpeg",
            "/images/manali/manali17.webp",
            "/images/manali/manali18.webp",
            "/images/manali/manali19.jpeg",
            "/images/manali/manali20.webp"
        ],

        content: [
            // STORY SECTION
            {
                type: "story",
                title: "Details",
                data: {
                    title: "SPITI — The MTB Indulgence You Always Dreamt About!",
                    user_experience:
                        "Spiti is a cold-desert sanctuary where time slows down, silence speaks louder than words, and every climb feels like a spiritual ascent. Ancient monasteries, dramatic rock formations, and remote Himalayan villages make this MTB journey one of the most enriching in the world.",
                    author: "Cycle Circle Team",
                    date: "2024",
                    author_img: "/images/manali/rider-img.jpg",
                },
            },

            // ITINERARY SECTION (Based precisely on pages 14–21)
            {
                type: "itinerary",
                title: "Itinerary",
                data: [
                    {
                        day: "Day 1",
                        title: "Chandigarh → Sangla",
                        distance: "327 km (Jeep)",
                        description: [
                            "11-hour scenic jeep transfer through Kinnaur mountains",
                            "Winding mountain roads & massive rock valleys",
                            "Overnight in Sangla",
                        ],
                    },
                    {
                        day: "Day 2",
                        title: "Acclimatization Ride to Chitkul",
                        distance: "32 km",
                        passes: "Elevation Gain: 500 m",
                        description: [
                            "Ride to India’s last village before the Tibet border",
                            "Explore ancient wooden houses & riverside trails",
                            "Acclimatization day for high altitude",
                        ],
                    },
                    {
                        day: "Day 3",
                        title: "Sangla → Tabo",
                        distance: "95 km",
                        passes: "Elevation Gain: 1500 m",
                        description: [
                            "Cycle 65 km to Akpa",
                            "Jeep transfer from Akpa to Tabo",
                            "Explore 1000-year-old Tabo Monastery",
                        ],
                    },
                    {
                        day: "Day 4",
                        title: "Tabo → Kaza",
                        distance: "65 km",
                        passes: "Elevation Gain: 1200 m",
                        description: [
                            "Ride past Dhankar Lake & Dhankar Monastery",
                            "Experience Spiti’s iconic cold-desert terrain",
                            "Arrive in Kaza — HQ of Spiti Valley",
                        ],
                    },
                    {
                        day: "Day 5",
                        title: "Hikkim – Langza Circuit",
                        distance: "48 km",
                        passes: "Elevation Gain: 1100 m",
                        description: [
                            "Visit the world’s highest post office at Hikkim",
                            "Ride to Langza — famous for its giant Buddha statue",
                            "High-altitude circuit with incredible panoramas",
                        ],
                    },
                    {
                        day: "Day 6",
                        title: "Kaza → Lohsar",
                        distance: "65 km",
                        passes: "Elevation Gain: 1200 m",
                        description: [
                            "Ride to one of the coldest villages in Spiti",
                            "Cross multiple high-altitude canyons",
                            "Overnight in Lohsar",
                        ],
                    },
                    {
                        day: "Day 7",
                        title: "Lohsar → Chandertaal",
                        distance: "38 km",
                        description: [
                            "Ride to Chandertaal — the Moon Lake",
                            "High-altitude camping under starlit skies",
                            "Spectacular lake surrounded by 6000m+ peaks",
                        ],
                    },
                    {
                        day: "Day 8",
                        title: "Chandertaal → Manali",
                        distance: "111 km",
                        description: [
                            "Cross Kunzum Pass",
                            "Ride through villages like Sissu",
                            "Journey ends in Manali",
                        ],
                    },
                ],
            },

            // PACKING
            {
                type: "packing",
                title: "What to Pack?",
                data: [
                    // Essentials from PDF
                    { name: "Warm Clothes", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Jersey / Dry-fit T-shirts", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Gel-filled Cycling Shorts", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Full Finger Gloves", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Raincoat", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Shoes", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Socks", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Helmet", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Sunglasses", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Sunscreen & Creams", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Personal Medicines", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },

                    // Bike Accessories
                    { name: "Headlight", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Tail Light", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Water Bottles (2)", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Power Bank", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Phone Holder (Optional)", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Lube", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" }
                ]
            },

            // TESTIMONIALS
            {
                type: "testimonial",
                title: "Testimonials",
                data: [
                    {
                        name: "International Rider Group",
                        role: "MTB Enthusiasts",
                        comment:
                            "Spiti is unlike anything else — raw, untouched, and spiritually powerful. The CycleCircle crew ensured safety, acclimatization, nutrition, and unforgettable cultural immersion.",
                        image: "/images/manali/rider-img.jpg",
                    },
                    {
                        name: "Adventure Cyclist",
                        role: "Solo Rider",
                        comment:
                            "Riding Hikkim, Langza, Chandertaal — every day felt surreal. The climbs were challenging but the landscapes made every push worth it.",
                        image: "/images/manali/rider-img.jpg",
                    },
                ],
            },

            // GALLERY
            {
                type: "gallery",
                title: "Gallery",
                data: [
                    "/images/manali/manali1.jpg",
                    "/images/manali/manali2.jpeg",
                    "/images/manali/manali3.jpeg",
                    "/images/manali/manali4.jpg",
                    "/images/manali/manali5.jpg",
                    "/images/manali/manali6.jpg",
                    "/images/manali/manali7.jpeg",
                    "/images/manali/manali8.jpeg",
                    "/images/manali/manali9.jpg",
                    "/images/manali/manali10.jpg",
                    "/images/manali/manali11.jpg",
                    "/images/manali/manali12.jpeg",
                    "/images/manali/manali13.webp",
                    "/images/manali/manali14.jpeg",
                    "/images/manali/manali15.jpg",
                    "/images/manali/manali16.jpeg",
                    "/images/manali/manali17.webp",
                    "/images/manali/manali18.webp",
                    "/images/manali/manali19.jpeg",
                    "/images/manali/manali20.webp"
                ],
            },
        ],

        // RIGHT PANEL DETAILS (PDF Theme)
        rightPanelDetails: [
            { icon: Bike, text: "7-Day MTB Expedition" },
            { icon: Mountain, text: "Highest Alt: ~4,590m (Kunzum Pass)" },
            { icon: Ruler, text: "Total Distance: ~450 km" },
            { icon: MapPin, text: "Stay: Hotels, Homestays & Camping" },
            { icon: UtensilsCrossed, text: "Meals: All Meals + Ride-Day Nutrition" },
            { icon: BadgeCheck, text: "Difficulty: High Altitude – Moderate to Hard" },
            { icon: Car, text: "Support Vehicle + Luggage + Recovery Team" },
        ],
    },
    {
        id: 3,
        title: "Bada Bhangal – Land of the Himalayan Shepherds",
        subtitle: "One of the Most Majestic & Remote Himalayan Treks",
        date: "13 Days | High-Altitude Trek",
        excerpt:
            "A legendary Himalayan route crossing Kalihani Pass and Thamsar Pass to reach the remote tribal village of Bada Bhangal — home to the Himalayan Shepherds, the Gaddis.",
        description: `Bada Bhangal is one of Himachal’s most isolated and culturally rich tribal regions. Connected only by long and challenging trekking routes, this journey takes you across forests, rivers, meadows, glaciers, and two high mountain passes — Thamsar (4875m) and Kalihani (4640m). This expedition reveals the life of the Himalayan shepherds, remote settlements, and untouched natural beauty.`,

        leftImage: "/images/bada-bhangal.webp",
        mapImage: "/images/badabhangal/map.png",
        contourImage: "/images/badabhangal/contour.png",
        link: "/stories/3/bada-bhangal",
        className: "absolute top-20 left-[8%] rotate-[-5deg]",
        video: "/videos/4.mp4",
        price: 55000,

        source: { lat: 32.0893, lng: 76.5534 }, // Kardhar approx
        destination: { lat: 32.2396, lng: 77.1887 }, // Manali approx

        reviews: [
            { category: "Scenery & Views", rating: 5, max: 5 },
            { category: "Adventure Difficulty", rating: 5, max: 5 },
            { category: "Culture & Experience", rating: 5, max: 5 },
            { category: "Hospitality", rating: 4, max: 5 },
            { category: "Travel Convenience", rating: 3, max: 5 },
        ],

        images: [
            "/images/manali/manali1.jpg",
            "/images/manali/manali2.jpeg",
            "/images/manali/manali3.jpeg",
            "/images/manali/manali4.jpg",
            "/images/manali/manali5.jpg",
            "/images/manali/manali6.jpg",
            "/images/manali/manali7.jpeg",
            "/images/manali/manali8.jpeg",
            "/images/manali/manali9.jpg",
            "/images/manali/manali10.jpg",
            "/images/manali/manali11.jpg",
            "/images/manali/manali12.jpeg",
            "/images/manali/manali13.webp",
            "/images/manali/manali14.jpeg",
            "/images/manali/manali15.jpg",
            "/images/manali/manali16.jpeg",
            "/images/manali/manali17.webp",
            "/images/manali/manali18.webp",
            "/images/manali/manali19.jpeg",
            "/images/manali/manali20.webp"
        ],

        content: [
            // STORY
            {
                type: "story",
                title: "Details",
                data: {
                    title: "The Majestic Bada Bhangal",
                    user_experience:
                        "Bada Bhangal is a remote tribal hamlet with only 50–60 houses. Located deep between the Dhauladhar and Pir Panjal ranges, it is accessible only by crossing two massive passes. The people here — the Gaddis — live a semi-nomadic lifestyle, shepherding thousands of sheep across the mountains. Their simplicity, resilience, and connection with nature make this trek a culturally profound experience.",
                    author: "Cycle Circle Team",
                    date: "2024",
                    author_img: "/images/manali/rider-img.jpg",
                },
            },

            // ITINERARY BASED ON PAGES 5–17
            {
                type: "itinerary",
                title: "Itinerary",
                data: [
                    {
                        day: "Day 1",
                        title: "Kardhar → Hanuman Garh → Kardhar",
                        description: [
                            "Acclimatization hike to Hanuman Garh (3200m) :contentReference[oaicite:2]{index=2}",
                            "Panoramic views of Chotta Bhangal Valley",
                            "Return to Kardhar for overnight stay",
                        ],
                    },
                    {
                        day: "Day 2",
                        title: "Kardhar → Plachak → Jhyordi",
                        description: [
                            "Trek begins from Kardhar (2500m) through conifer forests :contentReference[oaicite:3]{index=3}",
                            "Halt at Plachak — seasonal settlement & Dev Ajaya Pal deity",
                            "Continue to Jhyordi (3100m), overnight in tents",
                        ],
                    },
                    {
                        day: "Day 3",
                        title: "Jhyordi → Panyarthu → Bhed Pal",
                        description: [
                            "Landscape transitions from meadows to rocky terrain",
                            "Meal break at Panyarthu",
                            "Steep ascent to Bhed Pal (4000m)",
                        ],
                    },
                    {
                        day: "Day 4",
                        title: "Bhed Pal → Thamsar Pass → Bada Bhangal",
                        passes: "Thamsar Pass – 4800m",
                        description: [
                            "Early morning steep ascent to Thamsar Pass",
                            "Cross glaciers & alpine lakes with Pir Panjal views",
                            "Descend to Bada Bhangal village (2700m)",
                        ],
                    },
                    {
                        day: "Day 5",
                        title: "Rest Day at Bada Bhangal",
                        description: [
                            "Visit the remote shepherd village",
                            "Interact with the Gaddi tribe",
                            "Explore ancient wooden houses & meadows",
                        ],
                    },
                    {
                        day: "Day 6",
                        title: "Bada Bhangal → Suni Parao",
                        description: [
                            "Pleasant uphill walk through forested valley",
                            "Camp at Suni Parao (3000m)",
                        ],
                    },
                    {
                        day: "Day 7",
                        title: "Suni Parao → Lamba Parao",
                        description: [
                            "Trek through meadows and later rocky terrain",
                            "Overnight at Lamba Parao (3150m)",
                        ],
                    },
                    {
                        day: "Day 8",
                        title: "Lamba Parao → Dhan Ko Thach",
                        description: [
                            "Cross a bridge and follow stream to Dhan Ko Thach",
                            "Overnight in tents",
                        ],
                    },
                    {
                        day: "Day 9",
                        title: "Dhan Ko Thach → Kalihani Pass → Shangor",
                        passes: "Kalihani Pass – 4640m",
                        description: [
                            "Climb snow patches along Kalihani stream",
                            "Majestic views of Kullu & Lahaul peaks",
                            "Descend across glaciers & moraines to Shangor (3800m)",
                        ],
                    },
                    {
                        day: "Day 10",
                        title: "Shangor → Rayali",
                        description: [
                            "Downhill trek through lush green forests",
                            "Camp at Rayali meadows",
                        ],
                    },
                    {
                        day: "Day 11",
                        title: "Rayali → Lamadugh",
                        description: [
                            "Cross Rani Sui Lake & Thanpari Tibba ridge",
                            "Panoramic views of Manali & Upper Kullu",
                            "Reach Lamadugh (3440m)",
                        ],
                    },
                    {
                        day: "Day 12",
                        title: "Lamadugh → Manali",
                        description: [
                            "Descend through Cedar, Oak & Alder forests",
                            "Finish at Hadimba Temple, Manali (2050m)",
                        ],
                    },
                    {
                        day: "Day 13",
                        title: "Manali – Departure",
                        description: ["Trip ends in Manali"],
                    },
                ],
            },

            // PACKING (Pages 19–20)
            {
                type: "packing",
                title: "What to Pack?",
                data: [
                    // Essentials from PDF
                    { name: "Warm Clothes", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Jersey / Dry-fit T-shirts", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Gel-filled Cycling Shorts", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Full Finger Gloves", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Raincoat", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Shoes", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Socks", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Helmet", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Sunglasses", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Sunscreen & Creams", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Personal Medicines", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },

                    // Bike Accessories
                    { name: "Headlight", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Tail Light", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Water Bottles (2)", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Power Bank", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Phone Holder (Optional)", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Lube", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" }
                ]
            },

            // TESTIMONIALS (No direct testimonials in PDF — creating generic ones)
            {
                type: "testimonial",
                title: "Testimonials",
                data: [
                    {
                        name: "Himalayan Trekker",
                        role: "Adventurer",
                        comment:
                            "Crossing Thamsar Pass and Kalihani Pass was a surreal experience. The landscapes change dramatically every day and the cultural interactions in Bada Bhangal were unforgettable.",
                        image: "/images/manali/rider-img.jpg",
                    },
                    {
                        name: "Mountain Enthusiast",
                        role: "Solo Trekker",
                        comment:
                            "One of the most challenging and rewarding treks I’ve done. The Cycle Circle team managed safety, food, and altitude issues perfectly.",
                        image: "/images/manali/rider-img.jpg",
                    },
                ],
            },

            // GALLERY
            {
                type: "gallery",
                title: "Gallery",
                data: [
                    "/images/manali/manali1.jpg",
                    "/images/manali/manali2.jpeg",
                    "/images/manali/manali3.jpeg",
                    "/images/manali/manali4.jpg",
                    "/images/manali/manali5.jpg",
                    "/images/manali/manali6.jpg",
                    "/images/manali/manali7.jpeg",
                    "/images/manali/manali8.jpeg",
                    "/images/manali/manali9.jpg",
                    "/images/manali/manali10.jpg",
                    "/images/manali/manali11.jpg",
                    "/images/manali/manali12.jpeg",
                    "/images/manali/manali13.webp",
                    "/images/manali/manali14.jpeg",
                    "/images/manali/manali15.jpg",
                    "/images/manali/manali16.jpeg",
                    "/images/manali/manali17.webp",
                    "/images/manali/manali18.webp",
                    "/images/manali/manali19.jpeg",
                    "/images/manali/manali20.webp"
                ],
            },
        ],

        // RIGHT PANEL DETAILS
        rightPanelDetails: [
            { icon: Mountain, text: "Highest Pass: Thamsar 4875m | Kalihani 4640m" },
            { icon: Ruler, text: "Total Trekking: ~13 Days" },
            { icon: MapPin, text: "Stay: Tents, Village Homestays, Hotels" },
            { icon: UtensilsCrossed, text: "Meals: Hygienic Trek Meals" },
            { icon: BadgeCheck, text: "Difficulty: Hard – High Altitude Trek" },
            { icon: Car, text: "Support Team, Porters & Wilderness Rescue" },
        ],
    },
    {
        id: 4,
        title: "Shimla → Bir → McLeod Ganj Expedition",
        subtitle: "A Multi-Terrain Himalayan MTB Journey",
        date: "11 Days | ~600 km",

        excerpt:
            "A multi-terrain bicycle journey across forests, gravel tracks, high mountain ridges, heritage towns, and remote Himalayan valleys — culminating at the world-famous paragliding site of Bir Billing and the spiritual town of McLeod Ganj.",

        description: `Welcome to Cycle Circle — a vibrant community of home-grown athletes, explorers, and outdoor lovers. This journey blends travel, adventure, sustainability, and community engagement as we explore Himachal Pradesh from Shimla's pine forests to the soaring Dhauladhars of Dharamshala.`,

        price: 69900, // You can update if needed

        leftImage: "/images/mcleod.jpg",
        mapImage: "/images/shimla-bir/map.png",
        contourImage: "/images/shimla-bir/contour.png",
        link: "/stories/4/shimla-bir-mcleod",
        className: "absolute top-20 left-[8%] rotate-[-5deg]",
        video: "/videos/2.webm",
        source: { lat: 31.1048, lng: 77.1734 }, // Shimla
        destination: { lat: 32.2426, lng: 76.3213 }, // McLeod Ganj

        reviews: [
            { category: "Scenery & Views", rating: 5, max: 5 },
            { category: "Adventure Difficulty", rating: 4, max: 5 },
            { category: "Cultural Experience", rating: 5, max: 5 },
            { category: "Terrain Variety", rating: 5, max: 5 },
            { category: "Travel Convenience", rating: 4, max: 5 },
        ],

        // ----------------------------
        // IMAGES (placeholder list)
        // ----------------------------
        images: [
            "/images/manali/manali1.jpg",
            "/images/manali/manali2.jpeg",
            "/images/manali/manali3.jpeg",
            "/images/manali/manali4.jpg",
            "/images/manali/manali5.jpg",
            "/images/manali/manali6.jpg",
            "/images/manali/manali7.jpeg",
            "/images/manali/manali8.jpeg",
            "/images/manali/manali9.jpg",
            "/images/manali/manali10.jpg",
            "/images/manali/manali11.jpg",
            "/images/manali/manali12.jpeg",
            "/images/manali/manali13.webp",
            "/images/manali/manali14.jpeg",
            "/images/manali/manali15.jpg",
            "/images/manali/manali16.jpeg",
            "/images/manali/manali17.webp",
            "/images/manali/manali18.webp",
            "/images/manali/manali19.jpeg",
            "/images/manali/manali20.webp"
        ],

        // -----------------------------------------
        // CONTENT SECTIONS (STORY + ITINERARY + OTHERS)
        // -----------------------------------------
        content: [
            // ---------------- STORY ----------------
            {
                type: "story",
                title: "Details",
                data: {
                    title: "A Himalayan Expedition of Community, Culture & Adventure",
                    user_experience:
                        "Cycle Circle believes in the transformative power of adventure. This expedition captures everything we stand for — sustainability, immersive travel, outdoor passion, and meaningful connections with local Himalayan communities. Led by professional mountain bikers and seasoned tour leaders, this journey is crafted for riders who want more than kilometres — they want stories, people, and depth.",
                    author: "Cycle Circle Team",
                    date: "2024",
                    author_img: "/images/manali/rider-img.jpg",
                },
            },

            // ---------------- ITINERARY ----------------
            {
                type: "itinerary",
                title: "Itinerary",
                data: [
                    {
                        day: "Day 0",
                        title: "Arrival in Shimla",
                        description: [
                            "Arrival and check-in",
                            "Group tour briefing",
                            "Bicycle setup, route orientation & dos/don’ts",
                            "Group gathering & dinner",
                            "Overnight in Shimla",
                        ],
                    },
                    {
                        day: "Day 1",
                        title: "Shimla City Ride",
                        distance: "25–30 km",
                        description: [
                            "Heritage ride through Shimla",
                            "The Ridge, Mall Road, Lower Bazar, Jakhu Temple",
                            "Bike shakedown ride",
                            "Overnight stay in hotel",
                        ],
                    },
                    {
                        day: "Day 2",
                        title: "Shimla → Dakbanglow",
                        distance: "30–40 km",
                        description: [
                            "Forest trails, singletracks & rolling terrain",
                            "Beautiful outskirts of Shimla",
                            "Evening campfire",
                            "Overnight in cottages",
                        ],
                    },
                    {
                        day: "Day 3",
                        title: "Dakbanglow → Matiana",
                        distance: "55 km",
                        description: [
                            "Two route options: technical trail & easier scenic route",
                            "20 km long ascent together",
                            "Arrive at mountain resort in Matiana",
                            "Overnight stay at resort (B/L/D)",
                        ],
                    },
                    {
                        day: "Day 4",
                        title: "Matiana → Kungash",
                        distance: "85 km",
                        description: [
                            "Enter Kullu district",
                            "Optional singletrack descent into side valley",
                            "Ride along river before the 'Climb of the Day'",
                            "30 km ascent with 1000m elevation gain",
                            "Overnight stay at Homestay",
                        ],
                    },
                    {
                        day: "Day 5",
                        title: "Kungash → Gada Gushaini",
                        distance: "80 km",
                        description: [
                            "Ride through dense Deodar forests",
                            "Remote mountain villages",
                            "Steep off-road ascent from 1500m to 3000m",
                            "Pass summit with stunning views",
                            "Descend to Gada Gushaini village",
                        ],
                    },
                    {
                        day: "Day 6",
                        title: "Gada Gushaini → Pandoh",
                        distance: "77 km",
                        description: [
                            "Jeep tracks, long descents & ridge views",
                            "Scenic high Himalaya panoramas",
                            "Stage ends at River Beas near Mandi",
                            "One of the most beautiful stages of the tour",
                        ],
                    },
                    {
                        day: "Day 7",
                        title: "Pandoh → Barot",
                        distance: "90 km",
                        description: [
                            "Gravel climbs along ridge line",
                            "Views of Dhauladhar, Kullu & flatlands",
                            "Enter Kangra district",
                            "Barot famous for trout & pristine valley",
                        ],
                    },
                    {
                        day: "Day 8",
                        title: "Barot → Bir",
                        distance: "56 km",
                        description: [
                            "Enter Chotta Bhangal valley",
                            "Mixed terrain: jeep track, gravel, tarmac, forest roads",
                            "Arrive at Bir Billing — world’s paragliding capital",
                        ],
                    },
                    {
                        day: "Day 9",
                        title: "Rest Day – Explore Bir",
                        description: [
                            "Optional tandem paragliding",
                            "Visit monasteries, waterfalls, hot springs",
                            "Explore Baijnath Shiva Temple",
                            "Visit parachute/flag factories & cafes",
                        ],
                    },
                    {
                        day: "Day 10",
                        title: "Bir → McLeod Ganj",
                        distance: "65 km | 1600m ascent",
                        description: [
                            "Small mountain roads & quiet villages",
                            "Ride through Dhauladhar foothills",
                            "Final climb into Dharamshala/McLeod",
                        ],
                    },
                    {
                        day: "Day 11",
                        title: "Departure From McLeod Ganj",
                        description: [
                            "End of tour",
                            "Return travel via Delhi",
                            "Flexible departure options",
                        ],
                    },
                ],
            },

            // ---------------- PACKING LIST ----------------
            {
                type: "packing",
                title: "What to Pack?",
                data: [
                    // Essentials from PDF
                    { name: "Warm Clothes", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Jersey / Dry-fit T-shirts", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Gel-filled Cycling Shorts", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Full Finger Gloves", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Raincoat", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Shoes", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Socks", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Helmet", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Sunglasses", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Sunscreen & Creams", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Personal Medicines", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },

                    // Bike Accessories
                    { name: "Headlight", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Tail Light", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Water Bottles (2)", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Power Bank", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Phone Holder (Optional)", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" },
                    { name: "Lube", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary" }
                ]
            },

            // ---------------- TESTIMONIALS ----------------
            {
                type: "testimonial",
                title: "Testimonials",
                data: [
                    {
                        name: "Adventure Cyclist",
                        role: "MTB Rider",
                        comment:
                            "Beautiful mix of trails, culture and landscapes. Bir and Barot were absolute highlights — the support team was incredible!",
                        image: "/images/manali/rider-img.jpg",
                    },
                    {
                        name: "International Rider",
                        role: "Gravel Enthusiast",
                        comment:
                            "A perfect balance of challenge and culture. The forest sections and ridge-line climbs were unforgettable.",
                        image: "/images/manali/rider-img.jpg",
                    },
                ],
            },

            // ---------------- GALLERY ----------------
            {
                type: "gallery",
                title: "Gallery",
                data: [
                    "/images/manali/manali1.jpg",
                    "/images/manali/manali2.jpeg",
                    "/images/manali/manali3.jpeg",
                    "/images/manali/manali4.jpg",
                    "/images/manali/manali5.jpg",
                    "/images/manali/manali6.jpg",
                    "/images/manali/manali7.jpeg",
                    "/images/manali/manali8.jpeg",
                    "/images/manali/manali9.jpg",
                    "/images/manali/manali10.jpg",
                    "/images/manali/manali11.jpg",
                    "/images/manali/manali12.jpeg",
                    "/images/manali/manali13.webp",
                    "/images/manali/manali14.jpeg",
                    "/images/manali/manali15.jpg",
                    "/images/manali/manali16.jpeg",
                    "/images/manali/manali17.webp",
                    "/images/manali/manali18.webp",
                    "/images/manali/manali19.jpeg",
                    "/images/manali/manali20.webp"
                ],
            },
        ],

        // ---------------- RIGHT PANEL ----------------
        rightPanelDetails: [
            { icon: Bike, text: "11-Day MTB Expedition" },
            { icon: Mountain, text: "Max Elevation Gain: 1600m (Day 10)" },
            { icon: Ruler, text: "Total Distance: ~600 km" },
            { icon: MapPin, text: "Stay: Hotels, Cottages, Homestays" },
            { icon: UtensilsCrossed, text: "Meals: Breakfast, Dinner & Ride Nutrition" },
            { icon: BadgeCheck, text: "Difficulty: Moderate to Hard" },
            { icon: Car, text: "Support Vehicle + Luggage + Technical Backup" },
        ],
    },
    {
        id: 5,
        title: "Zanskar Cycle Tour – Manali to Kargil",
        subtitle: "12-Day High-Altitude Himalayan MTB Expedition",
        date: "5th – 18th July 2025",

        excerpt:
            "A 500 km high-altitude MTB expedition across Manali, Lahaul, Shinku La, Zanskar Valley, Pensi La, Drang Drung Glacier, and remote Himalayan settlements — ending in Kargil.",

        description: `Welcome to Cycle Circle — a vibrant community of homegrown athletes, explorers, and outdoor lovers. The Zanskar Cycle Tour is an extraordinary MTB traverse through rugged Zanskar terrain, pristine mountain passes, ancient monasteries, and culturally rich Himalayan villages.`,

        price: 119000, // placeholder — update if needed

        leftImage: "/images/kargil.webp",
        mapImage: "/images/zanskar/map.png",
        contourImage: "/images/zanskar/contour.png",
        link: "/stories/5/zanskar",
        className: "absolute top-20 left-[8%] rotate-[-5deg]",
        video: "/videos/5.mp4",
        source: { lat: 32.2432, lng: 77.1890 },    // Manali
        destination: { lat: 34.5563, lng: 76.1320 }, // Kargil

        reviews: [
            { category: "Scenery & Views", rating: 5, max: 5 },
            { category: "Adventure Difficulty", rating: 5, max: 5 },
            { category: "Cultural Experience", rating: 5, max: 5 },
            { category: "Hospitality", rating: 4, max: 5 },
            { category: "Terrain Variety", rating: 5, max: 5 },
        ],

        images: [
            "/images/manali/manali1.jpg",
            "/images/manali/manali2.jpeg",
            "/images/manali/manali3.jpeg",
            "/images/manali/manali4.jpg",
            "/images/manali/manali5.jpg",
            "/images/manali/manali6.jpg",
            "/images/manali/manali7.jpeg",
            "/images/manali/manali8.jpeg",
            "/images/manali/manali9.jpg",
            "/images/manali/manali10.jpg",
            "/images/manali/manali11.jpg",
            "/images/manali/manali12.jpeg",
            "/images/manali/manali13.webp",
            "/images/manali/manali14.jpeg",
            "/images/manali/manali15.jpg",
            "/images/manali/manali16.jpeg",
            "/images/manali/manali17.webp",
            "/images/manali/manali18.webp",
            "/images/manali/manali19.jpeg",
            "/images/manali/manali20.webp"
        ],

        // -----------------------------------------------------
        // CONTENT SECTION (STORY + ITINERARY + PACKING + MORE)
        // -----------------------------------------------------
        content: [
            // STORY
            {
                type: "story",
                title: "Details",
                data: {
                    title: "Zanskar — A High-Altitude, Transformative MTB Journey",
                    user_experience:
                        "This expedition journeys through Manali, Lahaul, Shinku La, the hidden valleys of Zanskar, ancient monasteries, glaciers, and remote settlements. The terrain is raw, the landscapes surreal, and the cultural immersion unmatched. It’s a journey crafted for riders seeking endurance, challenge, and soulful Himalayan exploration.",
                    author: "Cycle Circle Team",
                    date: "2025",
                    author_img: "/images/manali/rider-img.jpg",
                },
            },

            // ITINERARY
            {
                type: "itinerary",
                title: "Itinerary",
                data: [
                    {
                        day: "Day 00",
                        title: "Arrive in Manali (2050m)",
                        description: [
                            "Arrive and settle in",
                            "Acclimatization day",
                            "Gear check and tour preparation",
                        ],
                    },
                    {
                        day: "Day 01",
                        title: "Acclimatization Ride",
                        distance: "20 km (4–5 hrs)",
                        description: [
                            "Ride to Solang Valley",
                            "Optional visit to Vashisht or Kalath hot springs",
                            "Overnight in hotel",
                        ],
                    },
                    {
                        day: "Day 02",
                        title: "Marhi → Sissu",
                        distance: "35 km (5–6 hrs)",
                        description: [
                            "Cross Atal Tunnel",
                            "Enter Lahaul Valley",
                            "Ride along Chandra River to Sissu",
                            "Overnight at hotel",
                        ],
                    },
                    {
                        day: "Day 03",
                        title: "Sissu → Jispa",
                        distance: "50 km (6–7 hrs)",
                        description: [
                            "Ride through Keylong",
                            "Cross Tandi — confluence of Chandra & Bhaga Rivers",
                            "Reach Jispa",
                            "Stay in Swiss camps / hotel",
                        ],
                    },
                    {
                        day: "Day 04",
                        title: "Jispa → Zanskar Sumdo",
                        distance: "42 km (6–7 hrs)",
                        description: [
                            "Gradual ascent through Lahaul",
                            "Reach Zanskar Sumdo",
                            "Camp overnight",
                        ],
                    },
                    {
                        day: "Day 05",
                        title: "Zanskar Sumdo → Shinku La (5091m) → Lakhang",
                        distance: "30 km (7–8 hrs)",
                        passes: "Shinku La Pass – 5091m",
                        description: [
                            "Steep climb to Shinku La",
                            "Spectacular high-altitude panoramas",
                            "Descend to Lakhang",
                            "Camp overnight",
                        ],
                    },
                    {
                        day: "Day 06",
                        title: "Lakhang → Purne",
                        distance: "40 km (4–5 hrs)",
                        description: [
                            "Pass iconic Gumburonjon rock face (5900m)",
                            "Ride through Kargiakh, Kuru & Testa",
                            "Camp at Purne",
                        ],
                    },
                    {
                        day: "Day 07",
                        title: "Purne → Phuktal Monastery → Purne",
                        description: [
                            "Ride + hike to ancient 12th-century Phuktal Monastery (built into a cave)",
                            "Return to Purne",
                            "Camp overnight",
                        ],
                    },
                    {
                        day: "Day 08",
                        title: "Purne → Padum",
                        distance: "50 km (5–6 hrs)",
                        description: [
                            "Ride via Ichar & Mune villages",
                            "Reach Padum — heart of Zanskar",
                            "Stay in hotel",
                        ],
                    },
                    {
                        day: "Day 09",
                        title: "Padum → Lalung Nala",
                        distance: "60 km (6–7 hrs)",
                        description: [
                            "Ride towards base of Pensi La",
                            "Remote & rugged Zanskar terrain",
                            "Camp overnight",
                        ],
                    },
                    {
                        day: "Day 10",
                        title: "Lalung Nala → Tangol",
                        distance: "90 km (7–8 hrs)",
                        description: [
                            "Climb Pensi La Pass",
                            "Descend through Rangdum & Parkachik villages",
                            "Camp overnight at Tangol",
                        ],
                    },
                    {
                        day: "Day 11",
                        title: "Tangol → Kargil",
                        distance: "75 km (6–7 hrs)",
                        description: [
                            "Ride through Balti villages & Panikhar",
                            "Finish the expedition in Kargil",
                        ],
                    },
                    {
                        day: "Day 12",
                        title: "Drive to Srinagar",
                        description: ["End of tour. Transfers to Srinagar."],
                    },
                ],
            },

            // INCLUSIONS
            {
                type: "inclusions",
                title: "Inclusions",
                data: {
                    title: "What’s Included",
                    user_experience: `
• Support Vehicle (Innova/Jeep/Tempo)
• Marshal support with wireless
• Bike Guide & Tour Leader  
• Cycle Circle Jersey + Hoodie
• Emergency oxygen support
• State-of-the-art camping setups  
• Chef/cook  
• Twin/triple tents, sleeping bags, mattresses  
• Shower tent, enclosed toilets  
• Chairs & dining setup  
• Power backup (emergency only)  
• Hotel stays (twin sharing)  
• Breakfast, ride-feed, nutritious meals  
• Rescue team with expert mountaineer  
• First aid & medical backup  
• Technical/Mechanic support  
• Packed lunch on riding days`,
                    author: "Cycle Circle Team",
                    date: "2025",
                    author_img: "/images/manali/rider-img.jpg",
                },
            },

            // EXCLUSIONS
            {
                type: "exclusions",
                title: "Exclusions",
                data: {
                    title: "Not Included",
                    user_experience: `
• Water bottles  
• Meals outside itinerary  
• Alcohol  
• Air tickets  
• Bicycle rental  
• Personal expenses  
• Cycle accessories  
• Insurance  
• Anything not mentioned in inclusions`,
                    author: "Cycle Circle Team",
                    date: "2025",
                    author_img: "/images/manali/rider-img.jpg",
                },
            },

            // TESTIMONIALS
            {
                type: "testimonial",
                title: "Testimonials",
                data: [
                    {
                        name: "Expedition Rider",
                        role: "Adventure Cyclist",
                        comment:
                            "The Zanskar route is surreal — Shinku La, Phuktal and Pensi La make this one of the toughest yet most rewarding rides ever.",
                        image: "/images/manali/rider-img.jpg",
                    },
                    {
                        name: "International MTB Enthusiast",
                        role: "Gravel Rider",
                        comment:
                            "Cycle Circle’s crew handled altitude, logistics, food and safety extremely well. A must-do expedition for serious cyclists.",
                        image: "/images/manali/rider-img.jpg",
                    },
                ],
            },

            // GALLERY
            {
                type: "gallery",
                title: "Gallery",
                data: [
                    "/images/manali/manali1.jpg",
                    "/images/manali/manali2.jpeg",
                    "/images/manali/manali3.jpeg",
                    "/images/manali/manali4.jpg",
                    "/images/manali/manali5.jpg",
                    "/images/manali/manali6.jpg",
                    "/images/manali/manali7.jpeg",
                    "/images/manali/manali8.jpeg",
                    "/images/manali/manali9.jpg",
                    "/images/manali/manali10.jpg",
                    "/images/manali/manali11.jpg",
                    "/images/manali/manali12.jpeg",
                    "/images/manali/manali13.webp",
                    "/images/manali/manali14.jpeg",
                    "/images/manali/manali15.jpg",
                    "/images/manali/manali16.jpeg",
                    "/images/manali/manali17.webp",
                    "/images/manali/manali18.webp",
                    "/images/manali/manali19.jpeg",
                    "/images/manali/manali20.webp"
                ],
            },
        ],

        // RIGHT PANEL DETAILS
        rightPanelDetails: [
            { icon: Bike, text: "500 km MTB Expedition" },
            { icon: Mountain, text: "Highest Pass: Shinku La (5091m)" },
            { icon: Ruler, text: "Duration: 12 Days" },
            { icon: MapPin, text: "Stay: Hotels + State-of-the-art Camping" },
            { icon: UtensilsCrossed, text: "Meals: Nutritious & Hygienic, Ride-Day Nutrition Included" },
            { icon: BadgeCheck, text: "Difficulty: High Altitude – Hard" },
            { icon: Car, text: "Support Vehicle + Mechanic + Rescue Team" },
        ],
    }



];





