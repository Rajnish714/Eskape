import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/inputs";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    const option = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, option);

    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) {
      return;
    }
  };
  ValidateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorsMessage = this.ValidateProperty(input);
    if (errorsMessage) {
      errors[input.name] = errorsMessage;
    } else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login Form</h1>

        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            errors={errors.username}
          />

          <Input
            name="password"
            value={account.password}
            label="password"
            onChange={this.handleChange}
            errors={errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary ">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
