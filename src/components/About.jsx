import { useSpring, animated } from 'react-spring';
import AbsoluteWrapper from "./AbsoluteWrapper";
import Footer from './Footer';

const About = () => {

    const enter = useSpring({
        from: { opacity: 0, transform: 'translate(0, 100vh)' },
        to:{ opacity: 0.95, transform: 'translate(0, 0%)' },
        delay: 500,
        config:{ tension: 50,
            friction: 8}
    })

    const fade = useSpring({
        from: { opacity: 0 },
        to:{ opacity: 1 },
        delay:1300,
        config:{duration:1000}
    })

    const fade1 = useSpring({
        from: { opacity: 0 },
        to:{ opacity: 1 },
        delay:2000,
        config:{duration:1200}
    })

    const fade2 = useSpring({
        from: { opacity: 0 },
        to:{ opacity: 1 },
        delay:3500,
        config:{duration:1200}
    })

    const fade3 = useSpring({
        from: { opacity: 0 },
        to:{ opacity: 1 },
        delay:5000,
        config:{duration:1200}
    })


    return (
        <AbsoluteWrapper>
            <div className="aboutContainer">
                <animated.div style={enter} className="aboutContent">
                    <animated.div style={fade}>
                    <h1>About Me</h1>
                    <animated.p style={fade1}>Hello, my name is Anthony McGreal. Im a junior developer based in Bolton, Greater Manchester. After spending 15 years in the hospitality sector, and seeing the vulnerability of workers in that industry exposed during the Covid lockdowns, I decided to turn my curiosity of coding into a fully fledged life goal. I was going to learn to code and pursue it as a profession.</animated.p>
                    <animated.p style={fade2}>So, at the start of 2021 I began my coding journey, learning new skills in my spare time using free online resources. A few months later, I signed up to the Full Stack Developer Bootcamp at Northcoders. 14 weeks, and a completed bootcamp later, and here I am building applications using a variety of tech. </animated.p>
                    <animated.p style={fade3}>Moving forward, I hope to further hone the skills I have acquired and be considered an excellent developer amongst my peers. </animated.p>
                    </animated.div>
            </animated.div>
            </div>
            <Footer />
        </AbsoluteWrapper>
    );
};

export default About;