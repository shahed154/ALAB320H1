import Header from './Header';
import SearchBar from './Searchbar';
import EmployeeList from './EmployeeList';



function Homepage() {
    return (
      <div>
        <Header />
        <SearchBar />
        <div>

          <div className="left-panel">

            <EmployeeList />

          </div>

          <div className="right-panel">

            

          </div>

        </div>

      </div>
    );
  }


export default Homepage;