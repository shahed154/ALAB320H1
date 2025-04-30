function EmployeeListItem(props) {
    return (
      <div className="employee-item">
        <h3>{props.name}</h3>
        <p>{props.headline}</p>
      </div>
    );
  }
  
export default EmployeeListItem;