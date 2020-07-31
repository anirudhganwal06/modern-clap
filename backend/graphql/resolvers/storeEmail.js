const StoredEmail = require('../../models/storedEmail');

exports.storeEmailForNotifications = async args => {
  try {
    const notificationEmails = await StoredEmail.findOne({
      name: 'notifications'
    });
    let emailAlreadyExists = false;
    for (let email of notificationEmails.emails) {
      if (email.email === args.email && email.role === args.role) {
        emailAlreadyExists = true;
        break;
      }
    }
    if (emailAlreadyExists) return 'Email already registered as ' + args.role;

    notificationEmails.emails.push({
      email: args.email,
      role: args.role
    });
    await notificationEmails.save();
    return 'Email registed as ' + args.role;
  } catch (err) {
    return 'Something went wrong!';
  }
};
