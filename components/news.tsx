import { news } from "@/constants";
import React from "react";

const News = () => {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="mx-auto text-4xl font-extrabold bg-gradient-to-r from-green-500 to-green-700 text-transparent bg-clip-text">
        News
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mx-auto">
        {news.map((item) => (
          <div
            key={item.text}
            className="w-[320px] h-[404px] xl:w-[250px] rounded-[20px] text-white font-[700] flex justify-center items-end p-3"
            style={{
              backgroundImage: `url(${item.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p>{item.text}</p>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default News;
