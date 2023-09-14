const express = require("express");
const cors = require("cors");
const AWS = require("aws-sdk");

const kendra = new AWS.Kendra({ region: "ap-southeast-2" });

const port = 4000;
const app = express();

app.use(cors());
app.use(express.json());

const dataObjToMD = (data) => {
  const res =
    "# " +
    data.title +
    "\n\n" +
    "Confidence:" +
    data.scoreConfidence +
    "\n\n" +
    data.content +
    "\n\n" +
    "Link: " +
    `[${data.documentUrl}](${data.documentUrl})` +
    "\n\n";
  return res;
};

const chatHandler = async (req, res) => {
  const query = req.body.query;
  const params = {
    IndexId: "11cba520-ef95-45f6-8804-f6058fa918da",
    QueryText: query,
  };
  try {
    const rawData = await kendra.retrieve(params).promise();
    const dataObject = rawData.ResultItems.slice(0, 5).map((item) => ({
      title: item.DocumentTitle,
      content: item.Content,
      documentUrl: item.DocumentURI,
      scoreConfidence: item.ScoreAttributes.ScoreConfidence,
    }));
    // console.log("dataObject", dataObject);
    const formattedAnswer = dataObject.reduce((prev, curr) => {
      const res = prev + dataObjToMD(curr);
      return res;
    }, "");
    // console.log("formattedAnswer", formattedAnswer);
    res.status(200).json({
      message: formattedAnswer,
    });
  } catch (error) {
    console.log(error);
  }
};

app.post("/chat", chatHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
