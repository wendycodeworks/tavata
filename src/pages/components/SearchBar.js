import React, {Component} from 'react'
import 'bulma'

class SearchBar extends Component {

    render(){
    return(
        <div>
            <div class="field is-grouped">
                    <p class="control is-expanded">
                        <input class="input" type="text" placeholder="Search events"/>
                    </p>
                    <p class="control">
                        <a class="button is-info">
                        Search
                        </a>
                    </p>
            </div>
        </div>
    )
    }
}

export default SearchBar