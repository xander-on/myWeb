import { Link } from "react-router-dom";
// import { Tag } from "@/modules/shared/components/Tag";
import type { Certificate } from "@/modules/certificates/interfaces/certificate.interface";

interface Props{
  certificate: Certificate
}

export const CertificateCard = ({ certificate }: Props) => {
  return (
    <Link to={`/certificates?view=${certificate.slug}`}>

      <div className="relative h-50 overflow-hidden group border border-border shadow-shadow">
        
        <img
          src={certificate.image}
          alt={certificate.name}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent" />

        <div className="absolute bottom-2 left-0 right-0 p-3 text-green-400 text-bold ">
          <h6 className="text-sm font-semibold">
            {certificate.name}
          </h6>
        </div>
      </div>
    </Link>
  );
};
