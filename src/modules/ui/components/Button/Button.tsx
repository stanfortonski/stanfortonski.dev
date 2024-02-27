import { Link } from 'gatsby';
import classNames from 'classnames';

import { ButtonLink as BaseButtonLink } from '@/modules/core/components/ButtonLink';

export type BaseButtonProps = {
    className?: string;
    onClick?: CallableFunction;
    color?: 'primary' | 'secondary';
    variant?: 'default' | 'chars' | 'shadows' | 'chars-and-shadows';
    children?: React.ReactNode;
};

export type ButtonProps = BaseButtonProps & JSX.IntrinsicElements['button'];

export type ButtonLinkProps = {
    to: string;
    target?: string;
} & ButtonProps;

export type ButtonGatsbyLinkProps = {
    to: string;
    target?: string;
} & BaseButtonProps;

export const Button = ({
    color = 'primary',
    variant = 'default',
    className,
    children,
    onClick,
    ...props
}: ButtonProps) => (
    <button
        type="button"
        className={getButtonClass({ className, variant, color })}
        onClick={(e) => onClick?.(e)}
        {...props}
    >
        {children}
    </button>
);

export const ButtonGatsbyLink = ({
    color = 'primary',
    variant = 'default',
    className,
    to,
    onClick,
    children,
    ...props
}: ButtonGatsbyLinkProps) => (
    <Link to={to} className={getButtonClass({ className, variant, color })} {...props}>
        {children}
    </Link>
);

export const ButtonLink = ({
    color = 'primary',
    variant = 'default',
    className,
    children,
    ...props
}: ButtonLinkProps) => {
    return (
        <BaseButtonLink className={getButtonClass({ className, variant, color })} {...props}>
            {children}
        </BaseButtonLink>
    );
};

function getButtonClass({
    variant,
    color,
    className,
}: Pick<BaseButtonProps, 'variant' | 'color' | 'className'>) {
    return classNames('button', `button--${color}`, `button--${variant}`, className);
}
