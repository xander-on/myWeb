
import urlGif from "@/assets/images/generals/patrick-start.webp";


export const NotFoundPage = () => {

  return (
    <main style={{ minHeight: "calc(100vh - 270px)" }}>

      <div className="mx-auto" style={{ width: "600px" }} >
        <img 
          src={urlGif} 
          alt="pagina en construccion"  
          className="w-full"
        />
      </div>

      <h4 className="mt-4 text-2xl text-center">Página no encontrada</h4>
    </main>
  );
}
