import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ProgressBar } from '../ProgressBar';
import { Frame } from '../../../core/components/Frame';

export const Skills = ({ locale }) => {
    return (
        <>
            <h2 className="text-h1">
                <FormattedMessage id="index.skills.h1" />
            </h2>
            <h3 className="text-h2">
                <FormattedMessage id="index.skills.h2" />
            </h3>

            <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-5 mt-12 items-stretch">
                <Frame title="JavaScript" className="h-full" showMinimize={false}>
                    <div className="mb-3">
                        <span className="text-h6 pr-3">
                            <FormattedMessage id="Experience" />
                        </span>
                        <ProgressBar procent={95} />
                    </div>

                    <ul>
                        <li className="text-h6">
                            <FormattedMessage id="Fluent" />
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://reactjs.org"
                                className="anr"
                                target="_blank"
                            >
                                React
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://redux.js.org"
                                className="anr"
                                target="_blank"
                            >
                                Redux
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://vuejs.org"
                                className="anr"
                                target="_blank"
                            >
                                Vue.js
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://vuex.vuejs.org/"
                                className="anr"
                                target="_blank"
                            >
                                Vuex
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://vuetifyjs.com/"
                                className="anr"
                                target="_blank"
                            >
                                Vuetify
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://jquery.com"
                                className="anr"
                                target="_blank"
                            >
                                jQuery
                            </a>
                            <b>&</b>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://jqueryui.com"
                                className="anr"
                                target="_blank"
                            >
                                jQuery UI
                            </a>
                        </li>

                        <li className="text-h6 mt-3">
                            <FormattedMessage id="Basic" />
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://www.gatsbyjs.com"
                                className="anr"
                                target="_blank"
                            >
                                Gatsby
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://nextjs.org"
                                className="anr"
                                target="_blank"
                            >
                                Next.js
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://nodejs.org/"
                                className="anr"
                                target="_blank"
                            >
                                Node.js
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://expressjs.com/"
                                className="anr"
                                target="_blank"
                            >
                                Express
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://graphql.org"
                                className="anr"
                                target="_blank"
                            >
                                GraphQL
                            </a>
                            <b>&</b>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://www.apollographql.com"
                                className="anr"
                                target="_blank"
                            >
                                Apollo
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://www.electronjs.org"
                                className="anr"
                                target="_blank"
                            >
                                Electron
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://get.webgl.org"
                                className="anr"
                                target="_blank"
                            >
                                WebGL
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://www.framer.com/motion/"
                                className="anr"
                                target="_blank"
                            >
                                Framer Motion
                            </a>
                        </li>

                        <li className="text-h6 mt-3">
                            <FormattedMessage id="Tools" />
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://npmjs.com"
                                className="anr"
                                target="_blank"
                            >
                                npm
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://babeljs.io"
                                className="anr"
                                target="_blank"
                            >
                                Babel
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://webpack.js.org"
                                className="anr"
                                target="_blank"
                            >
                                Webpack
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://jestjs.io"
                                className="anr"
                                target="_blank"
                            >
                                Jest
                            </a>
                            <b>&</b>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://qunitjs.com"
                                className="anr"
                                target="_blank"
                            >
                                QUnit
                            </a>
                        </li>
                    </ul>
                </Frame>

                <Frame title="PHP" className="h-full" showMinimize={false}>
                    <div className="mb-3">
                        <span className="text-h6 pr-3">
                            <FormattedMessage id="Experience" />
                        </span>
                        <ProgressBar procent={95} />
                    </div>

                    <ul>
                        <li className="text-h6">
                            <FormattedMessage id="Fluent" />
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://laravel.com"
                                className="anr"
                                target="_blank"
                            >
                                Laravel 7/8
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://laravel.com/docs/master/sanctum"
                                className="anr"
                                target="_blank"
                            >
                                Laravel Sanctum
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://laravel.com/docs/master/fortify"
                                className="anr"
                                target="_blank"
                            >
                                Laravel Fortify
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://laravel.com/docs/master/homestead"
                                className="anr"
                                target="_blank"
                            >
                                Laravel Homestead
                            </a>
                        </li>

                        <li className="text-h6 mt-3">
                            <FormattedMessage id="Medium" />
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://symfony.com"
                                className="anr"
                                target="_blank"
                            >
                                Symfony 5
                            </a>
                        </li>

                        <li className="text-h6 mt-3">
                            <FormattedMessage id="Basic" />
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="http://socketo.me"
                                className="anr"
                                target="_blank"
                            >
                                Ratchet
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://github.com/PHPMailer/PHPMailer"
                                className="anr"
                                target="_blank"
                            >
                                PHPMailer
                            </a>
                        </li>

                        <li className="text-h6 mt-3">
                            <FormattedMessage id="Episodic" />
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://wordpress.org"
                                className="anr"
                                target="_blank"
                            >
                                Wordpress Themes & Plugins
                            </a>
                        </li>

                        <li className="text-h6 mt-3">
                            <FormattedMessage id="Tools" />
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://phpunit.de"
                                className="anr"
                                target="_blank"
                            >
                                PHPUnit
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://getcomposer.org"
                                className="anr"
                                target="_blank"
                            >
                                Composer
                            </a>
                        </li>
                    </ul>
                </Frame>

                <Frame title="C++" className="h-full" showMinimize={false}>
                    <div className="mb-3">
                        <span className="text-h6 pr-3">
                            <FormattedMessage id="Experience" />
                        </span>
                        <ProgressBar procent={70} />
                    </div>

                    <ul>
                        <li className="text-h6">
                            <FormattedMessage id="Fluent" />
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://www.glfw.org"
                                className="anr"
                                target="_blank"
                            >
                                GLFW
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://glm.g-truc.net"
                                className="anr"
                                target="_blank"
                            >
                                GLM
                            </a>
                        </li>

                        <li className="text-h6 mt-3">
                            <FormattedMessage id="Basic" />
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://www.assimp.org"
                                className="anr"
                                target="_blank"
                            >
                                Assimp
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="http://glew.sourceforge.net"
                                className="anr"
                                target="_blank"
                            >
                                GLEW
                            </a>
                        </li>

                        <li className="text-h6 mt-3">
                            <FormattedMessage id="Episodic" />
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://www.freetype.org"
                                className="anr"
                                target="_blank"
                            >
                                FreeType
                            </a>
                        </li>

                        <li className="text-h6 mt-3">
                            <FormattedMessage id="Tools" />
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://www.gnu.org/software/gdb"
                                className="anr"
                                target="_blank"
                            >
                                GDB
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://cmake.org"
                                className="anr"
                                target="_blank"
                            >
                                CMake
                            </a>
                        </li>
                    </ul>
                </Frame>

                <Frame title="TypeScript" className="h-full" showMinimize={false}>
                    <div className="mb-3">
                        <span className="text-h6 pr-3">
                            <FormattedMessage id="Experience" />
                        </span>
                        <ProgressBar procent={50} />
                    </div>
                </Frame>

                <Frame title="Python" className="h-full" showMinimize={false}>
                    <div className="mb-3">
                        <span className="text-h6 pr-3">
                            <FormattedMessage id="Experience" />
                        </span>
                        <ProgressBar procent={60} />
                    </div>

                    <ul>
                        <li className="text-h6">
                            <FormattedMessage id="Basic" />
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://selenium-python.readthedocs.io"
                                className="anr"
                                target="_blank"
                            >
                                Python Selenium
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://pypi.org/project/PyOpenGL"
                                className="anr"
                                target="_blank"
                            >
                                PyOpenGL
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://pypi.org/project/PyGLM"
                                className="anr"
                                target="_blank"
                            >
                                PyGLM
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://docs.python.org/3/library/sqlite3.html"
                                className="anr"
                                target="_blank"
                            >
                                SQLite3
                            </a>
                        </li>
                    </ul>
                </Frame>

                <Frame title="C#" className="h-full" showMinimize={false}>
                    <div className="mb-3">
                        <span className="text-h6 pr-3">
                            <FormattedMessage id="Experience" />
                        </span>
                        <ProgressBar procent={23} />
                    </div>

                    <ul>
                        <li className="text-h6">
                            <FormattedMessage id="Episodic" />
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://unity.com"
                                className="anr"
                                target="_blank"
                            >
                                Unity
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://docs.microsoft.com/en-us/dotnet/framework/winforms"
                                className="anr"
                                target="_blank"
                            >
                                Windows Forms
                            </a>
                        </li>
                    </ul>
                </Frame>

                <Frame title="Java" className="h-full" showMinimize={false}>
                    <div className="mb-3">
                        <span className="text-h6 pr-3">
                            <FormattedMessage id="Experience" />
                        </span>
                        <ProgressBar procent={23} />
                    </div>

                    <ul>
                        <li className="text-h6">
                            <FormattedMessage id="Basic" />
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://docs.oracle.com/javase/8/docs/api/index.html?javax/swing/package-summary.html"
                                className="anr"
                                target="_blank"
                            >
                                Java Swing
                            </a>
                        </li>

                        <li className="text-h6 mt-3">
                            <FormattedMessage id="Episodic" />
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://developer.android.com"
                                className="anr"
                                target="_blank"
                            >
                                Android
                            </a>
                        </li>
                    </ul>
                </Frame>

                <Frame title="WebDev & others" className="h-full" showMinimize={false}>
                    <div className="mb-3">
                        <span className="text-h6 pr-3">
                            <FormattedMessage id="Experience" />
                        </span>
                        <ProgressBar procent={90} />
                    </div>

                    <ul>
                        <li className="text-h6">
                            <FormattedMessage id="Fluent" />
                        </li>
                        <li>
                            <b>REST API</b>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://www.w3.org"
                                className="anr"
                                target="_blank"
                            >
                                HTML5 + CSS3
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://getbootstrap.com"
                                className="anr"
                                target="_blank"
                            >
                                Bootstrap 4/5
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://coreui.io"
                                className="anr"
                                target="_blank"
                            >
                                CoreUI
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://tailwindcss.com"
                                className="anr"
                                target="_blank"
                            >
                                Tailwind CSS
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://sass-lang.com"
                                className="anr"
                                target="_blank"
                            >
                                Sass
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://pl.wikipedia.org/wiki/SQL"
                                className="anr"
                                target="_blank"
                            >
                                SQL
                            </a>
                        </li>

                        <li className="text-h6 mt-3">
                            <FormattedMessage id="Tools" />
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://www.docker.com"
                                className="anr"
                                target="_blank"
                            >
                                Docker
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://www.vagrantup.com"
                                className="anr"
                                target="_blank"
                            >
                                Vagrant
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://www.mysql.com"
                                className="anr"
                                target="_blank"
                            >
                                MySQL
                            </a>
                            <b>&</b>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://mariadb.org"
                                className="anr"
                                target="_blank"
                            >
                                MariaDB
                            </a>
                            <b>&</b>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://www.sqlite.org/"
                                className="anr"
                                target="_blank"
                            >
                                SQLite
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://analytics.google.com"
                                className="anr"
                                target="_blank"
                            >
                                Google Analytics
                            </a>
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://schema.org"
                                className="anr"
                                target="_blank"
                            >
                                Microdata
                            </a>
                            <b>&</b>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="http://microformats.org"
                                className="anr"
                                target="_blank"
                            >
                                Microformats
                            </a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <b>Blender</b>
                        </li>
                    </ul>
                </Frame>

                <Frame title="OpenGL" className="h-full" showMinimize={false}>
                    <div className="mb-3">
                        <span className="text-h6 pr-3">
                            <FormattedMessage id="Experience" />
                        </span>
                        <ProgressBar procent={55} />
                    </div>

                    <ul>
                        <li className="text-h6">
                            <FormattedMessage id="Basic" />
                        </li>
                        <li>
                            <a
                                rel="nofollow noreferrer noopener"
                                href="https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)"
                                className="anr"
                                target="_blank"
                            >
                                GLSL
                            </a>
                        </li>
                    </ul>
                </Frame>
            </div>
        </>
    );
};
