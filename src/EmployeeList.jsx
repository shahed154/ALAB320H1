import EmployeeListItem from './EmployeeListItem';


function EmployeeList() {
    return (
      <div>
        <h2>Employees</h2>
        <EmployeeListItem name="James King" headline="PRESIDENT AND CEO" />
        <EmployeeListItem name="Julie Talor" headline="VP OF MARKETING" />
        <EmployeeListItem name="Eugene Lee" headline="CFO" />
        <EmployeeListItem name="John Williams" headline="VIP OF ENGINEERING" />
        <EmployeeListItem name="Ray Moore" headline="VIP OF SALES" />
        <EmployeeListItem name="Paul Jones" headline="GA MANAGER" />

      </div>
    );
  }

  export default EmployeeList