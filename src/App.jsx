import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
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
		if (counter.value == 0) return;
		counter.value--;
		this.setState({ counters: this.state.counters });
	};
	handleDelete = (id) => {
		let counters = this.state.counters.filter((m) => m.id !== id);
		this.setState({ counters: counters });
	};
	render() {
		return (
			<React.Fragment>
				<NavBar
					totalCount={
						this.state.counters.filter((m) => m.value > 0).length
					}
				></NavBar>
				<main className="container-fluid">
					<Counters
						counters={this.state.counters}
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						onDelete={this.handleDelete}
					></Counters>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
