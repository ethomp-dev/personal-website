import SmoothLink from '../generic/SmoothLink'

export default () => (

    <header>

        <div className='container'>

            <nav className='navbar is-fixed' role='navigation' aria-label='navigation'>

                <ul className='navbar-group'>

                    <li className='navbar-item is-title'>

                        <a href='/'>Elizabeth Thompson</a>

                    </li>

                    <li className='navbar-item is-inline-hidden-mobile'>

                        <a href='https://www.instagram.com/elizabeththompson.me' target='_blank'>
                            <span className='fab fa-instagram'></span>
                        </a>

                    </li>

                    <li className='navbar-item narrow is-inline-hidden-mobile'>

                        <a href='https://www.behance.net/ethomp54' target='_blank'>
                            <span className='fab fa-behance'></span>
                        </a>

                    </li>

                    <li className='navbar-item narrow is-inline-hidden-mobile'>

                        <a href='https://twitter.com/ethomp54' target='_blank'>
                            <span className='fab fa-twitter'></span>
                        </a>

                    </li>

                    <li className='navbar-item narrow is-inline-hidden-mobile'>

                        <a href='https://github.com/ethomp54' target='_blank'>
                            <span className='fab fa-github'></span>
                        </a>

                    </li>

                </ul>

                <ul className='navbar-group is-flex-hidden-mobile'>

                    <li className='navbar-item'>

                        <SmoothLink href='#projects'>Portfolio</SmoothLink>

                    </li>

                    <li className='navbar-item'>

                        <SmoothLink href='#contact'>Contact Me</SmoothLink>

                    </li>

                    <li className='navbar-item'>

                        <a className='button is-outline' href='https://drive.google.com/open?id=1Yr-zv52iWXGUbBZ3sEPJpKQIhBOLH8Kn' target='_blank'>
                            View Resume
                        </a>

                    </li>

                </ul>

                <ul className='navbar-group is-flex-hidden-desktop'>

                    <li className='navbar-item'>

                        <a className='link' href='https://drive.google.com/open?id=1Yr-zv52iWXGUbBZ3sEPJpKQIhBOLH8Kn' target='_blank'>
                            Resume
                        </a>

                    </li>

                </ul>

            </nav>

        </div>

    </header>

)
