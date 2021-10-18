import nc_news_feThumb from '../src/images/nc_news_feThumb.jpg';
import nc_news_beThumb from '../src/images/nc_news_beThumb.jpg';
import waypointThumb from '../src/images/waypointThumb.jpg';
import hangmanThumb from '../src/images/hangmanThumb.jpg';

const nc_news_fe = {
  title: 'NC News Frontend Project',
  shortDescription: 'A small Reddit style news website',
  github: 'https://github.com/AnthonyMcGreal/nc-news-frontend_project',
  site: 'https://loving-jackson-9ef6b2.netlify.app/',
  thumbnail: nc_news_feThumb,
  description:
    'This is my frontend project from the Northcoders course. Its a small, reddit style news website built in React where users can post articles, comments and upvote and downvote on both articles and comments.',
  techStack: 'React.js | axios | CSS | HTML',
};

const nc_news_be = {
  title: 'NC News Backend Project',
  shortDescription: 'Backend set-up for my NC news Project',
  github: 'https://github.com/AnthonyMcGreal/Backend-Project-NC-News',
  site: 'https://news-app-anthony-mcgreal.herokuapp.com/api',
  thumbnail: nc_news_beThumb,
  description:
    'This is my backend project from the Northcoders course. Its a database and API to be used in conjunction with my Northcoders frontend project. Its built following principles of being a RESTful API',
  techStack: 'node-postgres | Express.js | jest',
};

const waypoint = {
  title: 'Waypoint',
  shortDescription:
    'A social tour app to share walks, pictures and descriptions',
  github: 'https://github.com/thick-hollins/waypoint-fe ',
  github2: 'https://github.com/cjpearson85/waypoint-be',
  video: 'https://www.youtube.com/watch?v=rmPnrpoBBiA',
  thumbnail: waypointThumb,
  description:
    'Waypoint was the final project that I and my team of fellow students created at Northcoders. Built from the ground up in 10 days, we wanted to build an app where users could record walks and create "Waypoints" along the way. Waypoints are static points along a route, where pictures and information can be used to bring a walk to life. These routes appear in a "social media" style feed on the homepage for friends and family to see. It was a great opportunity to use a bunch of tech we hadn\'t experienced on the new course before.',
  techStack:
    'React native | Expo | MongoDB | Mongoose | AWS | Node.js | Express.js | Jest',
};

const hangman = {
  title: 'Hangman',
  shortDescription: 'The classic Hangman game',
  github: 'https://github.com/AnthonyMcGreal/Hangman',
  site: 'https://determined-wozniak-87616d.netlify.app/',
  thumbnail: hangmanThumb,
  description:
    'This project started out as a paired programming exercise with another Northcoders student as we learned how to use React. At the end of the two day sprint I felt this was a good application to develop further. I ironed out a few bugs and added a few new features. I also changed the styling to more fully fit a chosen aesthetic. Looking back, it looks a little basic; however, serves as a great reference point on my coding journey.',
  techStack: 'React.js | CSS',
};

export { nc_news_fe, nc_news_be, waypoint, hangman };
