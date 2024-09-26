import NotFound from "@/assets/img/404.svg";

interface ErrorDisplayProps {
  message?: string;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <img
        src={NotFound}
        alt="error illustration image"
        className="w-20 lg:w-48"
      />
      <p className="text-gray-200 capitalize mt-4 text-heading-md">{message}</p>
    </div>
  );
};
