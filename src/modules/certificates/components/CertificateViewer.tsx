import { useState }  from "react";
import { useSearchParams }      from "react-router-dom";
import ReactMarkdown            from 'react-markdown';
import Zoom                     from "yet-another-react-lightbox/plugins/zoom";
import { ModalContainer }  from "@/modules/shared/presentation/components/ModalContainer"
import { Tag }             from "@/modules/shared/presentation/components/Tag"
import Lightbox                 from 'yet-another-react-lightbox';
import { useGetCertificate }    from "@/modules/certificates/hooks/useGetCertificate";
import "yet-another-react-lightbox/styles.css";

export const CertificateViewer = () => {

  const [searchParams]  = useSearchParams();
  const [open, setOpen] = useState(false);
  const slug            = searchParams.get("view");
  const { certificate } = useGetCertificate(slug);

  if (!certificate) return null;

  return (
  <>
    <ModalContainer queryParam="view" size="xl">
      <div
        className='flex flex-col md:flex-row rounded overflow-hidden'>
          
        {/* Imagen */}
        <div className="w-150 cursor-pointer flex items-center">
          <img
            onClick={() => setOpen(true)}
            src={certificate?.image}
            alt={certificate?.name}
            className="w-full object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="md:w-1/3 px-6 overflow-y-auto">
          <h4 className="text-lg font-bold">
            {certificate.name}
          </h4>

          <div className="flex flex-wrap gap-2 mt-2">
            {certificate.tags.map((t) => (
              <Tag key={t} nameTech={t} />
            ))}
          </div>

          <div className="mt-4">
            <h6 className="font-semibold mb-1">Descripción:</h6>
            <ReactMarkdown>
              {certificate.description}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </ModalContainer>

    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={[{ src: certificate?.image }]}
      index={0}
      plugins={[Zoom]}
      zoom={{ maxZoomPixelRatio: 3 }}
    />
  </>
);
}
