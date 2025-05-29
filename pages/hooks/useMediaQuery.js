import { useState, useEffect } from "react";

export default function useMediaQuery(ref) {
  const [media, setMedia] = useState("desktop");

  useEffect(() => {
    if (ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      setMedia(width < 680 ? "mobile" : "desktop");
    }
  }, [ref]);

  return media;
}