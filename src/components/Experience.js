import React, { Component } from "react";
import uniqid from 'uniqid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

class Experience extends Component {
    constructor(){
        super()
        this.state = { 
        company:'',
        jobTitle:'',
        startDate:'',
        endDate:'',
        location:'',
        description:'',
        edit: false,
        showX: false,
        jobs: [
            {
                id:uniqid(),
                company:'The New Thing',
                jobTitle:'Junior Developer',
                date:'Apr 2018 - June 2020',
                location:'San Diego, CA',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ',
            },
            {
                id:uniqid(),
                company:'The Next Best Thing',
                jobTitle:'Senior Developer',
                date:'July 2020 - Dec 2022',
                location:'San Diego, CA',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ',
            },
        ]
        }
    }
    handleCompanyChange = (e) => {
        this.setState({
            company: e.target.value
        })
    }
    handleJobTitleChange = (e) => {
        this.setState({
            jobTitle: e.target.value
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
    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
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
          jobs: this.state.jobs.filter(job => job.id !== id)
        })
    }
    onExperienceSubmit = (e) => {
        e.preventDefault()
        this.setState({
            jobs: this.state.jobs.concat({
                id:uniqid(),
                company:this.state.school,
                jobTitle:this.state.degree,
                date:this.state.startDate + '-' + this.state.endDate,
                location:this.state.location,
                description:this.state.minor,
                
            }),
            company:'',
            jobTitle:'',
            startDate:'',
            endDate:'',
            location:'',
            description:'',
        })
        this.toggleEdit()
    }
    render(){
        const {
            company,
            jobTitle,
            startDate,
            endDate,
            location,
            description,
            edit,
            showX,
            jobs
        } = this.state
        return(
            <div id="Experience">
                <h2>Experience</h2>
                {edit && 
                    <form
                        id='experience-add'
                        className='edit-form'
                        onSubmit={this.onExperienceSubmit}
                    >
                        <label htmlFor='company-input'>Company</label>
                        <input
                        id='company-input'
                        type='text'
                        value={company}
                        onChange={this.handleCompanyChange}
                        />
                        <label htmlFor='jobTitle-input'>Job Title</label>
                        <input
                        id='jobTitle-input'
                        type='text'
                        value={jobTitle}
                        onChange={this.handleJobTitleChange}
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
                         <label htmlFor='description-input'>Description</label>
                        <input
                        id='description-input'
                        type='text'
                        value={description}
                        onChange={this.handleDescriptionChange}
                        />

                        <div className="btn-div">
                        <button type='submit' className="add-btn">Add Experience</button>
                        <button type='button' className="close-btn" onClick={this.toggleEdit}>
                            Close
                        </button>
                        </div>    
                    </form>
                    }
                <button className='edit-toggle' type='button' onClick={this.toggleEdit}>
                Add
                </button>
                { jobs.map(job => {
                    return(
                        <div 
                            key={job.id} 
                            id="exp-div"
                            onMouseEnter={() => this.setState({ showX: true })}
                            onMouseLeave={() => this.setState({ showX: false })}
                        >
                            <div className='left job-div'>
                                <p className="experience-date">{job.date}</p>
                                <p className="experience-jobTitle">{job.jobTitle}</p>
                            </div>
                            <div className='right job-div'>
                                <p className="experience-company">{job.company}</p>
                                <p className="experience-location">{job.location}</p>
                                <p className="experience-description">{job.description}</p>
                            </div>
                            {showX && (
                                <div className='x-div'>
                                    <FontAwesomeIcon
                                    className='x-mark'
                                    icon={icon({ name: 'xmark', style: 'solid' })}
                                    onClick={() => this.handleRemoval(job.id)}
                                    />
                                </div>
                            )}
                        </div>
                    )
                })

                }
            </div>
        )
    }
}
export default Experience