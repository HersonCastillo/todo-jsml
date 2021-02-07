import Card from '../../components/card/card.js';
import Layout from '../../components/layout.js';
import Span from '../../components/span.js';
import Form from '../../components/form/form.js';
import FormItem from '../../components/form/form-item.js';
import Storage from '../../config/storage.js';
import Br from '../../components/br.js';
import Button from '../../components/button.js';

import Task from '../../interfaces/todo.js';

const CreateTaskPage = () => {
  const createTask = (event) => {
    const inputs = event.target.elements;
    const { taskName, taskDescription } = inputs;

    const name = taskName.value;
    const description = taskDescription.value;

    if (
      name && name.trim().length &&
      description && description.trim().length
    ) {
      const task = new Task(name, description);

      Storage.add(task);
  
      alert('Task added!');
  
      location.href = "#home";
    } else {
      alert('Some field is empty');
    }

    event.preventDefault();
  };

  return {
    title: 'Create Task',
    body: [
      Layout({
        child: [
          Card({
            title: 'Create Task',
            child: [
              Form({
                onSubmit: createTask,
                child: [
                  FormItem({
                    id: 'taskName',
                    label: 'Task name',
                    value: '',
                  }),
                  Br,
                  FormItem({
                    id: 'taskDescription',
                    label: 'Description',
                    value: '',
                  }),
                  Br,
                  Br,
                  Button({
                    child: Span('Create Task'),
                    type: 'submit'
                  })
                ],
              }),
            ],
          })
        ]
      })
    ]
  };
};

export default CreateTaskPage;