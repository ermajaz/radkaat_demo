
import Link from "next/link";
import { SupportSection } from "../types/support.types";

export const termsData: SupportSection[] = [
  {
    id: "terms-intro",
    title: "Introduction",
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-army">Terms & Conditions</h3>
        <p className="text-base leading-relaxed text-white">
          Welcome to Radkaat. By accessing or using our services, you agree to
          these terms and conditions. Please read them carefully before using
          our website or services.
        </p>
        <blockquote className="border-l-4 pl-4 italic text-sandstorm-1 bg-gray-900">
          “Using Radkaat means trusting us with your experience — and we take
          that responsibility seriously.”
        </blockquote>
      </div>
    ),
  },
  {
    id: "terms-eligibility",
    title: "Eligibility",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          You must meet the following requirements to use our services:
        </p>
        <div className="bg-linear-to-r from-navy to-army p-4 rounded-lg shadow-md text-white text-sm">
          <ul className="list-disc pl-6 space-y-1">
            <li>Must be at least 18 years old</li>
            <li>Minors require verified parental consent</li>
            <li>Compliance with local and international laws</li>
            <li>No previous account bans or violations</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "terms-user-responsibilities",
    title: "User Responsibilities",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          As a Radkaat user, you agree to the following responsibilities:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-3 border border-sandstorm-1 rounded-lg text-sm text-white">
            🔐 <span className="font-semibold text-sandstorm-1">Account Security</span> –  
            Keep your login details safe.
          </div>
          <div className="p-3 border border-sandstorm-1 rounded-lg text-sm text-white">
            📜 <span className="font-semibold text-sandstorm-1">Accurate Info</span> –  
            Provide correct and updated details.
          </div>
          <div className="p-3 border border-sandstorm-1 rounded-lg text-sm text-white">
            🚫 <span className="font-semibold text-sandstorm-1">No Misuse</span> –  
            Don’t abuse or exploit our services.
          </div>
          <div className="p-3 border border-sandstorm-1 rounded-lg text-sm text-white">
            📩 <span className="font-semibold text-sandstorm-1">Notify Us</span> –  
            Report unauthorized access immediately.
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "terms-prohibited",
    title: "Prohibited Activities",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          You may not use our services for any unlawful purpose. Examples of
          prohibited activities include:
        </p>
        <div className="bg-gray-900 border-l-4 border-red-500 p-4 rounded-lg text-sm text-white">
          <ul className="list-disc pl-6 space-y-1">
            <li>Fraud, scams, or misrepresentation</li>
            <li>Harassment, abuse, or threats</li>
            <li>Unauthorized scraping or data mining</li>
            <li>Distribution of malware or harmful code</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "terms-intellectual-property",
    title: "Intellectual Property",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          All trademarks, logos, and intellectual property belong to Radkaat or
          its licensors. Unauthorized use is strictly prohibited.
        </p>
        <p className="text-sm text-sandstorm-1">
          For media or partnership permissions, please contact{" "}
          <Link href="mailto:legal@radkaat.com" className="underline hover:text-rust transition-colors">
            legal@radkaat.com
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    id: "terms-liability",
    title: "Limitation of Liability",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          Radkaat is not liable for indirect, incidental, or consequential
          damages. Liability is limited to the fullest extent permitted by law.
        </p>
        <div className="bg-linear-to-br from-rust to-army p-4 rounded-lg text-sm text-white">
          <p className="font-semibold">Important Note:</p>
          <p>
            By using our services, you acknowledge and accept this limitation of
            liability as part of our terms.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "terms-governing-law",
    title: "Governing Law",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          These terms are governed by the laws of India. All disputes will be
          subject to the exclusive jurisdiction of the courts in New Delhi.
        </p>
      </div>
    ),
  },
  {
    id: "terms-contact",
    title: "Contact Us",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          Questions about these Terms & Conditions? Reach out to our support
          team:
        </p>
        <div className="bg-gray-900 p-4 rounded-lg text-sm text-white space-y-2">
          <p>📧 Email: <Link href="mailto:support@radkaat.com" className="underline hover:text-rust">support@radkaat.com</Link></p>
          <p>📞 Phone: +91-123-456-7890</p>
          <p>📍 Address: Radkaat HQ, New Delhi, India</p>
        </div>
      </div>
    ),
  },
];
