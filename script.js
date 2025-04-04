const products = {
    "1": { name: "Wireless Headphones", price: "$50", image: "https://jblstore.com.ph/cdn/shop/files/Tune720BT_Black_1.png?v=1741527434", description: "This headphones have provide clear, balanced sound with good bass, mids, and highs." },
    "2": { name: "Smart Watch", price: "$70", image: "https://i.ebayimg.com/images/g/Vz0AAOSwAmdkwJNe/s-l400.jpg", description: "Feature-rich smart watch with fitness tracking and notifications." },
    "3": { name: "Laptop", price: "$500", image: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg", description: "Powerful laptop with fast performance and a high-resolution display." },
    "4": { name: "Smartphone", price: "$1000", image: "https://i.guim.co.uk/img/media/2ce8db064eabb9e22a69cc45a9b6d4e10d595f06/392_612_4171_2503/master/4171.jpg?width=1200&quality=85&auto=format&fit=max&s=7155cb993a50330e18f142947b71bac6", description: "Latest smartphone with top-notch features and camera quality." },
    "5": { name: "Keyboard", price: "$50", image: "https://m.media-amazon.com/images/I/71SNwM2a7hL._AC_SL1500_.jpg", description: "Mechanical keyboard with RGB lighting and fast response keys." },
    "6": { name: "Mouse", price: "$20", image: "https://m.media-amazon.com/images/I/61l33dfloaL.jpg", description: "Ergonomic wireless mouse for comfortable usage." },
    "7": { name: "Monitor", price: "$5000", image: "https://netcodex.ph/wp-content/uploads/2024/08/HKC-MB24V9F-7.jpg", description: "4K Ultra HD monitor with high refresh rate." },
    "8": { name: "Speaker", price: "$50", image: "https://digitalwalker.ph/cdn/shop/files/JBLSPEPARTYBOX110BLACK1.png?v=1695889692", description: "Portable Bluetooth speaker with deep bass." },
    "9": { name: "Earphones", price: "$5", image: "https://digitalwalker.ph/cdn/shop/files/NOTTWSEAR_A_YELLOW5_1000x1000.png?v=1714442796", description: "Budget-friendly wired earphones with clear sound." },
    "10": { name: "Laptop Case Bag", price: "$10", image: "https://www.caselogic.com/-/p/poCRLGlbsqjGpuZTHgdx67vJyTFNdh3NK-LR-WifyUY/rs:fit/h:991/cb:3.9/w:991/plain/approved/std.lang.all/14/16/271416.jpg", description: "Protective and stylish laptop case bag." }
};


function getProductFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("product");
    return products[productId];
}

document.addEventListener("DOMContentLoaded", function () {
    const product = getProductFromURL();
    if (product) {
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-price").textContent = product.price;
        document.getElementById("product-image").src = product.image;
    } else {
        alert("Product not found.");
    }
});

