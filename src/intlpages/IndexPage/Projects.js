import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Slider from '../../components/Slider';
import Frame from '../../components/Frame';
import { Link } from 'gatsby';

const Projects = ({ locale }) => {
    const [runWebGLApp, setRunWebGLApp] = useState(false);

    return (
        <>
            <h2 className="text-h1">
                <FormattedMessage id="index.projects.h1" />
            </h2>
            <h3 className="text-h2">
                <FormattedMessage id="index.projects.h2" />
            </h3>

            <Slider className="slider-modal mt-12">
                <Slider.Content>
                    <Slider.Slide>
                        <Frame
                            className="modal-project"
                            title="Stickman 3D: First Round"
                            showMinimize={false}
                        >
                            <img
                                src="/images/projects/StickMan-3D.jpg"
                                alt="StickMan 3D"
                                className="modal-full modal-bg"
                            />
                            <div className="modal-btn-placement">
                                <div>
                                    <a
                                        href="https://github.com/stanfortonski/StickMan-3D"
                                        className="btn btn-primary btn-shadows btn-chars mb-5"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FormattedMessage id="Download" />
                                    </a>
                                </div>
                            </div>
                            <div className="modal-description-placement">
                                <FormattedMessage id="stickman" />
                                <a
                                    className="anr no-text-shadow"
                                    href="https://stan-fortonski.itch.io/stickman-3d-first-round"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    link
                                </a>
                            </div>
                        </Frame>
                    </Slider.Slide>

                    <Slider.Slide>
                        <Frame
                            className="modal-project"
                            title="Room Viewer WebGL"
                            showMinimize={false}
                        >
                            {runWebGLApp ? (
                                <iframe
                                    src="https://stanfortonski.github.io/examples/webgl-room"
                                    className="modal-full"
                                    title="Room Viewer WebGL"
                                ></iframe>
                            ) : (
                                <>
                                    <img
                                        src="/images/projects/webgl-room.jpg"
                                        alt="WebGL example app"
                                        className="modal-full modal-bg"
                                    />
                                    <div className="modal-btn-placement">
                                        <div>
                                            <button
                                                className="btn btn-primary btn-shadows btn-chars mb-5"
                                                onClick={() => setRunWebGLApp(true)}
                                            >
                                                <FormattedMessage id="Run" />
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </Frame>
                    </Slider.Slide>

                    <Slider.Slide>
                        <Frame
                            className="modal-project"
                            title="Terrain Generator"
                            showMinimize={false}
                        >
                            <img
                                src="/images/projects/Procedural-Terrain-Generator-OpenGL.jpg"
                                alt="Terrain Generator OpenGL"
                                className="modal-full modal-bg"
                            />
                            <div className="modal-btn-placement">
                                <div>
                                    <a
                                        href="https://github.com/stanfortonski/Procedural-Terrain-Generator-OpenGL"
                                        className="btn btn-primary btn-shadows btn-chars mb-5"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FormattedMessage id="Download" />
                                    </a>
                                </div>
                            </div>
                            <div className="modal-description-placement">
                                <FormattedMessage id="terrain-generator" />
                            </div>
                        </Frame>
                    </Slider.Slide>
                </Slider.Content>

                <Slider.Navigation />
            </Slider>

            <Link
                className="btn btn-chars btn-shadows btn-primary mt-20"
                to={`/${locale}/projects`}
            >
                <FormattedMessage id="index.projects.button" />
            </Link>
        </>
    );
};

export default Projects;
