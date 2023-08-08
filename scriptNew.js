let category = [];
let subcategory = [];
let infos = [];
let items = [
  {
    idCategory: 0,
    category: "Food",
    subCategory:
        [{
          idSubCategory: 0,
          title: "potato",
          info: "info potato",
          isBought: false,
        },
          {
            idSubCategory: 1,
            title: "carrot",
            info: "info carrot",
            isBought: false,
          },
          {
            idSubCategory: 2,
            title: "orange",
            info: "info orange",
            isBought: false,
          },

        ]

  },
  {
    idCategory: 1,
    category: "Toys",
    subCategory:
        [{
          idSubCategory: 0,
          title: "car",
          info: "info car",
          isBought: false,
        },
          {
            idSubCategory: 1,
            title: "ball",
            info: "info ball",
            isBought: false,
          },
          {
            idSubCategory: 2,
            title: "doll",
            info: "info doll",
            isBought: false,
          },

        ]

  }

];

function addItemsToCategory(item, items) {
  items.push(item);
}

function createElementDom(tag, id) {
  let a = document.createElement(tag);
  a.setAttribute("id", id);
  document.body.append(a);
  return a;
}

function parseData(elements) {

  for (let i = 0; i < elements.length; i++) {
    let el = elements[i].category;
    let indexCategory = i;
    category.push({indexCategory: i, category: el});
    for (let j = 0; j < elements[i].subCategory.length; j++) {
      let sub = elements[i].subCategory[j];
      let info = elements[i].subCategory[j].info;

      subcategory.push(
          {indexCategory: i, indexSubCategory: j, title: sub.title});

      infos.push(
          {indexCategory: i, indexSubCategory: j, title: info});

    }
  }
  console.log('_____Category_____')
  console.log(category);
  console.log('_____SubCategory_____')
  console.log(subcategory);
  console.log('_____Info_____')
  console.log(infos);
}

function renderElemnts(elemts, div, section) {
  let arrOfPCategory = [];
  for (let i = 0; i < elemts.length; i++) {
    let p = createElementDom("p", `${elemts[i][section]}` + i);
    p.innerText = elemts[i][section];
    p.style.background = "lightgreen";
    p.style.padding = '40px';
    p.style.margin = '10px';
    arrOfPCategory.push(p)
  }
  for (let i = 0; i < arrOfPCategory.length; i++) {
    div.appendChild(arrOfPCategory[i]);
    arrOfPCategory[i].addEventListener("click", e => {
      clearBox(divSecond.id);
      clearBox(divThird.id);
      console.log(arrOfPCategory[i]);
      renderSubElemnts(elemts[i].indexCategory, subcategory, "title",
          divSecond);

    })

  }
}

function renderSubElemnts(indexCategory, elementsSubcategory, field, div) {
  console.log(`clicked indexCategory:  ${indexCategory}`);
  console.log(`category to filter: ` + elementsSubcategory.forEach(
      x => console.log(x)));
  let filteredele = getArrbyIndexCategory(elementsSubcategory, indexCategory,
      "indexCategory");
  console.log(filteredele);
  let arrOfSubPCategory = [];
  for (let i = 0; i < filteredele.length; i++) {
    let p = createElementDom("p", `${filteredele[i][field]}` + i);
    p.innerText = filteredele[i][field];
    p.style.background = "yellow";
    p.style.padding = '40px';
    p.style.margin = '10px';
    arrOfSubPCategory.push(p)
  }
  for (let i = 0; i < arrOfSubPCategory.length; i++) {
    div.appendChild(arrOfSubPCategory[i]);

    arrOfSubPCategory[i].addEventListener("click", e => {

      clearBox(divThird.id);
      renderSubElemntsInfos(indexCategory, filteredele[i].indexSubCategory,
          infos, "title");

    })

  }

}

function renderSubElemntsInfos(indexCategory, indexSubcategory,
    elementsSubcategory) {
  console.log("____INfo____")
  console.log(`clicked indexCategory:  ${indexCategory}`);
  console.log(`clicked indexSubcategory:  ${indexSubcategory}`);
  console.log(`category to filter: ` + elementsSubcategory.forEach(
      x => console.log(x)));

  let infoTitile = getArrbyIndexCategorySubCategory(elementsSubcategory,
      indexCategory,
      indexSubcategory);
  console.log(infoTitile);

  let p = createElementDom("p",
      indexCategory + indexSubcategory);
  p.innerText = infoTitile;
  p.style.padding = '40px';
  p.style.margin = '10px';

  let button = createElementDom("input", indexCategory + indexSubcategory);
  button.type = "button";
  button.value = "CLICK ME"
  button.style.margin = '10px';
  let div = createElementDom("div", indexCategory + indexSubcategory);
  div.append(p);
  div.append(button);
  div.style.background = "pink"
  divThird.append(div);

  button.addEventListener("click", e => {
    alert("Item is added");
    clearBox(divSecond.id);
    clearBox(divThird.id);
  })

}

function renderDivsBlocks() {
  document.body.append(divFirst);
  document.body.append(divSecond);
  document.body.append(divThird);
}

function getArrbyIndexCategory(elements, index, indexCat) {
  let res = [];
  elements.map(function (value) {
    if (value[indexCat] === index) {
      res.push(value);
    }
  })
  return res;
}

function getArrbyIndexCategorySubCategory(elements, indexCat,
    indexSubcat) {
  let res = [];
  elements.map(function (value) {
    if (value.indexCategory === indexCat && value.indexSubCategory
        === indexSubcat) {
      res.push(value.title);
    }
  })
  return res;
}

function clearBox(elementID) {
  document.getElementById(elementID).innerHTML = "";
}

addItemsToCategory({
  idCategory: 2,
  category: "Sports",
  subCategory:
      [{
        idSubCategory: 0,
        title: "weight",
        info: "info weight",
        isBought: false,
      },
        {
          idSubCategory: 1,
          title: "mat",
          info: "info mat",
          isBought: false,
        },
        {
          idSubCategory: 2,
          title: "rod",
          info: "info rod",
          isBought: false,
        },

      ]

}, items);
console.log(items);
let divFirst = createElementDom("div", "divFirst");
let divSecond = createElementDom("div", "divSecond");
let divThird = createElementDom("div", "divThird");
parseData(items);
renderDivsBlocks();
renderElemnts(category, divFirst, "category");