import logo from '../assets/desktop-logo.png'
import heroImage from '../assets/desktop-image.png'

const WelcomePage = () => {
    return (
        <div className="welcome-page-container">
            <img src={logo} alt="Coffee & Co logo" className="logo-image" />

            <section className="hero-image">
                <img src={heroImage} alt="Coffee & Co background" />
            </section>
        </div>
    )
}
export default WelcomePage
