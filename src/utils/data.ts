import { Bikee, ItineraryItem, OverlayBike, Store } from "@/types";
import { Calendar, Clock, Truck, Bike } from "lucide-react";

export interface StorySection {
  type: "story" | "itinerary" | "packing" | "testimonial" | "gallery";
  title: string;
  data?: any;
}

export interface Story {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  img: string;
  link: string;
  className?: string;
  price: number;
  images: string[];
  content: StorySection[];
}

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
    img: "/images/manali.jpg",
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
        ],
      },
    ],
  },

  // 🔹 Story 2: Sipping Chai at Spiti
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
      "/images/spiti/spiti1.jpg",
      "/images/spiti/spiti2.jpg",
      "/images/spiti/spiti3.jpg",
      "/images/spiti/spiti4.jpg",
      "/images/spiti/spiti5.jpg",
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
          "/images/spiti/spiti1.jpg",
          "/images/spiti/spiti2.jpg",
          "/images/spiti/spiti3.jpg",
          "/images/spiti/spiti4.jpg",
          "/images/spiti/spiti5.jpg",
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
    img: "/images/kali.png",
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
    img: "/images/manali.jpg",
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




export const bikes: Bikee[] = [
  {
    id: "serow",
    name: "SEROW",
    logo: "/images/Serow-white.png",
    logoBlack: "/images/serow-black.png",
    img: "/images/bike-front.png",
    stats: {
      suspension: 9,
      braking: 7,
      frame: 9,
      tire: 8,
      weight: 9,
      comfort: 7,
    },
    description: [
      "High suspension",
      "Balanced braking power",
      "Lightweight",
      "Strong frame durability",
    ],
  },
  {
    id: "saola",
    name: "SAOLA",
    logo: "/images/Saola-white.png",
    logoBlack: "/images/saola-black.png",
    img: "/images/bike-front.png",
    stats: {
      suspension: 7,
      braking: 8,
      frame: 7,
      tire: 6,
      weight: 8,
      comfort: 6,
    },
    description: [
      "Efficient climbing",
      "Responsive braking",
      "Comfortable ride",
      "Good weight balance",
    ],
  },
  {
    id: "takin",
    name: "TAKIN",
    logo: "/images/Takin-white.png",
    logoBlack: "/images/takin-black.png",
    img: "/images/bike-front.png",
    stats: {
      suspension: 8,
      braking: 9,
      frame: 8,
      tire: 7,
      weight: 7,
      comfort: 8,
    },
    description: [
      "Excellent control",
      "Durable build",
      "Powerful braking",
      "All-terrain grip",
    ],
  },
];

export const mockBikes: OverlayBike[] = [
  {
    id: "serow-1",
    name: "SEROW-1",
    logo: "/images/Serow-white.png",
    image: "/images/serow-big-img.png",
    price: "₹10,000",
    skus: [
      { id: "s-1", name: "SEROW-1", image: "/images/serow-big-img.png" },
      { id: "s-2", name: "SEROW-2", image: "/images/serow-big-img.png" },
      { id: "s-3", name: "SEROW-3", image: "/images/serow-big-img.png" },
    ],
    details: {
      size: "M / L",
      color: "Forest Green",
      dimension: "120cm x 40cm x 80cm",
      material: "Alloy Steel",
    },
  },
  {
    id: "saola-1",
    name: "SAOLA-1",
    logo: "/images/Saola-white.png",
    image: "/images/serow-big-img.png",
    price: "₹12,500",
    skus: [
      { id: "s-4", name: "SAOLA-1", image: "/images/serow-big-img.png" },
      { id: "s-5", name: "SAOLA-2", image: "/images/serow-big-img.png" },
      { id: "s-6", name: "SAOLA-3", image: "/images/serow-big-img.png" },
    ],
    details: {
      size: "S / M",
      color: "Sand",
      dimension: "115cm x 38cm x 78cm",
      material: "Carbon Fiber",
    },
  },
  {
    id: "takin-1",
    name: "TAKIN-1",
    logo: "/images/Takin-white.png",
    image: "/images/serow-big-img.png",
    price: "₹9,500",
    skus: [
      { id: "s-7", name: "TAKIN-1", image: "/images/serow-big-img.png" },
      { id: "s-8", name: "TAKIN-2", image: "/images/serow-big-img.png" },
      { id: "s-9", name: "TAKIN-3", image: "/images/serow-big-img.png" },
    ],
    details: {
      size: "M",
      color: "Charcoal",
      dimension: "122cm x 42cm x 82cm",
      material: "Chromoly",
    },
  },
];

