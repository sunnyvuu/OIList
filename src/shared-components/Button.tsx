interface buttonProps {
  value: string;
  onClick: () => void;
}

function Button(props: buttonProps) {
  return (
    <button className="btn" onClick={props.onClick}>
      {" "}
      {props.value}
    </button>
  );
}

export default Button;
