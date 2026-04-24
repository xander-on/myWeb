import { 
  faJs, 
  faReact, 
  faAngular, 
  faNodeJs,
  faPython,
  faJava
} from '@fortawesome/free-brands-svg-icons';

import { 
  faBorderAll,
  faCodeCompare, 
  faGlobe, 
  faMobileScreenButton 
} from "@fortawesome/free-solid-svg-icons";

export const techIconMap: Record<string, any> = {
  javascript : faJs,
  typescript : faJs,
  ts         : faJs,
  node       : faNodeJs,
  react      : faReact,
  angular    : faAngular,
  python     : faPython,
  django     : faPython,
  springboot : faJava,
};

export const iconTech = Object.entries(techIconMap).map(([value, icon]) => ({
  value,
  icon,
}));

export const typeProjects = [
  { value: "web",    icon: faGlobe },
  { value: "mobile", icon: faMobileScreenButton },
  { value: "api",    icon: faCodeCompare },
];

export const ALL_ICON = faBorderAll;