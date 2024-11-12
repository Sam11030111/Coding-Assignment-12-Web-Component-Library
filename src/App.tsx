import "./App.css";
import HeroImage from "./components/HeroImage";
import Card from "./components/Card";
import Label from "./components/Label";
import Text from "./components/Text";

function App() {
  return (
    <div className="App">
      {/* Basic Information */}
      <section>
        <HeroImage
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Hero Image"
          text="Welcome to Hung-Sheng Lee DevOps Portfolio"
        />
      </section>

      {/* Work Section */}
      <section>
        <h2>Work</h2>
        <div className="work-cards">
          <Card
            imageSrc="https://media.istockphoto.com/id/1486721631/photo/e-learning-graduate-certificate-program-concept-businessman-hand-holding-light-bulb-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=3xMByKV9lOp0nMA18OVSwajf81V8ZJTQKzUyw7i4RvI="
            title="Docker"
            description="Coding Assignment 11: Docker File"
            link="https://github.com/Sam11030111/Coding-Assignment-11-Docker-File"
          />
          <Card
            imageSrc="https://media.istockphoto.com/id/1291770278/photo/productivity-takes-a-hands-on-approach.jpg?s=612x612&w=0&k=20&c=hsy-WcU1rilW6AwD_KE9lShPlAZI33OB78JHoXZNRYQ="
            title="Storybook"
            description="Coding Assignment 12: Web Component Library"
            link="https://github.com/Sam11030111/Coding-Assignment-14"
          />
          <Card
            imageSrc="https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpdHxlbnwwfHwwfHx8MA%3D%3D"
            title="GitHub Action"
            description="Coding Assignment 13: UI Component Library"
            link="https://github.com/Sam11030111/Coding-Assignment-14"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skills-category">
            <h3>Languages / Frameworks</h3>
            <div className="skills-tag">
              <Label bgcolor="blue">JavaScript</Label>
              <Label bgcolor="purple">React</Label>
              <Label bgcolor="green">Docker</Label>
            </div>
          </div>
          <div className="skills-category">
            <h3>Tools</h3>
            <div className="skills-tag">
              <Label bgcolor="orange">Storybook</Label>
              <Label bgcolor="teal">GitHub Actions</Label>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section>
        <h2>Resources</h2>
        <div className="resources-cards">
          <Card
            imageSrc="https://images.unsplash.com/photo-1646627927863-19874c27316b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9ja2VyfGVufDB8fDB8fHww"
            title="Docker Official Document"
            description="Comprehensive guide on using Docker for containerization."
            link="https://docs.docker.com/"
          />
          <Card
            imageSrc="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhY3R8ZW58MHx8MHx8fDA%3D"
            title="Storybook for React"
            description="Official tutorial on setting up Storybook for React projects."
            link="https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/"
          />
          <Card
            imageSrc="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2l0aHVifGVufDB8fDB8fHww"
            title="GitHub Actions Official Document"
            description="Documentation for automating workflows with GitHub Actions."
            link="https://docs.github.com/en/actions"
          />
        </div>
      </section>

      {/* Developer Setup Section */}
      <section>
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
          Use Zsh with the Oh My Zsh framework, customized the theme for better
          command visibility.
        </Text>
        <Text color="#333">
          Random
        </Text>
      </section>
    </div>
  );
}

export default App;
