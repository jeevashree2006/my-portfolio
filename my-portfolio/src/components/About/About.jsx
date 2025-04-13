import "./About.css";

const About = () => {
  return (
    <div className="About-1" style={{ width: window.innerWidth - 200 }}>
      <video
        autoPlay
        muted
        loop
        src="Making_video.mp4"
        className="Myvideo"
        // width={200}
      />
    </div>
  );
};
export default About;
