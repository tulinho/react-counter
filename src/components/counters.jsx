import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 3 },
		],
	};
	handleReset = () => {
		this.state.counters.forEach((m) => (m.value = 0));
		this.setState({ counters: this.state.counters });
	};
	handleIncrement = (id) => {
		let counter = this.state.counters.find((m) => m.id === id);
		counter.value++;
		this.setState({ counters: this.state.counters });
	};
	handleDecrement = (id) => {
		let counter = this.state.counters.find((m) => m.id === id);
		counter.value--;
		this.setState({ counters: this.state.counters });
	};
	handleDelete = (id) => {
		let counters = this.state.counters.filter((m) => m.id !== id);
		this.setState({ counters: counters });
	};
	render() {
		return (
			<div>
				<button
					onClick={this.handleReset}
					className="btn btn-primary btn-sm m-2"
				>
					Reset
				</button>
				{this.state.counters.map((counter) => (
					<Counter
						key={counter.id}
						counter={counter}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						onDelete={this.handleDelete}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
