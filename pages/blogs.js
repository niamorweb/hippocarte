import React from "react";
import blogsData from "../data/content/blogs/blogs.json";
import Image from "next/image";

export default function blogs() {
  return (
    <section className="w-full pt-[50px] pb-[100px] min-h-[85vh] flex flex-col gap-20">
      <div className="w-full">
        <div className="max-w-[1400px] mx-auto flex flex-col justify-center items-center">
          <h2>Nos blogs</h2>
          <p>Retrouvez tous nos articles</p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col gap-32 justify-center items-center">
        {blogsData.slice(0, 1).map((blog) => (
          <div className="flex gap-10">
            <Image
              className="w-3/5 rounded-xl h-[400px] object-cover "
              width={600}
              height={600}
              src={blog.image}
              alt=""
            />
            <div className="w-2/5 flex flex-col justify-around h-full gap-6 py-14">
              <div className="flex gap-2 items-center text-red-500 font-semibold text-lg">
                <span>{blog.category}</span>
                <span> - </span>
                <span>Lecture : 10 min</span>
              </div>
              <h3 className="text-4xl hover:underline underline-offset-4 cursor-pointer">
                {blog.title}
              </h3>
              <div className="flex gap-2 items-center">
                <div className="flex items-center gap-2">
                  <Image
                    className="h-[60px] w-[60px] rounded-full object-cover "
                    width={100}
                    height={100}
                    src={blog.profilePicture}
                    alt=""
                  />
                  <span className="font-semibold text-lg">{blog.author}</span>
                </div>
                <span>-</span>
                <span className="text-grey font-light text-lg">
                  {blog.date}
                </span>
              </div>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-3 gap-16">
          {blogsData.map((blog) => (
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
      </div>
    </section>
  );
}
