import React, { Component } from "react";


class Intro extends Component {
    constructor(){
        super()
        this.state = {
            name:'',
            title:'',
            profile:'',
            edit: false
        }
    }
    handleNameChange = (e) => {
        this.setState(prevState => ({
            name: e.target.value,
        }))
    }
    handleTitleChange = (e) => {
        this.setState(prevState => ({
            title: e.target.value,
        }))
    }
    handleProfileChange = (e) => {
        this.setState(prevState => ({
            profile: e.target.value,
        }))
    }
    toggleEdit = () => {
        this.setState(prevState => ({
          edit: !prevState.edit,
        }))
      }
    render() {
        const {
            name,
            title,
            profile,
            edit
        } = this.state
        return (
            <div id="Intro">
                <button className='edit-toggle' type='button' onClick={this.toggleEdit}>
                Edit
                </button>
                <h1>{name ? name : 'Your name'}</h1>
                <p className="title">{title ? title: "Job Title"}</p>
                <h2>Profile</h2>
                <p className="profile">{profile ? profile : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
                {edit &&
                    <form
                    id='intro-edit'
                    className='edit-form'
                    >
                     <label htmlFor='name'>Your name</label>
                     <input
                       id='name'
                       type='text'
                       placeholder={name ? name : 'Your name'}
                       onChange={this.handleNameChange}
                     />
                     <label htmlFor='title'>Your job title</label>
                     <input
                       id='title'
                       type='text'
                       placeholder={title ? title : 'Title'}
                       onChange={this.handleTitleChange}
                     />
                     <label htmlFor='profile'>Your intro</label>
                     <textarea
                       id='profile'
                       rows="4"
                       cols="2"
                       placeholder={profile ? profile : 'Profile Introduction'}
                       onChange={this.handleProfileChange}
                     />
                     <button type='button' className="close-btn" onClick={this.toggleEdit}>
                       Close Edit
                     </button>
                   </form>
                }
            </div>
        )
    }

}

export default Intro;