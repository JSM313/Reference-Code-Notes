class EasyHTTP {
  // Make HTTP get request
  async get(url) {
    const response = await fetch(url);

    const resData = await response.json();

    return resData;
  }

  // Make an http post request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return responseData;
  }

  // Making a put request
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return responseData;
  }

  // Making a delete request
  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });

    const responseData = "Resource Deleted...";
    return responseData;
  }
}
