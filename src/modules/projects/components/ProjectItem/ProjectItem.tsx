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
                img.className = 'modal-bg modal-full';
                setImage(img);
            })
            .catch(() => {});
    }, [name]);

    return (
        <Frame className="modal-project" title={name} showMinimize={false}>
            {image ? (
                <div dangerouslySetInnerHTML={{ __html: image.outerHTML }} />
            ) : (
                <div className="modal-bg modal-full bg-black"></div>
            )}

            <div className="modal-btn-placement">
                <div>
                    <a
                        href={url}
                        className="btn btn-primary btn-shadows btn-chars mb-5"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FormattedMessage id="Read more" />
                    </a>
                </div>
            </div>
            <div className="modal-description-placement">
                <div dangerouslySetInnerHTML={{ __html: descriptionHTML }}></div>
            </div>
        </Frame>
    );
};
