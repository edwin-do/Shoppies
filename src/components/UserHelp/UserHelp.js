import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserHelp = (props) => {
    const [help, setHelp] = useState(false);

    const helpHandler = () => setHelp(!help);

    return (
    <div className="text-right" >
        <button className="btn btn-link" onClick={helpHandler}>
            Need Help? <FontAwesomeIcon icon={"info-circle"} />
        </button>
        <div className="text-center">
            {help ? <div>
                <p>Type in the search bar to find your favourite movies</p>
                <p>Use the " + " to add the movie on the nomination list.</p>
                <p>Use the " x " to remove your nominations or clear the entire list with the "clear list" button </p>
                <p>There is a limit of 5 movie nominations</p> 
                </div>

            : null}
        </div>
    </div>)
}

export default UserHelp;