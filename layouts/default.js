import Head from 'next/head'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import '../static/sass/main.sass'

export default ({ children, meta = {} }) => (

    <div className='has-frame'>

        <Head>

            <meta charSet='utf-8' key='charset' />

            <meta name='viewport' content='width=device-width, initial-scale=1' key='viewport' />

            <title key='title'>{'Elizabeth Thompson' + (meta.title ? ' | ' + meta.title : '')}</title>

            <link rel='icon' type='image/png' href='' />

        </Head>

        <Header />

        <main>{children}</main>

        <Footer />

    </div>

)
