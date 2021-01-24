import logo from './logo.svg';
import './App.css';
import bg from '../src/images/background.png';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return(
      <div class="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent" >
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                      aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <a className="nav-link" href="#">Contact</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Experience</a>
                      </li>
                  </ul>
              </div>
          </nav>
          <img src={bg} className="img-fluid mt-0" alt="Responsive image">
          </img>
      </div>
  )
}

export default App;
