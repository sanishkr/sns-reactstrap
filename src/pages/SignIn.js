import React, { Component } from "react";
import {
	Container,
	Col,
	Form,
	FormGroup,
	FormText,
	FormFeedback,
	Label,
	Input,
	Button
} from "reactstrap";
// import "./App.css";

class SignIn extends Component {
	constructor(){
		super();
		this.state = {
			validate: {
				emailState: false,
			},
			email: '',
		}
	}
	validateEmail(e) {
		const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const { validate } = this.state;
		if (emailRex.test(e.target.value)) {
			validate.emailState = "has-success";
		} else {
			validate.emailState = "has-danger";
		}
		this.setState({ validate });
	}
	submitForm(e) {
		e.preventDefault();
		console.log(`Email: ${this.state.email}`);
	}
	render() {
		return (
			<Container className="App">
				<h2>Sign In</h2>
				<Form className="form">
					<Col>
						<FormGroup>
							<Label>Username</Label>
							<Input
								type="email"
								name="email"
								id="exampleEmail"
								placeholder="myemail@email.com"
								onBlur={(e) => {this.validateEmail(e)}}
								onChange={e => this.setState({email: e.target.value})}
								valid={this.state.validate.emailState === "has-success"}
								invalid={this.state.validate.emailState === "has-danger"}
							/>
							<FormText>Your username is most likely your email.</FormText>
							<FormFeedback valid>
								That's a tasty looking email you've got there.
							</FormFeedback>
							<FormFeedback invalid='true'>
								Uh oh! Looks like there is an issue with your email. Please
								input a correct email.
							</FormFeedback>
						</FormGroup>
					</Col>
					<Col>
						<FormGroup>
							<Label for="examplePassword">Password</Label>
							<Input
								type="password"
								name="password"
								id="examplePassword"
								placeholder="********"
							/>
						</FormGroup>
					</Col>
					<Button onClick={e => this.submitForm(e)}>Submit</Button>
				</Form>
			</Container>
		);
	}
}

export default SignIn;
