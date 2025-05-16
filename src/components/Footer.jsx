import logo from '../assets/img/logo.svg';

function Footer(){
    return(
    <footer className="footer" id="contacts">
        <section className="footer-description">
            <article className="footer-description__logo">
                <img src={logo} alt="logo" />
                <h2>Planto.</h2>
            </article>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <article className="footer-description__links">
                <a href="https://www.facebook.com/" target="_blank">FB</a>
                <a href="https://x.com/" target="_blank">TW</a>
                <a href="https://ua.linkedin.com/" target="_blank">LI</a>
            </article>
        </section>

        <nav className="footer-nav">
            <h2>Quick Link's</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Type’s Of plant’s</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy</a></li>
            </ul>
        </nav>

    </footer>
    )
}

export { Footer }