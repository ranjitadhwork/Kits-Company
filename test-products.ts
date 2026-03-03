import { getProducts } from './lib/products.ts';
import * as dotenv from 'dotenv';
dotenv.config();

async function run() {
    try {
        console.log("Fetching products from Shopify...");
        const products = await getProducts();
        console.log(`\nFound ${products.length} products:`);
        products.forEach((p, i) => {
            console.log(`${i + 1}. ${p.name}`);
            console.log(`   ID: ${p.id}`);
            console.log(`   Price: $${p.price} ${p.currency}`);
            console.log(`   Line: ${p.line}`);
            console.log(`   Available: ${p.available ? 'Yes' : 'No'}`);
            console.log('---');
        });
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

run();
