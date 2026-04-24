import imgEnergia      from '/src/assets/images/bannerAnimated/energia.png';
// import imgGo        from '/src/assets/images/bannerAnimated/go.png';
import imgMan          from '/src/assets/images/bannerAnimated/man.png';
import imgLogo         from '/src/assets/images/bannerAnimated/logo.png';
import imgPowerCircle1 from '/src/assets/images/bannerAnimated/power-circle-1.png';
import imgPowerCircle2 from '/src/assets/images/bannerAnimated/power-circle-2.png';
import './BannerAnimated.css';

export const BannerAnimated = () => {
  return (
    <section className="main-banner">
      <div className="grid-container">
        <div className="content">
            
          <div className="countdown flex">
          </div>

          <div className="form-container s-center">
          </div>
        </div>

        <div className="graphic">
          <img src={imgMan} alt="tech man" className="graphic-man"/>
          {/* <img src={imgGo} alt="go icon" className="graphic-go absolute"/> */}
          <div className="graphic-circles absolute">
            <img src={imgLogo} alt="edteam logo" className="graphic-logo absolute"/>
            <img src={imgPowerCircle1} alt="" className="graphic-circle-1 absolute"/>
            <img src={imgPowerCircle2} alt="" className="graphic-circle-2 absolute"/>
            <img src={imgEnergia} alt="" className="graphic-energy absolute"/>
          </div>
        </div>
      </div>

    </section>
  );
}
