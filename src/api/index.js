import axios from "axios";

const api = axios.create({
  // baseURL: 'https://dev.iyaforum.com/'
  baseURL: 'https://api.iyaforum.com'

  
});

export default {
  // getApplicant: ({ name, phone, dateOfBirth }) =>
  //   api.get(
  //     `api/applicant?name=${name}&phone=${phone}&dateOfBirth=${dateOfBirth}`
  //   ),
  getEvent: () => api.get('api/event'),
  applyEvent: data => api.post("api/event", data),
  getOrderById: id => api.get(`api/order/${id}`),
  // checkPhoneAvailable: phone => api.get(`api/applicant/phone/${phone}`),
  validatePromocode: code => api.get(`api/code/${code}`)
};
