export default function getData() {
  const data = "This is a test function to test branches and all that stuff";
  something(data);
  return data;
}

function something(data) {
  console.log("Data inside module3 is: " + data);
}
