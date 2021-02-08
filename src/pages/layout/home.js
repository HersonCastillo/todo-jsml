import Card from '../../components/card/card.js';
import Span from '../../components/span.js';
import Layout from '../../components/layout.js';
import List from '../../components/list/list.js';
import Br from '../../components/br.js';
import Button from '../../components/button.js';
import Container from '../../components/container.js';
import Icon from '../../components/icon.js';

import Storage from '../../config/storage.js';

const HomePage = ({ changeDetection }) => {
  const tasks = Storage.get();

  const addTaskClick = () => location.href = "#todo/create";
  const onEditTask = (id) => {
    location.href = '#todo/edit';
    window.taskId = id;
  }

  const onDeleteTask = (id) => {
    const canDelete = confirm('Are you sure that you want delete this record?');
    if (canDelete) {
      Storage.delete(id);
      changeDetection.update();
    }
  }

  return {
    title: 'Todo List',
    body: [
      Layout({
        child: [
          Card({
            title: 'Todo list',
            child: [
              Br,
              Container({
                style: {
                  display: 'flex',
                  justifyContent: 'flex-end'
                },
                child: Button({
                  child: Span('Add task'),
                  onClick: addTaskClick,
                }),
              }),
              Br,
              tasks.length > 0 ? (
                Container({
                  child: tasks.sort(
                    (a, b) => (b.id - a.id)
                  ).map((task, index) => (
                    List({
                      key: index,
                      child: Container({
                        style: {
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        },
                        child: [
                          Span(task.name),
                          Container({
                            child: [
                              Button({
                                child: Icon('edit'),
                                onClick: () => onEditTask(task.id),
                                classes: ['btn-info'],
                                style: {
                                  marginRight: '10px'
                                },
                              }),
                              Button({
                                child: Icon('trash'),
                                onClick: () => onDeleteTask(task.id),
                                classes: ['btn-danger'],
                              }),
                            ],
                          }),
                        ],
                      }),
                    })
                  ))
                })
              ) : (
                Span('No records to show')
              ),
            ],
          }),
        ],
      }),
    ],
  };
};

export default HomePage;
