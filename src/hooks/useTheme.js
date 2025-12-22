import { useEffect, useState } from "react";

export default function useTheme() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" || false
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const toggle = () => setDark(!dark);

  return { dark, toggle };
}
