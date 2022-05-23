function DataItem(props) {
    const details = props.userDetails
    
    return (
        <div className="list-from-json">
            <h1>Username: {details.username}</h1>
            <h2>First name: {details.first_name}</h2>
            <h2>Last name: {details.last_name}</h2>
            <ol>
                <li>{details.id}</li>
                <li>{details.uid}</li>
                <li>{details.password}</li>
                <li>{details.email}</li>
                <li>{details.avatar}</li>
                <li>{details.gender}</li>
                <li>{details.phone_number}</li>
                <li>{details.date_of_birth}</li>
                <li>{details.employment.title}</li>
                <li>{details.employment.key_skill}</li>
            </ol>
        </div>
    )
}

export default DataItem