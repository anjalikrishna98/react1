import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="container">
    <div className="row">
        <div className="col col-10 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label for="" className="form-label">Username</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="col col-10 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label for="" classNameName="form-label">Password</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="col col-10 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-success">Submit</button>
            
        </div>
    </div>
</div>
  );
}

export default App;
