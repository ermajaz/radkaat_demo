import { ItineraryItem, Story } from "../types/story.types";




export const itineraryData: ItineraryItem[] = [
    {
        day: 1,
        title: "Arrival in Manali – Local Sightseeing & Leisure",
        highlights: ["Hadimba Temple", "Mall Road", "Vashisht Hot Springs"],
        description:
            "Arrive in Manali, check in to your hotel, and take some time to relax amidst the Himalayan air. In the afternoon, visit the famous Hadimba Devi Temple, a tranquil wooden shrine surrounded by tall deodar trees. Explore Vashisht Village, known for its natural hot water springs, and stroll through Mall Road for local shopping and cafés. Spend your evening soaking in the peaceful vibes of the mountains.",
    },
    {
        day: 2,
        title: "Solang Valley Adventure",
        highlights: ["Hadimba Temple", "Mall Road", "Vashisht Hot Springs"],
        description:
            "After breakfast, embark on an exciting excursion to Solang Valley. Enjoy adventure activities such as paragliding, zorbing, and ropeway rides (on direct payment basis). Return to Manali by evening and relax at your hotel.",
    },
    {
        day: 3,
        title: "Excursion to Rohtang Pass / Atal Tunnel",
        highlights: ["Hadimba Temple", "Mall Road", "Vashisht Hot Springs"],
        description:
            "A thrilling day trip to Rohtang Pass or Atal Tunnel (subject to permit and weather). Marvel at snow-clad peaks and breathtaking landscapes. Return to Manali by evening.",
    },
    {
        day: 4,
        title: "Naggar Castle & Art Exploration",
        highlights: ["Hadimba Temple", "Mall Road", "Vashisht Hot Springs"],
        description:
            "Visit the heritage-rich Naggar Castle and Roerich Art Gallery. Explore quaint local cafés and enjoy serene views of the Kullu Valley. Return to Manali for overnight stay.",
    },
    {
        day: 5,
        title: "Departure from Manali – Memories to Cherish",
        highlights: ["Hadimba Temple", "Mall Road", "Vashisht Hot Springs"],
        description:
            "After breakfast, check out from the hotel. Depart with unforgettable memories of your mountain retreat.",
    },
];

