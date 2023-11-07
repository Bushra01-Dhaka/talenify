
import Categories from "../Categories/Categories";
import Ban from "../HomeCompo/Banner/Ban";
import Banner from "../HomeCompo/Banner/Banner";
import Subscribe from "../Subscribe/Subscribe";


const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <Ban></Ban>
            <Categories></Categories>
            <Subscribe></Subscribe>
            
        </div>
    );
};

export default Home;