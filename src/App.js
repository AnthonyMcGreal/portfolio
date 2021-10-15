import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useState } from 'react';
import ViewProject from './components/ViewProject';

function App() {
  const location = useLocation();
  const [project, setProject] = useState({ test: 'hello' });

  const transitions = useTransition(location, {
    from: { opacity: 1, transform: 'translate(100%, 0)' },
    enter: { opacity: 1, transform: 'translate(0%, 0)' },
    leave: { opacity: 1, transform: 'translate(-100%, 0)' },
  });

  return (
    <div className="pageContainer">
      <Header className="App-header"></Header>
      <div className="appContent">
        {transitions((props, item) => (
          <animated.div style={props} id="animatedDiv">
            <Switch location={item}>
              <Route exact path="/" component={Home} />
              <Route exact path="/aboutMe" component={About} />
              <Route exact path="/contactMe" component={Contact} />
              <Route exact path="/projects">
                <Projects project={project} setProject={setProject} />
              </Route>
              <Route exact path="/viewProject">
                <ViewProject component={ViewProject} project={project} />
              </Route>
            </Switch>
          </animated.div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
