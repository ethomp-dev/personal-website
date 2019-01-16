import Link from 'next/link'

export default ({ index, content, isReversed }) => (

    <section className={`section is-hero ${index !== 0 ? 'has-bar' : null}`}>

        <div className={`columns ${isReversed ? 'is-reversed' : null}`}>

            <div className='column'>

                <p className='eyebrow'>
                    <span>Case Study {content.caseNumber}</span>
                    <span className='is-light'> | {content.caseTotal}</span>
                </p>

                <h2 className={`has-text-${content.brand}`}>{content.title}</h2>

                <br />

                <p style={{ fontSize: '22px' }}>{content.description}</p>

                <div style={{ marginTop: '40px' }}>&nbsp;</div>

                <a href={content.buttonLink} target='_blank' className={`button is-${content.brand}`}>{content.buttonText}</a>

            </div>

            <div className='column'>

                <img style={{ marginTop: '34px', width: '100%' }} src={content.imageUrl} alt={content.imagePlaceholder} />

            </div>

        </div>

    </section>

)
