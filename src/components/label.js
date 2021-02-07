const Label = ({ text, id, style }) => ({
  tag: 'label',
  id,
  child: text,
  style,
});

export default Label;