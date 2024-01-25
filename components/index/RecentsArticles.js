import React from "react";
import SectionLayout from "./SectionLayout";
import content from "../../data/content/index/index.json";
import articlesData from "../../data/content/index/articles.json";
import Image from "next/image";
import Link from "next/link";
import blogsData from "../../data/content/blogs/blogs.json";

export default function RecentsArticles() {
  return (
    <SectionLayout
      title={content.thirdSection.title}
      paragraph={content.thirdSection.paragraph}
    >
      <div className="flex flex-col gap-20" id="articles">
        {/* <div className="grid grid-cols-3 gap-6">
          {articlesData.courses.slice(0, 3).map((article) => (
            <div className="flex flex-col gap-3">
              <h4>{article.textContainer.title}</h4>
              <Image
                className="w-full h-[170px] object-cover"
                width={article.image.width}
                height={article.image.height}
                alt={article.image.alt}
                src={article.image.src}
              />
              <div>
                <p>{article.textContainer.paragraph}</p>
              </div>
              <Link
                className="flex items-center gap-3 text-main hover:underline underline-offset-2"
                href="/"
              >
                <span className="font-bold text-main">Voir Plus</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-3 gap-16">
          {blogsData.slice(0, 3).map((blog) => (
            <div className="flex flex-col gap-6">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </SectionLayout>
  );
}
