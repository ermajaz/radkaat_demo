
import Link from "next/link";
import { SupportSection } from "../types/support.types";

export const privacyData: SupportSection[] = [
  {
    id: "privacy-intro",
    title: "Privacy Policy Overview",
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-army">Privacy Policy</h3>
        <p className="text-base leading-relaxed text-white">
          Your privacy is important to us. This policy explains how we collect,
          use, and protect your personal information. We are committed to
          safeguarding your data and being transparent about our practices.
        </p>
        <blockquote className="border-l-4 pl-4 italic text-sandstorm-1 bg-gray-900">
          “Radkaat never sells your data. Your trust is our top priority.”
        </blockquote>
      </div>
    ),
  },
  {
    id: "privacy-data-collection",
    title: "Data Collection",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          We collect information you provide directly, as well as technical data
          when you interact with our services:
        </p>
        <div className="bg-linear-to-r from-navy to-army p-4 rounded-lg shadow-md">
          <ul className="list-disc pl-6 text-white space-y-1 text-sm">
            <li>👤 Account registration details</li>
            <li>🛒 Purchase history and preferences</li>
            <li>💻 Device and browser information</li>
            <li>📍 Location data (if enabled)</li>
            <li>📝 Support requests and feedback</li>
          </ul>
        </div>
        <p className="text-sm text-sandstorm-1">
          We do not collect sensitive personal data unless required and with
          your explicit consent.
        </p>
      </div>
    ),
  },
  {
    id: "privacy-data-usage",
    title: "Data Usage",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          Your data helps us improve and personalize your experience. Typical
          uses include:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-3 border border-sandstorm-1 rounded-lg text-sm text-white">
            ⚙️{" "}
            <span className="font-semibold text-sandstorm-1">
              Service Delivery
            </span>{" "}
            – Manage accounts & provide services
          </div>
          <div className="p-3 border border-sandstorm-1 rounded-lg text-sm text-white">
            🎯{" "}
            <span className="font-semibold text-sandstorm-1">
              Personalization
            </span>{" "}
            – Tailored recommendations
          </div>
          <div className="p-3 border border-sandstorm-1 rounded-lg text-sm text-white">
            🔒{" "}
            <span className="font-semibold text-sandstorm-1">Security</span> – 
            Fraud prevention & monitoring
          </div>
          <div className="p-3 border border-sandstorm-1 rounded-lg text-sm text-white">
            📊{" "}
            <span className="font-semibold text-sandstorm-1">Analytics</span> – 
            Improve features & performance
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "privacy-sharing",
    title: "Data Sharing",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          We do not share your personal information without your consent, except
          when required by law or necessary for business operations:
        </p>
        <ul className="list-disc pl-6 text-white space-y-1">
          <li>⚖️ Legal authorities (when required)</li>
          <li>🤝 Trusted providers (payment, hosting, etc.)</li>
          <li>🏢 Business transfers (mergers/acquisitions)</li>
        </ul>
      </div>
    ),
  },
  {
    id: "privacy-security",
    title: "Data Security",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          We implement strict security measures to protect your data:
        </p>
        <div className="bg-gray-900 border-l-4 border-green-500 p-4 rounded-lg text-sm">
          <ul className="list-disc pl-6 text-white space-y-1">
            <li>🔑 Encryption of sensitive data</li>
            <li>🛡️ Regular security audits</li>
            <li>👥 Access controls & authentication</li>
            <li>📚 Employee security training</li>
          </ul>
        </div>
        <p className="text-sm text-sandstorm-1">
          While we take every precaution, no system is 100% secure. Please
          contact us if you have concerns.
        </p>
      </div>
    ),
  },
  {
    id: "privacy-rights",
    title: "Your Rights",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          You have full control over your data. You may:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-3 border border-sandstorm-1 rounded-lg text-sm text-white">
            📄{" "}
            <span className="font-semibold text-sandstorm-1">
              Access & Export
            </span>{" "}
            – Request your personal data
          </div>
          <div className="p-3 border border-sandstorm-1 rounded-lg text-sm text-white">
            ✏️{" "}
            <span className="font-semibold text-sandstorm-1">Correction</span> – 
            Fix inaccurate info
          </div>
          <div className="p-3 border border-sandstorm-1 rounded-lg text-sm text-white">
            🚫{" "}
            <span className="font-semibold text-sandstorm-1">Opt-out</span> – 
            Withdraw marketing consent
          </div>
          <div className="p-3 border border-sandstorm-1 rounded-lg text-sm text-white">
            ❌{" "}
            <span className="font-semibold text-sandstorm-1">Delete</span> – 
            Request account removal
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "privacy-cookies",
    title: "Cookies & Tracking",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          We use cookies and similar technologies for functionality and
          analytics. You can manage preferences in your browser.
        </p>
        <ul className="list-disc pl-6 text-white text-sm space-y-1">
          <li>🍪 Essential cookies (required for site use)</li>
          <li>📈 Analytics cookies (performance insights)</li>
          <li>🎯 Advertising cookies (opt-in only)</li>
        </ul>
        <p className="text-sm text-sandstorm-1">
          Learn more in our{" "}
          <Link href="#" className="underline hover:text-rust transition-colors">
            Cookie Policy
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    id: "privacy-changes",
    title: "Changes to Policy",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          We may update this Privacy Policy from time to time. When significant
          changes occur, we’ll notify you via email or through in-app alerts.
        </p>
        <p className="text-sm text-sandstorm-1">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    ),
  },
  {
    id: "privacy-contact",
    title: "Contact Us",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          Have questions or concerns about your data? Get in touch:
        </p>
        <div className="bg-linear-to-br from-rust to-army p-4 rounded-lg shadow-md text-white text-sm">
          <p className="font-semibold">Radkaat Privacy Team</p>
          <p>Email: privacy@radkaat.com</p>
          <p>Phone: +91-9876543210</p>
          <p>HQ: New Delhi, India</p>
        </div>
        <p className="text-sm text-sandstorm-1">
          Or submit a request via our{" "}
          <Link href="#" className="underline hover:text-rust transition-colors">
            Privacy Form
          </Link>
          .
        </p>
      </div>
    ),
  },
];
