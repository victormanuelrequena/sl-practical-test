import { useEffect, useState } from "react";

export default function useReactImageMagnify() {
  const [enlargedImagePosition, setEnlargedImagePosition] = useState("over");
  const DESKTOP_SCREEN = 1024;

  useEffect(() => {
    setEnlargedImagePosition(window.innerWidth > DESKTOP_SCREEN ? "beside" : "over");
    function handleResize() {
      setEnlargedImagePosition(window.innerWidth > DESKTOP_SCREEN ? "beside" : "over");
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { enlargedImagePosition };
}
