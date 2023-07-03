import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => {
  const renderLightContainer = () => (
    <div className="home-container-light">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
        alt="home"
        className="home-image"
      />
      <h1 className="home-heading-light">Home</h1>
    </div>
  )

  const renderDarkContainer = () => (
    <div className="home-container-dark">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
        alt="home"
        className="home-image"
      />
      <h1 className="home-heading-dark">Home</h1>
    </div>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <>
            <div className="home-container">
              <Navbar />
              {!isDarkTheme ? renderLightContainer() : renderDarkContainer()}
            </div>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Home

