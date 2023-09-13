const express = require("express");

const port = 4000;
const app = express();

app.use(express.json());

const mockMessage =
  "- The campaign delivery team was informed by Lendlease that several sites had been overscheduled.\n" +
  "- Investigation revealed that multiple campaigns had been duplicated in Lendlease's Broadsign.\n" +
  "- The duplicated campaigns in Lendlease's Broadsign include: \n" +
  "  - Campaign 23628183 (example of a Lendlease site in this campaign - LL.SUSH/55D-18A)\n" +
  "  - Campaigns 23786072 (Campaign name: Upfield Q2 Burst 1)\n" +
  "  - Campaigns 23860588 (Campaign name: PARTNERSHIP - Nestle - Milo 2023 Brief)\n" +
  "- Lendlease shared the duplicate Optus campaign (23628183) and it was cancelled after running for several days.\n" +
  "- Another example of duplication is Campaign 24370371 at Site LAJO/55D-12A with dates 3/07 - 16/07.\n" +
  "- Expected outcome is to understand why and how these campaigns were duplicated.";

const chatHandler = async (req, res) => {
  const query = req.body.query;
  res.json({
    status: 200,
    data: {
      message: query + "\n" + mockMessage,
    },
  });
};

app.post("/chat", chatHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
