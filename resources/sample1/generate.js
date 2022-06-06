const fs = require("fs");

const {products} = JSON.parse(fs.readFileSync("products.json","utf-8"));

const output = [];

for (const product of products) {
    output.push(JSON.stringify({ index: {} }));
    output.push(JSON.stringify(product));
}

fs.writeFileSync("bulk_products.json",output.join("\n"));