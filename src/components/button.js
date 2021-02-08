const Button = ({ child, onClick, style, classes = [], ...rest }) => ({
  tag: 'button',
  events: [
    {
      name: 'click',
      handler: onClick,
    }
  ],
  classes: [
    'btn',
    'btn-primary',
    ...classes,
  ],
  style,
  child,
  ...rest,
});

export default Button;
