import React from "react";
import { useAppContext } from "@/context/app-context";
import { Button, Input } from "@/components";
import { useNavigate } from "react-router-dom";

export const SearchForm: React.FC = () => {
  const navigate = useNavigate();
  const { location, setLocation } = useAppContext();
  const [inputValue, setInputValue] = React.useState<string>(location || "");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setLocation(inputValue);

      const searchParams = new URLSearchParams();
      searchParams.set("q", inputValue);
      navigate({ search: searchParams.toString() });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full">
      <Input
        className="bg-gray-600 text-gray-100"
        placeholder="Search location"
        value={inputValue}
        required
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Button variant="secondary" type="submit" className="h-12 min-w-16">
        Cari
      </Button>
    </form>
  );
};
