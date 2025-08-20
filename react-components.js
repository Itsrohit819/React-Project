import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './node_modules/bootstrap/dist/css/bootstrap.css'
import './node_modules/bootstrap-icons/font/bootstrap-icons.css'


const restaurantList = [
    {
        id: 1,
        name: "Meghana Foods",
        image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D",
        cuisine: "Biryani, North Indian",
        rating: "4.4",
        deliveryTime: "38"
    },
    {
        id: 2,
        name: "KFC",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfDB8MHx8fDA%3D",
        cuisine: "Fast Food, Burgers",
        rating: "4.1",
        deliveryTime: "30"
    },
    {
        id: 3,
        name: "Domino's Pizza",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfDB8MHx8fDA%3D",
        cuisine: "Pizza, Italian",
        rating: "4.2",
        deliveryTime: "35"
    }
];


const App = function(){
    return(
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const Body = function(){
    return(
        <div className="body-container">
            <div className="container-fluid">
                <div className="row justify-content-center mt-4">
                    <div className="col-md-6">
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                placeholder="Search for restaurants, cuisines..."
                                style={{border:'2px solid #333'}} 
                            />
                            <button className="btn btn-info btn-lg px-4" type="button">
                                <i className="bi bi-search me-2"></i>Search
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="row justify-content-center mt-5">
                    <div className="col-12">
                        <div className="row g-4 justify-content-center">
                            {
                                restaurantList.map(items =>
                                    (
                                        <div key={items.id} className="col-12 col-md-6 col-lg-4">
                                            <Card 
                                                resname={items.name} 
                                                cuisine={items.cuisine} 
                                                foodname={items.cuisine} 
                                                rating={items.rating} 
                                                image={items.image}
                                                deliveryTime={items.deliveryTime}
                                            />
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Card = function(props){
    return(
        <div className="card h-100 shadow-lg border-0" style={{borderRadius: '15px', overflow: 'hidden', transition: 'transform 0.3s ease'}}>
            <div className="position-relative">
                <img 
                    src={props.image} 
                    alt={props.resname}
                    className="card-img-top"
                    style={{
                        height: '200px', 
                        objectFit: 'cover',
                        width: '100%'
                    }}
                />
                <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-success rounded-pill px-3 py-2">
                        <i className="bi bi-clock me-1"></i>{props.deliveryTime} min
                    </span>
                </div>
            </div>
            
            <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-dark mb-2">{props.resname}</h5>
                <p className="card-text text-muted mb-3">{props.cuisine}</p>
                
                <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center">
                            <i className="bi bi-star-fill text-warning me-1"></i>
                            <span className="fw-semibold">{props.rating}</span>
                            <small className="text-muted ms-1">rating</small>
                        </div>
                        <div className="d-flex align-items-center text-muted">
                            <i className="bi bi-truck me-1"></i>
                            <small>Fast delivery</small>
                        </div>
                    </div>
                    
                    <button className="btn btn-warning w-100 fw-semibold py-2" style={{borderRadius: '10px'}}>
                        <i className="bi bi-bag-plus me-2"></i>Order Now
                    </button>
                </div>
            </div>
        </div>
    )
}

const Header = function(){
    return(
        <div style={{display: 'flex', justifyContent : 'space-around', alignItems:'center', backgroundColor : 'black', color : 'white'}}>
            <div>
                <img src="https://logopond.com/avatar/257420/logopond.png" alt="" height={100}/>
            </div>
            <div >
                <ul style={{display: 'flex', justifyContent : 'space-around', alignItems:'center', listStyle:'none', gap: '40px'}}>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>SHOP</li>
                    <li>CATEGORIES</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
        </div>
    );
};

const Footer = function(){
    return(
        <div style={{backgroundColor : 'yellowgreen', color : 'black', padding : '10px', marginTop : '20px'}}>
            <ul style={{display: 'flex', justifyContent : 'space-around', alignItems:'center', listStyle:'none', gap: '15px', fontWeight: 'bold'}}>
                <li>&copy; Copyrights</li>
                <li>Links</li>
                <li>Address</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);