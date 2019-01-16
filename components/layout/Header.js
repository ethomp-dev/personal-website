import SmoothLink from '../generic/SmoothLink'

export default () => (

    <header>

        <div className='container'>

            <nav className='navbar is-fixed' role='navigation' aria-label='navigation'>

                <ul className='navbar-group'>

                    <li className='navbar-item is-title'>

                        <a href='/'>Elizabeth Thompson</a>

                    </li>

                </ul>

                <ul className='navbar-group is-hidden-mobile'>

                    <li className='navbar-item'>

                        <SmoothLink href='#projects'>Projects</SmoothLink>

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

            </nav>

        </div>

    </header>

)
