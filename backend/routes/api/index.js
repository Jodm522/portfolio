const router = require("express").Router();
module.exports = router;

router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

// ...
// backend/routes/api/index.js
// ...

// GET /api/set-token-cookie
const asyncHandler = require("express-async-handler");
const { setTokenCookie } = require("../../utils/auth.js");
const { User } = require("../../db/models");
router.get(
  "/set-token-cookie",
  asyncHandler(async (req, res) => {
    const user = await User.findOne({
      where: {
        username: "Demo-lition",
      },
    });
    setTokenCookie(res, user);
    return res.json({ user });
  })
);

// ...
// backend/routes/api/index.js
// ...

// GET /api/restore-user
const { restoreUser } = require("../../utils/auth.js");
router.get("/restore-user", restoreUser, (req, res) => {
  return res.json(req.user);
});

// ...
// backend/routes/api/index.js
// ...

// GET /api/require-auth
const { requireAuth } = require("../../utils/auth.js");
const items = require("../../db/models/items.js");
router.get("/require-auth", requireAuth, (req, res) => {
  return res.json(req.user);
});

// ...
