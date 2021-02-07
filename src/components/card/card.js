import CardContent from "./card-content.js";

const Card = ({ child, title }) => ({
  tag: 'div',
  style: {
    margin: '10px',
    padding: '15px',
    border: '1px solid #eee',
    borderRadius: '5px',
    boxShadow: '0px 1px 2px 0px #ddd'
  },
  child: CardContent({ child, title }),
});

export default Card;
