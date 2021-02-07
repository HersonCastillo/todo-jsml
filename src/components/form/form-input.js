const FormInput = ({ value, id }) => ({
  tag: 'input',
  value,
  id,
  name: id,
  style: {
    width: '100%',
    outlineStyle: 'none',
    borderStyle: 'none',
    border: '2px solid #ddd',
    borderRadius: '5px',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  autocomplete: 'off',
});

export default FormInput;
