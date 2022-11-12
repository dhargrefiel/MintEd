import { Navbar, Welcome, Footer, Services, Transactions, Social, News, Education, SendTip, Login, Registration, RegistrationEduc, Tutorial} from "./components"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="min-h-screen gradient-bg-welcome">
          <div className="">
            <Navbar />  
            {/* <Welcome /> */}
          </div>

          <div>
          

            <Routes>
              <Route exact path='/' element={<Welcome />}></Route>
              <Route exact path='/Social' element={<Social />}></Route>
              <Route exact path='/News' element={<News />}></Route>
              <Route exact path='/Education' element={<Education />}></Route>  
              <Route exact path='/Social/SendTip' element={<SendTip />}></Route>
              <Route exact path='/Login' element={<Login />}></Route>
              <Route exact path='/Registration' element={<Registration />}></Route>
              <Route exact path='/RegistrationEduc' element={<RegistrationEduc />}></Route>
              <Route exact path='/Tutorial' element={<Tutorial />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
