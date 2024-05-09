"use client"
import React from "react";
import GoloHealthHero from "../components/HeroSection/GoloHealthHero";
import Navigation from "../components/Navigation/Navigation";
import { useState, useEffect } from "react";

const page = () => {
  const [datas, setData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const dummyArray = [
    {
      id: 1,
      name: "Item 1",
      showComponents: false,
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/data`);
        console.log("Response status:", res.status);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const val = await res.json();
        console.log("Fetched data:", val);
        setData(val);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err); // Log the error
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(datas);

  return (
    <>
      <main id="main" class="site-main">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <Navigation
              wpNumber={datas ? datas.whatsapp_number : <></>}
              logo={datas ? datas.logo : "hello"}
            />
            <GoloHealthHero />
          </>
        )}
      </main>
    </>
  );
};

export default page;
