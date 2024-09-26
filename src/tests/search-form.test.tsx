import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { SearchForm } from "@/components";
import AppProvider from "@/context/app-context";

const mockSetLocation = vi.fn();
const mockNavigate = vi.fn();

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return Object.assign({}, actual, {
    useNavigate: () => mockNavigate,
  });
});

vi.mock("@/context/app-context", async (importOriginal) => {
  const actual = await importOriginal();
  return Object.assign({}, actual, {
    useAppContext: () => ({
      setLocation: mockSetLocation,
    }),
  });
});

describe("SearchForm", () => {
  const renderWithContext = () => {
    render(
      <AppProvider>
        <BrowserRouter>
          <SearchForm />
        </BrowserRouter>
      </AppProvider>
    );
  };

  beforeEach(() => {
    mockSetLocation.mockClear();
    mockNavigate.mockClear();
  });

  it("renders input with the correct initial empty value", () => {
    renderWithContext();
    const input = screen.getByPlaceholderText(/search location/i);
    expect(input).toHaveValue("");
  });

  it("updates input value when user types", () => {
    renderWithContext();
    const input = screen.getByPlaceholderText(/search location/i);
    fireEvent.change(input, { target: { value: "Bali" } });
    expect(input).toHaveValue("Bali");
  });

  it("calls setLocation and navigate on form submit", () => {
    renderWithContext();
    const input = screen.getByPlaceholderText(/search location/i);
    const button = screen.getByRole("button", { name: /cari/i });

    fireEvent.change(input, { target: { value: "Surabaya" } });
    fireEvent.click(button);

    expect(mockSetLocation).toHaveBeenCalledWith("Surabaya");
    expect(mockNavigate).toHaveBeenCalledWith({ search: "q=Surabaya" });
  });

  it("prevents navigation with empty input", () => {
    renderWithContext();
    const input = screen.getByPlaceholderText(/search location/i);
    const button = screen.getByRole("button", { name: /cari/i });

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(button);

    expect(mockSetLocation).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
