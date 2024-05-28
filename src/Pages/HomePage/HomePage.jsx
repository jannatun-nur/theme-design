import Board from "../../Board/Board";
import Feature from "../../Feature/Feature";
import Scanner from "../../Scanner/Scanner";

const HomePage = () => {
  return (
    <div className="lg:px-3 md:px-2 px-2 min-h-screen bg-white">
      <Board/>
     
      <Scanner/>
      <Feature/>
      
    </div>
  );
};

export default HomePage;
