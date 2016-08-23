import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import 'bootstrap/less/bootstrap.less';
import '../styles/signin.css';

var SignIn = React.createClass({

	onSubmit(e) {
	    e.preventDefault();
	    console.log('Clicked');
	},
	  
	render() {
		return (
		  <form className="form-signin" onSubmit={this.onSubmit} action="">
		    <Button bsSize="large" bsStyle='primary' type='submit'>Log in with Github</Button>
		  </form>
		);
	}
});


ReactDOM.render(
  <div>
    <SignIn />
  </div>
  , document.getElementById('login'));