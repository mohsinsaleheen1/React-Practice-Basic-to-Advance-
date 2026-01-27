export const apiRequest = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/api${url}`, params)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
