const path = require("path");
const fs = require("fs-extra");
const templateStr = fs.readFileSync(path.join(__dirname, "iframe.ejs"), "utf8");
const platform = process.argv[process.argv.length - 1]; // galacean、three
const OUT_PATH = `mpa`;

// 替换 ejs 模版格式的字符串，如 <%= title %>: templateStr.replaceEJS("title","replaced title");
String.prototype.replaceEJS = function (regStr, replaceStr) {
  return this.replace(new RegExp(`<%=\\s*${regStr}\\s*%>`, "g"), replaceStr);
};

// clear mpa
fs.emptyDirSync(path.resolve(__dirname, OUT_PATH));

// create mpa
const demoList = fs
  .readdirSync(path.join(__dirname, "../src", platform))
  .filter((name) => /.ts$/.test(name))
  .map((name) => {
    const content = fs.readFileSync(path.join(__dirname, "../src", platform, name), "utf8");
    const title = /@title\s+(.+)\b/.exec(content);
    const category = /@category\s+(.+)\b/.exec(content);

    if (!title || !category) {
      throw new Error(`title and category must be set in playground[${name}]`);
    }

    return {
      title: title[1],
      category: category[1],
      file: name.split(".ts")[0]
    };
  });

demoList.forEach(({ title, file }) => {
  const ejs = templateStr.replaceEJS("title", title).replaceEJS("url", `./${file}.ts`);

  fs.outputFileSync(path.resolve(__dirname, OUT_PATH, file + ".ts"), `import "../../src/${platform}/${file}"`);
  fs.outputFileSync(path.resolve(__dirname, OUT_PATH, file + ".html"), ejs);
});

// output demolist
const demoSorted = {};
demoList.forEach(({ title, category, file }) => {
  if (!demoSorted[category]) {
    demoSorted[category] = [];
  }
  demoSorted[category].push({
    src: file,
    label: title
  });
});

fs.outputJSONSync(path.join(__dirname, OUT_PATH, ".demoList.json"), demoSorted);
const publicDir = path.join(__dirname, "../src", platform, "public");
if (fs.existsSync(publicDir)) {
  fs.copySync(publicDir, path.resolve(__dirname, OUT_PATH, "public"));
}

module.exports = {
  server: {
    open: true,
    host: "0.0.0.0",
    port: 5000
  },
  resolve: {
    dedupe: ["@galacean/engine"]
  },
  optimizeDeps: {
    exclude: [
      "@galacean/engine",
      "@galacean/engine-draco",
      "@galacean/engine-lottie",
      "@galacean/engine-spine",
      "@galacean/tools-baker",
      "@galacean/engine-toolkit",
      "@galacean/engine-toolkit-auxiliary-lines",
      "@galacean/engine-toolkit-controls",
      "@galacean/engine-toolkit-framebuffer-picker",
      "@galacean/engine-toolkit-gizmo",
      "@galacean/engine-toolkit-lines",
      "@galacean/engine-toolkit-outline",
      "@galacean/engine-toolkit-planar-shadow-material",
      "@galacean/engine-toolkit-skeleton-viewer",
      "@galacean/engine-toolkit-grid-material",
      "@galacean/engine-toolkit-navigation-gizmo",
      "@galacean/engine-toolkit-geometry-sketch",
      "@galacean/engine-toolkit-stats"
    ]
  }
};
