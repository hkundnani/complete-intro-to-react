const MyFirstComponent = function() {
  return React.createElement('div', null, React.createElement('h1', null, 'My first Component'));
};

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
