import ReactMarkdown           from 'react-markdown';
import { Tag }      from "@/shared/components"
import { useEffect, useState } from "react";
import { useSearchParams }     from "react-router-dom";
import Lightbox from 'yet-another-react-lightbox';
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { ModalContainer } from '@/shared/components/ModalContainer';
import { certificatesService } from '../services/certificatesService';
import type { Certificate } from '../interfaces/certificate.interface';

export const CertificateViewer = () => {

  const [searchParams]                = useSearchParams();
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [open, setOpen]               = useState(false);

  const getCertificado = async () => {
    const slug = searchParams?.get('view');
    if (!slug) return;

    const responseCertificado = await certificatesService.getBySlug(slug);
    if (!responseCertificado) return;
    setCertificate(responseCertificado);
  }

  useEffect(() => {
    getCertificado();
  }, [searchParams]);

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
