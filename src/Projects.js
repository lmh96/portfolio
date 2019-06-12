import React from "react";

import "./Projects.css";

function Projects(props) {
    return (
        <div className={'projects'} id={props.className}>
            <h1 id={'title'}>
                Projects
            </h1>
            <div id='project-content'>
                {props.myProjects.map(project => (
                    <div className='project'>
                        <img className='projectImg' src={project.image} alt='X'></img>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a className='projectGitBtn' href={project.git} target='__blank'><i class="fas fa-code"></i></a>
                        <a className='projectDeployBtn' href={project.deploy} target='__blank'><i class="fas fa-external-link-alt"></i></a>
                    </div>
                ))}
                <div className='project'>
                    <image className='projectImg'></image>
                    <h2>Test Project</h2>
                    <p>sdfasdf asdf adf asdf asf kqwef eiuvh wfuhv wifuvh wdfhv dwfvhwfuv wduhv wduf v wfuv hwfvuhwfvuwefv  wdfuvhwdfv uwhfv wfv fevuhwefvwf</p>
                    <a className='projectGitBtn' href='google.com' target='__blank'><i class="fas fa-code"></i></a>
                    <a className='projectDeployBtn' href='google.com' target='__blank'><i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Projects;