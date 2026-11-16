const products = [
  { name: "Rice (50 kg bag)", qty: 4, minQty: 2, buy: 21000, sell: 23500 },
  { name: "Groundnut oil (1 L)", qty: 1, minQty: 6, buy: 1100, sell: 1300 },
  { name: "Sugar (1 kg)", qty: 0, minQty: 5, buy: 750, sell: 900 },
  { name: "Maggi cubes (packet)", qty: 30, minQty: 10, buy: 900, sell: 1000 }
];

// --- Starter Code ---
const lowStock = products.filter((p) => p.qty <= p.minQty);

console.log("Products to restock:");
for (const p of lowStock) {
  console.log(`- ${p.name}: ${p.qty} left`);
}

const stockValue = products.reduce((total, p) => total + p.qty * p.buy, 0);
console.log(`Stock value at buying price: ${stockValue} XAF`);

// --- Step 5: Profit per unit & Highest profit per unit ---
function profitPerUnit(product) {
  return product.sell - product.buy;
}

const highestProfitProduct = products.reduce((best, current) => {
  return profitPerUnit(current) > profitPerUnit(best) ? current : best;
});

console.log(
  `\nHighest profit per unit: ${highestProfitProduct.name} (${profitPerUnit(highestProfitProduct)} XAF)`
);

// --- Individual Assignment 1: Out of stock products ---
function getOutOfStock(productList) {
  return productList.filter((p) => p.qty === 0);
}

const outOfStock = getOutOfStock(products);
console.log("\nOut of stock products:");
for (const p of outOfStock) {
  console.log(`- ${p.name}`);
}

// --- Individual Assignment 2: Selling value & Total potential profit ---
const sellingValue = products.reduce((total, p) => total + p.qty * p.sell, 0);
const totalProfit = sellingValue - stockValue;

console.log(`\nStock value at selling price: ${sellingValue} XAF`);
console.log(`Total profit if everything is sold: ${totalProfit} XAF`);

