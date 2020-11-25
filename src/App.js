import {
  Switch,
  Route,
  Redirect,
  NavLink,
  useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet";

import PageWrapper from "./components/PageWrapper";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import Footer from "./components/Footer";

import "./App.css";

const pathToTitle = new Map([
  ["/", "About"],
  ["/portfolio", "Portfolio"],
  ["/contact", "Contact"],
]);

const projects = [
  {
    title: "My Sports Page",
    description:
      "My first group project. My team came up with the idea for a sports info web app that called on iSports API to return local sports data.",
    links: {
      github: "https://github.com/JackRyanSmith/Group-work",
      deployment: "https://jackryansmith.github.io/Group-work/",
    },
    image: {
      src:
        "https://dannyhoover.github.io/Portfolio/assets/group-project-img.jpg",
      alt: "Sports",
    },
  },
  {
    title: "What's in the Pantry?",
    description:
      "This was my second group project. My team came up with the idea for an app that helps people come up with recipes from items that they have in their pantry.",
    links: {
      github: "https://github.com/dannyhoover/Project-2",
      deployment: "https://project-2-fsbc.herokuapp.com/",
    },
    image: {
      src:
        "https://raw.githubusercontent.com/dannyhoover/Project-2/main/public/app-use.jpg",
      alt: "Recipes",
    },
  },
  {
    title: "Weather App",
    description:
      "This was a homework assignment where I called on the OpenWeather API to display current weather data and display a five day forecast of a city that the user chooses.",
    links: {
      github: "https://github.com/dannyhoover/Weather-Dashboard",
      deployment: "https://dannyhoover.github.io/Weather-Dashboard/",
    },
    image: {
      src: "https://dannyhoover.github.io/Portfolio/assets/weather.img3.jpg",
      alt: "Weather",
    },
  },
  {
    title: "Password Generator",
    description:
      "Generate a random password! Pick your characters, case, and length.",
    links: {
      github: "https://github.com/dannyhoover/Password-Generator",
      deployment: "https://dannyhoover.github.io/Homework3/",
    },
    image: {
      src: "https://dannyhoover.github.io/Portfolio/assets/passwordpic.jpg",
      alt: "Password",
    },
  },
  {
    title: "Calendar App",
    description:
      "A calendar app lets the user put in data for each hour of a normal work day and save the whole schedule.",
    links: {
      github: "https://github.com/dannyhoover/Calendar",
      deployment: "https://dannyhoover.github.io/Calendar/02-Homework/Develop/",
    },
    image: {
      src: "https://dannyhoover.github.io/Portfolio/assets/calendar.img2.jpg",
      alt: "Calendar",
    },
  },
  {
    title: "Devour the Burgers!",
    description:
      "This assignment was all about handlebars and database usage. Users can put whatever burgers they want in the database and all entries can be deleted or moved.",
    links: {
      github: "https://github.com/dannyhoover/Node-Express-Handlebars",
      deployment: "https://dh-node-express-handlebars.herokuapp.com/",
    },
    image: {
      src:
        "https://raw.githubusercontent.com/dannyhoover/Node-Express-Handlebars/main/public/assets/app-start.jpg",
      alt: "Handlebars",
    },
  },
];

function App() {
  const location = useLocation();
  return (
    <>
      <Helmet>
        <title>Danny Hoover - {pathToTitle.get(location.pathname)}</title>
      </Helmet>
      <PageWrapper>
        <Header>
          <NavLink className="nav-link" to="/" exact>
            About
          </NavLink>
          <NavLink className="nav-link" to="/portfolio" exact>
            Portfolio
          </NavLink>
          <NavLink className="nav-link" to="/contact" exact>
            Contact
          </NavLink>
        </Header>
        <Jumbotron className="text-center">
          <h1 className="display-4">{pathToTitle.get(location.pathname)}</h1>
        </Jumbotron>
        <Container>
          <Switch>
            <Route path="/" exact>
              <div className="row">
                <div className="col-md-7">
                  <p>
                    Welcome to my page! My name is Danny Hoover. My favorite
                    things include being a dad, playing video games, and
                    listening to audiobooks. In my picture you'll see my amazing
                    wife Ashley and our daughter Emma. These two are my world.
                  </p>
                  <p>
                    I have a bachelors degree in Sociology from the University
                    of Oregon, my background is in finance and logistics, and
                    current events have led me to pursue a career in coding!
                  </p>
                  <p>
                    Here you'll find some of my projects resulting from this new
                    endeavor!
                  </p>
                  <p>My Links:</p>
                  <p>
                    <a href="https://github.com/dannyhoover" target="_blank">
                      Github
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/daniel-hoover-269278172/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </p>
                </div>
                <div className="col-md-5">
                  <img
                    className="img-thumbnail"
                    src="https://scontent.fhio2-1.fna.fbcdn.net/v/t1.0-9/59818742_1074492842740451_4871043537061281792_n.jpg?_nc_cat=108&ccb=2&_nc_sid=0debeb&_nc_ohc=RnQ0wI9P3-MAX_2lYxX&_nc_ht=scontent.fhio2-1.fna&oh=88deaa313818ef8c28187d0122b89730&oe=5FC218C6"
                    alt="thumbnail"
                  />
                </div>
              </div>
            </Route>
            <Route path="/portfolio" exact>
              <div className="row">
                {projects.map(({ title, description, links, image }, i) => (
                  <div key={i} className="col-6">
                    <div className="card">
                      <img
                        src={image.src}
                        className="card-img-top"
                        alt={image.alt}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <div className="d-flex justify-content-around">
                          <a href={links.github} className="btn btn-primary">
                            GitHub
                          </a>
                          <a
                            href={links.deployment}
                            className="btn btn-primary"
                          >
                            Deployment
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Route>
            <Route path="/contact" exact>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address:</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="exampleInputPassword1">Name:</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                      ></input>
                    </div>
                  </div>
                </div>
              </form>
              <form>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Message:</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </form>
              <button type="button" class="btn btn-primary btn-lg">
                Send Message
              </button>
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Container>
      </PageWrapper>
      <Footer>
        <span>
          {"\u00A9"} Danny Hoover {new Date().getFullYear()}
        </span>
      </Footer>
    </>
  );
}

export default App;
