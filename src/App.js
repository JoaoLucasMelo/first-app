import './App.css';
import FormTest from './components/form-test';
import IncreaseComponent from './components/increase-component';
import NavBar from './components/navbar';
import ApiPostsTest from './components/api-posts-test';


function App() {
    return (
    <div className='container-fluid'>
      <div className='row'>
      <NavBar />
        <div className="col-6">
      <IncreaseComponent />
      <FormTest />
        </div>
        <div className="col-6">
      <ApiPostsTest />
        </div>
      </div>
    </div>
    )
}

export default App;
