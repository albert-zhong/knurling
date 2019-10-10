import React from 'react'

class List extends React.Component {

    render() {
        var rows = []
        if (this.props.workouts) {
            rows = this.props.workouts.map((workout) => <li key={workout}>{workout}</li>)
        }

        return (
            <div className="list">
                <h1>{this.props.selectedDate.getDate()}</h1>
                <ul>
                    {rows}
                </ul>
            </div>
        )
    }

}

export default List