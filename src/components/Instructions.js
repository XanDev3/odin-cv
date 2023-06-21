import React, { Component } from "react";

class Instructions extends Component {
    constructor() {
        super()
    
        this.state = {
            show: true
        }
    }

    showInstructions = () => {
        this.setState(prevState => ({
            show: !prevState.show
        }))
    }

    render() {
        return (
            <div>
                {this.state.show &&
                    <div id="Instructions">
                        <div className="container">
                            <h2>Instructions</h2>
                            <ul>
                                <li>Hover over the areas of the Resume to find Edit, Add, and Remove buttons</li>
                                <li>Edit your information in the form fields in the upper left and submit your edits</li>
                                <li>Add your Skills, Education, and Experience </li>
                                <li>Click on X buttons to remove any of those items</li>
                                {/* <li>When your done editing, use <code>CTRL</code> + <code>P</code> (<code>CMND</code> + <code>P</code> on a Mac) to print your resume to pdf</li> */}
                            </ul>

                            <button
                                type="button"
                                onClick={this.showInstructions}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default Instructions