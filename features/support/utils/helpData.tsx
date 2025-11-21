
import Link from "next/link";
import { SupportSection } from "../types/support.types";

export const helpData: SupportSection[] = [
  {
    id: "help-faq",
    title: "Frequently Asked Questions",
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-army">Help & FAQ</h3>
        <p className="text-base leading-relaxed text-white">
          Find answers to common questions about Radkaat&apos;s products,
          billing, accounts, and technical support. Our FAQ is updated regularly
          to address new topics and concerns based on user feedback.
        </p>
        <ul className="list-disc pl-6 text-white space-y-1">
          <li>How do I reset my password?</li>
          <li>What payment methods are accepted?</li>
          <li>How do I track my orders?</li>
          <li>How can I update my billing information?</li>
          <li>Where can I download invoices?</li>
        </ul>
        <p className="text-sm text-sandstorm-1">
          Didn’t find what you’re looking for?{" "}
          <Link
            href="#"
            className="underline hover:text-rust transition-colors"
          >
            Contact our support team
          </Link>{" "}
          for personalized help.
        </p>
      </div>
    ),
  },
  {
    id: "help-troubleshooting",
    title: "Troubleshooting",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          Get step-by-step guides to resolve common issues, such as login
          problems, payment errors, or connectivity issues. We provide practical
          solutions so you can fix most issues on your own quickly.
        </p>
        <div className="bg-gray-900 border-l-4 border-rust p-4 rounded-lg text-white">
          <p className="font-semibold mb-2">Quick Fixes:</p>
          <ul className="list-decimal pl-6 space-y-1 text-sm">
            <li>Clear your browser cache and cookies.</li>
            <li>Ensure your internet connection is stable.</li>
            <li>Update the Radkaat app to the latest version.</li>
            <li>Try logging in from a different device.</li>
          </ul>
        </div>
        <p className="text-sm text-sandstorm-1">
          Still facing issues?{" "}
          <Link
            href="#"
            className="underline hover:text-rust transition-colors"
          >
            Chat with our experts
          </Link>{" "}
          for real-time assistance.
        </p>
      </div>
    ),
  },
  {
    id: "help-guides",
    title: "User Guides & Tutorials",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          Download comprehensive user manuals, quick-start guides, and video
          tutorials for all Radkaat products. Our guides are designed to help
          you get the most out of your purchase and explore advanced features.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white text-sm">
          <li className="p-2 border border-sandstorm-1 rounded-md">
            🚲 Radkaat Bikes Quick Start
          </li>
          <li className="p-2 border border-sandstorm-1 rounded-md">
            💳 Billing & Payments Handbook
          </li>
          <li className="p-2 border border-sandstorm-1 rounded-md">
            📱 Mobile App Walkthrough
          </li>
          <li className="p-2 border border-sandstorm-1 rounded-md">
            🔒 Security & Privacy Guide
          </li>
        </ul>
        <p className="text-sm text-sandstorm-1">
          Visit our{" "}
          <Link
            href="#"
            className="underline hover:text-rust transition-colors"
          >
            Knowledge Base
          </Link>{" "}
          for a full library of resources.
        </p>
      </div>
    ),
  },
  {
    id: "help-community",
    title: "Community Support",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          Join our online forums and community spaces to connect with other
          users, share tips, and learn from real experiences. Our community is
          active, diverse, and welcoming to new members.
        </p>
        <div className="bg-linear-to-r from-navy to-army p-4 rounded-lg">
          <p className="font-semibold text-sandstorm-1">What you can do:</p>
          <ul className="list-disc pl-6 text-sm text-white space-y-1">
            <li>Ask product-related questions.</li>
            <li>Share your feedback and improvement ideas.</li>
            <li>Help others with troubleshooting tips.</li>
            <li>Stay updated with announcements and events.</li>
          </ul>
        </div>
        <p className="text-sm text-sandstorm-1">
          Join the conversation on{" "}
          <Link
            href="#"
            className="underline hover:text-rust transition-colors"
          >
            Radkaat Forums
          </Link>{" "}
          or follow our{" "}
          <Link
            href="#"
            className="underline hover:text-rust transition-colors"
          >
            social media
          </Link>{" "}
          for the latest updates.
        </p>
      </div>
    ),
  },
  {
    id: "help-training",
    title: "Training & Webinars",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          We host regular online training sessions and webinars to help you
          master Radkaat products. Whether you’re a beginner or a power user,
          there’s always something new to learn.
        </p>
        <p className="text-sm text-sandstorm-1">
          Upcoming sessions include:{" "}
        </p>
        <ul className="list-disc pl-6 text-white text-sm">
          <li>Getting Started with Radkaat Bikes</li>
          <li>Managing Subscriptions & Billing</li>
          <li>Advanced Features Deep Dive</li>
        </ul>
        <p className="text-sm text-sandstorm-1">
          Register via our{" "}
          <Link
            href="#"
            className="underline hover:text-rust transition-colors"
          >
            Events Page
          </Link>{" "}
          to secure your spot.
        </p>
      </div>
    ),
  },
];
