export type ExpandButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const ExpandButton = ({ onClick }: ExpandButtonProps) => (
    <button type="button" className="modal__button button-expand" onClick={onClick}>
        [<span className="button-expand__space"></span>]
    </button>
);
