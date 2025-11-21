
import Link from "next/link";
import { SupportSection } from "../types/support.types";

export const supportCenterData: SupportSection[] = [
  {
    id: "supportcenter-overview",
    title: "Support Center Overview",
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-army">Support Center</h3>
        <p className="text-base leading-relaxed text-white">
          Welcome to the Radkaat Support Center. Here you can find resources,
          contact information, live updates, and submit support tickets. Our
          mission is to resolve your issues quickly and efficiently while
          ensuring you have access to the help you need, whenever you need it.
        </p>
        <blockquote className="border-l-4 pl-4 italic text-sandstorm-1 bg-gray-900">
          “Your problem is our priority — we’re here to help you succeed.”
        </blockquote>
      </div>
    ),
  },
  {
    id: "supportcenter-tickets",
    title: "Submit a Ticket",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          Having trouble? Submit a ticket using our online form. The more
          details you provide, the faster we can resolve your issue.
        </p>
        <div className="bg-linear-to-r from-navy to-army p-4 rounded-lg shadow-md">
          <p className="text-sm text-sandstorm-1 font-semibold mb-2">
            Ticket Categories:
          </p>
          <ul className="list-disc pl-6 text-white space-y-1 text-sm">
            <li>🔧 Technical Support (app, website, or device issues)</li>
            <li>💳 Billing & Payments</li>
            <li>📦 Orders, Shipping & Returns</li>
            <li>🔒 Account & Security</li>
            <li>💡 Suggestions & Feedback</li>
          </ul>
        </div>
        <p className="text-sm text-sandstorm-1">
          Submit your ticket via our{" "}
          <Link href="#" className="underline hover:text-rust transition-colors">
            Support Form
          </Link>{" "}
          or directly from your{" "}
          <Link href="#" className="underline hover:text-rust transition-colors">
            Radkaat Dashboard
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    id: "supportcenter-resources",
    title: "Resources",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          Explore tutorials, FAQs, and troubleshooting guides to help you
          resolve issues independently. Our resources are available 24/7 so you
          can find help anytime, anywhere.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-3 border border-sandstorm-1 rounded-lg text-sm text-white">
            📘{" "}
            <span className="font-semibold text-sandstorm-1">Knowledge Base</span>  
            – Step-by-step guides and how-tos
          </div>
          <div className="p-3 border border-sandstorm-1 rounded-lg text-sm text-white">
            🎥{" "}
            <span className="font-semibold text-sandstorm-1">Video Tutorials</span>  
            – Learn visually at your own pace
          </div>
          <div className="p-3 border border-sandstorm-1 rounded-lg text-sm text-white">
            ❓{" "}
            <span className="font-semibold text-sandstorm-1">FAQs</span>  
            – Quick answers to common questions
          </div>
          <div className="p-3 border border-sandstorm-1 rounded-lg text-sm text-white">
            🤝{" "}
            <span className="font-semibold text-sandstorm-1">Community Forum</span>  
            – Ask & answer with peers
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "supportcenter-status",
    title: "System Status",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          Stay informed about the current status of Radkaat services. Check for
          outages, scheduled maintenance, or performance issues in real-time.
          Transparency is key, and we’ll always keep you updated.
        </p>
        <div className="bg-gray-900 border-l-4 border-green-500 p-4 rounded-lg">
          <p className="text-sm text-green-400 font-semibold">
            ✅ All systems operational
          </p>
          <p className="text-xs text-white mt-1">
            Last updated: {new Date().toLocaleString()}
          </p>
        </div>
        <p className="text-sm text-sandstorm-1">
          Visit our{" "}
          <Link href="#" className="underline hover:text-rust transition-colors">
            Status Page
          </Link>{" "}
          for historical uptime reports and upcoming maintenance schedules.
        </p>
      </div>
    ),
  },
  {
    id: "supportcenter-livechat",
    title: "Live Chat Support",
    content: (
      <div className="space-y-4">
        <p className="text-base text-white">
          Need instant help? Connect with one of our support agents via live
          chat. Average response time is under 2 minutes during business hours.
        </p>
        <div className="bg-linear-to-br from-rust to-army p-4 rounded-lg shadow-md text-white text-sm">
          <p className="font-semibold">Business Hours (Live Chat):</p>
          <p>Mon–Fri: 9:00 AM – 9:00 PM</p>
          <p>Sat: 10:00 AM – 6:00 PM</p>
          <p>Sun: Closed</p>
        </div>
        <p className="text-sm text-sandstorm-1">
          Start chatting now by clicking the{" "}
          <span className="font-semibold">Chat Icon</span> in the bottom-right
          corner of our website or mobile app.
        </p>
      </div>
    ),
  },
];
