interface buttonProps {
  value: string;
}

function Button(props: buttonProps) {
  return <button className="btn"> {props.value}</button>;
}

export default Button;
