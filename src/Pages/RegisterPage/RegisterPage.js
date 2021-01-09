import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// CUSTOM COMPONENTS
import RegisterForm from '../../components/RegisterForm/RegisterForm';

class RegisterPage extends Component {
  state = {};

  componentDidMount() {
    //dispatch to get all education levels for dropdown
    this.props.dispatch({ type: 'GET_EDUCATION' });
    this.props.dispatch({ type: 'GET_RACE' });
    this.props.dispatch({ type: 'GET_SEX' });
  }

  render() {
    return (
      <div>
        <RegisterForm />
        <center>
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              this.props.history.push('/login');
            }}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisterPage);
