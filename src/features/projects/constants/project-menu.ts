import { iconTech, typeProjects, ALL_ICON } from "./project-icons";

export const menuTech = [
  { 
    category: 'Ver Todos',      
    subcategories: [
      { value: null, text: 'Ver Todos', icon: ALL_ICON }
    ] 
  },
  { 
    category: 'Por Tipo',       
    subcategories: typeProjects 
  },
  { 
    category: 'Por Tecnología', 
    subcategories: iconTech 
  }        
];