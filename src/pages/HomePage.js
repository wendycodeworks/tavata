import React, {Component} from 'react';
import AddEvent from './Event/AddEvent';
import NavBar from './components/NavBar'
import 'bulma';


class HomePage extends Component {
    render() {
    return (
        <>
        <NavBar />
        <div> 
        <section class="hero is-fullheight">
                <div class="hero-body is-medium">
                    <div class="container">
                        <h1 class="title is-1">
                            Events near you
                        </h1>
                            <h2 class="subtitle">
                                Your local tech ecosystem at your figure tips
                            </h2>
                    </div>
                </div>
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            Top picks
                        </h1>

                    </div>
                </div>
            </section>
        </div>
        </>
        );
    }
}


export default HomePage;