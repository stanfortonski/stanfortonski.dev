export type ExpandButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const ExpandButton = ({ onClick }: ExpandButtonProps) => (
    <button className="modal-btn btn-expand" onClick={onClick}>
        [<span className="space"> </span>]
    </button>
);
