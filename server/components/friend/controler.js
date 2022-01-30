const { GetOneUser } = require("../user/store");
const { success, error } = require("../../utils/response");
const { CanSendFriendRequest } = require("./store");
const CreateFriendRequest = (req, res) => {
  const { friendUserName } = req.body;
  const { _id } = req.user;
  GetOneUser({ UserName: friendUserName })
    .then((result) => {
      CanSendFriendRequest(result._id, _id);
      //You found the user who needs to recive the request
      //You verify if the user is not a friend or have a friend request of the creator of the request
      //Create a Friend on pending state
    })
    .catch(() => {
      error(req, res, "user not found", 404);
    });
};

const AcceptFriendRequest = (req, res) => {};

const RejectFriendRequest = (req, res) => {};

const GetFriendRooms = (req, res) => {};

module.exports = {
  CreateFriendRequest,
  AcceptFriendRequest,
  RejectFriendRequest,
  GetFriendRooms,
};
