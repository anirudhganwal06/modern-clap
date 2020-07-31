module.exports = {
  notifications: (args, ctx) => {
    if (!ctx.req.isAuth) return null;

    if (ctx.req.role === 'customer') return null;

    let count = 0;
    const data = ctx.req.user.notifications
    .reverse()
    .slice(0, 20)
    .map(notification => {
      if (!notification.seen)
      count++;
      return {
        ...notification._doc,
        requestId: notification.requestId.toString()
      }
    });
    
    return { data, count };
  },

  markAsRead: async (args, ctx) => {
    if (!ctx.req.isAuth) return false;

    if (ctx.req.role === 'customer') return false;

    for(let i = ctx.req.user.notifications.length - 1; i >= 0; i--)
      if (ctx.req.user.notifications[i].id === args.id) {
        while (i >= 0 && !ctx.req.user.notifications[i].seen)
          ctx.req.user.notifications[i--].seen = true;

        await ctx.req.user.save();
        return true;
      }
    
    return false;
  }
};
