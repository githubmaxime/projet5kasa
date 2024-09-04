// IMPORTS
import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

// PAGES
import Home from './pages/Home/Home';
import Error from '.layouts/pages/Error/Error';
import Location from '.layouts/pages/Location/Location';
import About from '.layouts/pages/About/About';

// LAYOUTS
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';

// COMPONENTS


// GLOBAL STYLES
import media from './style/media'

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Monteserat', sans-serif;
    }
`
const Contenair = styled.div`
  width: 70%;  
  margin: 0 auto;
  @media ${media.mobile} {
    width: 95%;
 }
  `



function App() {
  return (
    <>
    <Contenair>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>


    </Contenair>
    <Footer />
    </>
  );
}