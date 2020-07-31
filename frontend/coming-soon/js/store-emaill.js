const storeEmailForNotifications = (role) => {
  const email = document.getElementById(role + "Email").value;

  fetch("http://localhost:8000/graphql", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `mutation {\n storeEmailForNotifications(email: "${email}", role: "${role}")\n}`,
    }),
  });
};
