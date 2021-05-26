import React, { Component } from "react";

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
				<button
					onClick={() => {
						onDecrement(counter.id);
					}}
					className="btn btn-secondary m-2 btn-sm"
				>
					-
				</button>
				<button
					onClick={() => onDelete(counter.id)}
					className="btn btn-danger m-2 btn-sm"
				>
					Remve
				</button>
			</div>
		);
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}

	getBadgeClasses() {
		let classes = "badge m-2 btn-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}
}

export default Counter;
