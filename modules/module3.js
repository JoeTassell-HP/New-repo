export default function getData() {
  const data = "hello world";
  something(data);
  return data;
}

function something(data) {
  console.log(data);
}
