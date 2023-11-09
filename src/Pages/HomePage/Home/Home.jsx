
import Categories from "../Categories/Categories";
import Features from "../Features/Features";
import Ban from "../HomeCompo/Banner/Ban";
import Subscribe from "../Subscribe/Subscribe";
import CompanySlide from "./CompanySlide/CompanySlide";


const Home = () => {
    return (
        <div>
            <Ban></Ban>
            <CompanySlide></CompanySlide>
            <Categories></Categories>
            <Features></Features>
            <Subscribe></Subscribe>
            
        </div>
    );
};

export default Home;