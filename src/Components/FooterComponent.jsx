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

export default Footer;