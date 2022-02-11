import { useEffect, useState } from "react";
import { setToLS, getFromLS } from "../shared/lib/locStorageFuncs";

interface ITheme {
  name: string;
  colors: {
    body: string;
    text: string;
  };
}

export const useTheme = () => {
  const themes = getFromLS("all-themes");

  const [theme, setTheme] = useState<ITheme>(themes.light);
  const [themeLoaded, setThemeLoaded] = useState<boolean>(false);

  const changeTheme = () => {
    if (theme.name === "Light") {
      setToLS("theme", themes.dark);
      setTheme(themes.dark);
    } else {
      setToLS("theme", themes.light);
      setTheme(themes.light);
    }
  };

  useEffect(() => {
    const localTheme = getFromLS("theme");
    localTheme ? setTheme(localTheme) : setTheme(themes.light);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, changeTheme };
};
