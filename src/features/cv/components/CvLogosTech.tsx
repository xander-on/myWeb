
import reactImg from '@/assets/images/bannerTech/icon-react.svg';
import nodeImg  from '@/assets/images/bannerTech/icon-node.svg';
import java     from '@/assets/images/bannerTech/icon-java.svg';
import cSharp   from '@/assets/images/bannerTech/icon-cSharp.svg';
import python   from '@/assets/images/bannerTech/icon-python.svg';
import ai       from '@/assets/images/bannerTech/icon-ai.svg';
import type { CSSProperties } from 'react';


//todo agregar nestjs
const logosTech = [
  reactImg,
  nodeImg,
  cSharp,
  python,
  java,
  ai
];


// .logos-tech{
//   display: flex;
//   justify-content: end;
//   flex-wrap: nowrap;

//   img{
//     height: 100px;
//     filter: brightness(0) saturate(1.2) invert(63%) sepia(96%) saturate(5000%) hue-rotate(90deg);
//   }


//   @media (max-width: 768px) {
//     justify-content: center;
//     img{
//       height: 60px;
//       margin: 0 5px;
//     }
//   }
// }



export const CvLogosTech = () => {
  return (
    <div className="flex justify-center md:justify-end flex-nowrap">
      {logosTech.map((logo) => (
        <div key={logo}>
          <img
            src={logo}
            alt="logo"
            className="
              h-[60px] md:h-[100px]
              mx-[5px] md:mx-0
              [filter:brightness(0)_saturate(1.2)_invert(63%)_sepia(96%)_saturate(5000%)_hue-rotate(90deg)]
            "
          />
        </div>
      ))}
    </div>
  );
};