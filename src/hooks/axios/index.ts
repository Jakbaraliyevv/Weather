// import axios from "axios";

// interface PropType {
//   url: string;
//   method?: "GET" | "PUT" | "POST" | "DELETE";
//   body?: object;
//   headers?: object;
//   params?: object;
// }

// export const useAxios = () => {
//   const response = (props: PropType) => {
//     const { url, method, body, headers, params } = props;

//     return axios({
//       url: `${import.meta.env.VITE_BASE_URL}${url}`,
//       method,
//       data: body,
//       headers: {
//         Authorization: `Bearer${localStorage.getItem("token")}`,
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": true,
//         ...headers,
//       },
//       params: {
//         appid: "06b8da76c357a2dc13e5c8b1cfccadb6",
//         ...params,
//       },
//     }).then((data) => data.data);
//   };

//   return response;
// };

import axios from "axios";

interface PropType {
  url: string;
  method?: "GET" | "PUT" | "POST" | "DELETE";
  body?: object;
  headers?: object;
  params?: object;
}

export const useAxios = () => {
  const response = (props: PropType) => {
    const { url, method = "GET", body, headers } = props;

    return axios({
      url: `${import.meta.env.VITE_BASE_URL}${url}`,
      method,
      data: body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
        ...headers,
      },
    }).then((data) => data.data);
  };

  return response;
};
