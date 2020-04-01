fetch('http://localhost:3030/json/insta-dora-barker-posts.json')
.then((res) => {
  return res.json();
})
.then((data) => {
  console.log(data);
})