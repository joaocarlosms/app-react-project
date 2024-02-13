import './styles.jsx'
import { AttrebuteContainer, MainContainer, ImageWrapper, GlassContainer, LogoContainer, UlNavLinks, ContentContainer, MainContent } from './styles.jsx'; 

function App() {
  const textH2 = "Hey! 🤟 \n It's João Carlos";
  const textP = "Welcome in my Portfolio";
  
  return (
    <MainContainer>
      <GlassContainer>
        <nav className='navbar'>
          <LogoContainer><a href='#'>João Carlos</a></LogoContainer>
          <UlNavLinks>
            <li className='nav-lins'><a href='#'>Home</a></li>
            <li className='nav-lins'><a href='#'>About</a></li>
            <li className='nav-lins'><a href='#'>My Projects</a></li>
          </UlNavLinks>
        </nav>
        <ContentContainer>
          <MainContent>
            <h2>{textH2}</h2>
            <p>{textP}</p>
            <button>Get Started</button>
          </MainContent>
          <ImageWrapper>
            <img src='/image.png' alt=''/>
            <AttrebuteContainer>
              <a href='https://github.com/AsmrProg-YT/Personal-Portfolios/blob/master/Personal%20Portfolio%20%2303/image.png?raw=true'>
                Image by FreepiK
              </a>
            </AttrebuteContainer>
          </ImageWrapper>
        </ContentContainer>
      </GlassContainer>
    </MainContainer>
  )
}

export default App
