import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

type BookingContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Lock Lenis smooth scroll while modal is open so inner iframe scroll works.
  useEffect(() => {
    const lenis = typeof window !== "undefined" ? window.__lenis : undefined;
    if (!lenis) return;
    if (isOpen) lenis.stop();
    else lenis.start();
    return () => {
      lenis.start();
    };
  }, [isOpen]);

  return (
    <BookingContext.Provider value={{ isOpen, open, close }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
