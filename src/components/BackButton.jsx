import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-screen-lg mx-auto">
      <button 
        className="flex items-center gap-2 bg-transparent font-medium text-lg text-[#598888] cursor-pointer sm:py-8 sm:px-24"
        onClick={() => navigate(-1)}
      >
        <i className="fa-solid fa-arrow-left-long"></i>
        Back
      </button>
    </div>
  );
};
