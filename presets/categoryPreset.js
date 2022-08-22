const categoryPreset = ({ products, filters, pager, seo, category }) => {
  return {
    title: category.title_fa,
    loading: false,
    error: '',
    products: [
      ...products.map((product) => {
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
    pager: pager,
    seo: {
      title: seo.open_graph.title,
    },
  };
};

export default categoryPreset;

/*
    why did i do these things? bcuz of optimization
    the size of the page before optimization was 302KB and now it is only 45KB :)
  */
