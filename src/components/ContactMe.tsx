import React from "react";
import assets from "../assets/assets";

const ContactMe = () => {
  return (
    <div
      id="contact-me"
      className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 md:pt-[72px] md:pb-10 dark:text-white text-[#3B3B3B]"
    >
      <div className="flex flex-col justify-center md:w-1/2 space-y-4 md:space-y-6 md:pr-20">
        <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-8 sm:leading-10 md:leading-12 lg:leading-16 font-bold">
          Got a project in <span className="text-[#5044e5]">mind?</span>
        </h3>
        <p className="text-lg sm:text-sm md:text-base lg:text-lg font-medium">
          I’m currently open to new opportunities, whether it’s a freelance
          project or a full-time position. Feel free to reach out to me anytime
          — I’d be happy to discuss how we can work together.
        </p>
        <div className="flex content-center gap-2.5">
          <img alt="Email me" className="w-6" src={assets.mail_icon} />
          <span>azizmsajjad@gmail.com</span>
        </div>
        <div className="flex content-center gap-2.5">
          <img alt="Email me" className="w-6" src={assets.call_icon} />
          <span>+92 344 2959588</span>
        </div>
        <div className="flex content-center gap-2.5">
          <img alt="Email me" className="w-6" src={assets.location_icon} />
          <span>Karachi</span>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <form className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">
          <div>
            <p className="mb-2 text-sm font-medium">Your name</p>
            <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
              <img src={assets.person_icon} alt="" />
              <input
                required
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 text-sm outline-none"
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium">Your email</p>
            <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
              <img src={assets.email_icon} alt="" />
              <input
                required
                type="email"
                placeholder="Enter your email address"
                className="w-full p-3 text-sm outline-none"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <p className="mb-2 text-sm font-medium">Subject</p>
            <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
              <input
                required
                type="text"
                placeholder="Enter subject"
                className="w-full p-3 text-sm outline-none"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <p className="mb-2 text-sm font-medium">Message</p>
            <textarea
              rows={8}
              placeholder="Enter your message"
              className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
          >
            Submit{" "}
            <img
              alt="Submit contact form"
              className="w-4"
              src={assets.arrow_icon}
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
