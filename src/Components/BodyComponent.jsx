import { LOGO_URL, CDN_URL, restaurantList } from '../utils/Real-Time-Data'
import Card from './CardComponent'

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
                                restaurantList.map(restaurant =>
                                    (
                                        <div key={restaurant.data.id} className="col-12 col-md-6 col-lg-4">
                                            <Card 
                                                resname={restaurant.data.name}
                                                cuisine={restaurant.data.cuisines.join(', ')}
                                                rating={restaurant.data.avgRating}
                                                image={CDN_URL + restaurant.data.cloudinaryImageId}
                                                deliveryTime={restaurant.data.deliveryTime}
                                                costForTwo={restaurant.data.costForTwoString}
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

export default Body;