
// DATA PRODUK MENGGUNAKAN ARRAY
const products = [
    {
        name: "Beras 5 Kg",
        price: 68000,
        icon: "🍚"
    },
    {
        name: "Mi Instan",
        price: 3500,
        icon: "🍜"
    },
    {
        name: "Air Mineral",
        price: 4000,
        icon: "💧"
    },
    {
        name: "Susu Kotak",
        price: 7000,
        icon: "🥛"
    },
    {
        name: "Sabun Mandi",
        price: 5000,
        icon: "🧼"
    },
    {
        name: "Biskuit",
        price: 9000,
        icon: "🍪"
    }
];

// MENAMPILKAN PRODUK
const productList = document.getElementById("product-list");

if (productList) {
    function showProducts(data) {
        productList.innerHTML = "";

        data.forEach(product => {
            productList.innerHTML += `
                <div class="card product">
                    <h2>${product.icon}</h2>
                    <h3>${product.name}</h3>
                    <p class="price">
                        Rp ${product.price.toLocaleString("id-ID")}
                    </p>
                </div>
            `;
        });
    }

    showProducts(products);

    // FITUR PENCARIAN PRODUK
    const search = document.getElementById("search");

    search.addEventListener("input", function () {
        const keyword = this.value.toLowerCase();

        const result = products.filter(product =>
            product.name.toLowerCase().includes(keyword)
        );

        showProducts(result);
    });
}

// FORMULIR KONTAK
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        document.getElementById("feedback").textContent =
            "Terima kasih! Pesan berhasil diperiksa.";

        contactForm.reset();
    });
}
