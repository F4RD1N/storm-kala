export const dataPusher = (url, dispatcher) => {
  return {
    endpoint: (page) =>
      `http://localhost:3000/api/${url}page=${page}`,
    action: (payload) => dispatcher(payload),
    dataPath: (path) => path.data?.data.products,
  };
};
