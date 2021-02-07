import ListContent from './list-content.js';

const List = ({ child, key }) => ({
  tag: 'div',
  key,
  style: {
    border: '1px solid #ddd',
    borderRadius: '3px',
    width: '100%',
    paddingTop: '5px',
    paddingBottom: '5px',
    marginTop: '5px',
  },
  child: ListContent({ child }),
});

export default List;
