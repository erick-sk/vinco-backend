// when a new customer is created
exports.newCustomer = (req, res, next) => {
  // TODO : Insert in the database

  res.json({ message: 'Customer was successfully added' });
};
