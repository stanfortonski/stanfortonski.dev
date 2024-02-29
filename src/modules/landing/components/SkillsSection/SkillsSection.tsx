import { FormattedMessage } from 'react-intl';

import { Frame } from '@/modules/ui/components/Frame';
import { ButtonLink } from '@/modules/core/components/ButtonLink';

import { SkillProgressBar as ProgressBar } from '../SkillProgressBar';
import { Section } from '../Section';

export const SkillsSection = () => (
    <Section>
        <h2 className="text-h1">
            <FormattedMessage id="index.skills.h1" />
        </h2>
        <h3 className="text-h2">
            <FormattedMessage id="index.skills.h2" />
        </h3>

        <div className="grid gap-8 grid-cols-1 px-5 mt-12 items-stretch">
            <FrameJavaScript />
            <FramePHP />
            <FrameWebDev />
        </div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 px-5 mt-12 items-stretch">
            <FrameCpp />
            <FramePython />
        </div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-5 mt-12 items-stretch">
            <FrameCSharp />
            <FrameJava />
            <FrameOpenGL />
        </div>
    </Section>
);

export const FrameJavaScript = () => (
    <Frame title="JavaScript / TypeScript" className="h-full" showMinimize={false}>
        <div className="mb-3">
            <span className="text-h6 pr-3">
                <FormattedMessage id="index.skills.experience" />
            </span>
            <ProgressBar procent={95} />
        </div>

        <div className="flex justify-center text-left gap-12 pb-4">
            <ul className="list-arrow">
                <li className="text-h6">
                    <FormattedMessage id="index.skills.level.fluent" />
                </li>
                <li>
                    <ButtonLink className="anr" to="https://reactjs.org" target="_blank">
                        React
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://chakra-ui.com" target="_blank">
                        Chakra UI
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://redux.js.org" target="_blank">
                        Redux
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://vuejs.org" target="_blank">
                        Vue.js
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://vuex.vuejs.org" target="_blank">
                        Vuex
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://jquery.com" target="_blank">
                        jQuery
                    </ButtonLink>
                    <span className="font-bold">&</span>
                    <ButtonLink className="anr" to="https://jqueryui.com" target="_blank">
                        jQuery UI
                    </ButtonLink>
                </li>
            </ul>

            <ul className="list-arrow">
                <li className="text-h6">
                    <FormattedMessage id="index.skills.level.basic" />
                </li>
                <li>
                    <ButtonLink className="anr" to="https://vuetifyjs.com" target="_blank">
                        Vuetify
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://www.gatsbyjs.com" target="_blank">
                        Gatsby
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://nextjs.org" target="_blank">
                        Next.js
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://nodejs.org" target="_blank">
                        Node.js
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://expressjs.com" target="_blank">
                        Express
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://www.apollographql.com" target="_blank">
                        Apollo
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://www.electronjs.org" target="_blank">
                        Electron
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://get.webgl.org" target="_blank">
                        WebGL
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://www.framer.com/motion" target="_blank">
                        Framer Motion
                    </ButtonLink>
                </li>
            </ul>

            <ul className="list-arrow">
                <li className="text-h6">
                    <FormattedMessage id="index.skills.tools" />
                </li>
                <li>
                    <ButtonLink className="anr" to="https://npmjs.com" target="_blank">
                        npm
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://babeljs.io" target="_blank">
                        Babel
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://webpack.js.org" target="_blank">
                        Webpack
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://jestjs.io" target="_blank">
                        Jest
                    </ButtonLink>
                    <span className="font-bold">&</span>
                    <ButtonLink className="anr" to="https://qunitjs.com" target="_blank">
                        QUnit
                    </ButtonLink>
                </li>
            </ul>
        </div>
    </Frame>
);

