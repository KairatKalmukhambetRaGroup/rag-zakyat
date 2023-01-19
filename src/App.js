import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Manager from "./components/Manager";
import Values from "./components/Values";
import './styles/index.scss';

const App = () => {
    
    return (
        <>
            <Header />
            <main>
                <Main />
                <div className="content">
                    <About />
                    <Values />
                    <Manager />
                    <Contact />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
