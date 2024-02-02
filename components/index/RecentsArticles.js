import React from "react";
import SectionLayout from "./SectionLayout";
import content from "../../data/content/index/index.json";
import articlesData from "../../data/content/index/articles.json";
import Image from "next/image";
import Link from "next/link";
import blogsData from "../../data/content/blogs/blogs.json";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

export default function RecentsArticles() {
  return (
    <SectionLayout
      title={content.thirdSection.title}
      paragraph={content.thirdSection.paragraph}
    >
      <div className="flex flex-col gap-20" id="articles">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {blogsData.slice(0, 3).map((blog, index) => (
            <div key={index} className="flex flex-col gap-6">
              <Image
                className="rounded-xl w-full h-[200px] object-cover "
                width={300}
                height={300}
                src={blog.image}
                alt=""
              />
              <div className="flex flex-col justify-around h-full gap-2">
                <div className="flex gap-2 items-center text-blue-500 font-semibold text-lg">
                  <span>{blog.category}</span>
                  <span> - </span>
                  <span>Lecture : 10 min</span>
                </div>
                <h3 className="hover:underline underline-offset-4 cursor-pointer">
                  {blog.title}
                </h3>
                <div className="flex gap-2 items-center">
                  <div className="flex items-center gap-2">
                    <Image
                      className="h-[40px] w-[40px] rounded-full object-cover "
                      width={100}
                      height={100}
                      src={blog.profilePicture}
                      alt=""
                    />
                    <span className="text-grey text-lg">{blog.author}</span>
                  </div>
                  <span>-</span>
                  <span className="text-grey font-light text-lg">
                    {blog.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
          className="flex text-xl gap-2 justify-center items-center text-blue-500 hover:underline underline-offset-4"
          href="/"
        >
          <span className="font-bold uppercase">Voir tous les blogs</span>
          <ArrowLongRightIcon className="w-6 h-6" />
        </Link>
      </div>
    </SectionLayout>
  );
}
