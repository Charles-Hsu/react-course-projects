
let count = 0;
const addOne = () => {
  count++;
  console.log('addOne', count);
  renderCounterApp();
};
const minusOne = () => {
  count--;
  console.log('minusOne', count);
  renderCounterApp();
};
const reset = () => {
  count = 0;
  console.log('reset', count);
  renderCounterApp();
};

const someId = 'myidhere';

// Challenge
// Make button "-1" - setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"


// console.log(templateTwo);
const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  // ReactDOM.render(template, appRoot);
  ReactDOM.render(templateTwo, appRoot);

}

renderCounterApp();

