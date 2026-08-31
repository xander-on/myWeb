import { backendApi } from "@/config/api/backendApi";
import type { UploadFileResponse } from "@/modules/shared/files/upload-file.response";



export const uploadFileAction = async (file: File)
: Promise<UploadFileResponse> => {

  try{
    const formData = new FormData();
    formData.append("file", file);

    const { data } = await backendApi.post<UploadFileResponse>("/files", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (!data) 
      throw "Error al subir la imagen";

    return data;
  }catch(err){
    console.log(err);
    throw "Error al subir la imagen";
  }
}
