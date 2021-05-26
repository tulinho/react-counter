import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
	render() {
		const { onIncrement, onDecrement, onDelete, counter } = this.props;
		return (
			<div>
				<span className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
					onClick={() => {
						onIncrement(counter.id);
					}}
					className="btn btn-secondary m-2 btn-sm"
				>
					+
				</button>
				{this.getDecrementButton(counter, onDecrement)}
				<button
					onClick={() => onDelete(counter.id)}
					className="btn btn-danger m-2 btn-sm"
				>
					Remove
				</button>
			</div>
		);
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}

	getBadgeClasses() {
		let classes = "badge p-2 m-2 counter-badge btn-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	getDecrementButton(counter, onDecrement) {
		if (counter.value == 0)
			return (
				<button
					className="btn btn-secondary m-2 btn-sm"
					disabled="disabled"
				>
					{" "}
					-{" "}
				</button>
			);
		return (
			<button
				onClick={() => {
					onDecrement(counter.id);
				}}
				className="btn btn-secondary m-2 btn-sm"
			>
				-
			</button>
		);
	}
}

export default Counter;
