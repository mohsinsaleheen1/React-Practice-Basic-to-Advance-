export const apiRequest = ({ url, params = {} }) => {
  console.log(url, params);
  return new Promise((resolve, reject) => {
    fetch(url, params)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        reject(error);
      });
  });
};
