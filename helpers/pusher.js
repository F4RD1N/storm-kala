export const dataPusher = (url, dispatcher, dataPath = "products") => {
  return {
    endpoint: (page) => `${url}page=${page}`,
    action: (payload) => dispatcher(payload),
    dataPath: (path) => path.data?.data[dataPath],
  };
};

//url => the endpoint of api need to fetch
// dispatcher => the action need to dispatch
// dataPath => path of data. e.g. data: {products: [...]}. the path is products here!
