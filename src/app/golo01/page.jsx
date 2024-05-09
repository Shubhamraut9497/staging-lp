"use client"
import React, { useState, useEffect } from "react";
import GoloHealthHero from "../components/HeroSection/GoloHealthHero";
import Navigation from "../components/Navigation/Navigation";

const Page = () => {
  const [datas, setData] = useState({});
  const [isLoading, setLoading] = useState(false);

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
      <main id="main" className="site-main">
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

export default Page;
