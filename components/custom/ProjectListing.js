export default ({ title, url, codeUrl }) => (

    <div style={{ fontSize: '24px', marginBottom: '15px', display: 'inline-flex', flexDirection: 'space-between' }}>

        <span style={{ flexGrow: '1', marginRight: '40px', textAlign: 'left' }}>
            {title}
        </span>

        <a style={{ marginRight: '10px' }} className='link is-primary' href={url} target='_blank'>
            View Website
        </a>

        {/*<span>/</span>

        <a style={{ marginLeft: '10px' }} className='link' href={codeUrl} target='_blank'>
            Source Code
        </a>*/}

    </div>

)
