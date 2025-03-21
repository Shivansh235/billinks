"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const Generate = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [loading, setloading] = useState(false);

  const generate = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
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
        setloading(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        alert(result.message);
        console.log(result);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex flex-col bg-green-300 w-[30vw] h-[45vh] mx-auto my-20 rounded-lg">
      <h1 className="mt-7 text-2xl font-bold ml-5">
        Generate your shorten URLs
      </h1>
      <div className="flex flex-col gap-4 mx-auto">
        <input
          type="text"
          value={url}
          className="px-4 py-1.5 rounded-lg w-[25vw] mt-3"
          placeholder="Enter your URL"
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />
        <input
          type="text"
          value={shorturl}
          className="px-4 py-1.5 rounded-lg w-[25vw]"
          placeholder="Enter your preferred short URL text"
          onChange={(e) => {
            setshorturl(e.target.value);
          }}
        />
        <button
          onClick={generate}
          className="bg-green-500 hover:bg-green-600 cursor-pointer px-3 py-1.5 text-base font-bold rounded-lg text-white mt-3"
        >
          Generate
        </button>
      </div>
{/* in loading we check any url exist previously or not! */}
      {loading && (
        <>
          <span className="font-bold text-lg ml-7 mt-3">Your Link</span>{" "}
          <code>
            <Link className="ml-7 py-3" target="_blank" href={loading}>
              {loading}
            </Link>
          </code>
        </>
      )}
    </div>
  );
};

export default Generate;
