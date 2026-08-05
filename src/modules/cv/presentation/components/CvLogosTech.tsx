
import reactImg from '@/assets/images/bannerTech/icon-react.svg';
import nodeImg  from '@/assets/images/bannerTech/icon-node.svg';
import java     from '@/assets/images/bannerTech/icon-java.svg';
import cSharp   from '@/assets/images/bannerTech/icon-cSharp.svg';
import python   from '@/assets/images/bannerTech/icon-python.svg';
import ai       from '@/assets/images/bannerTech/icon-ai.svg';

//todo agregar nestjs
const logosTech = [
  reactImg,
  nodeImg,
  cSharp,
  python,
  java,
  ai
];

export const CvLogosTech = () => {
  return (
    <div className="flex justify-center md:justify-end flex-nowrap">
      {logosTech.map((logo) => (
        <div key={logo}>
          <img
            src={logo}
            className="
              h-15 md:h-25 mx-1.5
              filter-[invert(64%)_sepia(89%)_saturate(430%)_hue-rotate(100deg)_brightness(95%)_contrast(90%)]
              hover:filter-none hover:scale-110
            "
          />
        </div>
      ))}
    </div>
  );
};