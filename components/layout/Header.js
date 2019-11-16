import SmoothLink from '../generic/SmoothLink'

import * as CONSTANTS from '../../constants'

export default () => (

    <header>

        <div className='container'>

            <nav className='navbar is-fixed' role='navigation' aria-label='navigation'>

                <ul className='navbar-group'>

                    <li className='navbar-item is-title'>

                        <a href='/'>
                            <span>Elizabeth</span>
                            <span className='is-inline-hidden-small'>&nbsp;Thompson</span>
                        </a>

                    </li>

                    <li className='navbar-item is-inline-hidden-mobile'>

                        <a href={CONSTANTS.PROFILES.INSTAGRAM} target='_blank' title='Instagram profile'>
                            <span className='fab fa-instagram' aria-hidden></span>
                        </a>

                    </li>

                    <li className='navbar-item narrow is-inline-hidden-mobile'>

                        <a href={CONSTANTS.PROFILES.DRIBBBLE} target='_blank' title='Dribbble profile'>
                            <span className='fab fa-dribbble' aria-hidden></span>
                        </a>

                    </li>

                    <li className='navbar-item narrow is-inline-hidden-mobile'>

                        <a href={CONSTANTS.PROFILES.BEHANCE} target='_blank' title='Behance profile'>
                            <span className='fab fa-behance' aria-hidden></span>
                        </a>

                    </li>

                    <li className='navbar-item narrow is-inline-hidden-mobile'>

                        <a href={CONSTANTS.PROFILES.TWITTER} target='_blank' title='Twitter profile'>
                            <span className='fab fa-twitter' aria-hidden></span>
                        </a>

                    </li>

                    <li className='navbar-item narrow is-inline-hidden-mobile'>

                        <a href={CONSTANTS.PROFILES.GITHUB} target='_blank' title='Github profile'>
                            <span className='fab fa-github' aria-hidden></span>
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

                        <a className='button is-outline' href={CONSTANTS.PROFILES.RESUME} target='_blank'>
                            View Resume
                        </a>

                    </li>

                </ul>

                <ul className='navbar-group is-flex-hidden-desktop'>

                    <li className='navbar-item'>

                        <a className='link' href={CONSTANTS.PROFILES.RESUME} target='_blank'>
                            Resume
                        </a>

                    </li>

                </ul>

            </nav>

        </div>

    </header>

)
