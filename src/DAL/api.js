import axios from "axios";

let baseURL = "https://636e7c80bb9cf402c8031a51.mockapi.io";

let instance = axios.create({
  baseURL,
});

export const postsAPI = {
  getPosts() {
    return instance.get(`global`);
  },
  deletePost(id) {
    return instance.delete(`global/${id}`);
  },
  addPost(value, showTime) {
    return instance.post(`global`, {
      text: `${value.text}`,
      timeCreate: showTime,
    });
  },
  putCheck(id, boolean) {
    return instance.put(`global/${id}`, { isCheck: boolean });
  },
  putEditPost(id, text) {
    return instance.put(`global/${id}`, { text: text });
  },
};
