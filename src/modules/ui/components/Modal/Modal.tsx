import { forwardRef, type ComponentProps } from 'react';
import classNames from 'classnames';

import './styles.css';

export const Modal = forwardRef(({ className, children }: ComponentProps<any>, ref: any) => (
    <div className={classNames('modal', className)} ref={ref}>
        {children}
    </div>
));
