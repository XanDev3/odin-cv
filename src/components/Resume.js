import React, { Component } from "react";
import Aside from './Aside.js'
import Intro from './Intro.js'
import Education from './Education.js'
import Experience from './Experience.js'
class Resume extends Component {
    render(){
        return(
            <div id="Resume">
                <Aside />
                <main>
                    <Intro></Intro>
                    <Education></Education>
                    <Experience></Experience>
                </main>
                
            </div>
        )
    }
}

export default Resume