export function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}

export function authHeaderUploadFile() {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return {
      Authorization: "Bearer " + user.token,
    };
  } else {
    return {};
  }
}
