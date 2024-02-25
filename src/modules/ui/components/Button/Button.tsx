import { Link } from 'gatsby';

import './styles.css';

type BaseButtonProps = {
    className?: string;
    onClick?: CallableFunction;
    color?: 'primary' | 'secondary';
    variant?: 'default' | 'chars' | 'shadows' | 'chars-and-shadows';
    children?: React.ReactNode;
};

type ButtonProps = BaseButtonProps & React.HTMLAttributes<HTMLButtonElement>;

type ButtonLinkProps = {
    to: string;
    target?: string;
} & ButtonProps;

type ButtonGatsbyLinkProps = {
    to: string;
    target?: string;
} & BaseButtonProps;

export const Button = ({
    color = 'primary',
    variant = 'default',
    className = '',
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
    className = '',
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
    target,
    className = '',
    to,
    children,
    onClick,
    ...props
}: ButtonLinkProps) => {
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        onClick?.(e);
        if (target !== undefined) window.open(to, target);
        else window.location.href = to;
    };

    return (
        <button
            type="button"
            className={getButtonClass({ className, variant, color })}
            onClick={handleClick}
            {...props}
        >
            {children}
        </button>
    );
};

function getButtonClass({ variant, color, className }: any) {
    return `button button--${color} button--${variant} ${className}`;
}
