fetch("http://localhost:3000/users")
  .then((res) => res.json())
  .then((users) => {
    users.forEach((user) => {
      console.log(user.name);
    });
  });
