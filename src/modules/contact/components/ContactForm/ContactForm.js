import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { toast } from 'react-toastify';

import './styles.css';

export const ContactForm = () => {
    const intl = useIntl();
    const [sending, setSending] = useState(false);
    const [errors, setErrors] = useState({});
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    siteUrl
                    recaptcha_public
                }
            }
        }
    `);

    const validate = ({ mail, name, title, description }) => {
        const newErrors = {};

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
            newErrors.mail = 'contact.errors.mail';
        }

        if (name.trim().length < 3) {
            newErrors.name = 'contact.errors.name';
        }

        if (title.trim().length < 8) {
            newErrors.title = 'contact.errors.title';
        }

        if (description.trim().length < 50) {
            newErrors.description = 'contact.errors.description';
        }

        setErrors(newErrors);

        return JSON.stringify(newErrors) === JSON.stringify({});
    };

    const sendMail = (e) => {
        e.preventDefault();
        const data = {
            mail: e.target.elements.mail.value,
            name: e.target.elements.name.value,
            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
        };

        window?.grecaptcha?.ready(() => {
            window?.grecaptcha
                .execute(site.siteMetadata.recaptcha_public, { action: 'submit' })
                .then(function (token) {
                    data.recaptcha_response = token;
                    if (validate(data)) {
                        setSending(true);

                        fetch(e.target.action, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data),
                        })
                            .then((res) => res.json())
                            .then((res) => {
                                setSending(false);
                                e.target.reset();
                                console.log(res);

                                if (res.success)
                                    toast.success(intl.formatMessage({ id: 'send.success' }));
                                else toast.error(intl.formatMessage({ id: 'send.error' }));
                            })
                            .catch((err) => {
                                setSending(false);
                                console.error(err);
                                toast.error(intl.formatMessage({ id: 'send.error' }));
                            });
                    }
                });
        });
    };

    return (
        <>
            <form
                method="post"
                action={`${site.siteMetadata.siteUrl}/send-mail`}
                onSubmit={sendMail}
            >
                <fieldset className="present p-10">
                    <legend className="present-label">
                        <FormattedMessage id="contact.form.label" />
                    </legend>

                    <div className="contact-grid">
                        <div>
                            <label htmlFor="mail">
                                <FormattedMessage id="contact.form.email" />
                            </label>
                        </div>
                        <div>
                            <input type="email" id="mail" name="mail" />
                            {errors.mail && (
                                <small className="text-red">
                                    <FormattedMessage id={errors.mail} />
                                </small>
                            )}
                        </div>

                        <div>
                            <label htmlFor="name">
                                <FormattedMessage id="contact.form.name" />
                            </label>
                        </div>
                        <div>
                            <input type="text" id="name" name="name" />
                            {errors.name && (
                                <small className="text-red">
                                    <FormattedMessage id={errors.name} />
                                </small>
                            )}
                        </div>

                        <div>
                            <label htmlFor="title">
                                <FormattedMessage id="contact.form.subject" />
                            </label>
                        </div>
                        <div>
                            <input type="text" id="title" name="title" />

                            {errors.title && (
                                <small className="text-red">
                                    <FormattedMessage id={errors.title} />
                                </small>
                            )}
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="description">
                                <FormattedMessage id="contact.form.contents" />
                            </label>
                            <textarea id="description" name="description"></textarea>
                            {errors.description && (
                                <small className="text-red">
                                    <FormattedMessage id={errors.description} />
                                </small>
                            )}
                        </div>

                        <div className="col-span-2">
                            <button
                                type="submit"
                                className="btn btn-shadows btn-chars"
                                disabled={sending}
                            >
                                {sending ? (
                                    <span className="blink">
                                        <FormattedMessage id="contact.form.sending" />
                                        ...
                                    </span>
                                ) : (
                                    <FormattedMessage id="contact.form.send" />
                                )}
                            </button>
                        </div>
                    </div>
                </fieldset>
            </form>

            <Helmet>
                <script
                    src={`https://www.google.com/recaptcha/api.js?render=${site.siteMetadata.recaptcha_public}`}
                />
            </Helmet>
        </>
    );
};