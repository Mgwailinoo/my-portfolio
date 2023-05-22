import React from "react";
import { FiSmartphone } from "react-icons/fi";
import { RxEnvelopeClosed } from "react-icons/rx";
import { GoLocation } from "react-icons/go";
const Contact = () => {
  return (
    <div id="contact" className="container ">
      <div className="mb-10">
        <h1 className="text-4xl dark:text-[#72EF36] text-center font-bold md:text-left  text-[#001b5e]">
          Contact
        </h1>
        <div className="mt-10 grid md:grid-cols-3">
          <div className="flex items-center gap-3">
            <FiSmartphone className="md:text-[40px] text-[30px] " />
            <p className="font-poppins text:xl md:text-2xl sm:ml-6">
              09789236859
            </p>
          </div>
          <div className="flex items-center gap-3  md:mt-0">
            <RxEnvelopeClosed className="md:text-[40px] text-[30px] md:my-0 my-5" />
            <p className="font-poppins text:xl md:text-2xl sm:ml-6">
              wailinoowlo0218@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-3 ">
            <GoLocation size={40} className="md:text-[40px] text-[30px]" />
            <p className="font-poppins text:xl md:text-2xl sm:ml-6 ">
              Bahan ,Yangon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
