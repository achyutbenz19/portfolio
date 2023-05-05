const Skills = () => {
    return (
      <div className="skills">
        <h1>MY EXPERTISE</h1>
        <table>
          <tr>
            <td><img src={require("./logos/python-512.png")} alt="Coding-Logo" className="Coding-Logo"/>Backend</td>
            <td><img src={require("./logos/react-logo.png")} alt="React-Logo" className="React-Logo"/>Frontend</td>
            <td><img src={require("./logos/data-logo.png")} alt="Data-Logo" className="Data-Logo"/>AI</td>
          </tr>
          <tr>
            <td>Experienced in Python, C++, VisualBasic, Javascript & QBASIC.</td>
            <td>Passionate about UX/UI design with competency in React, HTML & CSS.</td>
            <td>Minoring in Data Science with knowledge about Deep Learning & SQL.</td>
          </tr>
        </table>
      </div>
    );
  }
  
  export default Skills;
  