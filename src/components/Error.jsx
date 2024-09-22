import React from "react";

export default function Error({ error }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-[#fce2e0] text-[#dc716b] border border-[#dc716b] px-8 py-4 rounded-md">
        <p className="text-lg font-medium">{error}</p>
      </div>
    </div>
  );
}
