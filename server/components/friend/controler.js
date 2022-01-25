const { GetOneUser } = require("../user/store");
const { success, error } = require("../../utils/response");
const CreateFriendRequest = (req, res) => {
  const { CreatorId, friendUsername } = req.body;
  GetOneUser({ Username: friendID })
    .then((result) => {
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
