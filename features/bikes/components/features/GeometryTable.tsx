"use client";

import Image from "next/image";

export default function GeometryTable() {
  return (
    <section className="w-full bg-superblack text-stone py-15 pr-6">
      <div className="w-full mx-auto flex  flex-row items-center">
        {/* Left side - Transparent Frame Image */}
        <div className="w-1/2 flex justify-center md:justify-start overflow-hidden">
          <Image
            src="/images/bikes/frame-geometry.png"
            alt="Bike Frame Geometry"
            width={560}
            height={500}
            quality={100}
            className="object-contain w-full h-auto -translate-x-5 scale-110"
          />
        </div>

        {/* Right side - Table */}
        <div className="w-1/2 mt-8 md:mt-0 md:pl-12">
          <table className="w-full border-collapse">
            {/* Table Head */}
            <thead>
              <tr className="border-b border-[#1A1A1A] text-stone text-sm">
                <th className="py-6 font-normal text-left w-1/3"></th>
                <th className="font-normal text-right w-5">SM</th>
                <th className="font-normal text-right w-5">MD</th>
                <th className="font-normal text-right w-5">LG</th>
                <th className="font-normal text-right w-5">XL</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="text-base">
              <tr className="border-b border-[#1A1A1A]">
                <td className="py-6 text-stone font-semibold">WHEEL SIZE</td>
                <td className="text-right w-5">29</td>
                <td className="text-right w-5">29</td>
                <td className="text-right w-5">29</td>
                <td className="text-right w-5">29</td>
              </tr>
              <tr className="border-b border-[#1A1A1A]">
                <td className="py-6 text-stone font-semibold">REACH</td>
                <td className="text-right w-5">29</td>
                <td className="text-right w-5">29</td>
                <td className="text-right w-5">29</td>
                <td className="text-right w-5">29</td>
              </tr>
              <tr className="border-b border-[#1A1A1A]">
                <td className="py-6 text-stone font-semibold">STACK</td>
                <td className="text-right w-5">29</td>
                <td className="text-right w-5">29</td>
                <td className="text-right w-5">29</td>
                <td className="text-right w-5">29</td>
              </tr>
              <tr className="border-b border-[#1A1A1A]">
                <td className="py-6 text-stone font-semibold">
                  CHAIN STAY LENGTH
                </td>
                <td className="text-right w-5">29</td>
                <td className="text-right w-5">29</td>
                <td className="text-right w-5">29</td>
                <td className="text-right w-5">29</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
