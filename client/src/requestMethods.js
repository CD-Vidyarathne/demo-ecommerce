import axios from "axios";

const BASE_URL = "http://localhost:8800/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2E3NzA5NzdkZWQ3Y2FmN2FmMDI2OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODIzMTQxMSwiZXhwIjoxNjU4NDkwNjExfQ.jw_Ds6PiJsU-Wq3BLfPVmbRo4EoqU3XMF3LbHOBpCCY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
