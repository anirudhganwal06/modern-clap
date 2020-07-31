const { transformCustomer, transformProvider } = require('./transformers');

exports.isAuthenticated = async (args, ctx) => {
  if (ctx.req.isAuth)
    if (ctx.req.role === 'customer') {
      return transformCustomer(ctx.req.user);
    } else if (ctx.req.role === 'provider') {
      return transformProvider(ctx.req.user);
    }

  return null;
};

exports.logout = (args, ctx) => {
  ctx.res.clearCookie('jwt');
  console.log('Logged Out');
  return true;
};
