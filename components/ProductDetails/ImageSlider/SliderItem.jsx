import Image from "next/image";

//Styled Components
import { Item } from "./ImageSlider.style";


const SliderItem = ({ source, alt }) => {
  return (
    <Item>
      <Image
        src={source}
        alt={alt}
        placeholder="blur"
        blurDataURL={source}
        objectFit="contain"
        layout="fill"
      />
    </Item>
  );
};

export default SliderItem;
