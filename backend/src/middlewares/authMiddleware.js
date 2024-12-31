exports.checkRole = (roles) => (req, res, next) => {
    const { role } = req.body;
    if (!roles.includes(role)) {
      return res.status(403).json({ message: 'Access forbidden' });
    }
    next();
};
  