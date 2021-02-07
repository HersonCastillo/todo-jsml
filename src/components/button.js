const Button = ({ child, onClick, ...rest }) => ({
  tag: 'button',
  events: [
    {
      name: 'click',
      handler: onClick,
    }
  ],
  style: {
    backgroundColor: '#ddd',
    padding: '10px',
    margin: '5px',
    outlineStyle: 'none',
    borderStyle: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: '900',
    fontFamily: 'sans-serif',
    textTransform: 'uppercase',
  },
  child,
  ...rest,
});

export default Button;
