export type ExpandButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const ExpandButton = ({ onClick }: ExpandButtonProps) => (
    <button className="modal__button button-expand" onClick={onClick}>
        [<span className="space"> </span>]
    </button>
);
