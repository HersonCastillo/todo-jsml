const FormInput = ({ value, id }) => ({
  tag: 'input',
  value,
  id,
  name: id,
  classes: ['form-control'],
  autocomplete: 'off',
});

export default FormInput;
