"use client";
import React from "react";
import Link from "next/link";

export default function Home() {


  return (
    <main>
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl font-bold">
            The best URL shortener in the market
          </p>

          <p className="text-center px-24">
            We are the most straightforward and easy-to-use URL shortener in the market. Most URL shorteners track you or ask for your details to log in. We understand your needs, so we created a URL shortener.
          </p>

          <div className="flex gap-3 text-base text-white mt-5">
            <Link href="/generate">
              <button className="bg-green-600 hover:bg-green-500 cursor-pointer px-3 py-1.5 text-base font-bold rounded-lg">
                Try Now
              </button>
            </Link>

            <a href="https://github.com/Shivansh235" target="_blank" rel="noopener noreferrer">
              <button className="bg-green-600 hover:bg-green-500 cursor-pointer px-3 py-1.5 text-base font-bold rounded-lg">
                Github
              </button>
            </a>
          </div>
        </div>
        <div className="flex justify-evenly relative">
          <img className="mix-blend-darken" src="https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg" alt="Vector Image" />
        </div>
      </section>
    </main>
  );
}
