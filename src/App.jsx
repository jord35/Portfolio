
import './App.scss'
import Header from './containers/header'
import AboutMe from './containers/aboutMe'
import MyLanguageCarousel from './containers/MyLanguageCarousel'
import ProjectCards from './containers/ProjectCards'
import SideProjectCards from './containers/SideProjectCards'
import ContactMe from './containers/contactMe'
import Footer from './containers/footer'

function App() {


  return (
    <>
      <Header />
      <AboutMe />
      <MyLanguageCarousel />
      <ProjectCards />
      <SideProjectCards />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App

