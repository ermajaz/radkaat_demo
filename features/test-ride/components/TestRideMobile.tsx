"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import gsap from "gsap";

import MobileChooseBikeVariant from "./mobile/MobileChooseBikeVariant";
import MobileChooseStore from "./mobile/MobileChooseStore";
import MobileChooseRider from "./mobile/MobileChooseRider";
import MobileContactDetails from "./mobile/MobileContactDetails";
import MobileBookingConfirmation from "./mobile/MobileBookingConfirmation";
import MobileRideDetailsSummary from "./mobile/MobileRideDetailsSummary";

const steps = ["Bike", "Store", "Rider", "Contact", "Confirm"];

export default function TestRideMobile() {
  const [step, setStep] = useState(0);
  const [summaryOpen, setSummaryOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState({
    bike: null as { id: number; name: string; img: string } | null,
    variantGroup: "",
    color: "",
    variant: { wheelSize: "", frameSize: "" },
    store: { name: "", date: "" },
    rider: null as { id: number; name: string; img: string } | null,
    contact: { firstName: "", lastName: "", phone: "", email: "" },
  });

  /* ------------------------------------------------------------ */
  /* STEP TRANSITION ANIMATION */
  /* ------------------------------------------------------------ */
  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      ".mobile-step",
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" }
    );
  }, [step, summaryOpen]);

  const next = () => setStep((p) => Math.min(p + 1, steps.length - 1));
  const back = () => setStep((p) => Math.max(p - 1, 0));

  /* ------------------------------------------------------------ */
  /* RENDER */
  /* ------------------------------------------------------------ */
  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-superblack text-white overflow-hidden"
    >
      {/* Animated Glow Blob */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-sandstorm/20 blur-[110px] -z-10"
        animate={{ x: [0, 60, -60, 0], y: [0, -50, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ------------------------------------------------------------ */}
      {/* HEADER (Fixed) */}
      {/* ------------------------------------------------------------ */}
      <header
        className="
        fixed top-0 left-0 w-full z-40
        h-16 flex items-center px-4
        bg-black/70 backdrop-blur-xl 
        border-b border-white/10
      "
      >
        {step > 0 && !summaryOpen && (
          <button
            onClick={back}
            className="active:scale-95 transition"
          >
            <ChevronLeft size={26} className="text-sandstorm" />
          </button>
        )}

        <p className="mx-auto text-base font-semibold tracking-wide text-sandstorm">
          {summaryOpen ? "Summary" : steps[step]}
        </p>
      </header>

      {/* ------------------------------------------------------------ */}
      {/* MAIN CONTENT — Always Below Header */}
      {/* ------------------------------------------------------------ */}
      <main
        className="
    mobile-step relative z-10
    pt-20
    pb-32
    px-4
    min-h-[calc(100vh-4rem)]
    overflow-y-auto
    scrollbar-none
  "
      >
        <AnimatePresence mode="wait">
          {/* Step 0 -------------------------------------------------- */}
          {step === 0 && !summaryOpen && (
            <MobileChooseBikeVariant
              key="step-0"
              onNext={({ bike, variantGroup, color, variant }) => {
                setData((p) => ({ ...p, bike, variantGroup, color, variant }));
                next();
              }}
            />
          )}

          {/* Step 1 -------------------------------------------------- */}
          {step === 1 && !summaryOpen && (
            <MobileChooseStore
              key="step-1"
              onNext={({ store, date }) => {
                setData((p) => ({ ...p, store: { ...store, date } }));
                next();
              }}
              onBack={back}
            />
          )}

          {/* Step 2 -------------------------------------------------- */}
          {step === 2 && !summaryOpen && (
            <MobileChooseRider
              key="step-2"
              onNext={(rider) => {
                setData((p) => ({ ...p, rider }));
                next();
              }}
              onBack={back}
            />
          )}

          {/* Step 3 -------------------------------------------------- */}
          {step === 3 && !summaryOpen && (
            <MobileContactDetails
              key="step-3"
              onNext={(contact) => {
                setData((p) => ({ ...p, contact }));
                next();
              }}
              onBack={back}
            />
          )}

          {/* Step 4 -------------------------------------------------- */}
          {step === 4 && !summaryOpen && (
            <MobileBookingConfirmation
              key="step-4"
              contact={data.contact}
              setShowRideDetails={setSummaryOpen}
            />
          )}

          {/* Summary ------------------------------------------------- */}
          {summaryOpen && (
            <MobileRideDetailsSummary
              key="summary"
              bike={data.bike}
              variant={data.variant}
              variantGroup={data.variantGroup}
              color={data.color}
              rider={data.rider}
              date={data.store.date}
              onClose={() => setSummaryOpen(false)}
            />
          )}
        </AnimatePresence>
      </main>

      {/* ------------------------------------------------------------ */}
      {/* BOTTOM STEP INDICATOR */}
      {/* ------------------------------------------------------------ */}
      {!summaryOpen && (
        <div
          className="
          fixed bottom-0 left-0 w-full 
          flex justify-center
          bg-black/60 backdrop-blur-xl
          border-t border-white/10
          h-14 items-center
          z-40
        "
        >
          <div className="flex gap-4">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`
                  h-2.5 w-2.5 rounded-full
                  transition-all 
                  ${i === step ? "bg-sandstorm scale-125" : "bg-white/30"}
                `}
              />
            ))}
          </div>
        </div>
      )}

      {/* FLOATING SUMMARY BUTTON */}
      {/* ------------------------------------------------------------ */}
      {!summaryOpen && step > 1 && (
        <button
          onClick={() => setSummaryOpen(true)}
          className="
            fixed bottom-24 right-4 z-40
            bg-sandstorm text-black font-semibold
            px-4 py-2 rounded-full shadow-lg
            flex items-center gap-2
            active:scale-95 transition
          "
        >
          View Summary
        </button>
      )}
    </div>
  );
}
