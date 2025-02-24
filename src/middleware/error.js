const { HttpError } = require("http-errors");

module.exports = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof HttpError) {
    return res
      .status(err.status)
      .send({ name: err.name, message: err.message });
  }

  if (err.code === 401) {
    console.error(`Unauthorized access: ${err.message}`, err);
    return res.send(err);
  }

  console.error(err.message, err);
  console.log(err);

  return res
    .status(501)
    .send("Something failed on the server. please try again later.");
};