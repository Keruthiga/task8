import React from 'react';

const Benefits = () => {
    return (
        <div className="container d-flex align-items-center justify-content-center">
            <div className="row">
                <div className="col-md-12 text-center mt-5">
                    <h2>Benefits of Choosing CodeSpace</h2>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h3 className='text-warning'>Expertise</h3>
                        <p className='text-success'>
                            Our team of experienced professionals brings deep industry knowledge and technical expertise to every project. You can rely on our guidance and innovative solutions to overcome challenges and seize opportunities.
                        </p>

                        <h3 className='text-warning'>Custom Solutions</h3>
                        <p className='text-success'>
                            We understand that every business is unique. That's why we offer tailor-made solutions that align with your specific needs and objectives. Our customized approach ensures that you get the most out of our services.
                        </p>

                        <h3 className='text-warning'>Innovation</h3>
                        <p className='text-success'>
                            Technology is constantly evolving, and staying ahead is crucial. CodeSpace stays at the forefront of innovation, providing you with cutting-edge solutions that give you a competitive edge in the market.
                        </p>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h3 className='text-warning'>Efficiency</h3>

                        <p className='text-success'>
                            Our solutions are designed to streamline processes, enhance productivity, and optimize workflows. By leveraging technology, we help you save time and resources, allowing you to focus on what truly matters.
                        </p>

                        <h3 className='text-warning'>Scalability</h3>
                        <p className='text-success'>
                            As your business grows, our solutions grow with you. We build scalable systems that can accommodate increased demands and changing requirements, ensuring your technology supports your expansion.
                        </p>

                        <h3 className='text-warning'>Support</h3>
                        <p className='text-success'>
                            Our commitment to your success doesn't end with project delivery. We provide ongoing support and maintenance to ensure that your technology solutions continue to perform at their best and adapt to your evolving needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;

