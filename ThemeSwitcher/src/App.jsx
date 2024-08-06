import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/ThemeContext";
import ThemeBtn from "./Components/ThemeBtn";
import Card from './Components/Card';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightMode = () => {
    setThemeMode('light');
  }

  const darkMode = () => {
    setThemeMode('dark');
  }

  useEffect(() => {
    document.querySelector('html').classList.add(themeMode);

    return(() => {
      document.querySelector('html').classList.remove('light', 'dark');
    })
  }, [themeMode]);
  
  

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
