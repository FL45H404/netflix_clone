
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './container/Navbar/Navbar';
import Movie from './container/Movie/Movie';
import Movies from './container/Movies/Movies';
import Footer from './container/Footer/Footer';
import Search from './container/Search/Search';
import MyList from './container/MyList/MyList';
import Login from './container/Login/Login';
import Protected from './container/Protected';
import { useLocation } from 'react-router'
function App() {
  const location = useLocation()
  return (

    <div className="App">
      {
        location.pathname !== '/login' && <Navbar />
      }

      <Routes>
        <Route element={<Protected />}>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/movie/:id" element={<Movie />} />
          <Route path='/search' element={<Search />} />
          <Route path='/mylist' element={<MyList />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
      {

        location.pathname !== '/login' && <Footer />
      }
    </div>
  );

}

export default App;
