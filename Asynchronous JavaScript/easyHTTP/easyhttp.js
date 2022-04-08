function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Making a get request

easyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);

  let self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};

// Making a post http request
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);

  // As we are sending data, we need to tell the server what kind of data/content are we sending so this is why we use setRequestHeader in which we explained the type of content and the type of data which is json format.

  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;

  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Making a put request

easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true);

  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;

  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

easyHTTP.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);

  let self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, "POST DELETED");
    } else {
      callback("Error :" + self.http.status);
    }
  };

  this.http.send();
};
