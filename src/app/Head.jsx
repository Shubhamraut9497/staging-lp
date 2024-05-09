"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Head = () => {
  const [faviconUrl, setFaviconUrl] = useState("");
  const [meta_title, setMetaTitle] = useState("");
  const [meta_description, setMetaDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const orig = "https://app.shootorder.com/assets/";
  const imgFormat = ".jpg";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = "Hjc4p5RuiTn1P3cB9IZEuW1dNhV_ZWsS";
        const res = await fetch(`/api/metadata`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        console.log(data);
        if (data?.favicon) {
          setFaviconUrl(orig + data?.favicon + imgFormat);
          setMetaTitle(data?.seo_title);
          setMetaDescription(data?.seo_meta_description);
        } else {
          throw new Error("Favicon URL not found in API response");
        }
      } catch (err) {
        console.error("Error fetching favicon:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <head>
      <link rel="icon" href={faviconUrl} type="image/x-icon" />
      <link rel="icon" type="image/png" href="/images/logo/favicon.svg" />
      <meta name="description" content={meta_description} />
      <title>{meta_title}</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </head>
  );
};

export default Head;
