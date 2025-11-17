// src\App.jsx
import './App.scss'
import './index.css'
import Header from './containers/Header'
import AboutMe from './containers/AboutMe '
import MyLanguageCarousel from './containers/MyLanguageCarousel'
import ProjectCards from './containers/ProjectCards'
import SideProjectCards from './containers/SideProjectCards'
import ContactMe from './containers/ContactMe'
import Footer from './containers/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <MyLanguageCarousel />
      <ProjectCards />
      <SideProjectCards />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App

