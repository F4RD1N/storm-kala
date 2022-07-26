export const dataPusher = (url, dispatcher) => {
  return {
    endpoint: (page) =>
      `/${url}page=${page}`,
    action: (payload) => dispatcher(payload),
    dataPath: (path) => path.data?.data.products,
  };
};
