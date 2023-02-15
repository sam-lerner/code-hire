module.exports = {
  logRoutingInfo: (req,res,next) => {
      console.log(`${req.method} ${req.url}`);
      next();
  },

  withAuth: (req, res, next) => {
      if (!req.session.loggedIn) {
          res.redirect('/login');
      } else {
          next();
      }
  }
}