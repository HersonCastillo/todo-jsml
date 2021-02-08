import Card from '../../components/card/card.js';
import Layout from '../../components/layout.js';
import Span from '../../components/span.js';
import Form from '../../components/form/form.js';
import FormItem from '../../components/form/form-item.js';
import Storage from '../../config/storage.js';
import Br from '../../components/br.js';
import Button from '../../components/button.js';

import Task from '../../interfaces/todo.js';

const EditTaskPage = () => {
  const effect = (() => {
    const taskId = window.taskId;
    if (!taskId) {
      location.href = "#home";
    }
    const currentTask = Storage.getOne(taskId);
    
    return {
      taskId,
      ...currentTask,
    };
  })();

  const { taskId, name, description } = effect;

  const editTask = (event) => {
    const inputs = event.target.elements;
    const { taskName, taskDescription } = inputs;

    const name = taskName.value;
    const description = taskDescription.value;

    if (
      name && name.trim().length &&
      description && description.trim().length
    ) {
      const task = new Task(name, description);

      Storage.update(taskId, task);
  
      alert('Task edited!');
  
      location.href = "#home";
    } else {
      alert('Some field is empty');
    }

    event.preventDefault();
  };

  return {
    title: 'Edit Task',
    body: [
      Layout({
        child: [
          Card({
            title: 'Edit Task',
            child: [
              Br,
              Form({
                onSubmit: editTask,
                child: [
                  FormItem({
                    id: 'taskName',
                    label: 'Task name',
                    value: name,
                  }),
                  Br,
                  FormItem({
                    id: 'taskDescription',
                    label: 'Description',
                    value: description,
                  }),
                  Br,
                  Button({
                    child: Span('Edit Task'),
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

export default EditTaskPage;