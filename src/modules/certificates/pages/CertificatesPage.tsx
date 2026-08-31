import { CertificateCard } from "@/modules/certificates/components/CertificateCard";
import { useGetCertificates } from "@/modules/certificates/hooks/useGetCertificates";



export const CertificatesPage = () => {

  const { certificates } = useGetCertificates();

  return (
    <div>
      <h3 className="my-4 text-3xl font-bold text-center">CERTIFICATES</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 gap-y-12">
        {
          certificates.map( c => <CertificateCard key={c.token} certificate={c}/> )
        }
      </div>
    </div>
  )
}
