import React from "react";

import "./css/Projects.css";

function Projects(props) {
    return (
        <div className={'mobile-projects'} id={props.className}>
            <h1 id={'mobile-projectTitle'}>
                Projects
            </h1>
            <div id='mobile-project-content'>
                {props.myProjects.map(project => (
                    <div className='mobile-project'>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a className='mobile-projectGitBtn' href={project.git} target='__blank'><i className="fas fa-code"></i></a>
                        <a className='mobile-projectDeployBtn' href={project.deploy} target='__blank'><i className="fas fa-external-link-alt"></i></a>
                    </div>
                ))}
                <div className='mobile-project'>
                    <h2>Test Project</h2>
                    <p>sdfasdf asdf adf asdf asf kqwef eiuvh wfuhv wifuvh wdfhv dwfvhwfuv wduhv wduf v wfuv hwfvuhwfvuwefv  wdfuvhwdfv uwhfv wfv fevuhwefvwf</p>
                    <a className='mobile-projectGitBtn' href='google.com' target='__blank'><i className="fas fa-code"></i></a>
                    <a className='mobile-projectDeployBtn' href='google.com' target='__blank'><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Projects;