import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    // bind to toggle function in the constructor
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                <NavbarBrand href="/"> Chielstad </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="">
                            Projects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">
                            About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">
                            The Team
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
            </Navbar>
        </div>
        );   
    }
}


export default AppNavbar;
