import React from "react";
import "./App.css";
import HeroImage from "./components/HeroImage";
import Work from "./pages/Work";
import Skill from "./pages/Skill";
import Resource from "./pages/Resource";
import Text from "./components/Text";

function App() {
  const pathname = window.location.pathname;

  let content;

  switch (pathname) {
    case "/work":
      content = <Work />;
      break;
    case "/skill":
      content = <Skill />;
      break;
    case "/resource":
      content = <Resource />;
      break;
    default:
      content = (
        <section>
          <HeroImage
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Hero Image"
            text="Welcome to Hung-Sheng Lee DevOps Portfolio"
          />

          {/* Work Section */}
          <h2>
            <a href="/work">Work</a>
          </h2>

          {/* Skill Section */}
          <h2>
            <a href="/skill">Skill</a>
          </h2>

          {/* Resource Section */}
          <h2>
            <a href="/resource">Resource</a>
          </h2>

          {/* Developer Setup Section */}
          <h2>Developer Setup</h2>
          <Text fontSize="18px" fontWeight="bold">
            VSCode Setup
          </Text>
          <Text color="#333">
            Use the Prettier and ESLint plugins for consistent code formatting.
          </Text>

          <Text fontSize="18px" fontWeight="bold">
            Terminal Setup
          </Text>
          <Text color="#333">
            Use Zsh with the Oh My Zsh framework, customized the theme for
            better command visibility.
          </Text>
        </section>
      );
  }

  return <div className="App">{content}</div>;
}

export default App;
