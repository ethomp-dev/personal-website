import Layout from '../layouts/default'

import Contact from '../components/generic/Contact'
import ScrollButton from '../components/generic/ScrollButton'
import Tile from '../components/generic/Tile'
import ProjectSection from '../components/custom/ProjectSection'

import * as Constants from '../lib/constants'

export default () => (

    <Layout>

        <div className='container'>

            <section className='section is-hero is-centered'>

                <div>

                    <h1>Hi, I'm a designer and developer.</h1>

                    <p className='subtitle is-flex-hidden-mobile'>Focused on creating beautifully crafted web applications with enhanced user experiences</p>

                    <ScrollButton text='Explore Portfolio' />

                </div>

            </section>

            <div id='main'>

                <div id='projects'>

                    <section style={{ paddingTop: '125px' }} className='section'>

                        <span className='eyebrow'>Featured Case Study</span>

                        <div className='flex-container'>

                            <Tile key='unified' isFull data={{
                                id: 'unified',
                                src: '/static/img/shots/unified-full.png',
                                alt: 'Unified',
                                buttonText: 'View Case Study',
                                buttonLink: 'https://www.behance.net/gallery/74961437/Unified-Case-Study'
                            }} />

                        </div>

                        <span style={{ marginTop: '30px' }} className='eyebrow'>Other Works</span>

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
