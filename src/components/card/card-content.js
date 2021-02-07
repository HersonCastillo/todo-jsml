const CardContent = ({ child, title }) => ({
  tag: 'div',
  style: {
    padding: '15px',
  },
  child: [
    ({
      tag: 'span',
      style: {
        fontWeight: 'bold',
        display: 'block',
        marginBottom: '15px',
        fontSize: '1.3em',
      },
      child: title,
    }),
    ...child,
  ]
});

export default CardContent;
