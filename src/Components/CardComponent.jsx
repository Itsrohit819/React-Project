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
                <p className="card-text text-muted mb-2">{props.cuisine}</p>
                <p className="card-text text-success fw-semibold">{props.costForTwo}</p>
                
                <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center">
                            <i className="bi bi-star-fill text-warning me-1"></i>
                            <span className="fw-semibold">{props.rating}</span>
                            <small className="text-muted ms-1">rating</small>
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

export default Card;