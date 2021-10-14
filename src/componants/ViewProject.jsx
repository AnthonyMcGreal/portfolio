import React from 'react';

const ViewProject = ({project}) => {

    console.log(project)
    return (
        <div className="viewProjectContainer">
            <div className="viewProjectContentContainer">
            {project.title}
            </div>
        </div>
    );
};

export default ViewProject;