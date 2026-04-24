import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

type Props = {
  images: string [];
};

export const Gallery = ({ images }: Props) => {

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const slides = images;

  const slidesLightbox = images.map(
    img => ({src: img,})
  );

  return (
    <>
      <div className="flex flex-wrap gap-3">

        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-[220px] h-[160px] overflow-hidden 
                       border-2 border-border 
                       shadow-shadow 
                       cursor-pointer 
                       hover:-translate-x-[2px] hover:-translate-y-[2px] 
                       transition"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img
              src={slide}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}

      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slidesLightbox}
        index={index}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 3 }}
      />
    </>
  );
};