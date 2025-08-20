import React from "react";
import ReactDOM from "react-dom/client"; 

// const element = React.createElement(
//     "h1", { style: { color: "black" } }, "Welcome Defender087"
// );

// const jsxElement = <h1 id="heading">Competitive Programmer</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxElement);

// const HeadingComponent = function () {
//     return (
//         <h1 id="heading">
//             Hello User
//         </h1>
//     )
// }

//ReactDOM.createRoot(document.getElementById("root")).render(<HeadingComponent/>);
//ReactDOM.createRoot(document.getElementById("main")).render(<HeadingComponent/>);

// const Title = () => <p id="title">React Learning Easy</p> //for multiple line we need to put bracket
// const Title1 = (
//     <p id="msg">
//         React from Nitin Sir
//     </p>
// )
// const HeadingComponent1 = () => {
//     return (
//         <div id="container">
//             <Title/>
//             <Title></Title>
//             <h1 id="heading">Hello {Title()} User</h1>
//             {Title1}
//             {Title()}
//         </div>
//     )
//     // All these options will work here...
// }

const AppLayout = () => {
    return (
        <div>
            <HeadingComponent/>
            <BodyLayout/>
            <FooterComponent/>
        </div>    
    )
}

const HeadingComponent = () => {
    return (
        <div style={{display:'flex',padding:'10px' , justifyContent:'space-around', alignItems:'center', backgroundColor:'black',color:'white'}}>
            <div>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/7a3ec529632909.55fc107b84b8c.png" height={100} width={300}></img>
            </div>
            <div>
                <ul style={{listStyle:'none', display:'flex', justifyContent:'space-around', gap:'25px', marginLeft:'200px'}}>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                    <li>SHOPPING</li>
                    <li>PRICING</li>
                </ul>
            </div>
        </div>
    )
}

const BodyLayout = () => {
    return (
        <div style={{marginTop:'25px',padding:'15px', backgroundColor:'skyblue'}}>
            <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',gap:'50px'}}>
                <div>
                    <input type="text" style={{width:'300px', height:'30px', border:'2px solid black', borderRadius:'5px'}}></input>
                </div>
                <div>
                    <button style={{width:'100px', height:'30px', fontWeight:'bold'}}>Search</button>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'row', gap:'10px', flexWrap:'wrap', marginTop:'30px'}}>
                <CardComponent resName="Meghana Foods" foodImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjJAHHo1hzlEVdC1gxkWUvnFp5JOgrDtnaQ&s" foodName="Biryani" price='800' rating='4.5' />
                <CardComponent resName="Rameshwaram Cafe" foodImg="https://t3.ftcdn.net/jpg/00/37/81/84/360_F_37818424_iEAeI3ngDZ3pNwQ8iZvm2AIDzVDRQmhz.jpg" foodName="MasalaDosa" price='140' rating='4.3' />
                <CardComponent resName="Covai Cafe" foodImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv9P6yCSHyTSC7V98SEc16fk7BeyJ37BNh8A&s" foodName="Idli" price='90' rating='3.1' />
                <CardComponent resName="Banaras Cafe" foodImg="https://www.indianhealthyrecipes.com/wp-content/uploads/2020/08/aloo-paratha-recipe.jpg" foodName="Aloo Paratha" price='150' rating='4.7' />
            </div>
        </div>
    )
}

const CardComponent = (props)=>{
    return (
        <div>
            <div className="card-layout">
                <h3 style={{textAlign:'center'}}>{props.resName}</h3>
                <img src={props.foodImg} style={{width:'275px', height:'150px'}}></img>
                <h1>{props.foodName}</h1>
                <h2>{props.price}</h2>
                <h3>{props.rating}</h3>
            </div>
        </div>
    )
}

const FooterComponent = () => {
    return (
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', backgroundColor:'lightcoral',color:'black', padding:'25px', marginTop:'20px'}}>
            <ul style={{listStyle:'none', display:'flex', justifyContent:'space-around', gap:'175px'}}>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>CONTACT US</li>
                <li>SHOPPING</li>
            </ul>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout/>);

// Now we can use this components multiple times...
//ReactDOM.createRoot(document.getElementById("main")).render(<HeadingComponent1/>);