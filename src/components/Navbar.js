import React from 'react';
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from 'react-router-dom'


const Navbar = () => {
    const history = useHistory()
    return (
        <div className="header">
            <img className="header__icon"
                src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                alt="airbnb"
                onClick={() => history.push('/')}
            />

            <div className="header__search">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
            </div>


        </div>
    )
}

export default Navbar
