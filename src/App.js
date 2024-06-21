import React, { useState, useEffect } from 'react'; // Importing useState and useEffect hooks
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import StartMenu from './components/StartMenu';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Links from './components/Links';
import Footer from './components/Footer';
import Internet from './components/Internet';
import './App.css'; // Import your main CSS file

const App = () => {
    const [isLoading, setIsLoading] = useState(true); // State to manage loading

    useEffect(() => {
        // Set a timeout to switch from loading to main app after 10 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 6000); // 10000 milliseconds = 10 seconds

        // Cleanup the timer if the component unmounts before the timeout
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <Navbar />
                    <StartMenu />
                    {/* <Paint /> Uncomment if needed */}
                    <Skills />
                    <About />
                    <Projects />
                    <Internet />
                    <Links />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default App;
