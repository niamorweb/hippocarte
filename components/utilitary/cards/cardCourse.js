import React from "react";
import Image from "next/image";

export default function CardCourse({
  imgWidth,
  imgHeight,
  imgAlt,
  imgSrc,
  title,
  paragraph,
  newPrice,
  previousPrice,
  date,
}) {
  return (
    <div className="w-full">
      <Image
        className="w-full object-cover"
        width={imgWidth || 200}
        height={imgHeight || 200}
        alt={imgAlt}
        src={imgSrc}
      />
      <div className="w-full p-4">
        <p className="font-light text-grey">{date}</p>
        <h3>{title}</h3>
        {/* <p>{paragraph}</p>yarn  */}
        <div className="">
          <div className="">
            <span className="">{newPrice}</span>
            <span className="">{previousPrice}</span>
          </div>
          <button className="">Voir Plus</button>
        </div>
      </div>
    </div>
  );
}
