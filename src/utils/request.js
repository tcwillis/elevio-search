export const makeRequest = (url, options) => {
  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch results");
    }
    return response.json();
  });
};
