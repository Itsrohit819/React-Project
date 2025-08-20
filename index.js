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
            <FooterComponent/>
        </div>    
    )
}

const HeadingComponent = () => {
    return (
        <div style={{display:'flex',padding:'40px' , justifyContent:'space-around', alignItems:'center', backgroundColor:'black',color:'white'}}>
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