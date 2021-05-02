import PropTypes from 'prop-types'
import React from 'react'



const About = ({title}) => {
    return (
        <div>
                <h1 style= {{color: 'red', backgroundColor: 'black'}}> {title} </h1>
        </div>
    )


};

About.defaultProps= {
   title: "Task Tracker"
};

About.propTypes = {
    title: PropTypes.string.isRequired,
}


export default About 