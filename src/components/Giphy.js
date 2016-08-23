import React from 'react'
import Button from 'react-bootstrap/lib/Button';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

export default React.createClass({

  getGiphy: function (data) {
  	var urlApi = "http://api.giphy.com/v1/stickers/trending?api_key=dc6zaTOxFJmzC";
  	$.ajax({
  		url: urlApi,
  		success:function(data) {
  			console.log('success call');
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
		      <NavItem eventKey={1} href="#">
		      	<Button bsSize="small" bsStyle='primary' type='submit'>Call Giphy's</Button>
		      </NavItem>
		    </Nav>
		 </Navbar>
    )
  }
})

