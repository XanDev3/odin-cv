import React, { Component } from 'react'

class Info extends Component {
  constructor () {
    super()

    this.state = {
      photo: 'getEncryptedUrl',
      streetAddress: '',
      cityStateZipAddress: '',
      phone: '',
      email: '',
      website: '',
      linkedin: '',
      edit: false,
      editPhot: false
    }
  }
  //function to handle edits

  render () {
    const {
      photo,
      address1,
      address2,
      phone,
      email,
      website,
      linkedin,
      edit,
      editPhoto
    } = this.state

    return (
      <div id='Info'>
        <div className='header'>Resume</div>
        
      </div>
    )
  }
}

export default Info
