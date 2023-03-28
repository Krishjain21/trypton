function find(){
  const url="http://127.0.0.1:3000/search_course?title=full stack wev developer";
  let datas="";
  fetch(url)
  .then((response) => console.log(response))
  // .then(data=>datas=data);
  // console.log(datas);
  // let output = JSON.parse(datas);
  // output = JSON.parse(output["newans"])
  // console.log(output["3
  console.log("done")
}
find();

// document.getElementById("slink1").href="https://jsonplaceholder.typicode.com/guide/";
