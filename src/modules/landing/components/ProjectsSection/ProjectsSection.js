import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

import {
    Slider,
    SliderContent,
    SliderSlide,
    SliderNavigation,
} from '@/modules/core/components/Slider';
import { Frame } from '@/modules/core/components/Frame';
import { useAppContext } from '@/modules/core/components/App';

export const ProjectsSection = () => {
    const [runWebGLApp, setRunWebGLApp] = useState(false);
    const { locale } = useAppContext();

    return (
        <>
            <h2 className="text-h1">
                <FormattedMessage id="index.projects.h1" />
            </h2>
            <h3 className="text-h2">
                <FormattedMessage id="index.projects.h2" />
            </h3>

            <Slider className="slider-modal mt-12">
                <SliderContent>
                    <SliderSlide>
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
                    </SliderSlide>

                    <SliderSlide>
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
                    </SliderSlide>

                    <SliderSlide>
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
                    </SliderSlide>
                </SliderContent>

                <SliderNavigation />
            </Slider>

            <Link
                className="btn btn-chars btn-shadows btn-primary md:mt-20 mt-10"
                to={`/${locale}/projects`}
            >
                <FormattedMessage id="index.projects.button" />
            </Link>
        </>
    );
};
