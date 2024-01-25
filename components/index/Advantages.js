import React from "react";
import Image from "next/image";

export default function Advantages() {
  return (
    <section className=" bg-neutral-100">
      <div className="mx-auto max-w-[1100px] grid grid-cols-3 gap-8 -translate-y-[100px]">
        {[0, 1, 2].map((elem) => (
          <div className="w-full flex flex-col gap-2 shadow-lg p-10 rounded-md bg-white">
            <div className="bg-main w-10 h-10 flex justify-center items-center rounded-full">
              <Image
                className="w-5 h-5"
                src="/icons/index/cardiogram.svg"
                width={40}
                height={40}
              />
            </div>
            <h3>Online Appoinment</h3>
            <div className="h-[2px] w-12 bg-main"></div>
            <p>
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
