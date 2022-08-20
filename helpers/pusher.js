export const dataPusher = (url, type) => {
  return {
    endpoint: (page) => `${url}page=${page}`,
    type,
  };
};

//url => the endpoint of api need to fetch
// type => the name of the property of the state to push data to it