export const ourProducts = [
  {
    id: "bikes",
    title: "BIKES",
    image:
      "https://wallpapers.com/images/featured/mountain-bike-nscgkm2azbwgg2py.jpg",
    link: "/bikes",
  },
  {
    id: "apparel",
    title: "APPAREL",
    image: "/images/apparel.png",
    link: "/apparel",
  },
  {
    id: "accessories",
    title: "ACCESSORIES",
    image: "/images/accessories.jpg",
    link: "/accessories",
  },
];

export const steps = [
  {
    title: "Book a Test ride",
    desc: "Choose your preferred cycle model and book a test ride with just a few simple steps.",
    icon: Bike,
  },
  {
    title: "Select a date and timeslot",
    desc: "Pick a convenient date and time that fits your schedule for the test ride.",
    icon: Calendar,
  },
  {
    title: "Rider reaches you",
    desc: "Our expert rider will arrive at your location with the cycle, ready to guide you.",
    icon: Truck,
  },
  {
    title: "Do the test drive",
    desc: "Experience the ride first-hand, explore features, and feel the freedom on wheels.",
    icon: Clock,
  },
];

export const bikesData = [
  {
    name: "Serow",
    logo: "/images/Serow-white.png",
    image: "/images/bike-curve-view.png",
    features: [
      { label: "Internal Cable", value: "Routing" },
      { label: "Mechanical Suspension", value: "Fork" },
      { label: "Mechanical Disc", value: "Brake" },
    ],
    extraFeature: [
      "Smooth internal cable routing",
      "Mechanical suspension fork",
      "Reliable mechanical disc brakes",
    ],
    specs: {
      frameset: "RADFlex Alloy – Internal Cable Routing, 17.5”, Boost – 148MM",
      suspension: "SR Suntour X1 Boost Air, 120MM, Hydraulic Lockout",
      braking: "Shimano MT200 Hydraulic Disc Brakes – 160MM",
    },
    colors: {
      gradient: "#C6B783, #806D2A", // top → bottom
      cta: "var(--color-sandstorm)",
    },
  },
  {
    name: "Saola",
    logo: "/images/Saola-white.png",
    image: "/images/bike-curve-view.png",
    features: [
      { label: "Hydraulic Brake", value: "Disc Brake" },
      { label: "Full Suspension", value: "Suspension" },
      { label: "Carbon Material", value: "Frame" },
    ],
    extraFeature: [
      "Hydraulic disc brakes",
      "Full carbon suspension frame",
      "Lightweight carbon material",
    ],
    specs: {
      frameset: "Carbon Alloy – Internal Cable Routing, 18”",
      suspension: "FOX Float, 130MM, Hydraulic Lockout",
      braking: "Shimano XT Hydraulic Disc Brakes – 180MM",
    },
    colors: {
      gradient: "#0046D7, #FFFFFF",
      cta: "var(--color-airforce)",
    },
  },
  {
    name: "Takin",
    logo: "/images/Takin-white.png",
    image: "/images/bike-curve-view.png",
    features: [
      { label: "Internal Cable", value: "Routing" },
      { label: "Mechanical Suspension", value: "Fork" },
      { label: "Mechanical Disc", value: "Brake" },
    ],
    extraFeature: [
      "Internal cable routing",
      "Mechanical suspension fork",
      "Mechanical disc brakes",
    ],
    specs: {
      frameset: "Aluminum Alloy – Internal Cable Routing, 17”",
      suspension: "RockShox Judy, 120MM, Hydraulic Lockout",
      braking: "Shimano MT400 Hydraulic Disc Brakes – 160MM",
    },
    colors: {
      gradient: "#516316, #F1FFC3",
      cta: "var(--color-army)",
    },
  },
];

