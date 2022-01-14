import axios from "axios";
// import mailchimp from "@mailchimp/mailchimp_marketing";

const API_KEY = process.env.MCApi;
const DATA_CENTER = process.env.MCDataCenter;
const LIST_ID = process.env.MCListId;

// mailchimp.setConfig({
//   apiKey: API_KEY,
//   server: DATA_CENTER,
// });

// const healthCheck = () => {
//   return mailchimp.ping.get();
// };

// const subscribe = (data) => {
//   return client.lists.addListMember(LIST_ID, data);
// };

const url = `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

const auth = Buffer.from(`apikey:${API_KEY}`).toString("base64");

const headers = {
  "Content-Type": "application/json",
  Authorization: `Basic ${auth}`,
};

export default async (req, res) => {
  try {
    const data = req.body;

    const response = await axios.post(url, data, { headers });

    return res.json({ data: response.data });
  } catch (e) {
    console.log("Error", e.response.data);
    if (e) {
      return res.status(400).json({ error: e.response.data });
    }
  }
};
