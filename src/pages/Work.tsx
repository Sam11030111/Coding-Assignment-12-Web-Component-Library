import Card from "../components/Card";

const Work = () => {
  return (
    <div>
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
    </div>
  );
};

export default Work;
