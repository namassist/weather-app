import { PiSpinnerLight } from "react-icons/pi";

export const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <PiSpinnerLight className="animate-spin-slow w-14 h-14 text-gray-200" />
    </div>
  );
};
