import React, { useState } from 'react';
function ProjectsContent(props: any) {
    const [projectData] = useState(props.data);
    const images = require('./../img/' + projectData.imageSrc);
    return (
        <article className="project-history">
            <img className="project-history-image" src={images} alt="img" />
            <p className="project-history-title">
                {projectData.title}
            </p>
            <p className="project-history-descrition">
                {projectData.descrition}
            </p>
            <a href={projectData.url} className="project-history-url">
                {projectData.urlTitle}
            </a>
        </article>
    );
}

export default ProjectsContent;