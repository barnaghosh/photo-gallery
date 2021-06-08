import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import './Header.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const mapStateToProps = state => {
  return ({
    token: state.token,
    serverErr: state.serverErr,
    itemsBangla: state.bangladesh,
    itemsIndia: state.india,
    itemsPak: state.pak,
    itemsNepal: state.nepal,
    itemsBhutan: state.bhutan,
    itemsSri: state.sri,
    itemsMal: state.mal,
    serverErr: state.serverErr
  })
}

export class Header extends Component {

  state = {
    isOpen: false,
    dropdownOpen: false
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen

    })
  }
  dropdownToggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {
    let condition = this.props.itemsBangla === null || this.props.itemsIndia === null || this.props.itemsPak === null || this.props.itemsNepal === null || this.props.itemsBhutan === null || this.props.itemsSri === null || this.props.itemsMal === null
    // console.log(this.state.dropdownOpen)
    return (
      <div>
        <Navbar light expand="md" className=' p-2 Navbar' >
          <NavbarBrand>PHOTO GaLLerY</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='Nav' navbar>
              <NavItem >
                <NavLink to='/' tag={Link} active className='pr-4'>Home</NavLink>
              </NavItem>
            
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className='pr-4'>
                  Catagory
              </DropdownToggle>
                <DropdownMenu right style={{ width: '100%' }} >
                  <DropdownItem tag={Link} to="/country/bangladesh" >
                    Bangladesh's spot
                </DropdownItem>
                  <DropdownItem tag={Link} to="/country/india" >
                    India's spot
                </DropdownItem>

                  <DropdownItem tag={Link} to="/country/nepal" >
                    Nepal's spot
                </DropdownItem>

                  <DropdownItem tag={Link} to="/country/bhutan" >
                    Bhutan's spot
                </DropdownItem>
                  <DropdownItem tag={Link} to="/country/srilanka" >
                    Srilanka's spot
                </DropdownItem>
                  <DropdownItem tag={Link} to="/country/maldives" >
                    Maldives's spot
                </DropdownItem>
                  <DropdownItem tag={Link} to="/country/pakistan" >
                    Pakistan's spot
                </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {!condition && this.props.serverErr === null ? this.props.token === null ?
                <><NavItem >
                  <NavLink to='/login' tag={Link} className='pr-4'>Login</NavLink>
                </NavItem>
                  <NavItem >
                    <NavLink to='/signup' tag={Link} className='pr-4'>Sign Up</NavLink>
                  </NavItem></> : <>
                  <NavItem >
                    <NavLink to='/logout' tag={Link} className='pr-4'>Logout</NavLink>
                  </NavItem>

                </> : null
              }

            </Nav>


          </Collapse>

        </Navbar>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Header)
