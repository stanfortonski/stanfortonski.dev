import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { toast } from 'react-toastify';

import { Button } from '@/modules/ui/components/Button';

import './styles.css';

export type ContactFormValues = {
    mail: string;
    name: string;
    title: string;
    description: string;
    recaptcha_response?: string;
};

export const ContactForm = () => {
    const intl = useIntl();
    const [sending, setSending] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
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

    const validate = ({ mail, name, title, description }: ContactFormValues) => {
        const newErrors: Record<string, string> = {};

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

    const sendMail = (e: any) => {
        e.preventDefault();
        const data: ContactFormValues = {
            mail: e.target.elements.mail.value,
            name: e.target.elements.name.value,
            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
        };

        window?.grecaptcha?.ready(() => {
            window?.grecaptcha
                .execute(site.siteMetadata.recaptcha_public, { action: 'submit' })
                .then(function (token: string) {
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
                                    toast.success(
                                        intl.formatMessage({ id: 'global.send.success' }),
                                    );
                                else toast.error(intl.formatMessage({ id: 'global.send.error' }));
                            })
                            .catch((err) => {
                                setSending(false);
                                console.error(err);
                                toast.error(intl.formatMessage({ id: 'global.send.error' }));
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
                <fieldset className="present">
                    <legend className="present__label">
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
                            <Button type="submit" variant="chars-and-shadows" disabled={sending}>
                                {sending ? (
                                    <span className="blink">
                                        <FormattedMessage id="contact.form.sending" />
                                        ...
                                    </span>
                                ) : (
                                    <FormattedMessage id="contact.form.send" />
                                )}
                            </Button>
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
