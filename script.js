const items = [];

function addItemsToCategory(item, items) {
  items.push(item);
}

function createElementDom(tag, id) {
  let a = document.createElement(tag);
  a.setAttribute("id", id);
  document.body.append(a);
  return a;
}

function clearBox(elementID) {
  document.getElementById(elementID).innerHTML = "";
  // elementID.removeChild(elementID.firstChild);
  // document.getElementById(elementID).replaceChildren();

}

function showCategory(items, div, type1, bgc) {
  for (let i = 0; i < items.length; i++) {
    let p = createElementDom("p", `${type1}` + i);
    if (typeof items[i] === "object") {
      p.innerText = items[i][type1];

    } else {
      p.innerText = items[i];

    }

    p.style.color = "black";
    p.style.background = bgc;
    p.style.padding = '40px';
    p.style.margin = '10px';

    div.append(p);

    p.addEventListener("click", e => {
      clearBox("divSecond");
      showCategory(items[i].subCategory, divSecond, "subCategory", "aqua");
    })
  }

}

console.log("______")

let divFirst = createElementDom("div", "divFirst");
let divSecond = createElementDom("div", "divSecond");
let divThird = createElementDom("div", "divThird");

addItemsToCategory(
    {category: "Food", subCategory: ["potato", "carrot", "orange"]}, items);
addItemsToCategory(
    {category: "Toys", subCategory: ["car", "truck", "ball"]}, items);
console.log(items);

showCategory(items, divFirst, "category", "yellow");
