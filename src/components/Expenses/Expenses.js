import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
	const [enteredYear, setEnteredYear] = useState('');

	const changeYearHandler = (year) => {
		setEnteredYear(year);
	}

	return (
		<div>
			<ExpensesFilter onChangeYear={changeYearHandler} />
			<Card className="expenses">
				<ExpenseItem title={props.items[0].title} date={props.items[0].date} amount={props.items[0].amount} />
				<ExpenseItem title={props.items[1].title} date={props.items[1].date} amount={props.items[1].amount} />
				<ExpenseItem title={props.items[2].title} date={props.items[2].date} amount={props.items[2].amount} />
				<ExpenseItem title={props.items[3].title} date={props.items[3].date} amount={props.items[3].amount} />
			</Card>
		</div>
	);
}

export default Expenses;