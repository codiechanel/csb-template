import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App(props) {
	return <div>Hello</div>;
}
ReactDOM.render(
	<App />,
	document.getElementById('root')
	// <Hello compiler="TypeScript" framework="React" />,
	// document.getElementById("root")
);
