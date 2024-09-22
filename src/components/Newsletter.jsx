import React from "react";
import { useEmailValidation } from "../hooks/useEmailValidation";

export default function Newsletter() {
  const pathName = window.location.pathname.split("/").slice(-1);
  const {
    emailSubmit,
    inputError,
    setInputError,
    handleChange,
    inputRef,
    handleSubmit,
  } = useEmailValidation();

  return (
    <div className={`${pathName} mb-[4.5rem]`}>
      <div className="px-6 tablet:px-16 desktop:px-24">
        <div className="flex flex-col tablet:flex-row items-center gap-6 mb-4">
          <div className="w-full tablet:w-[407px] py-4 text-center tablet:text-left">
            <h2 className="font-semibold text-[2.3rem] leading-[60px] text-[#446969] max-tablet:text-[1.6rem] max-tablet:leading-normal max-mobile:text-[1.4rem] max-mobile:leading-[2rem]">
              Join our newsletter
            </h2>
            <span className="font-normal text-[1rem] text-[#1e1e1e80] max-mobile:mt-1 max-mobile:text-[0.75rem] tablet:justify-center">
              Stay on top of the latest trends in gardening and plant decoration
            </span>
          </div>
          {!emailSubmit ? (
            <div className="w-full tablet:flex-1">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col tablet:flex-row gap-4 max-tablet:gap-3 max-mobile:gap-2"
              >
                <div className="relative w-full tablet:flex-1">
                  <input
                    type="email"
                    name="newsletter-email"
                    id="newsletter-email"
                    className={`w-full h-[50px] max-tablet:h-[45px] max-mobile:h-[40px] p-[1rem] pr-[2.5rem] pl-[calc(3rem+30px)] bg-[#f7f7f7] border-none rounded-[12px] shadow-[2px_2px_4px_#DADADA] text-[#1e1e1e] placeholder:text-[#1e1e1e80] focus-visible:outline-none focus-visible:border-[#446969] ${
                      inputError ? "border-[#dc716b]" : ""
                    } max-tablet:pl-[calc(2rem+30px)] max-mobile:pl-[calc(1.5rem+20px)]`}
                    placeholder="email@email.com"
                    onBlur={() => setInputError(false)}
                    onChange={handleChange}
                    ref={inputRef}
                    required
                  />
                  <i
                    className={`fa-regular fa-envelope absolute text-xl top-1/2 left-8 max-tablet:left-6 max-mobile:left-5 transform -translate-y-1/2 ${
                      inputError ? "text-[#dc716b]" : "text-gray-600"
                    }`}
                  ></i>
                </div>

                {/* Error message for mobile/tablet sizes */}
                {inputError && (
                  <span className="block tablet:hidden text-[#dc716b] text-sm max-mobile:text-xs tablet:mb-2">
                    Please enter a valid email address
                  </span>
                )}

                <button
                  type="submit"
                  className="w-full tablet:w-32 h-[50px] max-tablet:h-[45px] max-mobile:h-[40px] bg-[#446969] text-white rounded-lg hover:opacity-80 active:bg-[#244545]"
                >
                  Send
                </button>
              </form>

              {/* Error message for desktop size */}
              {inputError && (
                <span className="hidden tablet:block text-[#dc716b] text-sm mt-2">
                  Please enter a valid email address
                </span>
              )}
            </div>
          ) : (
            <span className="w-full tablet:flex-1 text-center font-medium text-[1.8rem] max-tablet:text-[1.4rem] text-[#446969]">
              Thanks!
            </span>
          )}
        </div>
        <div className="text-center">
          <p className="font-normal text-base max-mobile:text-sm text-[#1e1e1e80]">
            Receive expert plant care tips, and learn cultivation techniques to
            keep your plants healthy and thriving.
          </p>
        </div>
      </div>
    </div>
  );
}
