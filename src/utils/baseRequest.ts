export const baseRequest = async <T>(
  url: string,
  handleRequest: (response: T) => void,
  handleRequestError: (error: string) => void
) => {
  await fetch(`https://api.github.com/users/${url}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: process.env.TOKEN || ""
    }
  })
    .then(async response => {
      const data = await response.json();
      if (!data.massage) {
        handleRequest(data);
      } else {
        handleRequestError(data.message);
      }
    })
    .catch(async error => {
      const data = await error.json();
      handleRequestError(data.message);
    });
};
