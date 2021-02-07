const Form = ({ onSubmit, child }) => ({
  tag: 'form',
  events: [
    {
      name: 'submit',
      handler: onSubmit
    }
  ],
  child,
});

export default Form;
