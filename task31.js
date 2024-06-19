// Q31: No Users: Add an if test to Exercise 28 to make sure the list of users is
//  not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure 
// the correct message is printed.
var users = ["Ali", 'Saad', ',M.jibran'];
if (users.length === 0) {
    console.log("we need to find some users");
}
else {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user === "Admin") {
            console.log(" Hello admin would you like to see some status report");
        }
        else {
            console.log("hello ".concat(user, ", thank u for logging in again"));
        }
    }
}
