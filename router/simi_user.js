//simi ,相似关注的用户
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    songid: req.query.id
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/discovery/simiUser",
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
