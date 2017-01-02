import * as React from 'react';
import Counter from './components/Counter';
import colors from './colors';
import CounterState from './stores/CounterState'

export default class App extends React.Component<{}, {}> {
	render() {
		return (
			<div>
				<Counter appState={new CounterState(1, colors.NICE)}/>
			</div>
		);
	}	
}
