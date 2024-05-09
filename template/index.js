import "./index.sass";
const itemListDOM = document.getElementById("itemList");
const searchBarDOM = document.getElementById("searchBar");
const iframe = document.getElementById("iframe");
const items = []; // itemDOM,label

const platforms = ["galacean", "three", "babylon"];

const url = new URL(window.location.href);
const platform = url.searchParams.get("platform") ?? "galacean";

platforms.splice(platforms.indexOf(platform), 1);

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
button1.innerText = platforms[0];
button2.innerText = platforms[1];
button1.addEventListener("click", () => {
  url.searchParams.set("platform", platforms[0]);
  window.location.href = url.toString();
});
button2.addEventListener("click", () => {
  url.searchParams.set("platform", platforms[1]);
  window.location.href = url.toString();
});

import(`./mpa/${platform}/.demoList.json`).then(({ default: demoList }) => {
  Object.keys(demoList).forEach((group) => {
    const demos = demoList[group];
    const groupDOM = document.createElement("div");
    const titleDOM = document.createElement("div");
    const demosDOM = document.createElement("ul");

    titleDOM.innerHTML = group;
    titleDOM.classList.add("title");
    itemListDOM.appendChild(groupDOM);
    groupDOM.appendChild(titleDOM);
    groupDOM.appendChild(demosDOM);

    demos.forEach((item) => {
      const { label, src } = item;
      const itemDOM = document.createElement("a");

      itemDOM.innerHTML = label;
      itemDOM.title = `${src}`;
      itemDOM.onclick = function () {
        clickItem(itemDOM);
      };
      demosDOM.appendChild(itemDOM);

      items.push({
        itemDOM,
        label,
        src,
      });
    });
  });

  searchBarDOM.oninput = () => {
    updateFilter(searchBar.value);
  };

  function updateFilter(value) {
    const reg = new RegExp(value, "i");

    items.forEach(({ itemDOM, label, src }) => {
      reg.lastIndex = 0;
      if (reg.test(label) || reg.test(src)) {
        itemDOM.classList.remove("hide");
      } else {
        itemDOM.classList.add("hide");
      }
    });
  }

  function clickItem(itemDOM) {
    window.location.hash = `#mpa/${itemDOM.title}`;
  }

  function onHashChange() {
    const hashPath = window.location.hash.split("#")[1];
    const labelSrc = window.location.hash.split("#mpa/")[1];
    if (!hashPath || !items.find((item) => item.src === labelSrc)) {
      clickItem(items[0].itemDOM);
      return;
    }

    iframe.src = "/mpa" + "/" + platform + "/" + labelSrc + ".html";

    items.forEach(({ itemDOM }) => {
      const itemPath = `mpa/${platform}/${itemDOM.title}`;
      if (itemPath === hashPath) {
        itemDOM.classList.add("active");
      } else {
        itemDOM.classList.remove("active");
      }
    });
  }

  window.onhashchange = onHashChange;

  // init
  onHashChange();
});
