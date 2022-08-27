// promise has three state 1. pending 2. resolved 3. rejected

// way to declare promise

const myPromise = new Promise((resolved, rejected) => {
  const user = { id: 1 };
  if (!user) {
    rejected("Something went worng !!!");
  } else {
    setTimeout(() => {
      resolved({ name: "Jhon" });
    }, 1000);
  }
});

const userIds = [1, 2, 3, 4, 5];
let userData = [];
for (let i = 0; i < userIds.length; i++) {
  const userId = userIds[i];
  userData.push(myPromise);
}
Promise.all(userData).then((res) => {
  console.log(res);
});

// console.log(userData);

myPromise
  .then((res) => console.log("found in res", res))
  .catch((err) => console.log("found in catch:", err));
