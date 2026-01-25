"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

import ChooseStore from "./steps/ChooseStore";
import ContactDetails from "./steps/ContactDetails";
import ChooseBikeVariant from "./steps/ChooseBikeVariant";
import { Mail, MapPin } from "lucide-react";
import RideDetailsSummary from "./steps/RideDetailsSummary";

const steps = [
  "Choose Bike & Variant",
  "Choose Store",
  "Contact Details",
  "Booking Confirmation",
];

export default function TestRideFlow() {
  const [stepIndex, setStepIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showRideDetails, setShowRideDetails] = useState(false);


  const [selection, setSelection] = useState({
    bike: null as { id: number; name: string; img: string } | null,
    variantGroup: "",
    color: "",
    variant: { wheelSize: "", frameSize: "" },
    store: { name: "", date: "", lat: 0, lng: 0 },
    contact: { firstName: "", lastName: "", phone: "", email: "" },
  });

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".step-content",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [stepIndex]);

  const next = () =>
    setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  const back = () => setStepIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="relative w-full flex justify-center">
      <div
        ref={containerRef}
        className="relative w-full max-w-[1440px] h-screen flex text-white overflow-hidden"
      >


        {/* Header */}
        <header className="
  h-20 fixed w-full max-w-[1440px] mx-auto top-0 left-0 right-0
  bg-superblack/70 backdrop-blur-2xl 
  border-b border-white/10 
  z-50 px-6 md:px-10 
  flex items-center justify-between
