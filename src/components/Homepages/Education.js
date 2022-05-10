import React, { useContext } from 'react';
import { DataContext } from '../context/GlobalContext';







const Education = () => {
    const state = useContext(DataContext);
    const [education] = state.education;
    // console.log(education);





    return (
        <div className="main-container">
            <div className="education">
                <h2 className="title">Education</h2>

                <div className="education-center">
                    <div className="single-education">
                        <h4> University Of Arizona</h4>
                        <p> Certificate program in Full Stack Web Development</p>

                    </div>
                    <div className="single-education">
                        <h4> University Of Washington</h4>
                        <p> Bachelor of Science Mechanical Engineering</p>

                    </div>
                    <div className="single-education">
                        <h4> University Of Utah</h4>
                        <p> Bachelor of Science Anthropology</p>

                    </div>
                    <div className="single-education">
                        <h4> University Of California @ Berkeley</h4>
                        <p> Undergraduate Studies in Engineering and Anthropology</p>

                    </div>
                </div>



            </div>
        </div>

    )
};

export default Education
