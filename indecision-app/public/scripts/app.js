"use strict";

console.log("App.js is running.");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hand of the computer",
  // options: ['One', 'Two']
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
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
var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);

// Create render function that renders the new jsx
// Call it right away
// Call it after options array added to

// create "Remove All" button above list
// on click -> wipe the array -> rerender

var reset = function reset() {
  console.log('reset');
  app.options = [];
  render();
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      app.options && app.options.length ? "Hare are your options " : "No options"
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    app.options.forEach(function (e) {
      console.log(e);
    }),
    React.createElement(
      "button",
      { onClick: reset },
      "reset"
    ),
    React.createElement(
      "ol",
      null,
      React.createElement(
        "li",
        null,
        "Item1"
      ),
      React.createElement(
        "li",
        null,
        "\u9078\u98052"
      )
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  // ReactDOM.render(template, appRoot);
  ReactDOM.render(template, appRoot);
};

render();
