import { Header } from "@/shared/components";
import { Outlet } from "react-router-dom";
// import { Background } from "@/shared/components";

interface PagesLayoutProps {
  // children: ReactNode;
  fluid?: boolean;
}

export const PagesLayout = ({ fluid=false }:PagesLayoutProps) => {

  const container = fluid ? 'container-fluid': 'container';
  return (
    <>
      <Header />
        
      <div 
        className={`${container} min-height-800 py-5`}
        style={{ position: 'sticky', zIndex: 10, minHeight: 'calc(100vh - 169px)' }}
      >
        <Outlet />
      </div>
      {/* <Background/> */}
      {/* <Footer /> */}
    </>
  );
}
