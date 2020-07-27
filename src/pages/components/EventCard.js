import React, { Component } from 'react';
import 'bulma'

class EventCard extends Component {
    constructor(props) {
        super(props) 
        
    }
    render(){
        return(
            <div className="tile is-ancestor">
                <div className="tile is-vertical is-8">
                    <div className="tile">
                    <div className="tile is-parent is-vertical">
                        <article className="tile is-child notification is-link">
                        <p className="title">Vertical...</p>
                        <p className="subtitle">Top tile</p>
                        </article>
                        <article className="tile is-child notification is-info">
                        <p className="title">...tiles</p>
                        <p className="subtitle">Bottom tile</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-link">
                        <p className="title">Middle tile</p>
                        <p className="subtitle">With an image</p>
                        <figure className="image is-4by3">
                            <img src="#"/>
                        </figure>
                        </article>
                    </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-info">
                            <p className="title">Wide tile</p>
                            <p className="subtitle">Aligned with the right tile</p>
                            <div className="content">
                            
                            </div>
                        </article>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification is-info">
                        <div className="content">
                            <p className="title">Tall tile</p>
                            <p className="subtitle">With even more content</p>
                            <div className="content">
                            
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}

export default EventCard