export const FramePHP = () => (
    <Frame title="PHP" className="h-full" showMinimize={false}>
        <div className="mb-3">
            <span className="text-h6 pr-3">
                <FormattedMessage id="index.skills.experience" />
            </span>
            <ProgressBar procent={95} />
        </div>

        <div className="flex justify-center text-left gap-12 pb-4">
            <ul className="list-arrow">
                <li className="text-h6">
                    <FormattedMessage id="index.skills.level.fluent" />
                </li>
                <li>
                    <ButtonLink className="anr" to="https://laravel.com" target="_blank">
                        Laravel 7/8
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink
                        className="anr"
                        to="https://laravel.com/docs/master/sanctum"
                        target="_blank"
                    >
                        Laravel Sanctum
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink
                        className="anr"
                        to="https://laravel.com/docs/master/fortify"
                        target="_blank"
                    >
                        Laravel Fortify
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink
                        className="anr"
                        to="https://laravel.com/docs/master/homestead"
                        target="_blank"
                    >
                        Laravel Homestead
                    </ButtonLink>
                </li>
            </ul>

            <ul className="list-arrow">
                <li className="text-h6">
                    <FormattedMessage id="index.skills.level.medium" />
                </li>
                <li>
                    <ButtonLink className="anr" to="https://symfony.com" target="_blank">
                        Symfony 5
                    </ButtonLink>
                </li>

                <li className="text-h6">
                    <FormattedMessage id="index.skills.level.basic" />
                </li>
                <li>
                    <ButtonLink className="anr" to="http://socketo.me" target="_blank">
                        Ratchet
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink
                        className="anr"
                        to="https://github.com/PHPMailer/PHPMailer"
                        target="_blank"
                    >
                        PHPMailer
                    </ButtonLink>
                </li>
            </ul>

            <ul className="list-arrow">
                <li className="text-h6">
                    <FormattedMessage id="index.skills.level.episodic" />
                </li>
                <li>
                    <ButtonLink className="anr" to="https://wordpress.org" target="_blank">
                        Wordpress Themes & Plugins
                    </ButtonLink>
                </li>

                <li className="text-h6">
                    <FormattedMessage id="index.skills.tools" />
                </li>
                <li>
                    <ButtonLink className="anr" to="https://phpunit.de" target="_blank">
                        PHPUnit
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://getcomposer.org" target="_blank">
                        Composer
                    </ButtonLink>
                </li>
            </ul>
        </div>
    </Frame>
);

export const FrameWebDev = () => (
    <Frame title="Rest Web Dev" className="h-full" showMinimize={false}>
        <div className="mb-3">
            <span className="text-h6 pr-3">
                <FormattedMessage id="index.skills.experience" />
            </span>
            <ProgressBar procent={90} />
        </div>

        <div className="flex justify-center text-left gap-12 pb-4">
            <ul className="list-arrow">
                <li className="text-h6">
                    <FormattedMessage id="index.skills.level.fluent" />
                </li>
                <li>
                    <span className="font-bold pl-3">REST API</span>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://graphql.org" target="_blank">
                        GraphQL
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://www.w3.org" target="_blank">
                        HTML5 + CSS3
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://getbootstrap.com" target="_blank">
                        Bootstrap 4/5
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://tailwindcss.com" target="_blank">
                        Tailwind CSS
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://sass-lang.com" target="_blank">
                        Sass
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink
                        className="anr"
                        to="https://pl.wikipedia.org/wiki/SQL"
                        target="_blank"
                    >
                        SQL
                    </ButtonLink>
                </li>
            </ul>

            <ul className="list-arrow">
                <li className="text-h6">
                    <FormattedMessage id="index.skills.tools" />
                </li>
                <li>
                    <ButtonLink className="anr" to="https://www.docker.com" target="_blank">
                        Docker
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://www.vagrantup.com" target="_blank">
                        Vagrant
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://www.mysql.com" target="_blank">
                        MySQL
                    </ButtonLink>
                    <span className="font-bold">&</span>
                    <ButtonLink className="anr" to="https://mariadb.org" target="_blank">
                        MariaDB
                    </ButtonLink>
                    <span className="font-bold">&</span>
                    <ButtonLink className="anr" to="https://www.sqlite.org" target="_blank">
                        SQLite
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://analytics.google.com" target="_blank">
                        Google Analytics
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://schema.org" target="_blank">
                        Microdata
                    </ButtonLink>
                    <b>&</b>
                    <ButtonLink className="anr" to="http://microformats.org" target="_blank">
                        Microformats
                    </ButtonLink>
                </li>
            </ul>
        </div>
    </Frame>
);

export const FrameCpp = () => (
    <Frame title="C++" className="h-full" showMinimize={false}>
        <div className="mb-3">
            <span className="text-h6 pr-3">
                <FormattedMessage id="index.skills.experience" />
            </span>
            <ProgressBar procent={70} />
        </div>

        <div className="flex justify-center text-left gap-12 pb-4">
            <ul className="list-arrow">
                <li className="text-h6">
                    <FormattedMessage id="index.skills.level.fluent" />
                </li>
                <li>
                    <ButtonLink className="anr" to="https://www.glfw.org" target="_blank">
                        GLFW
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://glm.g-truc.net" target="_blank">
                        GLM
                    </ButtonLink>
                </li>

                <li className="text-h6">
                    <FormattedMessage id="index.skills.level.basic" />
                </li>
                <li>
                    <ButtonLink className="anr" to="https://www.assimp.org" target="_blank">
                        Assimp
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="ttp://glew.sourceforge.net" target="_blank">
                        GLEW
                    </ButtonLink>
                </li>
            </ul>

            <ul className="list-arrow">
                <li className="text-h6">
                    <FormattedMessage id="index.skills.level.episodic" />
                </li>
                <li>
                    <ButtonLink className="anr" to="https://www.freetype.org" target="_blank">
                        FreeType
                    </ButtonLink>
                </li>

                <li className="text-h6">
                    <FormattedMessage id="index.skills.tools" />
                </li>
                <li>
                    <ButtonLink
                        className="anr"
                        to="https://www.gnu.org/software/gdb"
                        target="_blank"
                    >
                        GDB
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://cmake.org" target="_blank">
                        CMake
                    </ButtonLink>
                </li>
            </ul>
        </div>
    </Frame>
);

