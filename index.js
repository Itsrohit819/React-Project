import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = function() {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

const Header = function() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-3" href="#" style={{ color: '#333' }}>
                        Shopper.
                    </a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Catalog</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Shop</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Pages</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Docs</a></li>
                        </ul>
                        
                        <div className="d-flex align-items-center">
                            <i className="bi bi-search me-3" style={{ fontSize: '1.2rem', cursor: 'pointer' }}></i>
                            <i className="bi bi-person me-3" style={{ fontSize: '1.2rem', cursor: 'pointer' }}></i>
                            <i className="bi bi-heart me-3" style={{ fontSize: '1.2rem', cursor: 'pointer' }}></i>
                            <div className="position-relative">
                                <i className="bi bi-bag" style={{ fontSize: '1.2rem', cursor: 'pointer' }}></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.7rem' }}>
                                    2
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '10px', marginBottom:'10px' }}>
                <span>⚡ HAPPY HOLIDAY DEALS ON EVERYTHING ⚡</span>
            </div>
        </div>
    );
};

const Body = function() {
    return (
        <div className="container-fluid p-0">
            <div className="row g-0">
                <CategoryCard 
                    title="Women"
                    buttonText="Shop Women"
                    image="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8fDA%3D"
                    colClass="col-md-4"
                />
                <CategoryCard 
                    title="Men"
                    buttonText="Shop Men"
                    image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60"
                    colClass="col-md-4"
                />
                <CategoryCard 
                    title="Kids"
                    buttonText="Shop Kids"
                    image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop&q=60"
                    colClass="col-md-4"
                />
            </div>
            
            <div style={{ backgroundColor: '#333', color: 'white', padding: '60px 0' }}>
                <div className="container text-center">
                    <h3 className="mb-4">Want style Ideas and Treats?</h3>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="d-flex">
                                <input 
                                    type="email" 
                                    className="form-control me-2" 
                                    placeholder="Enter Email *"
                                    style={{ backgroundColor: '#555', border: 'none', color: 'white' }}
                                />
                                <button className="btn" style={{ backgroundColor: '#666', color: 'white', border: 'none', padding: '0 30px' }}>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CategoryCard = function({ title, buttonText, image, colClass }) {
    return (
        <div className={colClass}>
            <div className="position-relative" style={{margin:'5px', height: '450px',wodth:"450px", overflow: 'hidden' }}>
                <img 
                    src={image} 
                    alt={title}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                />
                <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center" style={{ top: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.3)' }}>
                    <h2 className="text-white fw-bold mb-4" style={{ fontSize: '3rem' }}>{title}</h2>
                    <button className="btn btn-light fw-semibold px-4 py-2">
                        {buttonText} <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

const Footer = function() {
    return (
        <footer style={{backgroundColor:'#333', color:'#ccc', padding:'50px 0 20px 0'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <h4 className="text-white fw-bold mb-3">Shopper.</h4>
                        <div className="d-flex">
                            <i className="bi bi-facebook me-3" style={{ fontSize: '1.5rem', cursor: 'pointer' }}></i>
                            <i className="bi bi-youtube me-3" style={{ fontSize: '1.5rem', cursor: 'pointer' }}></i>
                            <i className="bi bi-twitter me-3" style={{ fontSize: '1.5rem', cursor: 'pointer' }}></i>
                            <i className="bi bi-instagram me-3" style={{ fontSize: '1.5rem', cursor: 'pointer' }}></i>
                            <i className="bi bi-medium me-3" style={{ fontSize: '1.5rem', cursor: 'pointer' }}></i>
                        </div>
                    </div>
                    
                    <div className="col-md-2 mb-4">
                        <h6 className="text-white mb-3">SUPPORT</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#ccc' }}>Contact Us</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#ccc' }}>FAQs</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#ccc' }}>Size Guide</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#ccc' }}>Shipping & Returns</a></li>
                        </ul>
                    </div>
                    
                    <div className="col-md-2 mb-4">
                        <h6 className="text-white mb-3">SHOP</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#ccc' }}>Men's Shopping</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#ccc' }}>Women's Shopping</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#ccc' }}>Kids' Shopping</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#ccc' }}>Discounts</a></li>
                        </ul>
                    </div>
                    
                    <div className="col-md-2 mb-4">
                        <h6 className="text-white mb-3">COMPANY</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#ccc' }}>Our Story</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#ccc' }}>Careers</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#ccc' }}>Terms & Conditions</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#ccc' }}>Privacy & Cookie policy</a></li>
                        </ul>
                    </div>
                    
                    <div className="col-md-3 mb-4">
                        <h6 className="text-white mb-3">CONTACT</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2" style={{ color: '#ccc' }}>1-202-555-0105</li>
                            <li className="mb-2" style={{ color: '#ccc' }}>1-202-555-0106</li>
                            <li className="mb-2" style={{ color: '#ccc' }}>help@shopper.com</li>
                        </ul>
                    </div>
                </div>
                
                <hr style={{ borderColor: '#555', margin: '40px 0 20px 0' }} />
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className="mb-0" style={{ color: '#999' }}>© 2019 All rights reserved. Designed by Unvab.</p>
                    </div>
                    <div className="col-md-6 text-end">
                        <span style={{ color: '#ccc', marginRight: '10px' }}>💳</span>
                        <span style={{ color: '#ccc', marginRight: '10px' }}>💳</span>
                        <span style={{ color: '#ccc', marginRight: '10px' }}>💳</span>
                        <span style={{ color: '#ccc', marginRight: '10px' }}>💳</span>
                        <span style={{ color: '#ccc' }}>💳</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);