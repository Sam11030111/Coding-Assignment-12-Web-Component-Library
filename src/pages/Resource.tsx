import Card from "../components/Card";

const Resource = () => {
  return (
    <div>
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
    </div>
  );
};

export default Resource;
