export const fetchPost = async ({ url, body = {}, headers = {} }) => {
    try {
      return await fetch(url, {
        body: body,
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      return error;
    }
  };
  
  export const fetchGet = async ({ url, headers = {}, query = {} }) => {
    try {
      return await fetch(url, {
        method: 'GET',
        headers: {
          ...headers,
        },
      });
    } catch (error) {
      console.error(error)
      throw error;
    }
  };