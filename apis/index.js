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
  let query = "";
  if (queries.length > 0) {
    queries.map((item) => {
      query = query + `&populate[${item}][populate]=%2A`;
    });
  }
  return instance.get(
    `/section-datas?filters[pages][title][$eq]=${page}${query}&populate[media]populate=%2A`
  );
};

export const contactForm = (body) => {
  return instance.post(`/contact-forms`, body);
};

export const upload = (body) => {
  return instance.post(`/upload`, body);
};

export const deleteUpload = (id) => {
  return instance.delete(`/upload/files/${id}`);
};

export const apply = (body) => {
  return instance.post(`/applicants`, body);
};

// Hitting the next server hence directly used axios.post
export const newsletter = (data) => {
  return axios.post("/api/newsletter", data);
};
