import * as React  from 'react';
import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import CounterState from '../stores/CounterState'

@observer
class Counter extends React.Component<{appState: CounterState}, {}> {
	render() {
		return (
			<h1 style={{ color: this.props.appState.color }}>
				Counter {this.props.appState.elapsedTime}
			</h1>
		);
	}
}

export default Counter
