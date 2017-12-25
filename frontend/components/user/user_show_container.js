import { connect } from "react-redux";
import { fetchUser } from "../../actions/users_actions";
import { fetchSkill, endorseSkill } from "../../actions/skills_actions";
import UserShow from "./user_show";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users[ownProps.match.params.userId],
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    endorseSkill: (endorsement) => dispatch(endorseSkill(endorsement)),
    fetchSkills: () => dispatch(fetchSkills()),
    fetchSkill: (id) => dispatch(fetchSkill(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow)