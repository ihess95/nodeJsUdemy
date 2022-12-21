const requestHandler = (req, res) => {
  const url = req.url;
  //   const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Howdy</title></head>");
    res.write("<body><h1>Howdy there</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Howdy</title></head>");
    res.write("<body><ul><li>Ian</li><li>John</li><li>Steve</li></ul></body>");
    res.write("</html>");
    return res.end();
  }
};
