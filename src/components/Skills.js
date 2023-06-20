import React, { Component } from 'react'
import uniqid from 'uniqid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

class Skills extends Component {
  constructor () {
    super()

    this.state = {
      skills: [
        {
          id: uniqid(),
          skill: 'Problem Solving'
        },
        {
          id: uniqid(),
          skill: 'Active-Listening'
        },
        {
          id: uniqid(),
          skill: 'Time Management'
        },
        {
          id: uniqid(),
          skill: 'Detail-Oriented'
        },
        {
          id: uniqid(),
          skill: 'Communication'
        },
        {
          id: uniqid(),
          skill: 'Creative thinking'
        },
        {
          id: uniqid(),
          skill: 'Artistic Eye'
        },
        {
          id: uniqid(),
          skill: 'Adaptability'
        },
        {
          id: uniqid(),
          skill: 'UX/UI'
        },
        {
          id: uniqid(),
          skill: 'Javascript'
        },
        {
          id: uniqid(),
          skill: 'React'
        }
      ],
      skill: '',
      edit: false,
      showX: false
    }
  }

  toggleEdit = () => {
    this.setState(prevState => ({
      edit: !prevState.edit,
      showX: false,
    }))
  }

  handleSkillChange = e => {
    this.setState({
      skill: e.target.value
    })
  }

  onSkillSubmit = e => {
    e.preventDefault()
    this.setState({
      skills: this.state.skills.concat({
        id: uniqid(),
        skill: this.state.skill
      }),
      skill: ''
    })
    this.toggleEdit()
  }

  handleRemoval = id => {
    this.setState({
      skills: this.state.skills.filter(skill => skill.id !== id)
    })
  }

  render () {
    const { skills, skill, edit, showX } = this.state
    return (
      <div id='Skills'>
        <h2>Skills</h2>
        {edit && 
          /* todo edit function to pop out form and inputs */
          <form
            id='skill-add'
            className='edit-form'
            onSubmit={this.onSkillSubmit}
          >
            <label htmlFor='skill'>Skill</label>
            <input
              id='skill-input'
              type='text'
              value={skill}
              onChange={this.handleSkillChange}
            />
            <div className="btn-div">
              <button type='submit' className="add-btn">Add Skill</button>
              <button type='button' className="close-btn" onClick={this.toggleEdit}>
                Close
              </button>
            </div>    
          </form>
        }
        <button className='edit-toggle' type='button' onClick={this.toggleEdit}>
          Add
        </button>
        <ul className='skills-ul'>
          {skills.map(skill => {
            return (
              <li
                className='skill-li'
                key={skill.id}
                onMouseEnter={() => this.setState({ showX: true })}
                onMouseLeave={() => this.setState({ showX: false })}
              >
                {showX && (
                  <div className='x-div'>
                    <FontAwesomeIcon
                      className='x-mark'
                      icon={icon({ name: 'xmark', style: 'solid' })}
                      onClick={() => this.handleRemoval(skill.id)}
                    />
                  </div>
                )}
                <div className='skill-text'>{skill.skill}</div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Skills
