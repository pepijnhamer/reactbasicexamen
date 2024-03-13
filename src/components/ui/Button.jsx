export const Button = ({ text, clickFn }) => (
  <button className="button" onClick={clickFn}>
    {text}
  </button>
);
