export const dataPusher = (url, dispatcher) => {
  return {
    endpoint: (page) =>
      `https://reverse-vercel.vercel.app/v1/${url}page=${page}`,
    action: (payload) => dispatcher(payload),
    dataPath: (path) => path.data?.data.products,
  };
};
