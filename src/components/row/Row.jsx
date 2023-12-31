import './Row.css';

function Row( props ) {
  return <div class={props.className}>{props.text}</div>;
}

export default Row;