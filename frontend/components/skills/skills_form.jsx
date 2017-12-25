import React from "react";
import merge from "lodash/merge";

class SkillsForm extends React.Component {
  constructor(props) {
    super(props);

    console.log("props", this.props);

    let flavor = this.props.flavor

    this.state = {
      flavor,
      skill: {
        name: "",
        user_id: props.user.id
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.formText = this.formText.bind(this);
  }

  formText() {

    console.log(this.props.flavor);

    if (this.props.flavor === "userShow") {
      return (
        <h2>
          Recommend Skill for {this.props.user.username}
        </h2>
      )
    } else {
      return (
        <h2>
          Add a Skill
        </h2>
      )
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.createSkill(this.state.skill).then(() => this.props.history.push("/"))
  }

  update() {
    return (event) => {
      event.preventDefault();
      this.setState({
        skill: merge({}, this.state.skill, {
        "name": event.target.value
      })
    })
  }
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          >

          { this.formText() }

          <input
            type="text"
            placeholder="Add new skill"
            onChange={this.update()}
            />

            <input
              type="submit"
              value="Add"/>
        </form>
      </div>
    )
  }

}
 export default SkillsForm;