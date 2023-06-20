import React, { Component } from "react";
import uniqid from 'uniqid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

class Education extends Component {
    constructor(){
        super()
        this.state = {
            school:'',
            degree:'',
            startDate:'',
            endDate:'',
            location:'',
            minor:'',
            gpa:'',
            edit: false,
            showX: false,
            education: [
                {
                    id:uniqid(),
                    school:'The Best University',
                    degree:'M.S. Computer Science',
                    date:'Aug 2021 - April 2023',
                    location:'Los Angeles, CA',
                    minor:'latin',
                    gpa:'4.0',
            }]
        }
    }
    handleSchoolChange = (e) => {
        this.setState({
            school: e.target.value
        })
    }
    handleDegreeChange = (e) => {
        this.setState({
            degree: e.target.value
        })
    }
    handleStartDateChange = (e) => {
        this.setState({
            startDate: e.target.value
        })
    }
    handleEndDateChange = (e) => {
        this.setState({
            endDate: e.target.value
        })
    }
    handleLocationChange = (e) => {
        this.setState({
            location: e.target.value
        })
    }
    handleMinorChange = (e) => {
        this.setState({
            minor: e.target.value
        })
    }
    handleGpaChange = (e) => {
        this.setState({
            gpa: e.target.value
        })
    }
    toggleEdit = () =>{
        this.setState(prevState => ({
            edit: !prevState.edit,
            showX: false,
        }))
    }
    handleRemoval = (id) => {
        this.setState({
          education: this.state.education.filter(edu => edu.id !== id)
        })
    }
    onEducationSubmit = (e) => {
        e.preventDefault()
        this.setState({
            education: this.state.education.concat({
                id:uniqid(),
                school:this.state.school,
                degree:this.state.degree,
                date:this.state.startDate + '-' + this.state.endDate,
                location:this.state.location,
                minor:this.state.minor,
                gpa:this.state.gpa,
            })
        })
        this.toggleEdit()
    }
    render(){
        const {
            school,
            degree,
            startDate,
            endDate,
            location,
            minor,
            gpa,
            edit,
            showX,
            education
        } = this.state

        return(
            <div id="Education">
                <h2>Education</h2>
                {edit && 
                    <form
                        id='education-add'
                        className='edit-form'
                        onSubmit={this.onEducationSubmit}
                    >
                        <label htmlFor='school-input'>School</label>
                        <input
                        id='school-input'
                        type='text'
                        value={school}
                        onChange={this.handleSchoolChange}
                        />
                        <label htmlFor='degree-input'>Degree</label>
                        <input
                        id='degree-input'
                        type='text'
                        value={degree}
                        onChange={this.handleDegreeChange}
                        />
                        <label htmlFor='startDate-input'>Start Date</label>
                        <input
                        id='startDate-input'
                        type='text'
                        placeholder='Month &amp; Year'
                        value={startDate}
                        onChange={this.handleStartDateChange}
                        />
                        <label htmlFor='endDate-input'>End Date</label>
                        <input
                        id='endDate-input'
                        type='text'
                        placeholder='Month &amp; Year'
                        value={endDate}
                        onChange={this.handleEndDateChange}
                        />
                         <label htmlFor='location-input'>Location</label>
                        <input
                        id='location-input'
                        type='text'
                        value={location}
                        onChange={this.handleLocationChange}
                        />
                         <label htmlFor='minor-input'>Minor</label>
                        <input
                        id='minor-input'
                        type='text'
                        value={minor}
                        onChange={this.handleMinorChange}
                        />
                         <label htmlFor='gpa-input'>GPA</label>
                        <input
                        id='gpa-input'
                        type='text'
                        value={gpa}
                        onChange={this.handleGpaChange}
                        />

                        <div className="btn-div">
                        <button type='submit' className="add-btn">Add Education</button>
                        <button type='button' className="close-btn" onClick={this.toggleEdit}>
                            Close
                        </button>
                        </div>    
                    </form>
                    }
                <button className='edit-toggle' type='button' onClick={this.toggleEdit}>
                Add
                </button>
                {education.map(edu =>{
                    return(
                        <div 
                            key={edu.id} 
                            id="edu-info"
                            onMouseEnter={() => this.setState({ showX: true })}
                            onMouseLeave={() => this.setState({ showX: false })}
                        >
                            <div className='left edu-div'>
                                <p className="education-date">{edu.date}</p>
                                <p className="education-degree">{edu.degree}</p>
                            </div>
                            <div className='right edu-div'>
                                <p className="education-school">{edu.school}</p>
                                <p className="education-location">{edu.location}</p>
                                <p className="education-minor">{edu.minor}</p>
                                <p className="education-gpa">{edu.gpa}</p>
                            </div>
                            {showX && (
                                <div className='x-div'>
                                    <FontAwesomeIcon
                                    className='x-mark'
                                    icon={icon({ name: 'xmark', style: 'solid' })}
                                    onClick={() => this.handleRemoval(edu.id)}
                                    />
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Education