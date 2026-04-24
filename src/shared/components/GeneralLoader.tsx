import loader from "@/assets/images/generals/loader.svg";

interface Props {
  size?: number
}

export const GeneralLoader = ({ size }: Props) => {
  return (
    <div className="h-screen flex justify-center items-center max-w-full">
      <img
        src={loader}
        width={size || 100}
        alt="loader"
      />
    </div>
  );
};