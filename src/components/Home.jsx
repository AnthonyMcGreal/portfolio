import AbsoluteWrapper from "./AbsoluteWrapper";
import profilePic from "../images/profilePic.jpg"
import { useSpring, animated } from 'react-spring';


const Home = () => {

    const enter1 = useSpring({
        from: { opacity: 0, transform: 'translate(0, 100vh)' },
        to:{ opacity: 1, transform: 'translate(0, 0%)' },
        delay: 500,
        config:{ tension: 60,
            friction: 7}
    })

    const enter2 = useSpring({
        from: { opacity: 0, transform: 'translate(0, 100vh)' },
        to:{ opacity: 1, transform: 'translate(0, 0%)' },
        delay: 600,
        config:{ tension: 60,
            friction: 7}
    })

    const enter3 = useSpring({
        from: { opacity: 0, transform: 'translate(0, 100vh)' },
        to:{ opacity: 1, transform: 'translate(0, 0%)' },
        delay: 700,
        config:{ tension: 60,
            friction: 7}
    })

    const enterRight = useSpring({
        from: { opacity: 1, transform: 'translate(100vw, 0)' },
        to:{ opacity: 1, transform: 'translate(0, 0%)' },
        delay: 800,
        config:{ tension: 30,
            friction: 6}
    })

    return (
        <AbsoluteWrapper>
           <div className="homeContainer">
               <div className="homeContentContainer">
                   <div className="homeText">
                   <animated.div style={enter1} id="animatedHeading">
                    <h1>Hi,</h1> 
                    </animated.div>
                   <animated.div style={enter2} id="animatedHeading">
                    <h1>I'm Ant.</h1> 
                    </animated.div>
                    <animated.p style={enter3}><strong>I'm a junior developer looking for employment. Explore my website and get in touch if you like what you see.</strong></animated.p>
                    </div>
                    <animated.img style={enterRight} className="profilePicture" src={profilePic} alt="Profile"/>
                </div>
           </div>
        </AbsoluteWrapper>
    );
};

export default Home;