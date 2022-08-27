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
async function getData() {
  const res = await promise;
  console.log(res);
}
getData();

fetch("")
  .then((res) => res.json())
  .then((data) => console.log(data));

async function getUser() {
  const res = await fetch("");
  const user = await res.json();
  const res2 = await fetch(`https://www.google.com/${user.id}`);
  const products = res2.json();
  console.log(products);
}
