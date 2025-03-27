"use client";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[50vh] items-center px-6 md:px-12 py-10">
        {/* Left Section - Text Content */}
        <div className="flex flex-col justify-center items-center text-center md:text-left">
          <p className="text-3xl font-bold">
            The best URL shortener in the market
          </p>

          <p className="mt-3 px-4 md:px-12">
            We are the most straightforward and easy-to-use URL shortener in the market. Most URL shorteners track you or ask for your details to log in. We understand your needs, so we created a URL shortener.
          </p>

          <div className="flex gap-3 text-base text-white mt-5">
            <Link href="/generate">
              <button className="bg-green-600 hover:bg-green-500 px-4 py-2 text-base font-bold rounded-lg">
                Try Now
              </button>
            </Link>

            <a href="https://github.com/Shivansh235" target="_blank" rel="noopener noreferrer">
              <button className="bg-green-600 hover:bg-green-500 px-4 py-2 text-base font-bold rounded-lg">
                Github
              </button>
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center md:justify-end mt-6 md:mt-0">
          <img 
            className="w-full max-w-md md:max-w-lg mix-blend-darken" 
            src="/log.avif" 
            alt="Vector Image" 
          />
        </div>
      </section>
    </main>
  );
}
