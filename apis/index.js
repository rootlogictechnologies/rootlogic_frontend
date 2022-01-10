import axios from "axios";
import config from "apis/apiEndpoints";

const BASE_API_URL = config.getEndpoint();

export const instance = axios.create({
  baseURL: BASE_API_URL,
});

export const getPageData = (page) => {
  return instance.get(`/section-datas?filters[page][$eq]=${page}`);
};
export const getSectionData = (page, queries) => {
  return instance.get(
    `/section-datas?filters[page][$eq]=${page}&populate[media]=%2A${
      queries.includes("teamElements")
        ? "&populate[teamElements][populate][0]=media"
        : ""
    }${
      queries.includes("case_studies")
        ? "&populate[case_studies][populate]=%2A"
        : ""
    }${queries.includes("services") ? "&populate[services]=%2A" : ""}${
      queries.includes("testimonials") ? "&populate[testimonials]=%2A" : ""
    }`
  );
};
