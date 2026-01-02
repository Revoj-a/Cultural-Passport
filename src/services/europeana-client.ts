import axios from "axios";

export default axios.create({
  baseURL: "https://api.europeana.eu/record/v2",
  params: {
    wskey: "icklinghteke",
    profile: "rich",
  },
});