export const FramePython = () => (
    <Frame title="Python" className="h-full" showMinimize={false}>
        <div className="mb-3">
            <span className="text-h6 pr-3">
                <FormattedMessage id="index.skills.experience" />
            </span>
            <ProgressBar procent={60} />
        </div>

        <div className="flex justify-center text-left gap-12 pb-4">
            <ul className="list-arrow">
                <li className="text-h6">
                    <FormattedMessage id="index.skills.level.basic" />
                </li>
                <li>
                    <ButtonLink
                        className="anr"
                        to="https://selenium-python.readthedocs.io"
                        target="_blank"
                    >
                        Python Selenium
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink
                        className="anr"
                        to="https://pypi.org/project/PyOpenGL"
                        target="_blank"
                    >
                        PyOpenGL
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink className="anr" to="https://pypi.org/project/PyGLM" target="_blank">
                        PyGLM
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink
                        className="anr"
                        to="https://docs.python.org/3/library/sqlite3.html"
                        target="_blank"
                    >
                        SQLite3
                    </ButtonLink>
                </li>
            </ul>
        </div>
    </Frame>
);

export const FrameCSharp = () => (
    <Frame title="C#" className="h-full" showMinimize={false}>
        <div className="mb-3">
            <span className="text-h6 pr-3">
                <FormattedMessage id="index.skills.experience" />
            </span>
            <ProgressBar procent={23} />
        </div>

        <div className="flex justify-center text-left gap-12 pb-4">
            <ul className="list-arrow">
                <li className="text-h6">
                    <FormattedMessage id="index.skills.level.episodic" />
                </li>
                <li>
                    <ButtonLink className="anr" to="https://unity.com" target="_blank">
                        Unity
                    </ButtonLink>
                </li>
                <li>
                    <ButtonLink
                        className="anr"
                        to="https://docs.microsoft.com/en-us/dotnet/framework/winforms"
                        target="_blank"
                    >
                        Windows Forms
                    </ButtonLink>
                </li>
            </ul>
        </div>
    </Frame>
);

export const FrameJava = () => (
    <Frame title="Java" className="h-full" showMinimize={false}>
        <div className="mb-3">
            <span className="text-h6 pr-3">
                <FormattedMessage id="index.skills.experience" />
            </span>
            <ProgressBar procent={23} />
        </div>

        <div className="flex justify-center text-left gap-12 pb-4">
            <ul className="list-arrow">
                <li className="text-h6">
                    <FormattedMessage id="index.skills.level.basic" />
                </li>
                <li>
                    <ButtonLink
                        className="anr"
                        to="https://docs.oracle.com/javase/8/docs/api/index.html?javax/swing/package-summary.html"
                        target="_blank"
                    >
                        Java Swing
                    </ButtonLink>
                </li>

                <li className="text-h6">
                    <FormattedMessage id="index.skills.level.episodic" />
                </li>
                <li>
                    <ButtonLink className="anr" to="https://developer.android.com" target="_blank">
                        Android
                    </ButtonLink>
                </li>
            </ul>
        </div>
    </Frame>
);

export const FrameOpenGL = () => (
    <Frame title="OpenGL" className="h-full" showMinimize={false}>
        <div className="mb-3">
            <span className="text-h6 pr-3">
                <FormattedMessage id="index.skills.experience" />
            </span>
            <ProgressBar procent={55} />
        </div>

        <div className="flex justify-center text-left gap-12 pb-4">
            <ul className="list-arrow">
                <li className="text-h6">
                    <FormattedMessage id="index.skills.level.basic" />
                </li>
                <li>
                    <ButtonLink
                        className="anr"
                        to="https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)"
                        target="_blank"
                    >
                        GLSL
                    </ButtonLink>
                </li>
            </ul>
        </div>
    </Frame>
);
