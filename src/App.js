import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="container">
        <div className="row g=2">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="className-label">Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="className-label">Roll number</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="className-label">Admision Number</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="className-label">Mobile</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" className="className-label">College</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="className-label">User name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="className-label">Password</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success">REGISTER</button>    
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
