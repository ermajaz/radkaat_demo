"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import ChooseStore from "./steps/ChooseStore";
import ChooseRider from "./steps/ChooseRider";
import ContactDetails from "./steps/ContactDetails";
import BookingConfirmation from "./steps/BookingConfirmation";
import Image from "next/image";
import ChooseBikeVariant from "./steps/ChooseBikeVariant";

const steps = [
  "Choose Bike & Variant",
  "Choose Store",
  "Choose Rider",
  "Contact Details",
  "Booking Confirmation",
];

export default function ExperienceFlow() {
  const [stepIndex, setStepIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Selected data state
  const [selection, setSelection] = useState({
    bike: null as { id: number; name: string; img: string } | null,
    variant: { wheelSize: "", frameSize: "" },
    store: { name: "", date: "" },
    rider: null as { id: number; name: string; img: string } | null,
    contact: { firstName: "", lastName: "", phone: "", email: "" },
  });

  // Animate step change
  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".step-content",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [stepIndex]);

  const next = () =>
    setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  const back = () => setStepIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen flex bg-black text-white"
    >
      {/* Fixed Header */}
      <header className="h-20 fixed top-0 flex items-center justify-center left-0 w-full bg-black/90 backdrop-blur-md z-50 px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-2">
          {/* Title */}
          <div className="flex items-center">
            <Link href="/" className="mr-4">
              <Image
                src="/images/website-logo.png"
                alt="website-logo"
                width={40}
                height={40}
                className="w-[40px] h-[40px] object-contain hover:scale-105 transition-transform"
              />
            </Link>
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
              Book a Test Ride
            </h1>
          </div>

          {/* Breadcrumb / Step */}
          <p className="text-sm md:text-base text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-600">|</span>
            <span className="font-semibold text-white">{steps[stepIndex]}</span>
          </p>
        </div>

        {/* Progress bar ABOVE the border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
          <div
            className="h-full bg-rust transition-all duration-500 absolute top-0 left-0"
            style={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </header>

      {/* Left Sidebar */}
      <aside
        className="hidden md:flex flex-col w-80 fixed top-20 left-0 h-[calc(100vh-80px)] bg-white/5 p-4 gap-6 border-r border-white/10"
        style={{
          backgroundImage: `url('/images/splosh.png')`,
          backgroundSize: "contain",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          zIndex: 10,
        }}
      >
        <h2 className="text-lg font-bold mb-2">Your Selection</h2>
        {/* Bike */}
        {selection.bike && (
          <div className="relative w-full h-40 rounded-lg overflow-hidden border border-white/20">
            <Image
              src={selection.bike.img}
              alt={selection.bike.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 
           (max-width: 1200px) 50vw, 
           33vw"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 p-2 text-sm font-semibold">
              {selection.bike.name}
            </div>
          </div>
        )}

        {/* Variant */}
        {selection.variant.wheelSize && selection.variant.frameSize && (
          <div className="p-2 border border-white/20 rounded-md text-sm">
            <p>Wheel Size: {selection.variant.wheelSize}&quot;</p>
            <p>Frame Size: {selection.variant.frameSize}</p>
          </div>
        )}

        {/* Store */}
        {selection.store.name && (
          <div className="p-2 border border-white/20 rounded-md text-sm">
            <p>Store: {selection.store.name}</p>
            <p>Date: {selection.store.date}</p>
          </div>
        )}

        {/* Rider */}
        {selection.rider && (
          <div className="flex items-center gap-2 p-2 border border-white/20 rounded-md">
            <Image
              src={selection.rider.img}
              alt={selection.rider.name}
              width={50}
              height={50}
              className="rounded-full w-[50px] h-[50px] object-cover border border-white/20"
            />
            <div className="text-sm">
              <p>{selection.rider.name}</p>
            </div>
          </div>
        )}

        {/* Contact Details */}
        {selection.contact.firstName && (
          <div className="p-2 border border-white/20 rounded-md text-sm">
            <p className="font-semibold">Contact Info</p>
            <p>
              {selection.contact.firstName} {selection.contact.lastName}
            </p>
            <p>Phone: {selection.contact.phone}</p>
            <p>Email: {selection.contact.email}</p>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="step-content mt-20 flex-1 w-full mx-auto md:ml-80 flex flex-col pt-10 items-center px-6 md:px-8 lg:px-20 justify-start h-[calc(100vh-80px)] overflow-hidden">
        {stepIndex === 0 && (
          <ChooseBikeVariant
            onNext={({ bike, variant }) => {
              setSelection((prev) => ({ ...prev, bike, variant }));
              next();
            }}
          />
        )}
        {stepIndex === 1 && (
          <ChooseStore
            onNext={(store) => {
              setSelection((prev) => ({ ...prev, store }));
              next();
            }}
            onBack={back}
          />
        )}
        {stepIndex === 2 && (
          <ChooseRider
            onNext={(rider) => {
              setSelection((prev) => ({ ...prev, rider }));
              next();
            }}
            onBack={back}
          />
        )}
        {stepIndex === 3 && (
          <ContactDetails
            onNext={(contact) => {
              setSelection((prev) => ({ ...prev, contact }));
              next();
            }}
            onBack={back}
          />
        )}
        {stepIndex === 4 && <BookingConfirmation contact={selection.contact}/>}
      </main>
    </div>
  );
}
