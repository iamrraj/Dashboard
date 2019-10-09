const host = "http://localhost:8001/token-auth/";

async function login(username, password) {
  const res = await fetch(`http://localhost:8001/token-auth/`, {
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
