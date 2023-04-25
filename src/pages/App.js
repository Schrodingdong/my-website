import './App.css';
import MyNavBar from "../component/NavBar";
import AboutMe from "../sections/AboutMe";
import Projects from "../sections/Projects";

function App() {
    return (
        <div className="App">
            <MyNavBar/>
            <AboutMe/>
            <Projects/>
        </div>
    );
}

export default App;
