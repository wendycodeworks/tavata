import React, {Component} from 'react';
import 'bulma';
import 'font-awesome/css/font-awesome.min.css';

class BrowseButton extends Component{
    render(){
        return(
            <div>
                <div className="button is-info is-rounded is-medium">
                    <div>Browse events   </div>
                    <div className="has-text-info">-</div>
                    <i className="fa fa-arrow-right" aria-hidden="true"/>
                </div>
            </div>
        )
    }
}

export default BrowseButton