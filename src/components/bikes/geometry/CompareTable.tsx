"use client";

import Image from "next/image";

export default function CompareTable() {
  return (
    <section className="w-full bg-superblack text-stone px-6">
      {/* Specs Table */}
      <table className="w-full border-collapse">
        <tbody className="text-base">
          <tr className="border-b border-[#1A1A1A]">
            <td className="py-6 font-semibold pr-40"></td>
            <td className="text-center">
              <div className="flex flex-col items-center pb-10">
                <Image
                  src="/images/bikes/radkaat-cycle.png"
                  alt="Serow"
                  width={315}
                  height={245}
                  className="object-contain"
                />
                <span className="mt-2 font-semibold">SEROW</span>
              </div>
            </td>
            <td className="text-center">
              <div className="flex flex-col items-center pb-10">
                <Image
                  src="/images/bikes/radkaat-cycle.png"
                  alt="Saola"
                  width={315}
                  height={245}
                  className="object-contain"
                />
                <span className="mt-2 font-semibold">SAOLA</span>
              </div>
            </td>
            <td className="text-center">
              <div className="flex flex-col items-center pb-10">
                <Image
                  src="/images/bikes/radkaat-cycle.png"
                  alt="Takin"
                  width={315}
                  height={245}
                  className="object-contain"
                />
                <span className="mt-2 font-semibold">TAKIN</span>
              </div>
            </td>
          </tr>
          <tr className="border-b border-[#1A1A1A]">
            <td className="py-6 font-semibold pr-40">FRAME SIZE</td>
            <td className="text-center">4</td>
            <td className="text-center">4</td>
            <td className="text-center">4</td>
          </tr>
          <tr className="border-b border-[#1A1A1A]">
            <td className="py-6 font-semibold pr-40">FRAME</td>
            <td className="text-center">TORAY T-900 UD</td>
            <td className="text-center">TORAY T-900 UD</td>
            <td className="text-center">TORAY T-900 UD</td>
          </tr>
          <tr className="border-b border-[#1A1A1A]">
            <td className="py-6 font-semibold pr-40">GROUPSET</td>
            <td className="text-center">SRAM GX EAGLE XS</td>
            <td className="text-center">SRAM GX EAGLE XS</td>
            <td className="text-center">SRAM GX EAGLE XS</td>
          </tr>
          <tr>
            <td className="py-6 font-semibold pr-40">WHEELSET DISC</td>
            <td className="text-center">DT XR 1700 ULTRA</td>
            <td className="text-center">DT XR 1700 ULTRA</td>
            <td className="text-center">DT XR 1700 ULTRA</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
