import React from "react";

import "./css/Projects.css";

function Projects(props) {
    return (
        <div className="projects">
            <h1 className="projectsTitle">
                Projects
            </h1>
            <div className="projectsContent">
                {props.myProjects.map(project => (
                    <div className='project'>
                        {props.isMobile ? false : <img className='projectImg' src={project.image} alt='X'></img>}
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a className='projectGitBtn' href={project.git} target='__blank'><i className="fas fa-code"></i></a>
                        <a className='projectDeployBtn' href={project.deploy} target='__blank'><i className="fas fa-external-link-alt"></i></a>
                    </div>
                ))}
                    {/* <div className='project'>
                        <img className='projectImg' src="test" alt="test"></img>
                        <h2>Test Project</h2>
                        <p>sdfasdf asdf adf asdf asf kqwef eiuvh wfuhv wifuvh wdfhv dwfvhwfuv wduhv wduf v wfuv hwfvuhwfvuwefv  wdfuvhwdfv uwhfv wfv fevuhwefvwf</p>
                        <a className='projectGitBtn' href='http://google.com' target='__blank'><i className="fas fa-code"></i></a>
                        <a className='projectDeployBtn' href='http://google.com' target='__blank'><i className="fas fa-external-link-alt"></i></a>
                    </div> */}
            </div>
        </div>
    );
}

export default Projects;