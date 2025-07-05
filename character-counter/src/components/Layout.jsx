import { useContext } from 'react';
import BgDark from '../assets/images/bg-dark-theme.png';
import BgLight from '../assets/images/bg-light-theme.png';
import { TextContextProvider } from '../context/TextContext';
import { themeContext } from '../context/ThemeContext';
import Header from './Header';
import TextAreaAndFilters from './TextAreaAndFilters';

const Layout = () => {
  const { theme } = useContext(themeContext);

  return (
    <TextContextProvider>
        <div className={theme}>
            <div style={{ backgroundImage: `url(${theme === 'dark' ? BgDark : BgLight})` }}>
            <div className="bg-cover bg-center min-h-screen font-normal ml-30 mr-30 pt-5">
                <Header />
                <main>
                <h1 className="mr-60 ml-60 text-6xl font-semibold text-center dark:text-white">
                    Analyze your text in real-time.
                </h1>
                <TextAreaAndFilters />
                </main>
            </div>
            </div>
        </div>

    </TextContextProvider>
  );
};

export default Layout;
