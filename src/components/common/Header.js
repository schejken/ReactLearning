import React, {PropTypes} from 'react';
import { Link, IndexLink} from 'react-router';
import BubblePreloader from 'react-bubble-preloader';

const Header = ({loading}) => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active">Courses</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            {" | "}
            <Link to="/devsite" activeClassName="active">DevSite</Link>
            {loading && <BubblePreloader 
                bubble={{ width: '2rem', height: '2rem' }}
                animation={{ speed: 2 }}
                className="your-own-class__if-you-need-it"
                colors={['red', 'blue', 'yellow']}
                />}
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;