import { useState, useEffect } from "react";

/**
 * useMediaQuery hook
 *
 * React hook that returns a boolean indicating if the media query matches.
 * It will also re-evaluate the media query when the component is resized.
 *
 * @param query A valid CSS media query
 */
export function useMediaQuery(query: string) {
  const [value, setValue] = useState(false);
  useEffect(() => {
    /**
     * Add event listener and set initial value
     */
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }
    const result = window.matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);
    return () => {
      /**
       * Remove event listener
       */
      result.removeEventListener("change", onChange);
    };
  }, [query]);
  return value;
}

