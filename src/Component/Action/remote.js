const host = "http://localhost:5000/";

async function login(username, password) {
  const res = await fetch(host + "auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  });
  return await res.json();
}

export { login };
