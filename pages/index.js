import Layout from '../layouts/default'

import ProjectSection from '../components/custom/ProjectSection'
import ProjectListing from '../components/custom/ProjectListing'
import ScrollButton from '../components/generic/ScrollButton'
import Contact from '../components/generic/Contact'
import * as Constants from '../lib/constants'

export default () => (

    <Layout>

        <div className='container'>

            <section className='section is-hero is-centered'>

                <div>

                    <h1 className='title is-1'>Hi, I'm a designer and developer.</h1>

                    <p className='subtitle is-hidden-mobile'>Studying Human-Computer Interaction at UNC Charlotte and working as a frontend developer, I'm a tenacious problem solver and love to learn new things</p>

                    <ScrollButton text='Explore Projects' />

                </div>

            </section>

            <div id='main'>

                <div id='projects'>

                    {Constants.PROJECTS.map((project, index) => (

                        <ProjectSection
                            index={index}
                            key={project.id}
                            isReversed={index % 2 !== 0 ? true : false}
                            content={{
                                caseNumber: '0' + project.number,
                                caseTotal: '0' + Constants.NUM_PROJECTS,
                                ...project
                            }}
                        />

                    ))}

                    <section className='section is-hero has-bar is-centered is-hidden-mobile'>

                        <div>

                            <h2>Other Web Projects</h2>

                            <br />

                            <div style={{ display: 'inline-flex', flexDirection: 'column' }}>

                                <ProjectListing
                                    title="CCI Dean's Ambassador Program"
                                    url='https://ccidap.com'
                                    codeUrl='https://github.com/ccidap/dap-website'
                                />

                                <ProjectListing
                                    title='ABC Tracker'
                                    url='http://abctracker.org'
                                    codeUrl=''
                                />

                                <ProjectListing
                                    title='Soft Touch Flowers'
                                    url='http://softtouchflowersandgifts.com'
                                    codeUrl=''
                                />

                            </div>

                        </div>

                    </section>

                </div>

                <section style={{ paddingTop: '250px', paddingBottom: '100px' }} className='section has-bar'>

                    <h2 className='has-text-centered'>Contact Me</h2>

                    <br />

                    <Contact />

                </section>

            </div>

        </div>

    </Layout>

)
