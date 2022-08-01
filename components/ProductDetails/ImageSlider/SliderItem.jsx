import Image from "next/image";

//Styled Components
import { Item } from "./ImageSlider.style";

const myLoader = ({ src, width, quality }) => {
  return `https://dkstatics-public.digikala.com/digikala-products/3d906eb46e6f52eddfbc0f2f173e90602e655032_1659336008.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60`
}

const SliderItem = ({ source, alt }) => {
  return (
    <Item>
      <Image src={source} alt={alt} placeholder="blur" blurDataURL={source} objectFit="cover" height={700} width={700} />
    </Item>
  );
};

export default SliderItem;
