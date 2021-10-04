import React from 'react';
import {Carousel} from "react-bootstrap";

const BannerInfo = () => {
    return (
        <div>
            <Carousel className="mx-auto mt-3" variant="dark" style={{height: "60%", width: "90%"}}>
                <Carousel.Item>
                    <img
                        style={{height: "67vh", width: "100%"}}
                        className="d-block img-fluid opacity-75"
                        src="https://demo.createdbycocoon.com/moodle/edumy/14/pluginfile.php/471/block_cocoon_slider_7/slides/4/5.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2 className="text-white">With Adumy, Learning <br/> Never Ends </h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{height: "67vh", width: "100%"}}
                        className="d-block img-fluid opacity-75"
                        src="https://demo.createdbycocoon.com/moodle/edumy/14/pluginfile.php/471/block_cocoon_slider_7/slides/1/1.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2 className="text-white">Learn Remotely From <br/> Anywhere </h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BannerInfo;