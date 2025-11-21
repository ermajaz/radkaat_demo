
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MessageSquare,
  Users,
  Star,
} from "lucide-react";
import Link from "next/link";
import { SupportSection } from "../types/support.types";

export const contactData: SupportSection[] = [
  {
    id: "contact-intro",
    title: "Contact Introduction",
    content: (
      <div className="space-y-6 bg-linear-to-r from-navy to-army p-6 rounded-2xl shadow-lg border border-sandstorm-1">
        <h3 className="text-2xl font-bold text-sandstorm-1">Contact Us</h3>
        <p className="text-base leading-relaxed text-white">
          At <span className="font-semibold text-sandstorm-1">Radkaat</span>, we
          are committed to staying connected with our users. Whether you have a
          question, need technical support, or want to share feedback — we’re
          just a click away. Our support team works tirelessly to ensure your
          experience is smooth and delightful.
        </p>
        <blockquote className="border-l-4 border-rust pl-4 italic text-white bg-superblack/30 py-2 rounded">
          &quot;Your satisfaction is not just a goal — it’s our mission.&quot;
        </blockquote>
        <p className="text-sm text-gray-300">
          💡 Tip: For the fastest response, use our{" "}
          <span className="font-medium">live chat</span> or{" "}
          <span className="font-medium">support form</span>.
        </p>
      </div>
    ),
  },
  {
    id: "contact-methods",
    title: "Contact Methods",
    content: (
      <div className="space-y-6 bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-army">
        <p className="text-base text-white">
          Choose the way that suits you best to connect with us:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white">
          <li className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-sandstorm-1" />{" "}
            <span>Email: support@radkaat.com</span>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-sandstorm-1" />{" "}
            <span>Phone: +1-800-123-4567</span>
          </li>
          <li className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-sandstorm-1" />{" "}
            <span>Live Chat (website)</span>
          </li>
          <li className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sandstorm-1" />{" "}
            <span>Support Form (quick response)</span>
          </li>
        </ul>
        <p className="text-sm text-gray-300">
          ⚡ Our average response time:{" "}
          <span className="font-medium text-white">under 24 hours</span>.
        </p>
      </div>
    ),
  },
  {
    id: "contact-details",
    title: "Radkaat Ventures Private Limited",
    content: (
      <div className="bg-linear-to-br from-navy via-sandstorm/10 to-army rounded-2xl p-6 shadow-xl border border-sandstorm-1 space-y-4 text-white">
        <p className="font-semibold text-lg tracking-wide">
          RADKAAT VENTURES PRIVATE LIMITED
        </p>
        <div className="text-[13px] space-y-1">
          <p>1st Floor, Unit no.124, Paras Trade Centre,</p>
          <p>Gurgaon Faridabad Road, Gwal Pahari, Gurugram,</p>
          <p>District, Gurugram, Haryana 122003</p>
        </div>
        <p className="font-medium text-[13px] mt-2">GST: 02AAMCR8372H1Z4</p>
        <p className="font-medium text-[13px]">+91-9429693000</p>
        <p className="underline underline-offset-2 text-[13px] cursor-pointer hover:text-rust transition-colors">
          support@cyclecircle.one
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h4 className="font-bold text-sandstorm-1 mb-2">🌍 Corporate Offices</h4>
            <ul className="space-y-1 text-[12px]">
              <li>New York, NY, USA</li>
              <li>London, UK</li>
              <li>Mumbai, India</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sandstorm-1 mb-2">📞 Support Channels</h4>
            <ul className="space-y-1 text-[12px]">
              <li>Live Chat (website)</li>
              <li>Support Form</li>
              <li>Email: support@radkaat.com</li>
              <li>Phone: +1-800-123-4567</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-bold text-sandstorm-1 mb-2">⏰ Business Hours</h4>
          <p className="text-[12px]">Mon - Fri: 9:00 AM - 7:00 PM</p>
          <p className="text-[12px]">Saturday: 10:00 AM - 4:00 PM</p>
          <p className="text-[12px]">Sunday: Closed</p>
        </div>

        <div className="mt-6">
          <h4 className="font-bold text-sandstorm-1 mb-2">📢 Social Media</h4>
          <div className="flex gap-4">
            <Link href="#"><Facebook className="w-5 h-5 text-white hover:text-rust" /></Link>
            <Link href="#"><Twitter className="w-5 h-5 text-white hover:text-rust" /></Link>
            <Link href="#"><Instagram className="w-5 h-5 text-white hover:text-rust" /></Link>
            <Link href="#"><Linkedin className="w-5 h-5 text-white hover:text-rust" /></Link>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "contact-team",
    title: "Meet the Support Team",
    content: (
      <div className="space-y-4 bg-gray-800/60 p-6 rounded-2xl shadow-md border border-gray-700">
        <p className="text-base text-white">
          Our dedicated support team consists of{" "}
          <span className="font-semibold text-sandstorm-1">experienced professionals</span> ready
          to assist you with{" "}
          <span className="italic">technical, billing, and general queries</span>.
        </p>
        <p className="text-sm text-gray-300">
          We regularly train our staff to stay updated with the{" "}
          <span className="font-medium text-white">latest tools and best practices</span>,
          ensuring world-class support every time.
        </p>
        <p className="text-sm text-gray flex items-center gap-2">
          <Users className="w-4 h-4" /> Over{" "}
          <span className="font-semibold">50+ experts worldwide</span>.
        </p>
      </div>
    ),
  },
  {
    id: "contact-feedback",
    title: "Feedback & Suggestions",
    content: (
      <div className="space-y-4 bg-linear-to-r from-army/90 to-navy/90 p-6 rounded-2xl shadow-md">
        <p className="text-base text-white">
          Your voice matters! We encourage you to share{" "}
          <span className="font-semibold text-sandstorm-1">feedback and suggestions</span>{" "}
          to help us improve and innovate.
        </p>
        <p className="text-sm text-gray-200">
          Every suggestion you provide drives our{" "}
          <span className="font-medium text-white">product evolution</span> and{" "}
          <span className="font-medium text-white">service excellence</span>.
        </p>
        <p className="text-sm text-gray-300">
          🌟 Join our <span className="font-medium">community forums</span> to
          collaborate with other users and shape the future of Radkaat.
        </p>
      </div>
    ),
  },
];
