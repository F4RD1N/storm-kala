export const dataPusher = (url, dispatcher) => {
  return {
    endpoint: (page) =>
      `/api/${url}page=${page}`,
    action: (payload) => dispatcher(payload),
    dataPath: (path) => path.data?.data.products,
  };
};
