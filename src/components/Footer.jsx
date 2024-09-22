import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#c1dcdc] py-12 tablet:py-16">
      <div className="px-4 tablet:px-24 desktop:px-40">
        <div className="flex flex-col tablet:flex-row justify-between mb-12 tablet:gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <span className="text-2xl tablet:text-3xl font-bold">GREENLEAF</span>
            <span className="w-[190px] text-sm tablet:text-base text-[#1e1e1e80]">
              We help you find your dream plant
            </span>
            <div className="flex gap-5">
              <button className="rounded-full border border-[#1e1e1e80]" onClick={() => window.open("#", "_blank")}>
                <i className="fa-brands fa-facebook w-8 h-8 p-2"></i>
              </button>
              <button className="rounded-full border border-[#1e1e1e80]" onClick={() => window.open("#", "_blank")}>
                <i className="fa-brands fa-instagram w-8 h-8 p-2"></i>
              </button>
              <button className="rounded-full border border-[#1e1e1e80]" onClick={() => window.open("#", "_blank")}>
                <i className="fa-brands fa-x-twitter w-8 h-8 p-2"></i>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col tablet:flex-row gap-6 tablet:gap-12">
            {/* Information List */}
            <ul>
              <p className="font-bold text-base tablet:text-lg mb-4">Information</p>
              <li className="mb-4">
                <button className="text-[#1e1e1e80] hover:text-[#1e1e1e]">About</button>
              </li>
              <li className="mb-4">
                <button className="text-[#1e1e1e80] hover:text-[#1e1e1e]">Product</button>
              </li>
              <li>
                <button className="text-[#1e1e1e80] hover:text-[#1e1e1e]">Blog</button>
              </li>
            </ul>

            {/* Company List */}
            <ul>
              <p className="font-bold text-base tablet:text-lg mb-4">Company</p>
              <li className="mb-4">
                <button className="text-[#1e1e1e80] hover:text-[#1e1e1e]">Community</button>
              </li>
              <li className="mb-4">
                <button className="text-[#1e1e1e80] hover:text-[#1e1e1e]">Career</button>
              </li>
              <li>
                <button className="text-[#1e1e1e80] hover:text-[#1e1e1e]">Our Story</button>
              </li>
            </ul>

            {/* Contact List */}
            <ul>
              <p className="font-bold text-base tablet:text-lg mb-4">Contact</p>
              <li className="mb-4">
                <button className="text-[#1e1e1e80] hover:text-[#1e1e1e]">Getting Started</button>
              </li>
              <li className="mb-4">
                <button className="text-[#1e1e1e80] hover:text-[#1e1e1e]">Pricing</button>
              </li>
              <li>
                <button className="text-[#1e1e1e80] hover:text-[#1e1e1e]">Resources</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="flex flex-col tablet:flex-row justify-between items-center text-[#1e1e1e80] gap-4 text-xs tablet:text-sm">
          <span>© 2024 All Rights Reserved | Terms of Use | GREENLEAF</span>
          <span className="flex items-center gap-2">
            Designed and Coded with{" "}
            <i className="fa-regular fa-heart text-[#1e1e1e80]"></i> by
            <button
              className="underline text-[#1e1e1e80] hover:text-[#1e1e1e]"
              onClick={() => window.open("https://mjdoria-dev-portfolio.vercel.app/", "_blank")}
            >
              Marc Jerome Doria
            </button>
          </span>
        </div>
      </div>
    </footer>
  );
}