">
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <Link href="/" className="mr-4">
              <Image
                src="/images/website-logo.png"
                alt="website-logo"
                width={40}
                height={40}
                quality={100}
                className="transition-transform hover:scale-105"
              />
            </Link>
            <h1 className="text-xl md:text-2xl font-bold tracking-wide text-white">
              Book a Test Ride
            </h1>
          </div>

          {/* === ADVANCED STEP INDICATOR === */}
          <div className="flex items-center gap-6">
            {steps.map((s, i) => {
              const active = i === stepIndex;
              const completed = i < stepIndex;

              return (
                <motion.div
                  key={s}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {/* Step Dot */}
                  <motion.div
                    className={`
              w-3 h-3 rounded-full
              ${active ? "bg-sandstorm" : completed ? "bg-sandstorm/50" : "bg-gray-600"}
              shadow-[0_0_10px_rgba(255,190,80,0.4)]
            `}
                    animate={{ scale: active ? 1.3 : 1 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />

                  {/* Step Label */}
                  <span
                    className={`
              text-sm tracking-wide 
              ${active ? "text-sandstorm font-semibold" : completed ? "text-white/60" : "text-white/40"}
            `}
                  >
                    {s}
                  </span>

                  {/* Divider Line */}
                  {i < steps.length - 1 && (
                    <div className="w-6 h-px bg-white/20" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-sandstorm"
              style={{
                boxShadow: "0 0 12px 2px rgba(255, 200, 120, 0.8)"
              }}
              initial={{ width: 0 }}
              animate={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </header>


        {/* Sidebar */}
        <aside
          className="
    hidden md:flex flex-col w-80 fixed top-20 
    left-1/2 -translate-x-[720px]
    h-[calc(100vh-80px)]
    p-6 gap-5 border-r border-white/10 
    backdrop-blur-xl overflow-y-auto
    scrollbar-thin scrollbar-thumb-sandstorm/60 scrollbar-track-white/10
  "
        >

          <h2 className="text-xl font-bold text-sandstorm/90 tracking-wide mb-2">
            Your Selection
          </h2>

          <motion.div layout className="space-y-5">
            <AnimatePresence>
              {/* BIKE + VARIANT (COMBINED PANEL) */}
              {selection.bike && (
                <motion.div
                  key="bikeVariant"
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  className="
      rounded-sm overflow-hidden 
      border border-white/10 
      bg-black/40 backdrop-blur-xl 
      shadow-lg hover:shadow-xl 
      transition-all
    "
                >
                  {/* ===================== HEADER ===================== */}
                  <div className="
      px-4 py-3 
      flex items-center justify-between
      border-b border-white/10
    ">
                    <div>
                      <p className="text-white font-semibold tracking-wide text-sm">
                        {selection.bike.name}
                      </p>
                      <p className="text-sandstorm text-xs font-medium tracking-wider">
                        Model {selection.variantGroup}
                      </p>
                    </div>

                    <div className="text-[11px] px-2 py-1 rounded-sm border border-white/10 bg-black/60 text-sandstorm font-semibold">
                      Selected
                    </div>
                  </div>

                  {/* ===================== IMAGE ===================== */}
                  <div className="relative w-full h-40 flex items-center justify-center bg-black/20">
                    <Image
                      src={selection.bike.img}
                      alt={selection.bike.name}
                      fill
                      quality={100}
                      className="object-cover p-6"
                    />
                  </div>

                  {/* ===================== BOTTOM INFO BAR ===================== */}
                  <div className="
      flex items-center justify-between
      px-5 py-3
      border-t border-white/10
      bg-black/50
      text-sm
    ">
                    <div className="flex items-center gap-2">
                      <span className="text-white/60">Wheel</span>
                      <span className="text-sandstorm font-semibold">27.5"</span>
                    </div>

                    <div className="w-px h-5 bg-white/15" />

                    <div className="flex items-center gap-2">
                      <span className="text-white/60">Frame</span>
                      <span className="text-sandstorm font-semibold">M</span>
                    </div>
                  </div>
                </motion.div>
              )}



              {/* STORE */}
              {selection.store.name && (
                <motion.div
                  key="store"
                  layout
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="p-4 rounded-sm border border-white/10 bg-black/30 backdrop-blur-lg shadow-md hover:shadow-lg transition-all flex justify-between"
                >
                  <div>
                    <p className="font-semibold text-white mb-1">Store</p>
                    <p className="text-white/70 text-sm">{selection.store.name}</p>
                    <p className="text-white/70 text-sm">{selection.store.date}</p>
                  </div>
                  <MapPin className="text-sandstorm" size={24} />
                </motion.div>
              )}


              {/* CONTACT */}
              {selection.contact.firstName && (
                <motion.div
                  key="contact"
                  layout
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="p-4 rounded-sm border border-white/10 bg-black/30 backdrop-blur-lg shadow-md hover:shadow-lg transition-all flex items-center gap-4"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-white mb-2">Contact Info</p>
                    <p className="text-white/70 text-sm">
                      {selection.contact.firstName} {selection.contact.lastName}
                    </p>
                    <p className="text-white/70 text-sm">{selection.contact.phone}</p>
                    <p className="text-white/70 text-sm">{selection.contact.email}</p>
                  </div>
                  <Mail className="text-sandstorm mt-3" size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </aside>


        {/* Main Content */}
        <main className="step-content my-15 flex-1 md:ml-80 flex flex-col items-center px-6 md:px-10 lg:px-20 pt-12 h-[calc(100vh-80px)] overflow-y-auto">
          <AnimatePresence mode="wait">
            {stepIndex === 0 && !showRideDetails && (
              <ChooseBikeVariant
                key="step-0"
                onNext={({ bike, variantGroup }) => {
                  setSelection((prev) => ({ ...prev, bike, variantGroup }));
                  next();
                }}
              />
            )}
            {stepIndex === 1 && !showRideDetails && (
              <ChooseStore
                key="step-1"
                onNext={({ store, date, lat, lng }) => {
                  setSelection((prev) => ({
                    ...prev,
                    store: { ...store, date, lat, lng },
                  }));
                  next();
                }}
                onBack={back}
              />
            )}
            {stepIndex === 2 && !showRideDetails && (
              <ContactDetails
                key="step-3"
                onNext={(contact) => {
                  setSelection((prev) => ({ ...prev, contact }));
                  next();
                }}
                setShowRideDetails={setShowRideDetails}
                onBack={back}
              />
            )}
            {showRideDetails && (
              <RideDetailsSummary
                bike={selection.bike}
                store={selection.store}
                variantGroup={selection.variantGroup}
                date={selection.store.date}
              />
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