export const stores: Store[] = [
  {
    id: 1,
    name: "Store Mumbai 1",
    city: "Mumbai",
    state: "Maharashtra",
    lat: 19.076,
    lng: 72.8777,
    address: "Andheri West",
  },
  {
    id: 2,
    name: "Store Mumbai 2",
    city: "Mumbai",
    state: "Maharashtra",
    lat: 19.1,
    lng: 72.88,
    address: "Bandra",
  },
  {
    id: 3,
    name: "Store Mumbai 3",
    city: "Mumbai",
    state: "Maharashtra",
    lat: 19.09,
    lng: 72.87,
    address: "Juhu",
  },
  {
    id: 4,
    name: "Store Pune 1",
    city: "Pune",
    state: "Maharashtra",
    lat: 18.5204,
    lng: 73.8567,
    address: "Koregaon Park",
  },
  {
    id: 5,
    name: "Store Pune 2",
    city: "Pune",
    state: "Maharashtra",
    lat: 18.53,
    lng: 73.85,
    address: "Viman Nagar",
  },
  {
    id: 6,
    name: "Store Delhi 1",
    city: "Delhi",
    state: "Delhi",
    lat: 28.6139,
    lng: 77.209,
    address: "Connaught Place",
  },
  {
    id: 7,
    name: "Store Delhi 2",
    city: "Delhi",
    state: "Delhi",
    lat: 28.61,
    lng: 77.21,
    address: "Karol Bagh",
  },
  {
    id: 8,
    name: "Store Delhi 3",
    city: "Delhi",
    state: "Delhi",
    lat: 28.63,
    lng: 77.22,
    address: "Saket",
  },
  {
    id: 9,
    name: "Store Bangalore 1",
    city: "Bangalore",
    state: "Karnataka",
    lat: 12.9716,
    lng: 77.5946,
    address: "MG Road",
  },
  {
    id: 10,
    name: "Store Bangalore 2",
    city: "Bangalore",
    state: "Karnataka",
    lat: 12.97,
    lng: 77.59,
    address: "Koramangala",
  },
  {
    id: 11,
    name: "Store Bangalore 3",
    city: "Bangalore",
    state: "Karnataka",
    lat: 12.98,
    lng: 77.6,
    address: "Indiranagar",
  },
  {
    id: 12,
    name: "Store Hyderabad 1",
    city: "Hyderabad",
    state: "Telangana",
    lat: 17.385,
    lng: 78.4867,
    address: "Banjara Hills",
  },
  {
    id: 13,
    name: "Store Hyderabad 2",
    city: "Hyderabad",
    state: "Telangana",
    lat: 17.39,
    lng: 78.48,
    address: "Hitech City",
  },
  {
    id: 14,
    name: "Store Hyderabad 3",
    city: "Hyderabad",
    state: "Telangana",
    lat: 17.38,
    lng: 78.48,
    address: "Gachibowli",
  },
  {
    id: 15,
    name: "Store Chennai 1",
    city: "Chennai",
    state: "Tamil Nadu",
    lat: 13.0827,
    lng: 80.2707,
    address: "T. Nagar",
  },
  {
    id: 16,
    name: "Store Chennai 2",
    city: "Chennai",
    state: "Tamil Nadu",
    lat: 13.08,
    lng: 80.27,
    address: "Adyar",
  },
  {
    id: 17,
    name: "Store Chennai 3",
    city: "Chennai",
    state: "Tamil Nadu",
    lat: 13.09,
    lng: 80.26,
    address: "Velachery",
  },
  {
    id: 18,
    name: "Store Kolkata 1",
    city: "Kolkata",
    state: "West Bengal",
    lat: 22.5726,
    lng: 88.3639,
    address: "Salt Lake",
  },
  {
    id: 19,
    name: "Store Kolkata 2",
    city: "Kolkata",
    state: "West Bengal",
    lat: 22.57,
    lng: 88.36,
    address: "Park Street",
  },
  {
    id: 20,
    name: "Store Kolkata 3",
    city: "Kolkata",
    state: "West Bengal",
    lat: 22.57,
    lng: 88.37,
    address: "New Town",
  },
  {
    id: 21,
    name: "Store Jaipur 1",
    city: "Jaipur",
    state: "Rajasthan",
    lat: 26.9124,
    lng: 75.7873,
    address: "MI Road",
  },
  {
    id: 22,
    name: "Store Jaipur 2",
    city: "Jaipur",
    state: "Rajasthan",
    lat: 26.91,
    lng: 75.78,
    address: "C-Scheme",
  },
  {
    id: 23,
    name: "Store Jaipur 3",
    city: "Jaipur",
    state: "Rajasthan",
    lat: 26.91,
    lng: 75.79,
    address: "Bani Park",
  },
  {
    id: 24,
    name: "Store Lucknow 1",
    city: "Lucknow",
    state: "Uttar Pradesh",
    lat: 26.8467,
    lng: 80.9462,
    address: "Gomti Nagar",
  },
  {
    id: 25,
    name: "Store Lucknow 2",
    city: "Lucknow",
    state: "Uttar Pradesh",
    lat: 26.85,
    lng: 80.95,
    address: "Hazratganj",
  },
  {
    id: 26,
    name: "Store Lucknow 3",
    city: "Lucknow",
    state: "Uttar Pradesh",
    lat: 26.84,
    lng: 80.94,
    address: "Alambagh",
  },
  {
    id: 27,
    name: "Store Ahmedabad 1",
    city: "Ahmedabad",
    state: "Gujarat",
    lat: 23.0225,
    lng: 72.5714,
    address: "CG Road",
  },
  {
    id: 28,
    name: "Store Ahmedabad 2",
    city: "Ahmedabad",
    state: "Gujarat",
    lat: 23.02,
    lng: 72.57,
    address: "Navrangpura",
  },
  {
    id: 29,
    name: "Store Ahmedabad 3",
    city: "Ahmedabad",
    state: "Gujarat",
    lat: 23.03,
    lng: 72.58,
    address: "Satellite",
  },
  {
    id: 30,
    name: "Store Kochi 1",
    city: "Kochi",
    state: "Kerala",
    lat: 9.9312,
    lng: 76.2673,
    address: "MG Road",
  },
  {
    id: 31,
    name: "Store Kochi 2",
    city: "Kochi",
    state: "Kerala",
    lat: 9.93,
    lng: 76.27,
    address: "Marine Drive",
  },
  {
    id: 32,
    name: "Store Kochi 3",
    city: "Kochi",
    state: "Kerala",
    lat: 9.94,
    lng: 76.26,
    address: "Vyttila",
  },
  {
    id: 33,
    name: "Store Surat 1",
    city: "Surat",
    state: "Gujarat",
    lat: 21.1702,
    lng: 72.8311,
    address: "Varachha",
  },
  {
    id: 34,
    name: "Store Surat 2",
    city: "Surat",
    state: "Gujarat",
    lat: 21.17,
    lng: 72.83,
    address: "Adajan",
  },
  {
    id: 35,
    name: "Store Surat 3",
    city: "Surat",
    state: "Gujarat",
    lat: 21.16,
    lng: 72.83,
    address: "Pal",
  },
  {
    id: 36,
    name: "Store Indore 1",
    city: "Indore",
    state: "Madhya Pradesh",
    lat: 22.7196,
    lng: 75.8577,
    address: "MG Road",
  },
  {
    id: 37,
    name: "Store Indore 2",
    city: "Indore",
    state: "Madhya Pradesh",
    lat: 22.72,
    lng: 75.85,
    address: "Vijay Nagar",
  },
  {
    id: 38,
    name: "Store Patna 1",
    city: "Patna",
    state: "Bihar",
    lat: 25.5941,
    lng: 85.1376,
    address: "Boring Road",
  },
  {
    id: 39,
    name: "Store Patna 2",
    city: "Patna",
    state: "Bihar",
    lat: 25.59,
    lng: 85.13,
    address: "Kankarbagh",
  },
  {
    id: 40,
    name: "Store Guwahati 1",
    city: "Guwahati",
    state: "Assam",
    lat: 26.1445,
    lng: 91.7362,
    address: "Pan Bazaar",
  },
  {
    id: 41,
    name: "Store Guwahati 2",
    city: "Guwahati",
    state: "Assam",
    lat: 26.14,
    lng: 91.73,
    address: "Paltan Bazaar",
  },
  {
    id: 42,
    name: "Store Bhopal 1",
    city: "Bhopal",
    state: "Madhya Pradesh",
    lat: 23.2599,
    lng: 77.4126,
    address: "MP Nagar",
  },
  {
    id: 43,
    name: "Store Bhopal 2",
    city: "Bhopal",
    state: "Madhya Pradesh",
    lat: 23.26,
    lng: 77.41,
    address: "Kolar Road",
  },
  {
    id: 44,
    name: "Store Trivandrum 1",
    city: "Trivandrum",
    state: "Kerala",
    lat: 8.5241,
    lng: 76.9366,
    address: "MG Road",
  },
  {
    id: 45,
    name: "Store Trivandrum 2",
    city: "Trivandrum",
    state: "Kerala",
    lat: 8.52,
    lng: 76.93,
    address: "Vazhuthacaud",
  },
  {
    id: 46,
    name: "Store Ranchi 1",
    city: "Ranchi",
    state: "Jharkhand",
    lat: 23.3441,
    lng: 85.3096,
    address: "Harmu Road",
  },
  {
    id: 47,
    name: "Store Ranchi 2",
    city: "Ranchi",
    state: "Jharkhand",
    lat: 23.34,
    lng: 85.3,
    address: "Kantatoli",
  },
  {
    id: 48,
    name: "Store Vadodara 1",
    city: "Vadodara",
    state: "Gujarat",
    lat: 22.3072,
    lng: 73.1812,
    address: "Alkapuri",
  },
  {
    id: 49,
    name: "Store Vadodara 2",
    city: "Vadodara",
    state: "Gujarat",
    lat: 22.3,
    lng: 73.18,
    address: "Manjalpur",
  },
  {
    id: 50,
    name: "Store Nashik 1",
    city: "Nashik",
    state: "Maharashtra",
    lat: 19.9975,
    lng: 73.7898,
    address: "College Road",
  },
];
