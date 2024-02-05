import logo from './logo.svg';
import './App.css';


import { Home } from "./component/Home";
import Header from "./component/Header";
import { Footer } from "./component/Footer";
import { Users } from './users/Users';
import { UsersList } from './users/UsersList';
import { AddEmployee } from './component/employee/AddEmployee';
import { AddEmployee2 } from './component/employee/AddEmployee2';
import { RegisterEmployess } from './component/employee/RegisterEmployess';
import { Navbar } from './component/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import { NetfixComedy } from './Netflix/NetfixComedy';
import { NetflixThriller } from './Netflix/NetflixThriller';
import { NetflixMovies } from './Netflix/NetflixMovies';
import { Series } from './Netflix/Series';
import { SeriesDetail } from './Netflix/SeriesDetail';
import { Error404 } from './Netflix/Error';
import { ApiDemo1 } from './component/apis/ApiDemo1';
import { ApiDemo3 } from './component/apis/ApiDemo3';
import { ApiDemo2 } from './component/apis/ApiDemo2';
import { ApiDemo5 } from './component/apis/ApiDemo5';
import { ApiDemo4 } from './component/apis/ApiDemo4';
import { USerUpdate, UserUpdate } from './component/apis/USerUpdate';
import { UserDetail } from './component/apis/UserDetail';
import { Students } from './student/Students';
import { AppContext } from './context';
import { Login } from './component/Login';
import ProtectedRoute from './hooks/ProtectedRoute';
import { ProductComponent } from './component/ProductComponent';
import { CartComponent } from './component/CartComponent';
import { BankComponent } from './component/BankComponent';
import { ContentComponent } from './component/ContentComponent';
import { UserQuery } from './component/query/UserQuery';
import axios from 'axios';
import { AddUserQuery } from './component/query/AddUserQuery';
function App() {

  // var name = "Harsh"
  // var lname = "Mehta"
  // var age = "20"
  // var hobby = {"hobby1":"cricket","hobby2":"Music"}
  axios.defaults.baseURL = "https://node5.onrender.com";
  var company = "Temp";
  var title = "INDIA";
  var indepndence = "15th August 1947";
  var freedomFighters ={
    "Mg": "Father of the Nation",
    "Bs": "Shaheed"}
    const users =[
      {
        id:1,
        name:"Raj",
      },
      {
        id:2,
        name:"Ravi",
      }
    ]
  return (
    <div className="App">
      {/* <Header title={title} ind={indepndence} ff = {freedomFighters}></Header> */}
      {/* <Users/> */}
   
      {/* <Home t={title} ind = {indepndence} ff ={freedomFighters} users = {users}></Home> */}
      {/* <Footer /> */}
     {/* <h1>Hello ....!</h1>
     <h1>First Name = {name}</h1>
     <h1>Last Name = {lname}</h1>
     <h1>Age = {age}</h1>
     <h1>Hobby1 = {hobby.hobby1}</h1>
     <h1>Hobby2 = {hobby.hobby2}</h1> */}

     {/* <AddEmployee/> */}
     {/* <AddEmployee2/> */}
     {/* <RegisterEmployess/> */}

     <Navbar/>
<AppContext.Provider value={{company}}>
     <Routes>
        <Route path='/' element={<NetflixMovies/>}></Route>
        <Route path="/netflixhome" element={<NetflixMovies/>}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies/>}></Route>
        <Route path="/thrillermovies" element ={<NetflixThriller/>}></Route>
        <Route path ="/netflixhome/comedy" element ={<NetfixComedy/>}></Route>
        <Route path='/addemployee' element ={<AddEmployee2/>}></Route>
        <Route path='/regemployee' element ={<RegisterEmployess/>}></Route>
        <Route path='/series' element={<Series/>}></Route>
        <Route path='/series/detail/:id' element={<SeriesDetail/>}></Route>
        <Route path='*' element={<Error404/>}></Route>


        <Route path='/login' element={<Login/>}></Route>

      <Route element={<ProtectedRoute/>}>

        <Route path="/apidemo1" element={<ApiDemo1/>}></Route>
        <Route path="/apidemo2" element={<ApiDemo2/>}></Route>
        <Route path="/apidemo3" element={<ApiDemo3/>}></Route>
        <Route path="/apidemo4" element={<ApiDemo4/>}></Route>
        <Route path="/apidemo5" element={<ApiDemo5/>}></Route>
      </Route>
        <Route path='/bank' element={<BankComponent/>}></Route>
        <Route path= "/product" element={<ProductComponent/>}></Route>
        <Route path='/cart' element={<CartComponent/> }></Route>

        <Route path='/userdetail/:id' element={<UserDetail/>}></Route>
        <Route path='/updateuser/:id' element={<USerUpdate/>}></Route>
        <Route path='/content' element={<ContentComponent/>}></Route>
        <Route path='/students' element={<Students/>}></Route>
        <Route path='/query' element={<UserQuery/>}></Route>
        <Route path='/adduserquery' element={<AddUserQuery/>}></Route>



     </Routes>
     </AppContext.Provider>
    </div>
  );
}

export default App;
