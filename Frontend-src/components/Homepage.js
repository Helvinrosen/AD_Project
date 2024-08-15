import PrimarySearchAppBar from "./Dashboad/Header";
import "./Dashboad/home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import UncontrolledExample from "./Dashboad/Slides";
import Footer from "./Dashboad/Footer";
import ScrollReveal from "./Dashboad/R-Content";
import Details from "./Dashboad/Detail";

function Homepage()
{
    return(
        
        <div>
            <div>

        <PrimarySearchAppBar/>
            </div>
            <div className="homecontainer">
                <UncontrolledExample/>

            </div>
            <div>
                <Details/>
            </div>
            <div>
            <ScrollReveal/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
        
        
            
       
        
    );
}
export default Homepage;
