import React from "react";

export default class Form extends React.Component {
  state = {
    name: "Chayon Mondol",
    email: "chayonmondol111@gmail.com",
    comment: "Give a comment",
    skill: "JavaScript",
    htmlCheck: true,
    jsCheck: true,
    cssCheck:true,
    bsCheck: true,
    rctCheck: true,
    njsCheck: false,
    mdbCheck: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      this.setState({
        name: value,
      });
    } else if (name === "email") {
      this.setState({
        email: value,
      });
    } else if (name === "comment") {
      this.setState({
        comment: value,
      });
    } else if (name === "skill") {
      this.setState({
        skill: value,
      });
    } else if(name === "html") {
      this.setState({
        htmlCheck: e.target.checked,
      });
    } else if(name === "css") {
        this.setState({
          cssCheck: e.target.checked,
        });
    } else if(name === "bs") {
        this.setState({
          bsCheck: e.target.checked,
        });
    } else if(name === "js") {
        this.setState({
          jsCheck: e.target.checked,
        });
    } else if(name === "rct") {
        this.setState({
          rctCheck: e.target.checked,
        });
    } else if(name === "njs") {
        this.setState({
          njsCheck: e.target.checked,
        });
    } else if(name === "mdb") {
        this.setState({
          mdbCheck: e.target.checked,
        });
    }
    
};

submitHandeler = (e) => {
    const { name, email, comment, skill, htmlCheck, cssCheck, bsCheck, jsCheck,rctCheck,njsCheck,mdbCheck } = this.state;
    e.preventDefault();
    console.log(name, email, comment, skill, htmlCheck, cssCheck, bsCheck, jsCheck,rctCheck,njsCheck,mdbCheck );

};

  render() {
    const { name, email, comment, skill, htmlCheck, cssCheck, bsCheck, jsCheck,rctCheck,njsCheck,mdbCheck } = this.state;

    return (
      <div className="formCard">
        <h2>Form Control by React.Component</h2>
        <form action="" onSubmit={this.submitHandeler}>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name : "
            value={name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label htmlFor="comment">Comment for me : </label>
          <br />
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="4"
            value={comment}
            onChange={this.handleChange}
          ></textarea>
          <br />
          <label htmlFor="skill">My Best Skill</label>
          <br />
          <select
            name="skill"
            id="skill"
            value={skill}
            onChange={this.handleChange}
          >
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="Bootstrap">Bootstrap</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="Node JS">Node JS</option>
            <option value="MongoDB">MongoDB</option>
          </select>
          <br /> 
          <h6>My all skill</h6>
          <div  className="checkbox">
            <div className="checkBoxDiv">
                <label htmlFor="html">HTML</label>
                <input type="checkbox" name="html" id="html"  checked={htmlCheck}  onChange={this.handleChange}/>
            </div>
            <div className="checkBoxDiv">
                <label htmlFor="css">CSS</label>
                <input type="checkbox" name="css" id="css" checked={cssCheck}  onChange={this.handleChange}/>
            </div>
            <div className="checkBoxDiv">
                <label htmlFor="bs">BootStrap</label>
                <input type="checkbox" name="bs" id="bs" checked={bsCheck}  onChange={this.handleChange}/>
            </div>
            <div className="checkBoxDiv">
                <label htmlFor="js">JavaScript</label>
                <input type="checkbox" name="js" id="js" checked={jsCheck}  onChange={this.handleChange}/>
            </div>
          </div>
          <div className="checkbox">
            <div className="checkBoxDiv">
                <label htmlFor="rct">React</label>
                <input type="checkbox" name="rct" id="rct" checked={rctCheck}  onChange={this.handleChange}/>
            </div>
            <div className="checkBoxDiv">
                <label htmlFor="njs">Node JS</label>
                <input type="checkbox" name="njs" id="njs" checked={njsCheck}  onChange={this.handleChange}/>
            </div>
            <div className="checkBoxDiv">
                <label htmlFor="mdb">MongoDB</label>
                <input type="checkbox" name="mdb" id="mdb" checked={mdbCheck}  onChange={this.handleChange}/>
            </div>
          </div>

        <input type="submit" value="Submit"/>
        </form>
        <h5>{name}</h5>
        <h5>{email}</h5>
        <h5>{comment}</h5>
        <h5>{skill}</h5>
      </div>
    );
  }
}
