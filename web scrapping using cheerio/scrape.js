const request = require("request");

const cheerio = require("cheerio");

request(
  "https://www.freecodecamp.org/news/how-to-scrape-websites-with-node-js-and-cheerio/",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      const footerBottom = $(".footer-bottom");
      // console.log(footerBottom.html());
      // console.log(footerBottom.text());

      // const output = footerBottom.find("div").text();

      const output = footerBottom.children("div").next().text();

      console.log(output);
    }
  }
);
