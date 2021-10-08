import { useSpring, animated } from 'react-spring';
import AbsoluteWrapper from "./AbsoluteWrapper";
import { nc_news_fe, nc_news_be, waypoint, hangman } from '../projects';

const Projects = () => {

    const enterLeft = useSpring({
        from: { opacity: 0, transform: 'translate(-100vw, 0)' },
        to:{ opacity: 0.95, transform: 'translate(0, 0%)' },
        delay: 500,
        config:{ tension: 30,
            friction: 5}
    })

    const enterBottom = useSpring({
        from: { opacity: 0, transform: 'translate(0, 100vh)' },
        to:{ opacity: 0.95, transform: 'translate(0, 0%)' },
        delay: 700,
        config:{ tension: 120,
            friction: 6}
    })

    const enterBottom2 = useSpring({
        from: { opacity: 0, transform: 'translate(0, 100vh)' },
        to:{ opacity: 0.95, transform: 'translate(0, 0%)' },
        delay: 1000,
        config:{ tension: 50,
            friction: 5}
    })

    const enterRight = useSpring({
        from: { opacity: 0, transform: 'translate(100vw, 0)' },
        to:{ opacity: 0.95, transform: 'translate(0, 0%)' },
        delay: 800,
        config:{ tension: 30,
            friction: 5}
    })
    return (
        <AbsoluteWrapper>
            <div className="projectsContainer">
                <div className="projectsContentContainer">
               <animated.div style={enterLeft} className="projectBox">
                   <div className="projectContent">
                   <h1>{nc_news_fe.title}</h1>
                   <img src={nc_news_fe.thumbnail} alt="nc news frontend homepage"/>
                   <p>{nc_news_fe.description}</p>
                   </div>
               </animated.div>
               <animated.div style={enterBottom} className="projectBox">
               <div className="projectContent">
               <h1>{nc_news_be.title}</h1>
                   <img src={nc_news_be.thumbnail} alt="nc news backend homepage"/>
                   <p>{nc_news_be.description}</p>
               </div>
               </animated.div>
               <animated.div style={enterBottom2} className="projectBox">
               <div className="projectContent">
               <h1>{waypoint.title}</h1>
                   <img src={waypoint.thumbnail} alt="waypoint homepage"/>
                   <p>{waypoint.description}</p>
               </div>
               </animated.div>
               <animated.div style={enterRight} className="projectBox">
               <div className="projectContent">
               <h1>{hangman.title}</h1>
                   <img src={hangman.thumbnail} alt="hangman homepage"/>
                   <p>{hangman.description}</p>
               </div>
               </animated.div>

                </div>
           </div>
        </AbsoluteWrapper>
       
    );
};

export default Projects;