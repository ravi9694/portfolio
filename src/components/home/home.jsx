import "./home.css";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <>
     <div>
        <div className="title-hide" id="hideDiv">
          <div className="px-2">
             <span className="home-subtitle">Welcome to my portfolio</span>
          </div>
        </div>
        <div className="home-container">
        <div className="home-left-container">
         
          <h1>
            <span className="home-title-name">Ravi kumar</span>
          </h1>
          <Typewriter
            options={{
              strings: ["Developer.", "Professional Coder.", "Designer."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="home-right-container">
          <div className="image-container">
            <div className="image-inner-container">
              <img src={"https://picsum.photos/280/340"} alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
