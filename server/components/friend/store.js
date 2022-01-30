const Friend = require("./model");

const CanSendFriendRequest = (userId1, userId2) => {
  return new Promise((resolve, reject) => {
    Friend.find()
      .or([
        { creatorID: userId1, friendID: userId2 },
        { creatorID: userId2, friendID: userId1 },
      ])
      .then((result) => {
        if ((result.length = 0)) resolve(true);
        else {
          const status = result[0].status;
          if (status == "rejected") resolve(true);
          else {
            if (status == "pending")
              reject("You already have a pending request");
            else if (status == "accepted")
              reject("You are already his/her friend");
            else reject("Unexpected error");
          }
        }
      })
      .catch(reject);
  });
};

module.exports = { CanSendFriendRequest };
