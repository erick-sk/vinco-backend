// when a new customer is created
exports.newCustomer = (req, res, next) => {
  // TODO : Insert in the database
  console.log(req.body);
  res.json({ message: 'Customer was successfully added' });
};
