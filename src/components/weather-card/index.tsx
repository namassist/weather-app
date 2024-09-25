// WeatherCard.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Variant logic for WeatherCard
const weatherCardVariants = cva(
  "h-full rounded-xl bg-cover bg-no-repeat bg-center px-8 py-5 text-gray-100 flex flex-col justify-between",
  {
    variants: {
      variant: {
        "clear-day": "bg-clear-day",
        "clear-night": "bg-clear-night",
        "clouds-day": "bg-clouds-day",
        "clouds-night": "bg-clouds-night",
        "rain-day": "bg-rain-day",
        "rain-night": "bg-rain-night",
        "snow-day": "bg-snow-day",
        "snow-night": "bg-snow-night",
        "thunderstorm-day": "bg-storm-day",
        "thunderstorm-night": "bg-storm-night",
        default: "bg-default-day",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface WeatherCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof weatherCardVariants> {}

// Parent WeatherCard component
const WeatherCard = React.forwardRef<HTMLDivElement, WeatherCardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(weatherCardVariants({ variant, className }))}
      {...props}
    />
  )
);
WeatherCard.displayName = "WeatherCard";

// Compound components
const WeatherCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col-reverse items-center space-y-2 sm:space-y-2 sm:flex-row sm:justify-between ${className}`}
    {...props}
  />
));
WeatherCardHeader.displayName = "WeatherCardHeader";

const WeatherCardLocation = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`space-y-1 ${className}`} {...props} />
));
WeatherCardLocation.displayName = "WeatherCardLocation";

const WeatherCardTime = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4 ref={ref} className={`text-heading-md ${className}`} {...props} />
));
WeatherCardTime.displayName = "WeatherCardTime";

const WeatherCardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col-reverse sm:flex-row sm:justify-between items-center ${className}`}
    {...props}
  />
));
WeatherCardBody.displayName = "WeatherCardBody";

const WeatherCardTemp = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={`text-heading-xl sm:text-heading-hg text-white text-center sm:text-left ${className}`}
    {...props}
  />
));
WeatherCardTemp.displayName = "WeatherCardTemp";

const WeatherCardDetail = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`space-y-1 ${className}`} {...props} />
));
WeatherCardDetail.displayName = "WeatherCardDetail";

const WeatherCardIcon = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img ref={ref} className={className} {...props} />
));
WeatherCardIcon.displayName = "WeatherCardIcon";

// Exporting the components
export {
  WeatherCard,
  WeatherCardHeader,
  WeatherCardLocation,
  WeatherCardTime,
  WeatherCardBody,
  WeatherCardTemp,
  WeatherCardDetail,
  WeatherCardIcon,
};
