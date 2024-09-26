import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Button,
} from "@/components";
import { useAppContext } from "@/context/app-context";
import { useWeather } from "@/hooks/use-weather";
import { WiCelsius, WiFahrenheit } from "react-icons/wi";

export const SwitchMode = () => {
  const { units } = useAppContext();
  const { handleUnitToggle } = useWeather();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          className="h-auto border border-gray-400 animate-pulse"
        >
          {units === "metric" ? (
            <WiCelsius className="h-6 w-6" />
          ) : (
            <WiFahrenheit className="h-6 w-6" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => handleUnitToggle("metric")}>
          Celsius
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleUnitToggle("imperial")}>
          Fahrenheit
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
