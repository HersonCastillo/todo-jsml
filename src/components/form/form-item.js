import FormInput from './form-input.js';
import Label from '../label.js';

const FormItem = ({ id, label, value }) => ({
  tag: 'div',
  style: {
    marginTop: '5px',
    marginBottom: '5px',
    width: '100%'
  },
  child: [
    Label({
      id,
      text: label,
      style: {
        display: 'block',
        marginBottom: '10px',
        marginTop: '5px'
      }
    }),
    FormInput({ id, value }),
  ]
});

export default FormItem;