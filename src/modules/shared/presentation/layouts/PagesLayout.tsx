import { Footer, Header } from "@/modules/shared/presentation/components";
import { Outlet } from "react-router-dom";
// import { Background } from "@/modules/shared/presentation/components";

interface PagesLayoutProps {
  // children: ReactNode;
  fluid?: boolean;
}

export const PagesLayout = ({ fluid=false }:PagesLayoutProps) => {

  const container = fluid ? 'max-w-full' : 'max-w-6xl';
  
  return (
    <>
      <Header />
        
      <div 
        className={`${container} min-height-800 p-4 mx-auto`}
        style={{ position: 'sticky', zIndex: 10, minHeight: 'calc(100vh - 169px)' }}
      >
        <Outlet />
      </div>
      
      <Footer />
    </>
  );
}
