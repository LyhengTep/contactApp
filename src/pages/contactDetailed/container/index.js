import { connect } from "react-redux";
import DetailedContact from "../components/DetailedContact";
import { thunkGetContactHistory, thunkDeleteContact } from "../reduxThunk";

const mapStateToProps = state => {
  return {
    detailedContact: state.detailed.detailedContact,
    name: state.detailed.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    thunkGetContactHistory: id => dispatch(thunkGetContactHistory(id)),
    thunkDeleteContact: id => dispatch(thunkDeleteContact(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailedContact);
