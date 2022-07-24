import Image from "next/image";

//Styled Components
import { Item } from "./ImageSlider.style";

const SliderItem = ({ source }) => {
  return (
    <Item>
      <Image src={source} objectFit="cover" height={700} width={700} />
    </Item>
  );
};

export default SliderItem;
