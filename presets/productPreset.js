const productPreset = ({ product, recommendations }) => {
  return {
    product: {
      id: product.id,
      mainDetails: {
        title: product.title_fa,
        colors: product.colors?.slice(0, 5),
      },
      status: product.status,
      brand: product.brand,
      catagory: product.category,
      images: product.images?.list?.slice(0, 10),
      rating: product.rating,
      price: product.default_variant?.price ? product.default_variant.price : null,
      videos: product.videos,
      introduce: product.review.description ? product.review.description : null,
      options: product.review.attributes ? product.review.attributes : null,
      information: product.specifications[0].attributes,
      comments: product.last_comments,
    },
    recommendations: recommendations.related_products.products,
  };
};

export default productPreset;
