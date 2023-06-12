import Banner from "../Banner/Banner";
import Exhibitions from "../Exhibitions/Exhibitions";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Exhibitions></Exhibitions>
        </div>
    );
};

export default Home;