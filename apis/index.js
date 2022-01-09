import axios from "axios";
import config from "apis/apiEndpoints";

const BASE_API_URL = config.getEndpoint();

export const instance = axios.create({
  baseURL: BASE_API_URL,
});

export const getPageData = (page) => {
  return instance.get(`/section-datas?filters[page][$eq]=${page}`);
};
export const getSectionData = (page) => {
  return instance.get(
    `/section-datas?filters[page][$eq]=${page}&populate[teamElements][populate][0]=media&populate[case_studies][populate]=%2A&populate[media]=%2A`
  );
};
