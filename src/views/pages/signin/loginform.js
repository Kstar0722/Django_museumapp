import React from 'react';
import TextFieldGroup from '../../../shared/components/textfields/TextFieldGroup';
import { connect } from 'react-redux';
import { login } from '../../../actions/authActions';
import {Link} from 'react-router';
import {
    Form, Input, Label, FormGroup, Button, FormText,
    Card, CardBlock
} from 'reactstrap';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      isLoading: false,
      email: '', 
      password: '', 
      screen_width: 1,
      screen_height: 1
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.redirectionToPages = this.redirectionToPages.bind(this);
  }

  isValid() {
    const { errors, isValid } = true;

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  redirectionToPages (){
    if(localStorage.companyId){
      this.context.router.push('/')
    }else{
      this.context.router.push('/company')
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true });

    const values = {
      "user": {
        "email": this.state.email,
        "password": this.state.password
      }, 
      "client": {
        "screen_width":"1", 
        "screen_height":"1"
      }
    }


    this.props.login(values).then(
      (res) => this.redirectionToPages(),
      (err) => this.setState({ errors: 'error', isLoading: false })
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, email, password, isLoading } = this.state;


    return (
      <Form onSubmit={this.onSubmit}>

         <FormGroup className="mb-4">
            <TextFieldGroup
              field="email"
              label="Email"
              value={email}
              onChange={this.onChange}
            />
          </FormGroup>
        
          <FormGroup className="mb-4">

            <TextFieldGroup
              field="password"
              label="Password"
              value={password}
              onChange={this.onChange}
              type="password"
            />
          </FormGroup>
          <FormGroup className="text-right">
              <Link className="btn btn-info" to="/pages/register">Register</Link>{" "}
              <Button color="primary" disabled={isLoading}>Sign In</Button>
          </FormGroup>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { login })(LoginForm);