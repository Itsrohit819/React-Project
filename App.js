import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './node_modules/bootstrap/dist/css/bootstrap.css'
import './node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Body from './src/Components/BodyComponent'
import Footer from './src/Components/FooterComponent'
import Header from './src/Components/HeaderComponent'
import Counter from './src/Components/CounterComponent'

const App = function(){
    return(
        <div>
            <Header/>
            <Body/>
            <Footer/>
            <Counter/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);