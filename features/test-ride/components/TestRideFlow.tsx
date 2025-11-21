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

  const [selection, setSelection] = useState({
    bike: null as { id: number; name: string; img: string } | null,
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
    <div
      ref={containerRef}
      className="relative w-full h-screen flex bg-linear-to-br from-black via-zinc-900 to-black text-white overflow-hidden"
    >
      {/* Animated background gradient blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-pink-600/30 blur-[160px] -z-10"
        animate={{ x: [0, 200, -200, 0], y: [0, -150, 150, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <header className="h-20 fixed top-0 left-0 w-full bg-superblack/80 backdrop-blur-xl border-b border-white/10 z-50 px-6 md:px-10 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <Link href="/" className="mr-4">
            <Image quality={100}
              src="/images/website-logo.png"
              alt="website-logo"
              width={40}
              height={40}
              className="hover:rotate-12 transition-transform"
            />
          </Link>
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">
            Book a Test Ride
          </h1>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-3 text-sm md:text-base">
          {steps.map((s, i) => (
            <motion.span
              key={s}
              className={`${
                i === stepIndex ? "text-rust font-semibold" : "text-gray"
              }`}
              animate={i === stepIndex ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {s}
              {i < steps.length - 1 && (
                <span className="mx-2 text-gray">/</span>
              )}
            </motion.span>
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-linear-to-r from-rust/50 to-rust"
            initial={{ width: 0 }}
            animate={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </header>

      {/* Sidebar */}
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-80 fixed top-20 left-0 h-[calc(100vh-80px)] p-5 gap-4 border-r border-white/10 bg-white/5 backdrop-blur-xl overflow-y-auto scrollbar-thin scrollbar-thumb-rust/60 scrollbar-track-white/10">
        <h2 className="text-xl font-bold text-white mb-4">Your Selection</h2>

        <motion.div layout className="space-y-4">
          <AnimatePresence>
            {/* Bike */}
            {selection.bike && (
              <motion.div
                key="bike"
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                whileHover={{ scale: 1.03 }}
                className="relative rounded-xl overflow-hidden border-2 border-white/20 bg-linear-to-br from-black/30 to-black/20 shadow-lg cursor-pointer"
              >
                <Image quality={100}
                  src={selection.bike.img}
                  alt={selection.bike.name}
                  width={320}
                  height={180}
                  className="object-cover w-full h-40"
                />
                <div className="absolute bottom-0 left-0 w-full bg-superblack/60 p-3 flex justify-between items-center">
                  <p className="text-white font-semibold">
                    {selection.bike.name}
                  </p>
                  <span className="text-rust font-bold text-lg">🚴</span>
                </div>
              </motion.div>
            )}

            {/* Variant */}
            {selection.variant.wheelSize && (
              <motion.div
                key="variant"
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                whileHover={{ scale: 1.02 }}
                className="p-3 rounded-xl border-2 border-white/20 bg-superblack/30 shadow-md cursor-pointer"
              >
                <p className="text-white font-semibold mb-1">Variant</p>
                <p className="text-white/70 text-sm">
                  Wheel: {selection.variant.wheelSize}&quot;
                </p>
                <p className="text-white/70 text-sm">
                  Frame: {selection.variant.frameSize}
                </p>
              </motion.div>
            )}

            {/* Store */}
            {selection.store.name && (
              <motion.div
                key="store"
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                whileHover={{ scale: 1.02 }}
                className="p-3 rounded-xl border-2 border-white/20 bg-superblack/30 shadow-md cursor-pointer flex justify-between items-center"
              >
                <div>
                  <p className="text-white font-semibold">Store</p>
                  <p className="text-white/70 text-sm">
                    {selection.store.name}
                  </p>
                  <p className="text-white/70 text-sm">
                    {selection.store.date}
                  </p>
                </div>
                <span className="text-rust">📍</span>
              </motion.div>
            )}

            {/* Rider */}
            {selection.rider && (
              <motion.div
                key="rider"
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-3 border-2 border-white/20 rounded-xl bg-superblack/30 shadow-md cursor-pointer"
              >
                <Image quality={100}
                  src={selection.rider.img}
                  alt={selection.rider.name}
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-white/20"
                />
                <div>
                  <p className="text-white font-semibold">
                    {selection.rider.name}
                  </p>
                  <p className="text-white/70 text-sm">Your Rider</p>
                </div>
                <span className="text-rust">🏍️</span>
              </motion.div>
            )}

            {/* Contact */}
            {selection.contact.firstName && (
              <motion.div
                key="contact"
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                whileHover={{ scale: 1.02 }}
                className="p-3 rounded-xl border-2 border-white/20 bg-superblack/30 shadow-md cursor-pointer"
              >
                <p className="text-white font-semibold mb-1">Contact Info</p>
                <p className="text-white/70 text-sm">
                  {selection.contact.firstName} {selection.contact.lastName}
                </p>
                <p className="text-white/70 text-sm">
                  {selection.contact.phone}
                </p>
                <p className="text-white/70 text-sm">
                  {selection.contact.email}
                </p>
                <span className="text-rust mt-2 block">📧</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </aside>

      {/* Main Content */}
      <main className="step-content mt-20 flex-1 md:ml-80 flex flex-col items-center px-6 md:px-10 lg:px-20 pt-12 h-[calc(100vh-80px)] overflow-y-auto">
        <AnimatePresence mode="wait">
          {stepIndex === 0 && (
            <ChooseBikeVariant
              key="step-0"
              onNext={({ bike, variant }) => {
                setSelection((prev) => ({ ...prev, bike, variant }));
                next();
              }}
            />
          )}
          {stepIndex === 1 && (
            <ChooseStore
              key="step-1"
              onNext={({ store, date }) => {
                setSelection((prev) => ({
                  ...prev,
                  store: { ...store, date }, // merge store fields with date
                }));
                next();
              }}
              onBack={back}
            />
          )}
          {stepIndex === 2 && (
            <ChooseRider
              key="step-2"
              onNext={(rider) => {
                setSelection((prev) => ({ ...prev, rider }));
                next();
              }}
              onBack={back}
            />
          )}
          {stepIndex === 3 && (
            <ContactDetails
              key="step-3"
              onNext={(contact) => {
                setSelection((prev) => ({ ...prev, contact }));
                next();
              }}
              onBack={back}
            />
          )}
          {stepIndex === 4 && (
            <BookingConfirmation key="step-4" contact={selection.contact} />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
