import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useModalContainer = (queryParam: string) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [isVisible, setIsVisible]       = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(()=>{
    const value = searchParams?.get(queryParam);

    setIsVisible(Boolean(value));
  }, [searchParams, queryParam]);


  const onCloseModal = () => {
    setIsVisible(false);

    // Remove query param
    if(!searchParams) return;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete(queryParam);
    setSearchParams(newSearchParams);
    navigate({ search: newSearchParams.toString() });
  }

  return { isVisible, onCloseModal }
}
