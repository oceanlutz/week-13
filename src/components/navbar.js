import React from 'react';

export default class Navbar extends React.Component {
    constructor(props) {
        //using js to toggle collapsed navbar
        //super keyword to call parent constructor
        super(props);
        //set state to false to keep closed until button press
        this.state = { showNav: false };
        this.toggleNav = this.toggleNav.bind(this);
    }
    
    //function to run on navbar button click
    //toggles state on click
    toggleNav() {
        this.setState({ 
            showNav: !this.state.showNav
        })
    }
    //unfortunately the smooth animation is gone
    //that's a sacrifice i'm willing to make for now

    //rendering navbar to be displayed when component is used in body.js
    render() {
        const { showNav } = this.state;

        return (
            <nav className='w-100 navbar fixed-top navbar-expand-lg navbar-dark bg-dark' role='navigation'>
                <h3 className='mr-3 text-light font-italic font-weight-light'>This is a Navbar &#x2728;</h3>
                <button className='navbar-toggler' type='button' onClick={this.toggleNav} 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className={(showNav ? 'show' : '') +' collapse navbar-collapse'} id='navbarNav'>
                    <div className="navbar-nav">
                        <a className="nav-link active p-2" href="#">Home</a>
                        <a className="nav-link p-2" href="#">Some Page</a>
                        <a className="nav-link p-2" href="#">Another Page</a>
                    </div>
                </div>
            </nav>
        )
    }
}