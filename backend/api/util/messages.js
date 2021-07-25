/* -----------------------------------------------------------------------
   * @ description : Main module to include all the messages used in project.
----------------------------------------------------------------------- */

module.exports = {
    accept: 'Accepted',
    confirm: 'Confirmed',
    say: function (text) {
        return `${text}`;
    },
    systemError: 'Technical error ! Please try again later.',
    registerSuccess: 'Your account has been registered successfully.',
    tokenExpired: 'Session Expired.',
    success: 'Success',
    emailAlreadyExist: 'Email already exists, Please try again with a different email',
    emailNotExist: 'Email and Password is not correct'
};