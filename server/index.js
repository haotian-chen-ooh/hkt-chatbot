const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");
const dotenv = require("dotenv");

dotenv.config("./.env");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const port = 4000;
const app = express();

app.use(cors());
app.use(express.json());

const mockSearchResult = `
The campaign delivery team were advised by Lendlease that several sites had been overscheduled. Upon investigation, the team found that multiple campaigns had been duplicated in Lendlease’s Broadsign (the campaigns listed below). Lendlease provided the attached images displaying that several campaigns have been duplicated in Lendlease’s Broadsign;
Campaigns that were duplicated in Lendlease’s Broadsign;
Campaign: 23628183 (example of a Lendlease site in this campaign - LL.SUSH/55D-18A)

Campaign name: Optus x Postpaid ROOH FY23 - May

2. Campaigns: 23786072 

Campaign names: (Upfield Q2 Burst 1) 

3. Campaigns: 23860588

Campaign name: (PARTNERSHIP - Nestle - Milo 2023 Brief)



Lendlease shared the duplicate Optus campaign (23628183);

(see images attached)

Broadsign ID: 825967229

This campaign was cancelled however was running for several days.



Jordan - here is another example of a duplication. Pix API logs should be available, given the dates.


Campaign: 24370371

Site: LAJO/55D-12A

Dates: 3/07 - 16/07

Expected Outcomes:
Understand why and how these campaigns were duplicated.
`;

const chatHandler = async (req, res) => {
  const query = req.body.query;
  // const searchResult = ...
  const openaiRes = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `
        Summarize the text below as a bullet point list of the most important points.

        Text: """
        ${mockSearchResult}
        """
        `,
      },
    ],
    temperature: 0.5,
    max_tokens: 256,
  });
  res.status(200).json({
    message: query + "\n" + openaiRes.choices[0].message.content,
  });
};

app.post("/chat", chatHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
