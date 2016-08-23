import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

export default React.createClass({

	onSubmit(e) {
	    e.preventDefault();
	    $.ajax({
	    	url: "https://github.com/login/oauth/access_token",
	    	type: 'POST',
	    	success: function () {
	    		console.log('inside of ajax call');
	    	}
	    })
	},
	  
	render() {
		return (
		  <Navbar>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="#">Jaime Final</a>
		      </Navbar.Brand>
		    </Navbar.Header>
		    <Nav>
		      <NavItem eventKey={1} href="https://github.com/join?source=header-home">Github Sign Up</NavItem>
		      <NavItem eventKey={2} href="http://localhost:8080/#/giphy">Giphy</NavItem>
		      <NavItem eventKey={3} href="#">
		      	<Button bsSize="small" bsStyle='primary' type='submit'>Login with Github</Button>
		      </NavItem>
		    </Nav>
		  </Navbar>
		);
	}
});

