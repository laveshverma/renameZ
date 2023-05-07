const fs = require("fs");
const path= require("path")
const replacethis = "lavesh";
const replacewith = "john";
const preview = true;
const folder= path(__dirname)
try {
  fs.readdir("folder", (err, data) => {
    
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      let oldFile = path.join(folder, item);
      let newFile = path.join(folder, item.replaceAll(replacethis, replacewith));
      if (!preview) {
        fs.rename(oldFile, newFile, () => {
          console.log("rename success");
        });
      } else {
        if("data/"+item !== newFile)console.log("data/" + item + " will be replaced to " + newFile);
      }
    }
  });
} catch (err) {
  console.error(err);
}
