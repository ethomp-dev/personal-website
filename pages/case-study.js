import React from 'react'
import { withRouter } from 'next/router'
import marked from 'marked'
import axios from 'axios'

import Layout from '../layouts/default'

import ScrollButton from '../components/generic/ScrollButton'
import * as Constants from '../lib/constants'

export default withRouter(
    class extends React.Component {
        state = {
            project: Constants.PROJECTS.find(project => project.id === this.props.router.query.id),
            markdown: ''
        }

        componentDidMount () {
            axios.get(this.state.project.caseStudy)
                .then(({ data }) => {
                    this.setState({
                        markdown: marked(data)
                    })
                })
        }

        render () {
            const { project, markdown } = this.state

            return (

                <Layout>

                    <style global jsx>{`
                        body::before,
                        body::after {
                            background: ${project.hex};
                        }
                        .has-frame::before,
                        .has-frame::after {
                            background: ${project.hex};
                        }
                        .footer {
                            background: ${project.hex};
                        }
                    `}</style>

                    <div className='container'>

                        <section className='section is-hero is-centered'>

                            <div>

                                <p className='eyebrow'>
                                    <span>Case Study {'0' + project.number}</span>
                                    <span className='is-light'> | {'0' + Constants.NUM_PROJECTS}</span>
                                </p>

                                <h1 className={`has-text-${project.brand}`}>{project.titleAlt}</h1>

                                <p className='subtitle' style={{ color: '#808080' }}>{project.description}</p>

                                <ScrollButton text='Read More' styles={`is-${project.brand}`} />

                            </div>

                        </section>

                        <div id='main'>

                            <section className='section'>

                                <div className='content' dangerouslySetInnerHTML={{ __html: markdown }}></div>

                                <div style={{ marginTop: '100px' }}>&nbsp;</div>

                            </section>

                        </div>

                    </div>

                </Layout>

            )
        }
    }
)
