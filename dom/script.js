let add = document.getElementById("add");
const paragraf = document.getElementById("p1");

let tempID = 1;

add.addEventListener("click", () => {
  console.log('add element');
  let clone = paragraf.cloneNode(true);
  tempID +=1;
  clone.id = `p${tempID}`;
  document.getElementById("container").append(clone);
  console.log(tempID);
});
