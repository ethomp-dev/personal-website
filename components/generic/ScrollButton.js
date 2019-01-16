import SmoothLink from './SmoothLink'

export default ({ text, styles }) => (

    <span>

        <span style={{ display: 'block', height: '70px' }}>&nbsp;</span>

        <SmoothLink href='#main' className={`button is-centered ${styles}`}>{text}</SmoothLink>

        <span className='bar-spacer'></span>

        <p>Scroll</p>

    </span>

)