export const stories: Story[] = [
    {
        id: 1,
        title: "Manali Adventures",
        date: "20 September 2025",
        excerpt:
            "We visited Warren on his home trails in Santa Cruz, California, and caught up with what he has been up to lately.",
        img: "/images/manali-img.jpg",
        link: "#",
        className: "absolute top-20 left-[8%] rotate-[-5deg]",
        price: 29999,
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
            "/images/manali/manali20.webp",
        ],
        content: [
            {
                type: "story",
                title: "Details",
                data: {
                    title: "Arrival in Manali",
                    user_experience:
                        "The sunrise trek was an experience that will forever remain etched in my memory. The air was crisp, and each step revealed more of the breathtaking Himalayan view. When I finally reached the summit, the golden light of dawn danced on the snow peaks — a surreal moment of peace and awe.",
                    author: "Alice Johnson",
                    date: "21 September 2025",
                    author_img: "/images/manali/rider-img.jpg",
                },
            },
            {
                type: "itinerary",
                title: "Itinerary",
                data: itineraryData, // imported reusable data file
            },
            {
                type: "packing",
                title: "What to Pack?",
                data: [
                    { name: "Cycling Helmet", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Cycling Jacket (Waterproof/Windproof)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLb6-wUL85Bj_tQsTWqdZkNs5OlzYr6Vrsw&s", category: "must" },
                    { name: "Full Finger Gloves - 2 pairs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWyV9w-d107DbU0tzPwVMcXON5sO58CySFg&s", category: "must" },
                    { name: "Cycling Shoes", image: "https://i.insider.com/6048e5109942cf001865d880?width=1136&format=jpeg", category: "must" },
                    { name: "Prescription Medications", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fhHSQHXnrEAgA_REfaRH9rCvD6l7zXb98g&s", category: "must" },

                    { name: "Bike Shorts", image: "https://contents.mediadecathlon.com/p2464583/e441ddb57ab55a86c9a4a982d70fb756/p2464583.jpg" },
                    { name: "Casual Clothing for Travel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4tkCEMnwpV9Bnv3AXnpQIEG3w8037LOFdQ&s" },
                    { name: "Sun Hat", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-HvivaKeDt4kcKFyBMs9uqg7T3LyXauH4A&s" },
                    { name: "Sunblock & Lip Balm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmZe3u0KBTX00UdPNMi38QqprcQEYt6aX4A&s" },
                    { name: "Hiking Shoes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxp5mqadE-uU5zGJtzqA1AfuL6VNdbmR47IA&s" },
                ],
            }
            ,
            {
                type: "testimonial",
                title: "Testimonials",
                data: [
                    {
                        name: "Riya Sharma",
                        role: "Solo Traveler from Delhi",
                        comment:
                            "This was my first solo trip, and the Manali itinerary was perfectly planned! Every day felt like a new adventure — from the snow at Rohtang Pass to peaceful walks on Mall Road. The team handled everything smoothly; can’t wait to travel with them again!",
                        image: "/images/manali/rider-img.jpg",
                    },
                    {
                        name: "Arjun & Meera",
                        role: "Couple from Chennai",
                        comment:
                            "Our honeymoon in Manali was straight out of a dream! The itinerary balanced adventure and relaxation perfectly — paragliding in Solang Valley, cozy cafés in Old Manali, and breathtaking views from Naggar Castle.",
                        image: "/images/manali/rider-img.jpg",
                    },
                    {
                        name: "The Nair Family",
                        role: "Family from Kochi",
                        comment:
                            "A perfect family getaway! The kids loved the snow games in Solang Valley, and we enjoyed exploring the art and culture at Naggar. The guides were friendly, and the trip was filled with laughter and stunning views!",
                        image: "/images/manali/rider-img.jpg",
                    },
                ],
            },
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
                    "/images/manali/manali20.webp",
                ],
            },
        ],
    },
    {
        id: 2,
        title: "Sipping Chai At Spiti",
        date: "23 December 2025",
        excerpt:
            "Wilson has been bringing the International Yeti Gatherings to life for ten years through H+I Adventures, a tour outfit co-founded by Wilson in 2007.",
        img: "/images/sipping.jpg",
        link: "#",
        className: "absolute top-25 left-[25%] rotate-[-7deg]",
        price: 29999,
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
            "/images/manali/manali20.webp",
        ],
        content: [
            {
                type: "story",
                title: "Details",
                data: {
                    title: "Exploring the Spiti Valley",
                    user_experience:
                        "Spiti welcomed us with a silence that spoke volumes. The cold desert's serenity and the warmth of locals made this trip soul-enriching. The sight of Key Monastery against the blue sky is a memory etched forever.",
                    author: "Arjun Kapoor",
                    date: "25 December 2025",
                    author_img: "/images/manali/rider-img.jpg",
                },
            },
            {
                type: "itinerary",
                title: "Itinerary",
                data: itineraryData,
            },
            {
                type: "packing",
                title: "What to Pack?",
                data: [
                    { name: "Cycling Helmet", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Cycling Jacket (Waterproof/Windproof)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLb6-wUL85Bj_tQsTWqdZkNs5OlzYr6Vrsw&s", category: "must" },
                    { name: "Full Finger Gloves - 2 pairs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWyV9w-d107DbU0tzPwVMcXON5sO58CySFg&s", category: "must" },
                    { name: "Cycling Shoes", image: "https://i.insider.com/6048e5109942cf001865d880?width=1136&format=jpeg", category: "must" },
                    { name: "Prescription Medications", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fhHSQHXnrEAgA_REfaRH9rCvD6l7zXb98g&s", category: "must" },

                    { name: "Bike Shorts", image: "https://contents.mediadecathlon.com/p2464583/e441ddb57ab55a86c9a4a982d70fb756/p2464583.jpg" },
                    { name: "Casual Clothing for Travel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4tkCEMnwpV9Bnv3AXnpQIEG3w8037LOFdQ&s" },
                    { name: "Sun Hat", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-HvivaKeDt4kcKFyBMs9uqg7T3LyXauH4A&s" },
                    { name: "Sunblock & Lip Balm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmZe3u0KBTX00UdPNMi38QqprcQEYt6aX4A&s" },
                    { name: "Hiking Shoes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxp5mqadE-uU5zGJtzqA1AfuL6VNdbmR47IA&s" },
                ],
            },

            {
                type: "testimonial",
                title: "Testimonials",
                data: [
                    {
                        name: "Riya Sharma",
                        role: "Solo Traveler from Delhi",
                        comment:
                            "This was my first solo trip, and the Manali itinerary was perfectly planned! Every day felt like a new adventure — from the snow at Rohtang Pass to peaceful walks on Mall Road. The team handled everything smoothly; can’t wait to travel with them again!",
                        image: "/images/manali/rider-img.jpg",
                    },
                    {
                        name: "Arjun & Meera",
                        role: "Couple from Chennai",
                        comment:
                            "Our honeymoon in Manali was straight out of a dream! The itinerary balanced adventure and relaxation perfectly — paragliding in Solang Valley, cozy cafés in Old Manali, and breathtaking views from Naggar Castle.",
                        image: "/images/manali/rider-img.jpg",
                    },
                    {
                        name: "The Nair Family",
                        role: "Family from Kochi",
                        comment:
                            "A perfect family getaway! The kids loved the snow games in Solang Valley, and we enjoyed exploring the art and culture at Naggar. The guides were friendly, and the trip was filled with laughter and stunning views!",
                        image: "/images/manali/rider-img.jpg",
                    },
                ],
            },
            {
                type: "gallery",
                title: "Photo Memories",
                data: [
                    "/images/manali/manali1.jpg",
                    "/images/manali/manali2.jpeg",
                    "/images/manali/manali3.jpeg",
                    "/images/manali/manali4.jpg",
                    "/images/manali/manali5.jpg",
                    "/images/manali/manali6.jpg",
                ],
            },
        ],
    },
    {
        id: 3,
        title: "Kali's Abode, Faridkots Reverence",
        date: "16 March 2021",
        excerpt:
            "Sarah shares her incredible experience from the trails of British Columbia and the spiritual journey in Faridkots.",
        img: "/images/kali-img.jpg",
        link: "#",
        className: "absolute top-5 left-[40%] rotate-[8deg]",
        price: 29999,
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
            "/images/manali/manali20.webp",
        ],
        content: [
            {
                type: "story",
                title: "Details",
                data: {
                    title: "Arrival in Manali",
                    user_experience:
                        "The sunrise trek was an experience that will forever remain etched in my memory. The air was crisp, and each step revealed more of the breathtaking Himalayan view. When I finally reached the summit, the golden light of dawn danced on the snow peaks — a surreal moment of peace and awe.",
                    author: "Alice Johnson",
                    date: "21 September 2025",
                    author_img: "/images/manali/rider-img.jpg",
                },
            },
            {
                type: "itinerary",
                title: "Itinerary",
                data: itineraryData, // imported reusable data file
            },
            {
                type: "packing",
                title: "What to Pack?",
                data: [
                    { name: "Cycling Helmet", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Cycling Jacket (Waterproof/Windproof)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLb6-wUL85Bj_tQsTWqdZkNs5OlzYr6Vrsw&s", category: "must" },
                    { name: "Full Finger Gloves - 2 pairs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWyV9w-d107DbU0tzPwVMcXON5sO58CySFg&s", category: "must" },
                    { name: "Cycling Shoes", image: "https://i.insider.com/6048e5109942cf001865d880?width=1136&format=jpeg", category: "must" },
                    { name: "Prescription Medications", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fhHSQHXnrEAgA_REfaRH9rCvD6l7zXb98g&s", category: "must" },

                    { name: "Bike Shorts", image: "https://contents.mediadecathlon.com/p2464583/e441ddb57ab55a86c9a4a982d70fb756/p2464583.jpg" },
                    { name: "Casual Clothing for Travel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4tkCEMnwpV9Bnv3AXnpQIEG3w8037LOFdQ&s" },
                    { name: "Sun Hat", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-HvivaKeDt4kcKFyBMs9uqg7T3LyXauH4A&s" },
                    { name: "Sunblock & Lip Balm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmZe3u0KBTX00UdPNMi38QqprcQEYt6aX4A&s" },
                    { name: "Hiking Shoes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxp5mqadE-uU5zGJtzqA1AfuL6VNdbmR47IA&s" },
                ],
            }
            ,
            {
                type: "testimonial",
                title: "Testimonials",
                data: [
                    {
                        name: "Riya Sharma",
                        role: "Solo Traveler from Delhi",
                        comment:
                            "This was my first solo trip, and the Manali itinerary was perfectly planned! Every day felt like a new adventure — from the snow at Rohtang Pass to peaceful walks on Mall Road. The team handled everything smoothly; can’t wait to travel with them again!",
                        image: "/images/manali/rider-img.jpg",
                    },
                    {
                        name: "Arjun & Meera",
                        role: "Couple from Chennai",
                        comment:
                            "Our honeymoon in Manali was straight out of a dream! The itinerary balanced adventure and relaxation perfectly — paragliding in Solang Valley, cozy cafés in Old Manali, and breathtaking views from Naggar Castle.",
                        image: "/images/manali/rider-img.jpg",
                    },
                    {
                        name: "The Nair Family",
                        role: "Family from Kochi",
                        comment:
                            "A perfect family getaway! The kids loved the snow games in Solang Valley, and we enjoyed exploring the art and culture at Naggar. The guides were friendly, and the trip was filled with laughter and stunning views!",
                        image: "/images/manali/rider-img.jpg",
                    },
                ],
            }
            ,
            {
                type: "gallery",
                title: "Gallery",
                data: [
                    "/images/manali/manali1.jpg",
                    "/images/manali/manali2.jpeg",
                    "/images/manali/manali3.jpeg",
                    "/images/manali/manali4.jpg",
                    "/images/manali/manali5.jpg",
                ],
            },
        ],
    },
    {
        id: 4,
        title: "The Seven Hills",
        date: "15 August 2020",
        excerpt:
            "Experience the breathtaking landscapes and vibrant culture across the Seven Hills, capturing adventure, nature, and local traditions.",
        img: "/images/seven-hills.jpg",
        link: "#",
        className: "absolute top-20 left-[8%] rotate-[-5deg]",
        price: 29999,
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
            "/images/manali/manali20.webp",
        ],
        content: [
            {
                type: "story",
                title: "Details",
                data: {
                    title: "Arrival in Manali",
                    user_experience:
                        "The sunrise trek was an experience that will forever remain etched in my memory. The air was crisp, and each step revealed more of the breathtaking Himalayan view. When I finally reached the summit, the golden light of dawn danced on the snow peaks — a surreal moment of peace and awe.",
                    author: "Alice Johnson",
                    date: "21 September 2025",
                    author_img: "/images/manali/rider-img.jpg",
                },
            },
            {
                type: "itinerary",
                title: "Itinerary",
                data: itineraryData, // imported reusable data file
            },
            {
                type: "packing",
                title: "What to Pack?",
                data: [
                    { name: "Cycling Helmet", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Cycling Jacket (Waterproof/Windproof)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLb6-wUL85Bj_tQsTWqdZkNs5OlzYr6Vrsw&s", category: "must" },
                    { name: "Full Finger Gloves - 2 pairs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWyV9w-d107DbU0tzPwVMcXON5sO58CySFg&s", category: "must" },
                    { name: "Cycling Shoes", image: "https://i.insider.com/6048e5109942cf001865d880?width=1136&format=jpeg", category: "must" },
                    { name: "Prescription Medications", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fhHSQHXnrEAgA_REfaRH9rCvD6l7zXb98g&s", category: "must" },

                    { name: "Bike Shorts", image: "https://contents.mediadecathlon.com/p2464583/e441ddb57ab55a86c9a4a982d70fb756/p2464583.jpg" },
                    { name: "Casual Clothing for Travel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4tkCEMnwpV9Bnv3AXnpQIEG3w8037LOFdQ&s" },
                    { name: "Sun Hat", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-HvivaKeDt4kcKFyBMs9uqg7T3LyXauH4A&s" },
                    { name: "Sunblock & Lip Balm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmZe3u0KBTX00UdPNMi38QqprcQEYt6aX4A&s" },
                    { name: "Hiking Shoes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxp5mqadE-uU5zGJtzqA1AfuL6VNdbmR47IA&s" },
                ],
            }
            ,
            {
                type: "testimonial",
                title: "Testimonials",
                data: [
                    {
                        name: "Riya Sharma",
                        role: "Solo Traveler from Delhi",
                        comment:
                            "This was my first solo trip, and the Manali itinerary was perfectly planned! Every day felt like a new adventure — from the snow at Rohtang Pass to peaceful walks on Mall Road. The team handled everything smoothly; can’t wait to travel with them again!",
                        image: "/images/manali/rider-img.jpg",
                    },
                    {
                        name: "Arjun & Meera",
                        role: "Couple from Chennai",
                        comment:
                            "Our honeymoon in Manali was straight out of a dream! The itinerary balanced adventure and relaxation perfectly — paragliding in Solang Valley, cozy cafés in Old Manali, and breathtaking views from Naggar Castle.",
                        image: "/images/manali/rider-img.jpg",
                    },
                    {
                        name: "The Nair Family",
                        role: "Family from Kochi",
                        comment:
                            "A perfect family getaway! The kids loved the snow games in Solang Valley, and we enjoyed exploring the art and culture at Naggar. The guides were friendly, and the trip was filled with laughter and stunning views!",
                        image: "/images/manali/rider-img.jpg",
                    },
                ],
            }
            ,
            {
                type: "gallery",
                title: "Gallery",
                data: [
                    "/images/manali/manali1.jpg",
                    "/images/manali/manali2.jpeg",
                    "/images/manali/manali3.jpeg",
                    "/images/manali/manali4.jpg",
                    "/images/manali/manali5.jpg",
                ],
            },
        ],
    },
    {
        id: 5,
        title: "Ladakh Adventures",
        date: "1 July 2024",
        excerpt:
            "We visited Warren on his home trails in Santa Cruz, California, and caught up with what he has been up to lately.",
        img: "/images/manali-img.jpg",
        link: "#",
        className: "absolute top-20 left-[8%] rotate-[-5deg]",
        price: 29999,
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
            "/images/manali/manali20.webp",
        ],
        content: [
            {
                type: "story",
                title: "Details",
                data: {
                    title: "Arrival in Manali",
                    user_experience:
                        "The sunrise trek was an experience that will forever remain etched in my memory. The air was crisp, and each step revealed more of the breathtaking Himalayan view. When I finally reached the summit, the golden light of dawn danced on the snow peaks — a surreal moment of peace and awe.",
                    author: "Alice Johnson",
                    date: "21 September 2025",
                    author_img: "/images/manali/rider-img.jpg",
                },
            },
            {
                type: "itinerary",
                title: "Itinerary",
                data: itineraryData, // imported reusable data file
            },
            {
                type: "packing",
                title: "What to Pack?",
                data: [
                    { name: "Cycling Helmet", image: "https://media.trekbikes.com/image/upload/w_1200/TrekVelocisMipsHelmetCE-34589-A-Primary", category: "must" },
                    { name: "Cycling Jacket (Waterproof/Windproof)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLb6-wUL85Bj_tQsTWqdZkNs5OlzYr6Vrsw&s", category: "must" },
                    { name: "Full Finger Gloves - 2 pairs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWyV9w-d107DbU0tzPwVMcXON5sO58CySFg&s", category: "must" },
                    { name: "Cycling Shoes", image: "https://i.insider.com/6048e5109942cf001865d880?width=1136&format=jpeg", category: "must" },
                    { name: "Prescription Medications", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fhHSQHXnrEAgA_REfaRH9rCvD6l7zXb98g&s", category: "must" },

                    { name: "Bike Shorts", image: "https://contents.mediadecathlon.com/p2464583/e441ddb57ab55a86c9a4a982d70fb756/p2464583.jpg" },
                    { name: "Casual Clothing for Travel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4tkCEMnwpV9Bnv3AXnpQIEG3w8037LOFdQ&s" },
                    { name: "Sun Hat", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-HvivaKeDt4kcKFyBMs9uqg7T3LyXauH4A&s" },
                    { name: "Sunblock & Lip Balm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmZe3u0KBTX00UdPNMi38QqprcQEYt6aX4A&s" },
                    { name: "Hiking Shoes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxp5mqadE-uU5zGJtzqA1AfuL6VNdbmR47IA&s" },
                ],
            }
            ,
            {
                type: "testimonial",
                title: "Testimonials",
                data: [
                    {
                        name: "Riya Sharma",
                        role: "Solo Traveler from Delhi",
                        comment:
                            "This was my first solo trip, and the Manali itinerary was perfectly planned! Every day felt like a new adventure — from the snow at Rohtang Pass to peaceful walks on Mall Road. The team handled everything smoothly; can’t wait to travel with them again!",
                        image: "/images/manali/rider-img.jpg",
                    },
                    {
                        name: "Arjun & Meera",
                        role: "Couple from Chennai",
                        comment:
                            "Our honeymoon in Manali was straight out of a dream! The itinerary balanced adventure and relaxation perfectly — paragliding in Solang Valley, cozy cafés in Old Manali, and breathtaking views from Naggar Castle.",
                        image: "/images/manali/rider-img.jpg",
                    },
                    {
                        name: "The Nair Family",
                        role: "Family from Kochi",
                        comment:
                            "A perfect family getaway! The kids loved the snow games in Solang Valley, and we enjoyed exploring the art and culture at Naggar. The guides were friendly, and the trip was filled with laughter and stunning views!",
                        image: "/images/manali/rider-img.jpg",
                    },
                ],
            }
            ,
            {
                type: "gallery",
                title: "Gallery",
                data: [
                    "/images/manali/manali1.jpg",
                    "/images/manali/manali2.jpeg",
                    "/images/manali/manali3.jpeg",
                    "/images/manali/manali4.jpg",
                    "/images/manali/manali5.jpg",
                ],
            },
        ],
    },
];

