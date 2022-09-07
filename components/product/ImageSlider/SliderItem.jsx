import Image from "next/image";
import propTypes from 'prop-types'

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

//props types
SliderItem.propTypes = {
  source: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};

export default SliderItem;
