console.log("running app.js");

// JSX - Javascript XML
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>Does this change?!</p>
  </div>
);

var app = {
  title: "Indecision App",
  subtitle: "Put your life in a hand of the computer",
  options: []
  // options: ['One', 'Two']
}

var template2 = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options && app.options.length ? "some options here" : "no option"}</p>
    <ol>
      <li>Item1</li>
      <li>選項2</li>
    </ol>
  </div>
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(template2, appRoot);