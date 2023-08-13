const notFound = (req, res) => req.status(404).send("Route does not exist");

module.exports = notFound;
