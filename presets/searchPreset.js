const searchPreset = (results) => {
    return {
        filters: results.data.filters,
        products: results.data.products,
        sort: results.data.sort,
        sortOptions: results.data.sort_options,
        didYouMean: results.data.did_you_mean,
        relatedWords: results.data.related_search_words,
        searchInstead: results.data.search_instead,
        resultType: results.data.result_type,
        pager: results.data.pager,
  }
  
}
  export default searchPreset;
  