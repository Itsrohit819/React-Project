import { LOGO_URL } from "../utils/Real-Time-Data";
const Header = function(){
    return(
        <div style={{display: 'flex', justifyContent : 'space-around', alignItems:'center', backgroundColor : 'black', color : 'white'}}>
            <div>
                <img src={LOGO_URL} alt="" height={70} width={70} style={{borderRadius:'50px',margin:'10px', marginRight:'350px'}}/>
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

export default Header;