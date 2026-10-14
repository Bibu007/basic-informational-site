const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request recieved");

  let path = "./views/";

  res.setHeader("content-type", "text/html");

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/contact-me":
      path += "contact-me.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Server is listening");
});

/*

const server = createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost:8082");

  if (url.pathname === "/") {
    try {
      const html = await readFile("./index.html", "utf8");

      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
      });

      res.end(html);
    } catch (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain; charset=utf-8",
      });

      res.end("Error loading HTML file");
    }
  } else {
    res.writeHead(404, {
      "Content-Type": "text/plain; charset=utf-8",
    });

    res.end("404 - Page Not Found");
  }

  if (url.pathname === "/about") {
    try {
      const html = await readFile("./about.html", "utf8");

      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
      });

      res.end(html);
    } catch (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain; charset=utf-8",
      });

      res.end("Error loading HTML file");
    }
  } else {
    res.writeHead(404, {
      "Content-Type": "text/plain; charset=utf-8",
    });

    res.end("404 - Page Not Found");
  }

  if (url.pathname === "/contact-me") {
    try {
      const html = await readFile("./contact-me.html", "utf8");

      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
      });

      res.end(html);
    } catch (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain; charset=utf-8",
      });

      res.end("Error loading HTML file");
    }
  } else {
    res.writeHead(404, {
      "Content-Type": "text/plain; charset=utf-8",
    });

    res.end("404 - Page Not Found");
  }
});

server.listen(8083, () => {
  console.log("Server running at http://localhost:8083");
});

*/
