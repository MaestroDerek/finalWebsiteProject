
import React from "react";
import {
  Button,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/DarkFooter.js";

export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  },[]);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png").default}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png").default}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png").default}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png").default}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png").default}
          />
          <div className="content-center">
                <h1 className="text-white text-center">
                  Projects
                </h1>
                <br></br>
                <h2 className="text-white text-left">
                  <Button
                    href="https://github.com/esspee39/Project_2_Gumball_Proxy">
                    Gumball Proxy Project
                  </Button>
                  <p>This was an assignment for my OOD class. I worked on a team using a proxy pattern to ping and get status of a gumball machine through Docker.</p>
                </h2>
                <br></br>
                <h2 className="text-white text-left">
                  <Button
                    href="https://github.com/MaestroDerek/discord-randomizer">
                    Discord Randomizer Bot
                  </Button>
                  <p>This was a fun project with a friend. It is simply just a bot that takes in a parameter and returns something random based on that.</p>
                </h2>
                <br></br>
                <h2 className="text-white text-left">
                  <Button
                    href="https://github.com/MaestroDerek/Turnbasedgame">
                    My first ever C++ Project.
                  </Button>
                  <p>This is not impressive at all. It is; however, a good memory first learning C++.</p>
                </h2>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
