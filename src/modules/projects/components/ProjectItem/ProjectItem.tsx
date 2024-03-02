import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { getImage } from '@/modules/core/utils/helpers';
import { Frame } from '@/modules/ui/components/Frame';

export type ProjectItemProps = {
    node: {
        id: string;
        name: string;
        url: string;
        descriptionHTML: string;
    };
};

export const ProjectItem = ({ node }: ProjectItemProps) => {
    const { name, url, descriptionHTML } = node;
    const [image, setImage] = useState<HTMLImageElement>();

    useEffect(() => {
        getImage(`/images/projects/${name}.jpg`)
            .then((img: HTMLImageElement) => {
                img.className = 'modal__bg';
                setImage(img);
            })
            .catch(() => {});
    }, [name]);

    return (
        <Frame className="modal--project" title={name}>
            {image ? (
                <div dangerouslySetInnerHTML={{ __html: image.outerHTML }} />
            ) : (
                <div className="modal__bg bg-black"></div>
            )}
            <div className="modal__button-placement">
                <div>
                    <a
                        href={url}
                        className="button button--secondary button--chars-and-shadows mb-5"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FormattedMessage id="global.read-more" />
                    </a>
                </div>
            </div>
            <div
                className="modal__description-placement"
                dangerouslySetInnerHTML={{ __html: descriptionHTML }}
            />
        </Frame>
    );
};
