import React, { Component } from "react";
import Aside from './Aside.js'

class Resume extends Component {
    render(){
        return(
            <div id="Resume">
                <Aside />
                <main>
                    <div>Intro</div>
                    <div>Education</div>
                    <div>Experience</div>
                </main>
                
            </div>
        )
    }
}

export default Resume