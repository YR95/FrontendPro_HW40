const items = [];

function addItemsToCategory(item, items) {
  items.push(item);
}

function createElementDom(tag, id) {
  let a = document.createElement(tag);
  a.setAttribute("id", id);
  console.log(a);
  console.dir(a);
  document.body.append(a);
  return a;
}

function clearBox(elementID) {
  document.getElementById(elementID).innerHTML = "";
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

    document.querySelector('#' + type1 + i).addEventListener("click", e => {
      clearBox(document.querySelector(
          '#' + div.getAttribute('id')).nextElementSibling.id);

       showSubCategory(items[i].subCategory, divSecond, "subCategory", "aqua")
      // showCategory(items[i].info, divThird, "subCategory", "orange");
    })

  }

}

function showSubCategory(items, div, type1, bgc) {
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

    document.querySelector('#' + type1 + i).addEventListener("click", e => {
      // clearBox(document.querySelector(
      //     '#' + div.getAttribute('id')).nextElementSibling.id);

      // showCategory(items[i].subCategory, divSecond, "subCategory", "aqua")
      showSubCategory(items[i].info, divThird, "info", "orange");
    })

  }

}

console.log("______")

let divFirst = createElementDom("div", "divFirst");
let divSecond = createElementDom("div", "divSecond");
let divThird = createElementDom("div", "divThird");

addItemsToCategory(
    {
      category: "Food",
      subCategory: ["potato", "carrot", "orange"],
      info: ['info', 'super info', 'mega info']
    }, items);
addItemsToCategory(
    {
      category: "Toys",
      subCategory: ["car", "truck", "ball"],
      info: ['Info', 'Super info', 'Mega info']
    }, items);
console.log(items);

showCategory(items, divFirst, "category", "yellow");
