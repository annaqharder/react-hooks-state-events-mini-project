import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState(""); 
  const [category, setCategory] = useState("Code"); 


  function handleCategory(event) {
    setCategory(event.target.value)
  }

  function handleInput(event) {
    setText(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({ text, category}); 
    setText("");
    setCategory("Code");
  }

  const optionsElement = categories.map((cat) => (
    <option key={cat}>{cat}</option>
  ))


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text"
          value={text}
          onChange={handleInput}/>
      </label>
      <label>
        Category
        <select 
          value={category} 
          name="category" 
          onChange={handleCategory}
        >
          {optionsElement}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
