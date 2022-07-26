const productPreset = ({ product, recommendations, seo }) => {
  return {
    product: {
      id: product.id,
      mainDetails: {
        title: product.title_fa,
        colors: product.colors?.slice(0, 5),
      },
      status: product.status,
      suggestion: product.suggestion,
      brand: product.brand,
      category: product.category,
      images: product.images?.list?.slice(0, 10),
      rating: product.rating,
      price: product.default_variant?.price ? product.default_variant.price : null,
      videos: product.videos,
      introduce: product.review.description ? product.review.description : null,
      options: product.review.attributes ? product.review.attributes : null,
      information: product.specifications[0].attributes,
      comments: {
        loading: false,
        error: '',
        comments: product.last_comments,
        pager: {current_page: 1, total_pages: 3}
      },
    },
    recommendations: [
      ...recommendations.related_products.products.map((product) => {
        return {
          id: product.id,
          title_fa: product.title_fa,
          status: product.status,
          images: {
            main: {
              url: product.images.main.url,
            },
          },
          default_variant: {
            price: {
              selling_price: product.default_variant.price.selling_price,
              rrp_price: product.default_variant.price.rrp_price,
              order_limit: product.default_variant.price.order_limit,
              is_incredible: product.default_variant.price.is_incredible,
              discount_percent: product.default_variant.price.discount_percent,
            },
          },
        };
      }),
    ],
    seo: {
      title: seo.open_graph.title,
      image: seo.open_graph.image,

    }
  };
};

export default productPreset;
