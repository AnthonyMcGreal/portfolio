import AbsoluteWrapper from './AbsoluteWrapper';
import { useSpring, animated } from 'react-spring';
import { useHistory } from 'react-router-dom';
import Footer from './Footer';


const ViewProject = ({project}) => {

    const history = useHistory()

    const fadeBackground = useSpring({
        from: { opacity: 0 },
        to:{ opacity: 0.7 },
        delay:500,
        config:{duration:1000}
    })

    const fadeContent = useSpring({
        from: { opacity: 0 },
        to:{ opacity: 1 },
        delay:1000,
        config:{duration:1000}
    })

    return (
        <AbsoluteWrapper>
        <div className="viewProjectContainer">
            <animated.div style={fadeBackground} className="viewProjectContentContainer">
                <animated.div style={fadeContent} className="viewProjectContent">
                    <h1>{project.title}</h1>
                    <img src={project.thumbnail} alt={`${project.title}`}/>
                    <p>{project.description}</p>
                    <p>Built using : {project.techStack}</p>
                    {project.hasOwnProperty("site")? <a href={`${project.site}`} target="_blank" rel="noreferrer" className="viewProjectLink">Hosted site</a>:null }
                    <a href={`${project.github}`} className="viewProjectLink" target="_blank" rel="noreferrer">{project.title==="Waypoint"? "Backend Github repository":"Github repository"}</a>
                {project.hasOwnProperty("github2")? <a href={`${project.github2}`} target="_blank" rel="noreferrer" className="viewProjectLink">{project.title==="Waypoint"? "Frontend Github repository":"Github repository"}</a>:null }
                    {project.hasOwnProperty("video")? <a href={`${project.video}`} target="_blank" rel="noreferrer" className="viewProjectLink">Presentation video</a>:null }
                    <button onClick={() => history.push('/projects')}>Back to projects</button>
                </animated.div>
            </animated.div>
        </div>
        <Footer />
        </AbsoluteWrapper>
    );
};

export default ViewProject;