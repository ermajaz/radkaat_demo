"use client";

import Image from "next/image";

export default function SpecsTable() {
  return (
    <section className="w-full bg-superblack text-stone pr-6">
      <div className="w-full mx-auto flex flex-row items-center">
        {/* Left side - Frame Image */}
        <div className="w-1/2 flex justify-center md:justify-start overflow-hidden">
          <Image
            src="/images/bikes/frame-geometry.png"
            alt="Bike Frame Geometry"
            width={560}
            height={500}
            quality={100}
            className="object-cover w-full h-full -translate-x-5 scale-125"
          />
        </div>

        {/* Right side - Table */}
        <div className="w-1/2 mt-8 md:mt-0 md:pl-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#1A1A1A] text-stone text-sm">
                <th className="py-6 font-normal text-left w-1/3"></th>
                <th className="font-normal text-right w-[50px]">SM</th>
                <th className="font-normal text-right w-[50px]">MD</th>
                <th className="font-normal text-right w-[50px]">LG</th>
                <th className="font-normal text-right w-[50px]">XL</th>
              </tr>
            </thead>
            <tbody className="text-base">
              <tr className="border-b border-[#1A1A1A]">
                <td className="py-6 font-semibold">WHEEL SIZE</td>
                <td className="text-right">29</td>
                <td className="text-right">29</td>
                <td className="text-right">29</td>
                <td className="text-right">29</td>
              </tr>
              <tr className="border-b border-[#1A1A1A]">
                <td className="py-6 font-semibold">REACH</td>
                <td className="text-right">29</td>
                <td className="text-right">29</td>
                <td className="text-right">29</td>
                <td className="text-right">29</td>
              </tr>
              <tr className="border-b border-[#1A1A1A]">
                <td className="py-6 font-semibold">STACK</td>
                <td className="text-right">29</td>
                <td className="text-right">29</td>
                <td className="text-right">29</td>
                <td className="text-right">29</td>
              </tr>
              <tr>
                <td className="py-6 font-semibold">CHAIN STAY LENGTH</td>
                <td className="text-right">29</td>
                <td className="text-right">29</td>
                <td className="text-right">29</td>
                <td className="text-right">29</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
