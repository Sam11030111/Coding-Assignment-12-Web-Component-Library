import Label from "../components/Label";

const Skill = () => {
  return (
    <div>
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
    </div>
  );
};

export default Skill;
