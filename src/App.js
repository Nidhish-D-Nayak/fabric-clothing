// import Data from './Data.json';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import Shop from './routes/shop/shop.component.jsx';

const App = () => {
  console.log('App.js rendered');
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
