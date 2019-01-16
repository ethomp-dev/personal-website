import React from 'react'
import * as emailjs from 'emailjs-com'

export default class extends React.Component {
    state = {
        messageSent: false
    }

    sendMessage = (event) => {
        event.preventDefault()

        emailjs.sendForm('mailgun', 'default_template', '#contact', 'user_TWRacgx9Ehp29CUQuIy2d')
            .then((response) => {
                this.setState({ messageSent: true })
            }, (err) => {
                console.log('FAILED...', err)
            })

        event.target.reset()
    }

    render () {
        return (

            <form id='contact' onSubmit={(e) => this.sendMessage(e)}>

                <div className='field'>

                    <input name='name' type='text' placeholder='Full Name' />

                </div>

                <div className='field'>

                    <input name='org' type='text' placeholder='Company' />

                </div>

                <div className='field'>

                    <input name='email' type='text' placeholder='Email Address' />

                </div>

                <div className='field'>

                    <textarea name='comment' rows='3' placeholder='Type your message here...'></textarea>

                </div>

                <div className='field'>

                    <input type='submit' value='Send Message' className='button' />

                </div>

                {this.state.messageSent ?

                    <div className='field'>

                        <p>Message sent successfully!</p>

                    </div>

                : null}

            </form>

        )
    }
}