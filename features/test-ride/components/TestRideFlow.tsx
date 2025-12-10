"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

import ChooseStore from "./steps/ChooseStore";
import ChooseRider from "./steps/ChooseRider";
import ContactDetails from "./steps/ContactDetails";
import BookingConfirmation from "./steps/BookingConfirmation";
import ChooseBikeVariant from "./steps/ChooseBikeVariant";
import { Bike, Mail, MapPin, UserRound } from "lucide-react";
import RideDetailsSummary from "./steps/RideDetailsSummary";

const steps = [
  "Choose Bike & Variant",
  "Choose Store",
  "Choose Rider",
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
    store: { name: "", date: "" },
    rider: null as { id: number; name: string; img: string } | null,
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
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="rounded-sm overflow-hidden border border-white/10 bg-black/30 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {/* Bike Image + Variant Overlay */}
                  <div className="relative">
                    <Image
                      src={selection.bike.img}
                      alt={selection.bike.name}
                      width={320}
                      height={180}
                      quality={100}
                      className="object-cover w-full h-48"
                    />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-superblack/70 px-3 py-1 rounded-sm text-xs font-semibold text-sandstorm tracking-wide border border-white/10">
                      Bike Selected
                    </div>
                    <div className="absolute top-3 right-3 flex items-center justify-between mb-1">
                      <div
                        className="w-5.5 h-5.5 rounded-full border-[1.5px] border-white/40"
                        style={{ backgroundColor: selection.color }}
                      />
                    </div>

                    {/* VARIANT OVERLAY */}
                    {selection.variant.wheelSize && (
                      <div className="
          absolute bottom-0 left-0 w-full 
          bg-black/60 backdrop-blur-md 
          border-t border-white/10 
          px-4 py-3 
        ">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm text-white/80">Variant</p>
                          <span className="text-sandstorm font-medium">
                            {selection.variantGroup}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/70">Wheel Size:</span>
                          <span className="text-sandstorm font-medium">
                            {selection.variant.wheelSize}
                          </span>
                        </div>

                        <div className="flex justify-between text-sm mt-1">
                          <span className="text-white/70">Frame Size:</span>
                          <span className="text-sandstorm font-medium">
                            {selection.variant.frameSize}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Text Info (bike name only now) */}
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-white text-lg tracking-wide">
                        {selection.bike.name}
                      </p>
                      <Bike className="text-sandstorm" size={22} />
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

              {/* RIDER */}
              {selection.rider && (
                <motion.div
                  key="rider"
                  layout
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="p-4 rounded-sm border border-white/10 bg-black/30 backdrop-blur-lg shadow-md hover:shadow-lg transition-all flex items-center gap-4"
                >
                  <Image
                    src={selection.rider.img}
                    alt={selection.rider.name}
                    width={50}
                    height={50}
                    className="rounded-full w-[50px] h-[50px] border object-contain border-white/20"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-white">{selection.rider.name}</p>
                    <p className="text-white/60 text-sm">Assigned Rider</p>
                  </div>
                  <UserRound className="text-sandstorm" size={22} />
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
                onNext={({ bike, variantGroup, color, variant }) => {
                  setSelection((prev) => ({ ...prev, bike, variantGroup, color, variant }));
                  next();
                }}
              />
            )}
            {stepIndex === 1 && !showRideDetails && (
              <ChooseStore
                key="step-1"
                onNext={({ store, date }) => {
                  setSelection((prev) => ({
                    ...prev,
                    store: { ...store, date },
                  }));
                  next();
                }}
                onBack={back}
              />
            )}
            {stepIndex === 2 && !showRideDetails && (
              <ChooseRider
                key="step-2"
                onNext={(rider) => {
                  setSelection((prev) => ({ ...prev, rider }));
                  next();
                }}
                onBack={back}
              />
            )}
            {stepIndex === 3 && !showRideDetails && (
              <ContactDetails
                key="step-3"
                onNext={(contact) => {
                  setSelection((prev) => ({ ...prev, contact }));
                  next();
                }}
                onBack={back}
              />
            )}
            {stepIndex === 4 && !showRideDetails && (
              <BookingConfirmation key="step-4" contact={selection.contact} setShowRideDetails={setShowRideDetails} />
            )}
            {showRideDetails && (
              <RideDetailsSummary
                bike={selection.bike}
                variant={selection.variant}
                variantGroup={selection.variantGroup}
                color={selection.color}
                rider={selection.rider}
                date={selection.store.date}
                onClose={() => setShowRideDetails(false)}
              />
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
