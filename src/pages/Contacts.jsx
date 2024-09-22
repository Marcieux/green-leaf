import React from "react";
import { useEmailValidation } from "../hooks/useEmailValidation";

export default function Contacts() {
  const { inputError, setInputError, handleChange, inputRef } =
    useEmailValidation();

  return (
    <div className="bg-[#fafafa] pt-[5rem] max-tablet:pt-[3rem]">
      <section className="max-w-[1440px] mx-auto px-24 max-tablet:px-12 max-mobile:px-6">
        <h2 className="flex flex-col items-center gap-4 text-[2rem] font-bold leading-[48px] text-[#1f1f1f] max-tablet:gap-0 max-tablet:text-[1.5rem] max-mobile:text-[1.25rem] max-mobile:leading-[1.75rem]">
          Contact us
          <span className="max-w-[790px] text-center font-normal text-base leading-[27px] text-[#1f1f1f] max-tablet:max-w-[70%] max-mobile:max-w-full max-mobile:text-[.75rem] max-mobile:leading-[18px]">
            You can contact us by filling out the form below or using the
            contact details provided. We will respond as soon as possible,
            usually within 24 hours.
          </span>
        </h2>

        <div className="flex justify-between items-center my-[5rem] max-tablet:flex-col max-tablet:my-[3rem]">
          {/* Contact Form */}
          <div className="w-[470px] max-tablet:w-[80%] max-mobile:w-full">
            <h3 className="text-center font-medium text-base leading-[27px] text-[#1e1e1ebf] mb-8 max-tablet:text-[.875rem] max-tablet:leading-[20px]">
              Leave us a message
            </h3>

            <form className="flex flex-col gap-6">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="w-full bg-[#eeeeee] rounded-[8px] p-3 max-tablet:p-2 text-base max-tablet:text-sm placeholder:text-sm focus:outline-none focus:border-[#446969]"
                required
              />

              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="contact-email"
                  id="contact-email"
                  placeholder="email@email.com"
                  className={`w-full bg-[#eeeeee] rounded-[8px] p-3 max-tablet:p-2 text-base max-tablet:text-sm placeholder:text-sm focus:outline-none ${
                    inputError ? "border-[#dc716b]" : "focus:border-[#446969]"
                  }`}
                  onBlur={() => setInputError(false)}
                  onChange={handleChange}
                  ref={inputRef}
                  required
                />
                <span
                  className={`absolute text-[#dc716b] text-sm mt-1 ${
                    inputError ? "block" : "hidden"
                  }`}
                >
                  Please enter a valid email address
                </span>
              </div>

              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows={8}
                className="w-full bg-[#eeeeee] rounded-[8px] p-3 max-tablet:p-2 text-base max-tablet:text-sm placeholder:text-sm resize-none focus:outline-none focus:border-[#446969]"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#598888] rounded-[8px] p-3 mt-5 text-white font-medium hover:opacity-80 active:scale-[.98] max-tablet:p-2"
              >
                Send
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-8 items-end mt-0 max-tablet:mt-[3rem]">
            <div className="flex items-center gap-8 text-md max-tablet:text-base max-mobile:text-sm leading-[30px] max-tablet:leading-[24px] max-mobile:leading-5 text-[#1e1e1ebf]">
              7631 Ridge Ave, Philadelphia, PA 19128, United States
              <div>
                <i className="fa-regular fa-map text-xl w-6 h-6 text-[#446969]"></i>
              </div>
            </div>
            <div className="flex items-center gap-8 text-md max-tablet:text-base max-mobile:text-sm leading-[30px] max-tablet:leading-[24px] max-mobile:leading-5 text-[#1e1e1ebf]">
              +1 235 406 5789
              <div>
                <i className="fa-solid fa-phone text-xl w-6 h-6 text-[#446969]"></i>
              </div>
            </div>
            <div className="flex items-center gap-8 text-md max-tablet:text-base max-mobile:text-sm leading-[30px] max-tablet:leading-[24px] max-mobile:leading-5 text-[#1e1e1ebf]">
              greenleafstore@contact.com
              <div>
                <i className="fa-regular fa-envelope text-xl w-6 h-6 text-[#446969]"></i>
              </div>
            </div>
            <div className="flex items-center gap-8 text-md max-tablet:text-base max-mobile:text-sm leading-[30px] max-tablet:leading-[24px] max-mobile:leading-5 text-[#1e1e1ebf]">
              Open Monday to Friday from 9am to 5pm <br />
              Saturday, Sunday and holidays from 10am to 7pm
              <div>
                <i className="fa-regular fa-clock text-xl w-6 h-6 text-[#446969]"></i>
              </div>
            </div>
          </div>
        </div>

        <iframe
          title="Secret Garden Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.878355670436!2d-0.2981479229939039!3d51.47874711279566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760dc5605b3443%3A0xd16f914f6291fb7e!2sRoyal%20Botanic%20Gardens%2C%20Kew!5e0!3m2!1sen!2sph!4v1726910797451!5m2!1sen!2sph"
          width="100%"
          height="500"
          className="border-none rounded-[12px] mb-[4.5rem]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
