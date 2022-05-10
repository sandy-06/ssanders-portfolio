
import React, { useContext } from 'react';
import Baby from '../../images/baby-aid.png';
import employee from '../../images/employee-tracker.png';
import notetaker from '../../images/notetaker.png';
import show from '../../images/show-finder.png';
import { DataContext } from '../context/GlobalContext';


const Projects = () => {
    const state = useContext(DataContext);
    const [projects] = state.projects


    return (
        <div className="main-container">
            <div className="projects">
                <h2 className="title">Projects</h2>
                <div className="projects-center">





                    <div className="single-project" >
                        <div className="single-project-img">
                            <img src={Baby} alt="" />
                        </div>

                        <div className="single-project-info">
                            <h3>Baby-Aid</h3>
                            <p>Baby Aid was created to allow parents with children newly born to 18,
                                be able to have a safe environment to ask questions and receive answers from other experienced parents..</p>
                            <p>Built by Brad Litman, Jennifer Lucas and Sandra Sanders deployed https://babyaid.herokuapp.com/</p>
                        </div>
                    </div>



                    <div className="single-project" >
                        <div className="single-project-img">
                            <img src={notetaker} alt="" />
                        </div>

                        <div className="single-project-info">
                            <h3>Notetaker</h3>
                            <p>An online note taking application to allow you to track notes and projects wherever you go.</p>
                            <p>https://ssnote-taker.herokuapp.com/notes</p>
                        </div>
                    </div>



                    <div className="single-project" >
                        <div className="single-project-img">
                            <img src={employee} alt="" />
                        </div>

                        <div className="single-project-info">
                            <h3>Employee-Tracker</h3>
                            <p>Built a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.</p>
                            <p>Not Deployed</p>
                        </div>
                    </div>


                    <div className="single-project" >
                        <div className="single-project-img">
                            <img src={show} alt="" />
                        </div>

                        <div className="single-project-info">
                            <h3>Show-Finder</h3>
                            <p>A quick way to find concerts around you for artists similar to those you love!</p>
                            <p>Built by Sophia Barrett, Sandra Sanders, Shad Pike</p>
                            <p>https://sophiabarrett.github.io/show-finder/</p>
                        </div>
                    </div>


                </div>

            </div>
        </div>

    )
}

export default Projects;