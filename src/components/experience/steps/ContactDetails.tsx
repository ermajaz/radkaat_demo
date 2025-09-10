"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, Variants } from "framer-motion";

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  terms: boolean;
}

interface ContactDetailsProps {
  onNext: (contact: ContactFormValues) => void;
  onBack: () => void;
}

export default function ContactDetails({ onNext, onBack }: ContactDetailsProps) {
  const { register, handleSubmit, watch } = useForm<ContactFormValues>();
  const termsChecked = watch("terms", false);

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    onNext(data);
  };

  const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, type: "spring" as const, stiffness: 80, damping: 20 } 
  },
};

const inputVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, type: "spring" as const, stiffness: 80 },
  }),
};


  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg bg-black/60 p-10 rounded-3xl shadow-2xl space-y-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className="!text-3xl md:text-5xl font-bold text-white text-center mb-6">
        Contact Details
      </h2>

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div custom={0} variants={inputVariants}>
          <Input
            placeholder="First Name"
            {...register("firstName", { required: true })}
            className="bg-white/10 text-white placeholder-white/60 py-4 px-4 rounded-lg focus:bg-white/20 focus:ring-rust text-lg transition-all"
          />
        </motion.div>
        <motion.div custom={1} variants={inputVariants}>
          <Input
            placeholder="Last Name"
            {...register("lastName", { required: true })}
            className="bg-white/10 text-white placeholder-white/60 py-4 px-4 rounded-lg focus:bg-white/20 focus:ring-rust text-lg transition-all"
          />
        </motion.div>
      </div>

      {/* Contact Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div custom={2} variants={inputVariants}>
          <Input
            placeholder="Phone Number"
            type="tel"
            {...register("phone", { required: true })}
            className="bg-white/10 text-white placeholder-white/60 py-4 px-4 rounded-lg focus:bg-white/20 focus:ring-rust text-lg transition-all"
          />
        </motion.div>
        <motion.div custom={3} variants={inputVariants}>
          <Input
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
            className="bg-white/10 text-white placeholder-white/60 py-4 px-4 rounded-lg focus:bg-white/20 focus:ring-rust text-lg transition-all"
          />
        </motion.div>
      </div>

      {/* Terms Checkbox */}
      <motion.div custom={4} variants={inputVariants} className="flex items-center space-x-3">
        <Checkbox
          id="terms"
          {...register("terms", { required: true })}
          className="accent-rust"
        />
        <label htmlFor="terms" className="text-white/70 hover:text-white/90 text-lg cursor-pointer">
          I accept the terms & conditions
        </label>
      </motion.div>

      {/* Buttons */}
      <motion.div custom={5} variants={inputVariants} className="flex justify-between mt-4 gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="text-white border-white/50 cursor-pointer py-4 px-8 text-lg transition"
        >
          Back
        </Button>
        <Button
          type="submit"
          disabled={!termsChecked}
          className={`py-4 px-8 text-lg transition-colors cursor-pointer duration-300 ${
            termsChecked
              ? "bg-rust hover:bg-rust/90 text-white"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
        >
          Book Your Ride
        </Button>
      </motion.div>
    </motion.form>
  );
}
