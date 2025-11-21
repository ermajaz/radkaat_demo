
import Image from "next/image";
import { SupportSection } from "../types/support.types";

export const brandData: SupportSection[] = [
  {
    id: "brand-flag",
    title: "The Flag We Carry",
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-army">The Flag We Carry</h3>
        <p className="text-base leading-relaxed text-white">
          Radkaat isn’t just a brand — it’s a signal. A story worth telling. 
          Our flag is not for show, but a compass that keeps us grounded in 
          purpose, resilience, and authenticity.
        </p>
        <blockquote className="border-l-4 pl-4 italic text-sandstorm-1 bg-gray-900">
          “This flag is what we carry through heat, mud, and monsoon — 
          a symbol, yes, but also a signal.”
        </blockquote>
        {/* Image placeholder from PDF "The Flag We Carry" intro section */}
        <div className="rounded-lg overflow-hidden">
          <Image quality={100} src="/images/flag-img.png" alt="Radkaat Flag" width={600} height={300} className="w-full h-full" />
        </div>
      </div>
    ),
  },
  {
    id: "brand-story",
    title: "Our Story",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          Radkaat was born on a trail, not in a boardroom. From the hills of 
          Shimla, we set out to build gear that worked for the heat, mud, 
          monsoon, and madness of India.
        </p>
        <div className="bg-linear-to-r from-navy to-army p-4 rounded-lg shadow-md text-sm text-white">
          <p className="font-semibold">Born in Shimla:</p>
          <p>A tribute to where it all began, every product carries this mark with pride.</p>
        </div>
        {/* Image placeholder from PDF "Our Story" page with mountain trail */}
        <div className="w-full flex items-center justify-between">
            <Image quality={100} src="/images/ashish-born.png" alt="Radkaat Origin Story" width={300} height={300} />
        <Image quality={100} src="/images/born-in-shimla.png" alt="Radkaat Origin born Story" width={300} height={300} />
        </div>
      </div>
    ),
  },
  {
    id: "brand-manifesto",
    title: "Our Manifesto",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          We are more than gear-makers. We are a community — athletes, 
          adventurers, seekers, and believers. Together, we move with 
          purpose and pride.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-3 border border-sandstorm-1 rounded-lg text-sm text-white">
            🌍 <span className="font-semibold text-sandstorm-1">Playground</span> – The Himalayas are our home.
          </div>
          <div className="p-3 border border-sandstorm-1 rounded-lg text-sm text-white">
            🚶 <span className="font-semibold text-sandstorm-1">Movement</span> – We don’t stand still, we move together.
          </div>
        </div>
        {/* Image placeholder from PDF "Manifesto" section with community */}
        <Image quality={100} src="/images/manifesto.png" alt="Radkaat Manifesto" width={600} height={300} className="w-full h-full rounded-[1px]"/>
      </div>
    ),
  },
  {
    id: "brand-colors",
    title: "Colours of Radkaat",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          Our palette draws from the land — earthy, resilient, and 
          grounded in action. No gloss, just purpose.
        </p>
        <div className="p-4 rounded-lg text-sm text-white grid grid-cols-3 gap-2">
          <div className="h-12 w-full border-2 border-white/10 bg-[#0f0708] rounded" title="Super Black"></div>
          <div className="h-12 w-full border-2 border-white/10 bg-[#003a5d] rounded" title="Petrol Blue"></div>
          <div className="h-12 w-full border-2 border-white/10 bg-[#516316] rounded" title="Army Green"></div>
          <div className="h-12 w-full border-2 border-white/10 bg-[#c6b783] rounded" title="Sandstorm"></div>
          <div className="h-12 w-full border-2 border-white/10 bg-[#8D363B] rounded" title="Rust"></div>
          <div className="h-12 w-full border-2 border-white/10 bg-[#001644] rounded" title="Navy Blue"></div>
        </div>
      </div>
    ),
  },
  {
    id: "brand-photography",
    title: "Photography",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          Our imagery reflects the raw and the real — nothing staged, 
          nothing forced. Scenic, action, lifestyle, and product shots 
          that always stay rooted in the Indian outdoors.
        </p>
        <blockquote className="border-l-4 pl-4 italic text-sandstorm-1 bg-gray-900">
          “Every shot is a story — raw, cinematic, and deeply connected to place.”
        </blockquote>
        {/* Image placeholder from PDF "Photography" section (scenic + athlete) */}
        <Image quality={100} src="/images/manifesto.png" alt="Radkaat Photography" width={600} height={300} className="w-full h-full rounded-[1px]" />
      </div>
    ),
  },
  {
    id: "brand-tone",
    title: "Tone of Voice",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          Radkaat speaks with clarity, confidence, and conviction. Our tone 
          is bold yet grounded, raw yet inspiring — always reflecting the 
          complexity of India.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-3 bg-linear-to-r from-rust to-army rounded-lg text-sm text-white">
            Bold & Defiant – Confident, unapologetic, proudly Indian.
          </div>
          <div className="p-3 bg-linear-to-r from-navy to-sandstorm rounded-lg text-sm text-white">
            Grounded & Authentic – Raw, real, and rooted in the Indian spirit.
          </div>
        </div>
        {/* Image placeholder from PDF "Tone of Voice" typography spread */}
        <Image quality={100} src="/images/akshit.jpg" alt="Radkaat Tone of Voice" width={600} height={300} className="w-full h-full rounded-[2px]"/>
      </div>
    ),
  },
];
