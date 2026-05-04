
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
// [filter:brightness(0)_saturate(1.2)_invert(63%)_sepia(96%)_saturate(5000%)_hue-rotate(90deg)]

export const CvLogosTech = () => {
  return (
    <div className="flex justify-center md:justify-end flex-nowrap">
      {logosTech.map((logo) => (
        <div key={logo}>
          <img
            src={logo}
            alt="logo"
            className="
              h-15 md:h-25
              mx-1.25 md:mx-0
              filter-[brightness(0)_saturate(1.2)_invert(63%)_sepia(96%)_saturate(5000%)_hue-rotate(90deg)]
            "
          />
        </div>
      ))}
    </div>
  );
};