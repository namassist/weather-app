import * as React from "react";

interface AppContextType {
  location: string;
  setLocation: (location: string) => void;
  units: string;
  setUnits: (units: string) => void;
}

const AppContext = React.createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
}

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [location, setLocation] = React.useState<string>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("q") || "";
  });
  const [units, setUnits] = React.useState<string>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("units") || "metric";
  });

  const AppContextValue: AppContextType = {
    location,
    units,
    setLocation,
    setUnits,
  };

  return (
    <AppContext.Provider value={AppContextValue}>
      {children}
    </AppContext.Provider>
  );
}
