import axios from "axios";
import getConfig from "next/config";

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
// Will only be available on the server-side
console.log(serverRuntimeConfig);
// Will be available on both server-side and client-side
console.log(publicRuntimeConfig.staticFolder);

// const API_KEY = process.env.MCApi;
// const DATA_CENTER = process.env.MCDataCenter;
// const LIST_ID = process.env.MCListId;

const API_KEY = serverRuntimeConfig.MCApi;
const DATA_CENTER = serverRuntimeConfig.MCDataCenter;
const LIST_ID = serverRuntimeConfig.MCListId;

const url = `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

const auth = Buffer.from(`apikey:${API_KEY}`).toString("base64");

const headers = {
  "Content-Type": "application/json",
  Authorization: `Basic ${auth}`,
};

export default async (req, res) => {
  try {
    const data = req.body;
    // console.log("url", url);

    const response = await axios.post(url, data, { headers });

    return res.json({ data: response.data });
  } catch (e) {
    console.log("Error", e.response.data);
    if (e) {
      return res.status(400).json({ error: e.response.data });
    }
  }
};
