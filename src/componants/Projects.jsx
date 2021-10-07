import { useSpring, animated } from 'react-spring';
import AbsoluteWrapper from "./AbsoluteWrapper";

const Projects = () => {

    const enterLeft = useSpring({
        from: { opacity: 0, transform: 'translate(-100vw, 0)' },
        to:{ opacity: 0.9, transform: 'translate(0, 0%)' },
        delay: 500,
        config:{ tension: 30,
            friction: 5}
    })

    const enterBottom = useSpring({
        from: { opacity: 0, transform: 'translate(0, 100vh)' },
        to:{ opacity: 0.9, transform: 'translate(0, 0%)' },
        delay: 700,
        config:{ tension: 120,
            friction: 6}
    })

    const enterBottom2 = useSpring({
        from: { opacity: 0, transform: 'translate(0, 100vh)' },
        to:{ opacity: 0.9, transform: 'translate(0, 0%)' },
        delay: 1000,
        config:{ tension: 50,
            friction: 5}
    })

    const enterRight = useSpring({
        from: { opacity: 0, transform: 'translate(100vw, 0)' },
        to:{ opacity: 0.9, transform: 'translate(0, 0%)' },
        delay: 800,
        config:{ tension: 30,
            friction: 5}
    })
    return (
        <AbsoluteWrapper>
            <div className="projectsContainer">
                <div className="projectsContentContainer">
               <animated.div style={enterLeft} className="projectBox"></animated.div>
               <animated.div style={enterBottom} className="projectBox"></animated.div>
               <animated.div style={enterBottom2} className="projectBox"></animated.div>
               <animated.div style={enterRight} className="projectBox"></animated.div>

                </div>
           </div>
        </AbsoluteWrapper>
       
    );
};

export default Projects;