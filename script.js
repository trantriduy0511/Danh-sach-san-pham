// JSON data tạm thời
        const productsData = {
            "products": [
                {
                    "id": 1,
                    "name": "Samsung Galaxy S23 Ultra",
                    "price": 24990000,
                    "image": "anh/23ultra.jpg",
                    "category": "Điện thoại",
                    "brand": "Samsung",
                    "description": "Samsung Galaxy S23 Ultra là điện thoại cao cấp nhất trong dòng Galaxy S23 với camera 200MP, chip Snapdragon 8 Gen 2 và pin 5000mAh.",
                    "specs": ["Màn hình 6.8 inch Dynamic AMOLED 2X", "Bộ nhớ 12GB RAM, 256GB/512GB/1TB", "Camera sau: 200MP + 12MP + 10MP + 10MP", "Camera trước: 12MP", "Pin 5000mAh, sạc nhanh 45W"]
                },
                {
                    "id": 2,
                    "name": "iPhone 14 Pro Max",
                    "price": 29990000,
                    "image": "anh/ip14.webp",
                    "category": "Điện thoại",
                    "brand": "Apple",
                    "description": "iPhone 14 Pro Max có màn hình Dynamic Island, chip A16 Bionic mạnh mẽ, camera chính 48MP và thời lượng pin vượt trội.",
                    "specs": ["Màn hình 6.7 inch Super Retina XDR", "Chip A16 Bionic", "Camera sau: 48MP + 12MP + 12MP", "Camera trước: 12MP", "Pin lên đến 29 giờ xem video"]
                },
                {
                    "id": 3,
                    "name": "MacBook Air M1",
                    "price": 21990000,
                    "image": "anh/MacBook Air M1.jpg",
                    "category": "Laptop",
                    "brand": "Apple",
                    "description": "MacBook Air với chip M1 mang lại hiệu năng đột phá, thời lượng pin lên đến 18 giờ và thiết kế siêu mỏng nhẹ.",
                    "specs": ["Chip Apple M1 8 lõi", "RAM 8GB", "SSD 256GB", "Màn hình Retina 13.3 inch", "Pin lên đến 18 giờ"]
                },
                {
                    "id": 4,
                    "name": "Apple Watch Series 8",
                    "price": 12990000,
                    "image": "anh/Apple Watch Series 8.png",
                    "category": "Đồng hồ",
                    "brand": "Apple",
                    "description": "Apple Watch Series 8 có tính năng đo nhiệt độ cơ thể, cảm biến va chạm xe hơi và màn hình Always-On sáng hơn.",
                    "specs": ["Màn hình Retina Always-On", "Đo nhịp tim, ECG, oxy trong máu", "Chống nước 50m", "Thời lượng pin lên đến 18 giờ", "Tương thích iPhone iOS 16 trở lên"]
                },
                {
                    "id": 5,
                    "name": "Samsung Galaxy Z Fold5",
                    "price": 41990000,
                    "image": "anh/Samsung Galaxy Z Fold5.jpg",
                    "category": "Điện thoại",
                    "brand": "Samsung",
                    "description": "Samsung Galaxy Z Fold5 là điện thoại màn hình gập cao cấp với thiết kế mỏng nhẹ hơn, bản lề chắc chắn và hiệu năng mạnh mẽ.",
                    "specs": ["Màn hình chính 7.6 inch, màn hình ngoài 6.2 inch", "Chip Snapdragon 8 Gen 2", "RAM 12GB, bộ nhớ 256GB/512GB/1TB", "Camera sau: 50MP + 12MP + 10MP", "Pin 4400mAh"]
                },
                {
                    "id": 6,
                    "name": "Dell Inspiron 15",
                    "price": 18990000,
                    "image": "anh/Dell Inspiron 15.jpg",
                    "category": "Laptop",
                    "brand": "Dell",
                    "description": "Dell Inspiron 15 là laptop đa năng với hiệu năng ổn định, thiết kế hiện đại và màn hình Full HD sắc nét.",
                    "specs": ["CPU Intel Core i5-1135G7", "RAM 8GB DDR4", "Ổ cứng SSD 512GB", "Màn hình 15.6 inch Full HD", "Pin lên đến 8 giờ sử dụng"]
                },
                {
                    "id": 7,
                    "name": "AirPods Pro 2",
                    "price": 5990000,
                    "image": "anh/AirPods Pro 2.jpg",
                    "category": "Phụ kiện",
                    "brand": "Apple",
                    "description": "AirPods Pro thế hệ 2 có chống ồi chủ động cải tiến, thời lượng pin tốt hơn và hộp sạc hỗ trợ MagSafe.",
                    "specs": ["Chống ồi chủ động (ANC)", "Chế độ xuyên âm", "Thời lượng pin 6 giờ (tai nghe)", "Hộp sạc MagSafe", "Tương thích với thiết bị Apple"]
                },
                {
                    "id": 8,
                    "name": "Xiaomi Redmi Note 12",
                    "price": 5490000,
                    "image": "anh/Xiaomi Redmi Note 12.jpg",
                    "category": "Điện thoại",
                    "brand": "Xiaomi",
                    "description": "Xiaomi Redmi Note 12 có màn hình AMOLED 120Hz, camera 50MP và pin 5000mAh với sạc nhanh 33W.",
                    "specs": ["Màn hình 6.67 inch AMOLED 120Hz", "Chip Snapdragon 685", "RAM 6GB, bộ nhớ 128GB", "Camera sau: 50MP + 8MP + 2MP", "Pin 5000mAh, sạc nhanh 33W"]
                }
            ]
        };
        
        // Hiển thị sản phẩm từ dữ liệu JSON
        function displayProducts(products) {
            const productList = document.getElementById('productList');
            productList.innerHTML = '';
            
            products.forEach(product => {
                const formattedPrice = product.price.toLocaleString('vi-VN');
                
                const productItem = document.createElement('div');
                productItem.className = 'product-item';
                productItem.dataset.id = product.id;
                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-item-content">
                        <h3>${product.name}</h3>
                        <p>${formattedPrice} VNĐ</p>
                        <button><i class="fas fa-cart-plus"></i> Thêm vào giỏ</button>
                    </div>
                `;
                
                // Thêm sự kiện click vào sản phẩm
                productItem.addEventListener('click', (e) => {
                    if (!e.target.closest('button')) {
                        showProductDetail(product.id);
                    }
                });
                
                // Thêm sự kiện cho nút thêm vào giỏ
                const addToCartBtn = productItem.querySelector('button');
                addToCartBtn.addEventListener('click', () => {
                    addToCart(product.id);
                });
                
                productList.appendChild(productItem);
            });
        }
        
        // Hiển thị chi tiết sản phẩm
        function showProductDetail(productId) {
            const product = productsData.products.find(p => p.id === productId);
            if (!product) return;
            
            const formattedPrice = product.price.toLocaleString('vi-VN');
            
            const productDetail = document.getElementById('productDetail');
            productDetail.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h2>${product.name}</h2>
                    <p class="price">${formattedPrice} VNĐ</p>
                    <p class="description">${product.description}</p>
                    
                    <div class="specs">
                        <h3>Thông số kỹ thuật</h3>
                        <ul>
                            ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="action-buttons">
                        <button class="add-to-cart" onclick="addToCart(${product.id})">
                            <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                        </button>
                        <button class="buy-now" onclick="buyNow(${product.id})">
                            <i class="fas fa-bolt"></i> Mua ngay
                        </button>
                    </div>
                </div>
            `;
            
            const modal = document.getElementById('productModal');
            modal.style.display = 'flex';
        }
        
        // Thêm sản phẩm vào giỏ hàng
        function addToCart(productId) {
            const product = productsData.products.find(p => p.id === productId);
            if (!product) return;
            
            alert(`Đã thêm ${product.name} vào giỏ hàng!`);
            // Ở đây có thể thêm logic xử lý giỏ hàng thực tế
        }
        
        // Mua ngay sản phẩm
        function buyNow(productId) {
            const product = productsData.products.find(p => p.id === productId);
            if (!product) return;
            
            alert(`Đã mua thành công ${product.name}!`);
            // Ở đây có thể thêm logic xử lý mua hàng
        }
        
        // Lọc sản phẩm dựa trên các tiêu chí
        function filterProducts() {
            const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
            const maxPrice = parseInt(document.getElementById('maxPrice').value) || 50000000;
            
            // Lấy danh mục được chọn
            const selectedCategories = [];
            document.querySelectorAll('[id^="category"]:checked').forEach(checkbox => {
                selectedCategories.push(checkbox.value);
            });
            
            // Lấy thương hiệu được chọn
            const selectedBrands = [];
            document.querySelectorAll('[id^="brand"]:checked').forEach(checkbox => {
                selectedBrands.push(checkbox.value);
            });
            
            // Lọc sản phẩm
            const filteredProducts = productsData.products.filter(product => {
                const inPriceRange = product.price >= minPrice && product.price <= maxPrice;
                const inCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
                const inBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
                
                return inPriceRange && inCategory && inBrand;
            });
            
            displayProducts(filteredProducts);
        }
        
        // Tìm kiếm sản phẩm
        function searchProducts() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            
            if (!searchTerm) {
                filterProducts();
                return;
            }
            
            const filteredProducts = productsData.products.filter(product => {
                return product.name.toLowerCase().includes(searchTerm) || 
                       product.brand.toLowerCase().includes(searchTerm) ||
                       product.category.toLowerCase().includes(searchTerm);
            });
            
            displayProducts(filteredProducts);
        }
        
        // Sự kiện khi trang được tải
        document.addEventListener('DOMContentLoaded', () => {
            // Hiển thị tất cả sản phẩm ban đầu
            displayProducts(productsData.products);
            
            // Thêm sự kiện cho nút áp dụng bộ lọc
            document.getElementById('applyFilters').addEventListener('click', filterProducts);
            
            // Thêm sự kiện tìm kiếm khi nhập
            document.getElementById('searchInput').addEventListener('input', searchProducts);
            
            // Thêm sự kiện khi giá thay đổi
            document.getElementById('minPrice').addEventListener('change', filterProducts);
            document.getElementById('maxPrice').addEventListener('change', filterProducts);
            
            // Thêm sự kiện khi chọn danh mục hoặc thương hiệu
            document.querySelectorAll('.filter-options input').forEach(input => {
                input.addEventListener('change', filterProducts);
            });
            
            // Đóng modal khi nhấn nút đóng
            document.querySelector('.close').addEventListener('click', () => {
                document.getElementById('productModal').style.display = 'none';
            });
            
            // Đóng modal khi nhấn bên ngoài nội dung
            window.addEventListener('click', (event) => {
                const modal = document.getElementById('productModal');
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });