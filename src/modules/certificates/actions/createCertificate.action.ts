import { backendApi } from "@/config/api/backendApi";

export interface CreateCertificateCommand {
  name        : string;
  link        : string;
  description : string;
  date        : string;
  image       : string;
  tags        : string[];
}

export const createCertificateAction = async (command: CreateCertificateCommand): Promise<void> => {

  try{
    const { data } = await backendApi.post("/certificates", command);

    if (!data) 
      throw "Error al crear el certificado";

  }catch(err){
    console.log(err);
    throw "Error al crear el certificado";
  }
}
