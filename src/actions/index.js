import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDER } from "../types";


export const  add_reminder = (text,date) => {
    let action = {
        type: ADD_REMINDER,
        text,
        date
    }

    console.log("from action :",action)

    return action
}

export const remove_reminder = (id) => {
	let action = {
		type: REMOVE_REMINDER,
		id
	};

    console.log("Remove Action", action)
	return action;
};

export const clear_reminder = () => {


    let action = {
			type: CLEAR_REMINDER,
		};

    return action
}