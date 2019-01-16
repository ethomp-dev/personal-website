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

            <link rel='icon' type='image/png' href='/static/img/favicon.png' />

            <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.6.3/css/all.css' integrity='sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/' crossOrigin='anonymous' />

        </Head>

        <Header />

        <main>{children}</main>

        <Footer />

    </div>

)
