export const apiRequest = (url, params = {}) => {
  const options = {
    ...params,
    credentials: "include", 
  };
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:5000/api${url}`, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Full Backend Data:", data);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
