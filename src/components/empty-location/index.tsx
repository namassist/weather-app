import Logo from "@/assets/img/logo.png";
import { SearchForm } from "@/components";

export const EmptyLocation = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <img src={Logo} alt="logo app" className="h-[32px]" />
      </div>
      <div className="mt-40 flex flex-col justify-center items-center">
        <h1 className="text-heading-lg text-gray-100">
          Welcome to <span className="text-blue-light">TypeWeather</span>
        </h1>
        <p className="text-gray-200 text-lg">
          Choose a location to view the weather forecast
        </p>
        <div className="w-[512px] mt-10">
          <SearchForm />
        </div>
      </div>
    </>
  );
};
