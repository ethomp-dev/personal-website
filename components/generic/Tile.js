export default ({ data }) => (

    <div className='flex-item tile'>

        <span className='tile-overlay'>

            <p style={{ marginBottom: '20px' }}>{data.alt}</p>

            <a className='button is-outline' href={data.buttonLink} target='_blank'>{data.buttonText}</a>

        </span>

        <img src={data.src} alt={data.alt} />

    </div>

)
