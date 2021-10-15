import { useSpring, animated } from 'react-spring';
import AbsoluteWrapper from "./AbsoluteWrapper";
import emailIcon from "../images/emailIcon.png";
import linkedIn from "../images/linkedIn.png";
import Footer from './Footer';


const Contact = () => {

    const enter = useSpring({
        from: { opacity: 0},
        to:{ opacity: 0.9 },
        delay: 500
    })

    const fadeDetails = useSpring({
        from: { opacity: 0 },
        to:{ opacity: 1 },
        delay:1100
    })

    const fadeEmailIcon = useSpring({
        from: { opacity: 0 },
        to:{ opacity: 1 },
        delay:2000,
        config:{duration:1000}
    })

    const fadeEmailAddress = useSpring({
        from: { opacity: 0 },
        to:{ opacity: 1 },
        delay:2500,
        config:{duration:1000}
    })

    const fadeLinkedInIcon = useSpring({
        from: { opacity: 0 },
        to:{ opacity: 1 },
        delay:3000,
        config:{duration:1000}
    })

    const fadeLinkedInLink = useSpring({
        from: { opacity: 0 },
        to:{ opacity: 1 },
        delay:3500,
        config:{duration:1000}
    })
    return (
        <AbsoluteWrapper>
            <div className="contactMeContainer">
                <animated.div style={enter} className="contactMeContentBackGround">
                    <animated.div style={fadeDetails} className="contactMeContent">
                    <h1>Contact Me</h1>
                    <p>If you would like to get in touch with me via the following methods:</p>
                    <div className="details">
                        <animated.img style={fadeEmailIcon } className="email" src={emailIcon} alt="email" />
                        <animated.p style={fadeEmailAddress} className="emailAddress">anthonymcgreal@hotmail.co.uk</animated.p>
                        <animated.img style={fadeLinkedInIcon} className="linkedInIcon" src={linkedIn} alt="linked in"/>
                       <animated.a style={fadeLinkedInLink} href="https://www.linkedin.com/in/anthony-mcgreal/" target="_blank" rel="noreferrer" className="linkedInLink"><p className="linkedInLink">linkedin.com/in/anthony-mcgreal</p></animated.a>
                    </div>
                    </animated.div>
            </animated.div>
            </div>
            <Footer />
        </AbsoluteWrapper>
    );
};

export default Contact;