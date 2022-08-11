import React from 'react'
import { teams } from '../../Data/data'


const Team = () => {
    return (
        <section id="team" className="team section-bg">
            <div className="container aos-init aos-animate" data-aos="fade-up">
                <div className="section-title">
                    <h2>Team</h2>
                    <p>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
                        sit in iste officiis commodi quidem hic quas.
                    </p>
                </div>
                <div className="row">
                    {/* <div className="col-lg-6">
                        <div
                            className="member d-flex align-items-start aos-init aos-animate"
                            data-aos="zoom-in"
                            data-aos-delay={100}
                        >
                            <div className="pic">
                                <img
                                    src="assets/img/team/team-1.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="member-info">
                                <h4>Walter White</h4>
                                <span>Chief Executive Officer</span>
                                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                <div className="social">
                                    <a href="">
                                        <i className="ri-twitter-fill" />
                                    </a>
                                    <a href="">
                                        <i className="ri-facebook-fill" />
                                    </a>
                                    <a href="">
                                        <i className="ri-instagram-fill" />
                                    </a>
                                    <a href="">
                                        {" "}
                                        <i className="ri-linkedin-box-fill" />{" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {teams.map((member)=>(
                        <div className="col-lg-6">
                        <div
                            className="member d-flex align-items-start aos-init aos-animate"
                            data-aos="zoom-in"
                            data-aos-delay={100}
                        >
                            <div className="pic">
                                <img
                                    src={member.image}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="member-info">
                                <h4>{member.name}</h4>
                                <span>{member.designation}</span>
                                <p>
                                   {member.content}
                                </p>
                                <div className="social">
                                    <a href="">
                                        <i className="ri-twitter-fill" />
                                    </a>
                                    <a href="">
                                        <i className="ri-facebook-fill" />
                                    </a>
                                    <a href="">
                                        <i className="ri-instagram-fill" />
                                    </a>
                                    <a href="">
                                        {" "}
                                        <i className="ri-linkedin-box-fill" />{" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Team