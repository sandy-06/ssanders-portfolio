import React, { useContext } from 'react';
import { DataContext } from '../context/GlobalContext';

const Experience = () => {
    const state = useContext(DataContext);
    const [experience] = state.experience;
    // console.log(experience);





    return (
        <div className="main-container">
            <h2 className="title">
                Experience
            </h2>
            <div className="experience">
                <div className="experience-center">

                    <div className="single-experience" >
                        <p>CEO</p>
                        <p>E and S Services, Inc</p>
                    </div>


                    <div className="single-experience" >
                        <p>Division Sales Leader</p>
                        <p>USHealth Advisors/ Health Markets</p>
                    </div>

                    <div className="single-experience" >
                        <p>Project Manager/Sales Engineer</p>
                        <p>Morgan Design</p>
                    </div>

                    <div className="single-experience" >
                        <p>Vice President</p>
                        <p>Jacobson Construction</p>
                    </div>

                    <div className="single-experience" >
                        <p>Project Engineer</p>
                        <p>USAF Plant Representatives Office @ Boeing</p>
                    </div>

                    <div className="single-experience" >
                        <p>Engineer</p>
                        <p>Boeing Military Division</p>
                    </div>





                </div>
            </div>
        </div>
    )
}

export default Experience
