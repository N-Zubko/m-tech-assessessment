import logo from '../assets/desktop-logo.png'
import heroImage from '../assets/desktop-image.png'

const WelcomePage = () => {
    return (
        <div className="welcome-page-container">
            <img src={logo} alt="Coffee & Co logo" className="logo-image" />

            <img src={heroImage} alt="Coffee & Co" className="hero-image" />
        </div>
    )
}
export default WelcomePage
