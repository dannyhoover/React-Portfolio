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
    title: "This is a project",
    description: "I really like this project",
    links: {
      github: "http://www.google.com",
      deployment: "http://www.google.com",
    },
    image: {
      src:
        "https://www.smoothstack.com/wp-content/uploads/2018/09/employers-diverse.jpg",
      alt: "The ideal employees",
    },
  },{
    title: "This is a project",
    description: "I really like this project",
    links: {
      github: "http://www.google.com",
      deployment: "http://www.google.com",
    },
    image: {
      src:
        "https://www.smoothstack.com/wp-content/uploads/2018/09/employers-diverse.jpg",
      alt: "The ideal employees",
    },
  },{
    title: "This is a project",
    description: "I really like this project",
    links: {
      github: "http://www.google.com",
      deployment: "http://www.google.com",
    },
    image: {
      src:
        "https://www.smoothstack.com/wp-content/uploads/2018/09/employers-diverse.jpg",
      alt: "The ideal employees",
    },
  },{
    title: "This is a project",
    description: "I really like this project",
    links: {
      github: "http://www.google.com",
      deployment: "http://www.google.com",
    },
    image: {
      src:
        "https://www.smoothstack.com/wp-content/uploads/2018/09/employers-diverse.jpg",
      alt: "The ideal employees",
    },
  },{
    title: "This is a project",
    description: "I really like this project",
    links: {
      github: "http://www.google.com",
      deployment: "http://www.google.com",
    },
    image: {
      src:
        "https://www.smoothstack.com/wp-content/uploads/2018/09/employers-diverse.jpg",
      alt: "The ideal employees",
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
              <p>about</p>
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
                          <a href={links.deployment} className="btn btn-primary">
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
              <p>contact</p>
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
