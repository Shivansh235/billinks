"use client";
import React, { useState } from "react";
import Link from "next/link";

const Generate = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        setUrl("");
        setShortUrl("");
        alert(result.message);
        console.log(result);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex flex-col bg-green-300 w-full max-w-[24rem] md:max-w-lg mx-auto my-24 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">
        Generate your shorten URLs
      </h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={url}
          className="px-4 py-2 rounded-lg w-full text-sm"
          placeholder="Enter your URL"
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          value={shortUrl}
          className="px-4 py-2 rounded-lg w-full text-sm"
          placeholder="Enter your preferred short URL text"
          onChange={(e) => setShortUrl(e.target.value)}
        />
        <button
          onClick={generate}
          className="bg-green-500 hover:bg-green-600 cursor-pointer px-4 py-2 text-base font-bold rounded-lg text-white w-full mt-4"
        >
          Generate
        </button>
      </div>
      {/* Display the generated link if available */}
      {loading && (
        <div className="mt-4 text-center">
          <span className="font-bold text-lg">Your Link:</span>
          <div className="break-all mt-2 text-blue-600 underline">
            <Link target="_blank" href={loading}>
              {loading}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Generate;