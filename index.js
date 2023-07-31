import { useState } from 'react';

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Fonction pour ajouter un nouvel élément à la liste
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodoList([...todoList, newTodo]);
      setNewTodo('');
    }
  };

  // Fonction pour gérer la saisie de texte dans la barre d'ajout
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  // Fonction pour ajouter un nouvel élément lorsque la touche "Entrée" est enfoncée
  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        onKeyPress={handleEnterKeyPress}
      />
      <button onClick={addTodo}>ADD</button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo}
            < button onClick={() => deleteTodo(index)}>Delete</button>
            < button
              onClick={() => {
                const updatedText = prompt('Modifier le contenu :', todo);
                if (updatedText !== null) {
                  updateTodo(index, updatedText);
                }
              }}> Update </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
