import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import {
    Slider,
    SliderContent,
    SliderSlide,
    SliderNavigation,
} from '@/modules/ui/components/Slider';
import { Frame } from '@/modules/ui/components/Frame';
import { useAppContext } from '@/modules/core/contexts/AppContext';
import { ButtonGatsbyLink } from '@/modules/ui/components/Button';

import { Section } from '../Section';

export const ProjectsSection = () => {
    const [runWebGLApp, setRunWebGLApp] = useState(false);
    const { locale } = useAppContext();

    return (
        <Section className="px-0">
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
                                        className="button button--secondary button--chars-and-shadows mb-5"
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
                                                className="button button--secondary button--chars-and-shadows mb-5"
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
                                        className="button button--secondary button--chars-and-shadows mb-5"
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

            <ButtonGatsbyLink
                variant="chars-and-shadows"
                color="secondary"
                className="md:mt-20 mt-10"
                to={`/${locale}/projects`}
            >
                <FormattedMessage id="index.projects.button" />
            </ButtonGatsbyLink>
        </Section>
    );
};
