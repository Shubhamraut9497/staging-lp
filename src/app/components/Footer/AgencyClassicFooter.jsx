import Link from "next/link";
import React from "react";

const AgencyClassicFooter = ({ logo, copyright_text, footerLinks }) => {
  const orig = "https://app.shootorder.com/assets/";
  const imgFormat = ".jpg";
  const logoUrl = `${orig + logo + imgFormat}`;
  return (
    <footer className="px-16 py-2 bg-black mt-40 min-h-32" >
      <div className="flex flex-wrap justify-between  items-center">
        <div className="flex justify-between text-white">
          {/* <div className="mr-3"><img src={logoUrl} /></div> */}
          <div className="">{copyright_text}</div>
        </div>
        <div className="flex justify-between text-white">
          {footerLinks?.map((link,index) => {
            return (
              <>
                <div className="flex justify-between text-white ">
                  <p
                    key={index}
                    href="/"
                    className="px-4 py-2 text-white rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                  >
                    {link.link_name}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default AgencyClassicFooter;
