import React, {Component} from 'react';
import AddEvent from './Event/AddEvent';
import NavBar from './components/NavBar'
import 'bulma';


class HomePage extends Component {
    render() {
    return (
        <>
        <NavBar />
        <div> Hello World </div>
        </>
        );
    }
}


export default HomePage;