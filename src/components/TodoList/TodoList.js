import React from 'react';

import './TodoList.scss';

import tasksData from 'src/data/tasks';

import TodoListCounter from './TodoListCounter/TodoListCounter';
import TodoListForm from './TodoListForm/TodoListForm';
import TodoListTasks from './TodoListTasks/TodoListTasks';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: tasksData,
      newTaskLabel: '',
    };

    this.toggleTask = this.toggleTask.bind(this);
    this.setNewTaskLabel = this.setNewTaskLabel.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  setNewTaskLabel(newTaskLabel) {
    this.setState({
      newTaskLabel: newTaskLabel,
    });
  }

  addTask() {
    const { newTaskLabel, tasks } = this.state;

    // Algo pour trouver l'id le plus grand du tableau tasks et y ajouter 1

    // On crée une copie de tableau contenant uniquement les ids des tâches
    const tasksIds = tasks.map((task) => task.id);
    // Math.max a besoin des paramètres passés les uns après les autres, il ne prend pas de tableau
    // spread operator à la rescousse qui revient à passer tous les éléments du tableau
    // un par un !
    // On récupère donc l'id le plus grand des tâches
    const maxId = Math.max(...tasksIds);
    // Et on y ajoute 1 : on a un id unique
    const newTaskId = maxId + 1;

    const newTask = {
      id: newTaskId,
      label: newTaskLabel,
      done: false,
    };

    this.setState({
      tasks: tasks.concat(newTask),
      // on ne peut pas utiliser tasks.push car ce serait une modification
      // directe du state ! pas le droit !
      // tasks.concat crée une copie de tasks à laquelle on ajoute newTask
      // on aurait pu faire avec le spread operator
      // tasks: [...tasks, newTask] (toutes les tâches avec en plus la nouvelle tâche)
      newTaskLabel: '', // on vide l'input
    });
  }

  toggleTask(taskId) {
    // Je récupère la liste de mes tâches
    const { tasks } = this.state;

    // Je souhaite créer une copie du tableau tâches
    // qui aura une seule modification : la tâche ciblée (identifiée par taskId)
    // aura sa valeur "done" échangée (si true => false, si false => true)

    // Pour chacune des tâches
    const updatedTasks = tasks.map((task) => {
      // Si la tâche sur laquelle on boucle est celle qu'on souhaite modifier
      if (task.id === taskId) {
        // On retourne la tâche modifiée
        /*
        Version peu maintenable :
        return {
          id: task.id,
          label: task.label,
          done: !task.done
        }
        On privilégiera le spread operator en dessous (les ...) qui permet de ne pas avoir
        à retaper toutes les propriétés qu'on ne souhaite pas modifier
        */

        return {
          ...task, // spread operator, va renvoyer toutes les clés de l'objet task
          done: !task.done, // à la différence qu'on surcharge une de ses clés : on inverse "done"
        };
      }

      return task; // Si non, on retourne la tâche non modifiée, pas besoin !
    });

    // On met à jour le state avec cette copie du tableau tasks
    // qui contient la tâche modifiée
    this.setState({
      tasks: updatedTasks,
    });
  }

  render() {
    const { tasks, newTaskLabel } = this.state;

    const tasksToDoLength = tasks.filter((task) => !task.done).length;

    return (
      <div className="TodoList">
        <TodoListForm
          newTaskLabel={newTaskLabel}
          setNewTaskLabel={this.setNewTaskLabel}
          addTask={this.addTask}
        />
        <TodoListCounter tasksToDoLength={tasksToDoLength} />
        <TodoListTasks tasks={tasks} toggleTask={this.toggleTask} />
      </div>
    );
  }
}

export default TodoList;
