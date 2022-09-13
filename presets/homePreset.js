const homePreset = (
  {
    incredible_products,
    popular_brands,
    best_selling_products,
    main_categories,
    recommendation_sub_categories,
    header_banners
  },
  mobile,
  laptop
) => {
  return {
    incredible: {
      loading: false,
      error: '',
      url: 'incredible-offers/products/?',
      type: 'incredible',
      products: [
        ...incredible_products.products.map((product) => {
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
                selling_price: product.default_variant.price?.selling_price,
                rrp_price: product.default_variant.price?.rrp_price,
                order_limit: product.default_variant.price?.order_limit,
                is_incredible: product.default_variant.price?.is_incredible,
                discount_percent:
                  product.default_variant.price?.discount_percent,
              },
            },
          };
        }),
      ],
      pager: { current_page: 1, total_pages: 5 },
    },

    bestSelling: {
      loading: false,
      error: '',
      url: 'promotion-search/?promotion_types%5B0%5D=incredible_offer&promotion_types%5B1%5D=promotion&',
      type: 'bestSelling',
      products: [
        ...best_selling_products.products.map((product) => {
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
                selling_price: product.default_variant.price?.selling_price,
                rrp_price: product.default_variant.price?.rrp_price,
                order_limit: product.default_variant.price?.order_limit,
                is_incredible: product.default_variant.price?.is_incredible,
                discount_percent:
                  product.default_variant.price?.discount_percent,
              },
            },
          };
        }),
      ],
      pager: { current_page: 1, total_pages: 5 },
    },
    mobile: {
      loading: false,
      error: '',
      url: 'categories/mobile-phone/search/?',
      type: 'mobile',
      products: [
        ...mobile.data.products.map((product) => {
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
                selling_price: product.default_variant.price?.selling_price,
                rrp_price: product.default_variant.price?.rrp_price,
                order_limit: product.default_variant.price?.order_limit,
                is_incredible: product.default_variant.price?.is_incredible,
                discount_percent:
                  product.default_variant.price?.discount_percent,
              },
            },
          };
        }),
      ],
      pager: mobile.data.pager,
    },
    laptop: {
      loading: false,
      error: '',
      url: 'categories/laptop/search/?',
      type: 'laptop',
      products: [
        ...laptop.data.products.map((product) => {
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
                selling_price: product.default_variant.price?.selling_price,
                rrp_price: product.default_variant.price?.rrp_price,
                order_limit: product.default_variant.price?.order_limit,
                is_incredible: product.default_variant.price?.is_incredible,
                discount_percent:
                  product.default_variant.price?.discount_percent,
              },
            },
          };
        }),
      ],
      pager: laptop.data.pager,
    },
    popularBrands: [
      ...popular_brands.brands.map((brand) => {
        return {
          id: brand.id,
          title_fa: brand.title_fa,
          logo: {
            url: brand.logo.url,
          },
        };
      }),
    ],
    recommendationSubCategories: recommendation_sub_categories,
    categories: [
      ...main_categories.categories.slice(0, 8).map((category) => {
        return {
          id: category.id,
          title_fa: category.title_fa,
          code: category.code,
          logo: {
            url: category.logo.url,
          },
        };
      }),
    ],
    banners: [
      ...header_banners.map(item => {
        return {
          id: item.id,
          image: item.image,
          title: item.title
        }
      })
    ]
  };
};

export default homePreset;

/*
  why did i do these things? bcuz of optimization
  the size of the page before optimization was 302KB and now it is only 45KB :)
*/
