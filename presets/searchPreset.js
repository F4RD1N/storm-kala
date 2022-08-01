const searchPreset = (results) => {
  return {
    filters: results.data.filters,
    products: [
      ...results.data.products.map((product) => {
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
              selling_price: product?.default_variant?.price?.selling_price,
              rrp_price: product?.default_variant?.price?.rrp_price,
              order_limit: product?.default_variant?.price?.order_limit,
              is_incredible: product?.default_variant?.price?.is_incredible,
              discount_percent: product?.default_variant?.price?.discount_percent,
            },
          },
        };
      }),
    ],
    sort: results.data.sort,
    sortOptions: results.data.sort_options,
    didYouMean: results.data.did_you_mean,
    relatedWords: results.data.related_search_words,
    searchInstead: results.data.search_instead,
    resultType: results.data.result_type,
    pager: results.data.pager,
  };
};
export default searchPreset;
