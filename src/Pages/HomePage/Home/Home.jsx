
import Categories from "../Categories/Categories";
import Ban from "../HomeCompo/Banner/Ban";
import Banner from "../HomeCompo/Banner/Banner";
import Subscribe from "../Subscribe/Subscribe";
import CompanySlide from "./CompanySlide/CompanySlide";


const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <Ban></Ban>
            <CompanySlide></CompanySlide>
            <Categories></Categories>
           
            <Subscribe></Subscribe>
            
        </div>
    );
};

export default Home;