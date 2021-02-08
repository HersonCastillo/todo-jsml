const CardContent = ({ child, title }) => ({
  tag: 'div',
  style: {
    padding: '15px',
  },
  child: [
    ({
      tag: 'h1',
      child: title,
    }),
    ...child,
  ]
});

export default CardContent;
