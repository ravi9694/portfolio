import "./about.css";
function About() {
  return (
    <>
      <div className="about-container">
      <div className="skill-title">
        <h1>About me</h1>
      </div>
        <div className="about-content">
          <div className="about-content-left ">
            <span>Hi, I'm Ravi kumar and I am a full-stack developer</span>
            <p>
              I was born in pilani, and like little Ellie, I always dreamed that
              a hurricane would take me somewhere to another country. And once I
              really ended up in another country - in China, studying at a
              business school. There I began to travel a lot around Asia in my
              free time and then moved to work in Munich.
            </p>
            <p>
              I discovered the world of low-cost airlines and began to fly
              somewhere and see the world every weekend. Being somewhere in the
              15th country, I realized that I had enough experience and
              knowledge to share with others - and so this blog appeared. Here
              you will find useful tips, my travel experiences, life hacks and
              the usual daily thoughts about everything that surrounds me.
            </p>
            <button className="btn btn2" style={{ color: "var(--textColor1)", textTransform: "uppercase" }}><ion-icon name="download-outline" style={{ color: "var(--textColor1)" }}></ion-icon> Download resume</button>
          </div>
          <div className="about-content-right">

          </div>
        </div>
        <div className="more-title">
          <h3>What I am Doing</h3>
        </div>
        <div className="more-content row">
          <div className="more-row col-lg-4 col-md-6 col-12">
            <ion-icon name="create-outline"></ion-icon>
            <h3>Web Design Full stack</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore dolorum atque dicta distinctio mollitia fuga.</p>
          </div>
          <div className="more-row col-lg-4 col-md-6 col-12">
            <ion-icon name="logo-designernews"></ion-icon>
            <h3>Web Design Full stack</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore dolorum atque dicta distinctio mollitia fuga.</p>

          </div>
        </div>

      </div>
    </>
  );
}
export default About;
