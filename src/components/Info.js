import React, { Component } from 'react'

class Info extends Component {
  constructor () {
    super()

    this.state = {
      photo: './profile_pic.jpg',
      streetAddress: '',
      cityStateZipAddress: '',
      phone: '',
      email: '',
      website: '',
      linkedin: '',
      edit: false,
      editPhoto: false
    }
  }
  //function to handle edits
  handleStreetAddressChange = (e) => {
    this.setState(prevState => ({
      streetAddress: e.target.value,
    }))
  }
  handleCityStateZipAddressChange = (e) => {
    this.setState(prevState => ({
      cityStateZipAddress: e.target.value,
    }))
  }
  handlePhoneChange = (e) => {
    this.setState(prevState => ({
      phone: e.target.value,
    }))
  }
  handleEmailChange = (e) => {
    this.setState(prevState => ({
      email: e.target.value,
    }))
  }
  handleWebsiteChange = (e) => {
    this.setState(prevState => ({
      website: e.target.value,
    }))
  }
  handleLinkedinChange = (e) => {
    this.setState(prevState => ({
      linkedin: e.target.value,
    }))
  }

  toggleEdit = () => {
    this.setState(prevState => ({
      edit: !prevState.edit,
    }))
  }
  toggleEditPhoto = () => {
    this.setState(prevState => ({
        editPhoto: !prevState.editPhoto
    }))
}

  render () {
    const {
      photo,
      streetAddress,
      cityStateZipAddress,
      phone,
      email,
      website,
      linkedin,
      edit,
      editPhoto
    } = this.state

    let profilePhoto = {
      backgroundImage: 'url(' + photo + ')'
    }
    return (
      <div id='Info'>
        <div className='header'>Resume</div>
        <div
          id='profile-photo'
          style={profilePhoto}
          onClick={this.toggleEditPhoto}
        />
        <button className='edit-toggle' type='button' onClick={this.toggleEdit}>
          Edit
        </button>
        <div className='address'>
          <h2>Address</h2>
          <p>{streetAddress ? streetAddress : '123 Nowhere Ln'}</p>
          <p>{cityStateZipAddress ? cityStateZipAddress : 'City, ST 12345'}</p>
        </div>
        <div className='phone'>
          <h2>Phone</h2>
          <p>{phone ? phone : '888-123-4567'}</p>
        </div>
        <div className='email'>
          <h2>Email</h2>
          <p>{email ? email : 'email@provider.com'}</p>
        </div>
        <div className='online'>
          <h2>Website</h2>
          <p>{website ? website : 'website.com'}</p>
          <p>{linkedin ? linkedin : 'linkedin.com/in/user-name'}</p>
        </div>
        {edit && 
          /* todo edit function to pop out form and inputs */
          <form
            id='intro-edit'
            className='edit-form'
          >
            <label htmlFor='streetAddress'>Address</label>
            <input
              id='streetAddress'
              type='text'
              placeholder='123 Nowhere Ln'
              onChange={this.handleStreetAddressChange}
            />
            <label htmlFor='cityStateZipAddress'>City, State & Zip Code</label>
            <input
              id='cityStateZipAddress'
              type='text'
              placeholder='City, ST 12345'
              onChange={this.handleCityStateZipAddressChange}
            />
            <label htmlFor="phone">Phone</label>
            <input
                id="phone"
                type="text"
                placeholder= '888-123-4567'
                onChange={this.handlePhoneChange}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="text"
                placeholder= 'email@provider.com'
                onChange={this.handleEmailChange}
            />
            <label htmlFor="website">Website</label>
            <input
                id="website"
                type="text"
                placeholder='website.com'
                onChange={this.handleWebsiteChange}
            />
            <label htmlFor="linkedin">LinkedIn Username</label>
            <input
                id="linkedin"
                type="text"
                placeholder= 'linkedin.com/in/user-name'
                onChange={this.handleLinkedinChange}
            />
            <div className="btn-div">
              <button type='button' className="close-btn" onClick={this.toggleEdit}>
                Close Edit
              </button>
            </div>    
          </form>
        }
        { editPhoto &&
          <form
            id='photo-edit'
            className='edit-form'
          >
            <label htmlFor='photo'>Photo URL</label>
            <input
              id='photo'
              type='text'
              onChange={this.handlePhotoChange}
            />
            <button type='button' className="close-btn" onClick={this.toggleEditPhoto}>
              Close Edit
            </button>
          </form>
        }
      </div>
    )
  }
}

export default Info
