import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  PiThermometerSimpleLight,
  PiCloudRainLight,
  PiWindLight,
  PiDropLight,
  PiSunDimLight,
} from "react-icons/pi";

const weatherDetailsVariants = cva(
  "flex justify-between items-center pl-1 py-2.5 xl:py-4 border-b border-gray-700",
  {
    variants: {
      type: {
        temperature: "text-heading-md text-gray-100",
        rain: "text-heading-md text-gray-100",
        wind: "text-heading-md text-gray-100",
        humidity: "text-heading-md text-gray-100",
        uv: "text-heading-md text-gray-100",
      },
    },
    defaultVariants: {
      type: "temperature",
    },
  }
);

const iconMap = {
  temperature: <PiThermometerSimpleLight className="w-8 h-8 text-[#3B3B55]" />,
  rain: <PiCloudRainLight className="w-8 h-8 text-[#3B3B55]" />,
  wind: <PiWindLight className="w-8 h-8 text-[#3B3B55]" />,
  humidity: <PiDropLight className="w-8 h-8 text-[#3B3B55]" />,
  uv: <PiSunDimLight className="w-8 h-8 text-[#3B3B55]" />,
};

const labelMap = {
  temperature: "Feels like",
  rain: "Chance of rain",
  wind: "Wind Speed",
  humidity: "Humidity",
  uv: "UV Index",
};

export interface WeatherDetailsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof weatherDetailsVariants> {
  type: "temperature" | "rain" | "wind" | "humidity" | "uv";
  value: string;
  asChild?: boolean;
}

const WeatherDetails = React.forwardRef<HTMLDivElement, WeatherDetailsProps>(
  ({ className, type, value, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={cn(weatherDetailsVariants({ type, className }))}
        ref={ref}
        {...props}
      >
        <div className="flex items-center">
          {iconMap[type]}
          <span className="text-heading-xs text-gray-200 ml-2 capitalize">
            {labelMap[type]}
          </span>
        </div>
        <p className="border-none">{value}</p>
      </Comp>
    );
  }
);
WeatherDetails.displayName = "WeatherDetails";

export { WeatherDetails, weatherDetailsVariants };
