import './ExpensesFilter.css';
function ExpensesFilter(props) {
    
    const dropdownChangeHandler = (event) => {

            props.onChangeFilter(event.target.value);
    }


    return (
        <div className="expense-filter">
            <div className="expense-filter__control">
                <label>Filter by year</label>
                <select value={prompt.selected} onChange={dropdownChangeHandler}>
                    <option value='#'>select</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter;