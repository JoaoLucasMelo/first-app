import './App.css';
import FormTest from './components/form-test';
import IncreaseComponent from './components/increase-component';
import NavBar from './components/navbar';
import ApiPostsTest from './components/api-posts-test';
import ButtonComponent from './components/multifunction-button';
import { transitions, positions, Provider as AlertProvider, types } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


function App() {

  const success = {
    position: positions.BOTTOM_RIGHT,
    type: types.SUCCESS,
    timeout: 5000,
    offset: '20px',
    transition: transitions.FADE
  }


    return (
      <AlertProvider template={AlertTemplate} {...success}>
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
        <h1 className='text-center mt-2'>
          Button Component
        </h1>
        <div className='d-flex justify-content-center'>
        <ButtonComponent buttonName='Component Button 1' alertText='First Button Same Component' color='orange' />
        <ButtonComponent buttonName='Component Button 2' alertText='Second Button Same Component' color='purple' />
        <ButtonComponent buttonName='Component Button 3' alertText='Third Button Same Component' color='green' />
        </div>
      </div>
    </div>
    </AlertProvider>
    )
}

export default App;
