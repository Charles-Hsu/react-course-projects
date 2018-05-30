console.log("App.js is running.");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hand of the computer",
  // options: ['One', 'Two']
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  console.log("form submitted");
  console.log("option.value", option);
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  render();
};

// const template = (
//   <div>
//     <h1>{app.title}</h1>
//     {app.subtitle && <p>{app.subtitle}</p>}
//     <p>{app.options && app.options.length ? "Hare are your options " : "No options"}</p>
//     <p>{app.options.length}</p>
//     <ol>
//       <li>Item1</li>
//       <li>選項2</li>
//     </ol>
//     <form onSubmit={onFormSubmit}>
//       <input type="text" name="option"/>
//       <button>Add Option</button>
//     </form>
//   </div>
// );


// console.log(templateTwo);
const appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);

// Create render function that renders the new jsx
// Call it right away
// Call it after options array added to

// create "Remove All" button above list
// on click -> wipe the array -> rerender

const reset = () => {
  console.log('reset');
  app.options = [];
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options && app.options.length ? "Hare are your options " : "No options"}</p>
      <p>{app.options.length}</p>
      {
        app.options.forEach((e) => {
          console.log(e);
        })
      }
      <button onClick={reset}>reset</button>
      <ol>
        <li>Item1</li>
        <li>選項2</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  // ReactDOM.render(template, appRoot);
  ReactDOM.render(template, appRoot);

}

render();