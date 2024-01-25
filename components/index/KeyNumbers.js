import React from "react";

export default function KeyNumbers() {
  return (
    <section className="border-y-2 border-slate-200 py-20 flex justify-center">
      <div className="grid grid-cols-4 gap-10 max-w-[1000px] w-full">
        {[0, 1, 2, 3].map((x) => (
          <div className="w-full flex flex-col gap-4 items-center  ">
            <span className="text-6xl font-bold text-main">1K+</span>
            <span className="text-xl">Formations</span>
          </div>
        ))}
      </div>
    </section>
  );
}
