"use client";

export default function RideStepMobile({
  step,
  index,
}: {
  step: { title: string; desc: string; icon: any };
  index: number;
}) {
  return (
    <div className="flex flex-col items-center text-center w-[80%] gap-3">
      <div className="w-[60px] h-[60px] flex items-center justify-center bg-sandstorm text-superblack rounded-full">
        <step.icon className="w-6 h-6" />
      </div>

      <h4 className="text-[18px] font-semibold text-stone">
        {step.title}
      </h4>

      <p className="text-[14px] text-stone/80">
        {step.desc}
      </p>
    </div>
  );
}
