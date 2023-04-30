import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { toast } from 'react-toastify';

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
                    <table className="table">
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td colSpan="2">
                                    <label htmlFor="mail">
                                        <FormattedMessage id="contact.form.email" />
                                    </label>
                                </td>
                                <td colSpan="3">
                                    <input type="email" id="mail" name="mail" />
                                </td>
                            </tr>
                            {errors.mail && (
                                <tr class="text-red">
                                    <td colSpan="5" style={{ padding: 0, paddingBottom: '0.5em' }}>
                                        <small>
                                            <FormattedMessage id={errors.mail} />
                                        </small>
                                    </td>
                                </tr>
                            )}

                            <tr>
                                <td colSpan="2">
                                    <label htmlFor="name">
                                        <FormattedMessage id="contact.form.name" />
                                    </label>
                                </td>
                                <td colSpan="3" className="pb-3">
                                    <input type="text" id="name" name="name" />
                                </td>
                            </tr>
                            {errors.name && (
                                <tr class="text-red">
                                    <td colSpan="5" style={{ padding: 0, paddingBottom: '0.5em' }}>
                                        <small>
                                            <FormattedMessage id={errors.name} />
                                        </small>
                                    </td>
                                </tr>
                            )}

                            <tr>
                                <td colSpan="2">
                                    <label htmlFor="title">
                                        <FormattedMessage id="contact.form.subject" />
                                    </label>
                                </td>
                                <td colSpan="3" className="pb-3">
                                    <input type="text" id="title" name="title" />
                                </td>
                            </tr>
                            {errors.title && (
                                <tr class="text-red">
                                    <td colSpan="5" style={{ padding: 0, paddingBottom: '0.5em' }}>
                                        <small>
                                            <FormattedMessage id={errors.title} />
                                        </small>
                                    </td>
                                </tr>
                            )}

                            <tr>
                                <td colSpan="5">
                                    <label htmlFor="description">
                                        <FormattedMessage id="contact.form.contents" />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="5">
                                    <textarea id="description" name="description"></textarea>
                                </td>
                            </tr>
                            {errors.description && (
                                <tr class="text-red">
                                    <td colSpan="5" style={{ padding: 0, paddingBottom: '0.5em' }}>
                                        <small>
                                            <FormattedMessage id={errors.description} />
                                        </small>
                                    </td>
                                </tr>
                            )}

                            <tr>
                                <td colSpan="5">
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
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
