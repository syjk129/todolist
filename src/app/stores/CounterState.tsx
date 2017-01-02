import * as React  from 'react';
import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

export default class CounterState {
	@observable counter;
	@observable increment;
	color;

	constructor(increment: number, color: string) {
		this.color = color
    this.increment = increment
    this.counter = 0
		setInterval(() => {
			this.counter += 1
		}, 1000);
	}

	@computed get elapsedTime() {
		return this.counter * this.increment;
	}
}
