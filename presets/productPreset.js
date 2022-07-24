const productPreset = ({ product, recommendations }) => {
  return {
    product: {
      id: product.id,
      mainDetails: {
        title: product.title_fa,
        colors: product.colors.slice(0, 5),
      },
      brand: product.brand,
      catagory: product.category,
      images: product.images.list,
      rating: product.rating,
      price: product.variants[0].price,
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
