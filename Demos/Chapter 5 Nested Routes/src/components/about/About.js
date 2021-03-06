import React from 'react';
import { Route, Link } from 'react-router-dom';
import Faq from './Faq'

const About = ({match}) => (
    <div className="row">
        <h1>Book Reactions</h1>
        <h2>Where you react to books</h2>
        <h3><Link to={match.url + "/faq"}>FAQ</Link></h3>
        <Route path={match.url + "/faq"} component={Faq} />
    </div>
)

export default About;