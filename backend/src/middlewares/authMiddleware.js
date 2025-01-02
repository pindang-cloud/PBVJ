exports.checkRole = (roles) => (req, res, next) => {
  // console.log('Request Body:', req.body);
  // const { role } = req.body;
  // if (!role) {
  //   return res.status(400).json({ message: 'Role is required' });
  // }
  const role = "ADMIN";
  
  if (!roles.includes(role)) {
    return res.status(403).json({ message: 'Access forbidden' });
  }

  next();
};
