import Layout from '../layouts/default'

import Contact from '../components/generic/Contact'
import ScrollButton from '../components/generic/ScrollButton'
import Tile from '../components/generic/Tile'

import * as Constants from '../lib/constants'

export default () => (

    <Layout>

        <div className='container'>

            <section className='section is-hero is-centered'>

                <div>

                    <h1 className='title is-1'>Hi, I'm a designer and developer.</h1>

                    <p className='subtitle is-flex-hidden-mobile'>Focused on creating web applications with enhanced user experience, currently looking for a full-time role.</p>

                    <ScrollButton text='Explore Portfolio' />

                </div>

            </section>

            <div id='main'>

                <div id='projects'>

                    <section style={{ paddingTop: '125px' }} className='section'>

                        <div className='flex-container'>

                            {Constants.PROJECTS.map((project) => (

                                <Tile key={project.id} data={project} />

                            ))}

                        </div>

                    </section>

                </div>

                <section style={{ paddingTop: '150px', paddingBottom: '100px' }} className='section'>

                    <h2 className='has-text-centered'>Contact Me</h2>

                    <br />

                    <Contact />

                </section>

            </div>

        </div>

    </Layout>

)
