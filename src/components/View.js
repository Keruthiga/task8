import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const View = () => {
    return (
        <div className="container">
            <h2 className="text-center">Contact Us</h2>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h3 className='text-warning'>Contact Details</h3>
                        <ul className="list-unstyled">
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} /> Email: contact@example.com
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} /> Phone: (123) 456-7890
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMapMarker} /> Address: 123 Tech Street, Innovation City
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h3 className='text-warning'>Social Media</h3>
                        <ul className="list-unstyled">
                            <li>
                                <FontAwesomeIcon icon={faTwitter} /> Twitter: @example_twitter
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn: /example-linkedin
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faGithub} /> GitHub: /example-github
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <h3 className='text-center text-success'>Sign Up</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-success mt-3" >Sign Up</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default View;
