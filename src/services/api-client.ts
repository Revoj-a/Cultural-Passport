import axios from "axios";

export default axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    Authorization: "MsOKFNnwDOrFPpJul6l4cdOtc8F3lDcuWMv9mMW4OZayPEwcwZTUmJty",
  },
});
