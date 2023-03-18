

import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import moment from "moment";
import './App.css'

import {add_reminder,remove_reminder,clear_reminder} from './actions';


class App extends React.Component {
	state = {
		text: "",
		date: new Date(),
	};

	handleChange = (e) => {
		this.setState({ text: e.target.value });
	};

	handleReminders() {
		
			console.log(this.props.reminders);
			return (
				<ul className="list-group p-0">
					{
					this.props.reminders?.map((reminder) => {
						console.log(reminder.id)
						return (
							<li
								key={reminder.id}
								className="list-group-item mt-3 shadow-sm"
								style={{ display: "flex", justifyContent: "space-between" }}
							>
								<div>
									<h5>{reminder.text}</h5>
								</div>
								<div>
									<h5 className="fw-lighter">
										{moment(new Date(reminder.date)).fromNow()}
									</h5>
								</div>
								<button
									onClick={() => this.props.remove_reminder(reminder.id)}
									className="btn btn-danger rounded-circle "
								>
									X
								</button>
							</li>
						);
					}
						
					)
					}
				</ul>
			);
	}
	render() {
		//   console.log("this props", this.state.text);

		return (
			<div className="grid text-center">
				<div
					className="row justify-content-center p-4 mt-5 shadow"
					style={{ margin: "0 auto", maxWidth: "500px" }}
				>
					<img
						className=""
						style={{ width: "200px" }}
						src="./images/reminder.png"
						alt=""
					/>
					<h2>Add Reminder App</h2>
					<input
						className="form-control mt-4"
						onChange={this.handleChange}
						type="text"
						placeholder="Add Task..."
					/>

					<DatePicker
						className="form-control mt-1 mb-3 "
						selected={this.state.date}
						onChange={(date) => this.setState({ date: date })}
						showTimeSelect
						timeFormat="HH:mm"
						dateFormat="MMMM d, yyyy h:mm aa"
						timeCaption="time"
						style={{ padding: "0 !important" }}
					/>
					<button
						onClick={() =>
							this.props.add_reminder(this.state.text, this.state.date)
						}
						className="btn btn-primary btn-block mb-2 "
					>
						Add A New Reminder
					</button>
					<button className="btn btn-danger btn-block">
						Clear All Reminders
					</button>
					{this.handleReminders()}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
    return {
			reminders: state
		};
}

function mapDispatchToProps(dispatch) {
	return {
		add_reminder: (text,date) => dispatch(add_reminder(text,date)),
		remove_reminder: () => dispatch(remove_reminder()),
		clear_reminder: () => dispatch(clear_reminder()) 
	};
}




export default connect(mapStateToProps, {
	add_reminder,
	remove_reminder,
	clear_reminder,
})(App);