document.addEventListener('DOMContentLoaded', function() {
    const products = [
        // PAPAS
        {
            name: "Salchipapa",
            price: "$6.000",
            phrase: "La combinación perfecta de salchicha y papa.",
            category: "comidas-rapidas",
            iconClass: "fas fa-utensils" // Icono genérico de comida
        },
        {
            name: "Longuipapa",
            price: "$10.500",
            phrase: "Longaniza con papas, un sabor único.",
            category: "comidas-rapidas",
            iconClass: "fas fa-utensils" // Icono genérico de comida
        },
        {
            name: "Choripapa",
            price: "$10.500",
            phrase: "Chorizo con papas, irresistible combinación.",
            category: "comidas-rapidas",
            iconClass: "fas fa-utensils" // Icono genérico de comida
        },
        {
            name: "Papas Con Carne Desmechada Pequeña",
            price: "$10.000",
            phrase: "Papas crujientes con carne desmechada.",
            category: "comidas-rapidas",
            iconClass: "fas fa-bowl-food" // Icono de tazón de comida (FA6) o fa-utensils (FA5)
        },
        {
            name: "Papas Con Carne Desmechada Grande",
            price: "$15.000",
            phrase: "La porción generosa de papas con carne desmechada.",
            category: "comidas-rapidas",
            iconClass: "fas fa-bowl-food" // Icono de tazón de comida (FA6) o fa-utensils (FA5)
        },

        // HAMBURGUESAS
        {
            name: "Hamburguesa Sencilla",
            price: "$9.000",
            phrase: "Clásica y deliciosa, para cualquier momento.",
            category: "comidas-rapidas",
            iconClass: "fas fa-hamburger" // Icono de hamburguesa
        },
        {
            name: "Hamburguesa Especial",
            price: "$12.000",
            phrase: "Con ingredientes extra para un sabor único.",
            category: "comidas-rapidas",
            iconClass: "fas fa-hamburger" // Icono de hamburguesa
        },

        // AREPAS
        {
            name: "Arepa Con Carne Desmechada Sencilla",
            price: "$7.000",
            phrase: "La tradicional arepa con carne desmechada.",
            category: "comidas-rapidas",
            iconClass: "fas fa-bread-slice" // Icono de rebanada de pan (para arepa)
        },
        {
            name: "Arepa Con Carne Desmechada Especial (Ensalada, Ripio Y Queso)",
            price: "$10.000",
            phrase: "Arepa completa con ensalada, ripio y queso.",
            category: "comidas-rapidas",
            iconClass: "fas fa-bread-slice" // Icono de rebanada de pan (para arepa)
        },

        // CARNES A LA PLANCHA
        {
            name: "Carne A La Plancha De Res (Carne, Papas Y Arepa Con Queso)",
            price: "$22.000",
            phrase: "Jugosa carne de res a la plancha con acompañamientos.",
            category: "comidas-rapidas",
            iconClass: "fas fa-steak" // Icono de bistec (FA6) o fa-drumstick-bite (FA5)
        },
        {
            name: "Carne A La Plancha Cerdo (Carne, Papas, Ensalada Y Arepa Con Queso)",
            price: "$19.000",
            phrase: "Deliciosa carne de cerdo a la plancha con ensalada.",
            category: "comidas-rapidas",
            iconClass: "fas fa-bacon" // Icono de tocino (FA6) o fa-drumstick-bite (FA5)
        },
        {
            name: "Pechuga A La Plancha (Pechuga, Papas, Ensalada Y Arepa Con Queso)",
            price: "$20.000",
            phrase: "Pechuga de pollo a la plancha, saludable y sabrosa.",
            category: "comidas-rapidas",
            iconClass: "fas fa-drumstick-bite" // Icono de muslo de pollo
        },
        {
            name: "Chuzo De Pollo (Chuzo De Pollo, Papas, Ensalada Y Arepa Con Queso)",
            price: "$18.000",
            phrase: "Un chuzo de pollo con todos los extras.",
            category: "comidas-rapidas",
            iconClass: "fas fa-shish-kebab" // Icono de shish kebab (FA6) o fa-utensils (FA5)
        },

        // PICADAS
        {
            name: "Picada (Papas A La Francesa, Carne Desmechada, Carne De Hamburguesa, Chorizo, Arepa Con Lonchita Y Huevo De Codorniz)",
            price: "$23.000",
            phrase: "La picada más completa para compartir.",
            category: "comidas-rapidas",
            iconClass: "fas fa-plate-utensils" // Icono de plato con utensilios (FA6) o fa-utensils (FA5)
        },
        {
            name: "Picada para dos",
            price: "$34.000",
            phrase: "Perfecta para compartir en pareja.",
            category: "comidas-rapidas",
            iconClass: "fas fa-plate-utensils"
        },
        {
            name: "Picada Familiar",
            price: "$53.000",
            phrase: "La picada ideal para toda la familia.",
            category: "comidas-rapidas",
            iconClass: "fas fa-plate-utensils"
        },

        // SANDWICHES
        {
            name: "Sandwich Tradicional",
            price: "$3.000",
            phrase: "El clásico sandwich que nunca falla.",
            category: "comidas-rapidas",
            iconClass: "fas fa-sandwich"
        },
        {
            name: "Sandwich de Pollo",
            price: "$6.000",
            phrase: "Delicioso sandwich con pollo fresco.",
            category: "comidas-rapidas",
            iconClass: "fas fa-sandwich"
        },

        // OTROS
        {
            name: "Butifarra",
            price: "$700",
            phrase: "3 x $2000",
            category: "comidas-rapidas",
            iconClass: "fas fa-utensils" // Icono genérico de comida
        },
        {
            name: "Panzerotti",
            price: "$3.500",
            phrase: "Delicioso panzerotti relleno.",
            category: "comidas-rapidas",
            iconClass: "fas fa-pizza-slice"
        },

        // JUGOS TRADICIONALES
        {
            name: "Borojó",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Conocido por su energía y sabor único.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Fresa",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Frescura y dulzura en cada sorbo.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Guanábana",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Cremoso y exótico, una delicia tropical.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Guayaba",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "El sabor auténtico de la fruta tropical.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Lulo",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Un sabor único y ligeramente ácido, muy colombiano.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Mandarina",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "El toque cítrico y refrescante.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Mango",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Dulce y tropical, un clásico irresistible.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Maracuyá",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Exótico y vibrante, ideal para refrescar.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Mora",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "El sabor intenso y natural del bosque.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Piña",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Refrescante y dulce, perfecto para cualquier momento.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Tomate de Árbol",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Un sabor distintivo y lleno de beneficios.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Uva",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Dulce y jugoso, un clásico que encanta.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },

        // JUGOS COMBINADOS
        {
            name: "Exótico (Mango | Fresa | Piña)",
            priceAgua: "$8.000 (Agua)",
            priceLeche: "$9.000 (Leche)",
            phrase: "Una mezcla sorprendente y deliciosa.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Frutos Amarillos (Piña | Mango | Maracuyá)",
            priceAgua: "$8.000 (Agua)",
            priceLeche: "$9.000 (Leche)",
            phrase: "La dulzura y acidez del trópico en un solo vaso.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Frutos Rojos (Mora | Fresa | Uva | Cereza)",
            priceAgua: "$8.000 (Agua)",
            priceLeche: "$9.000 (Leche)",
            phrase: "Una explosión de sabor y antioxidantes.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Fresa-Mora",
            priceAgua: "$8.000 (Agua)",
            priceLeche: "$9.000 (Leche)",
            phrase: "Un clásico de frutos rojos con un toque ácido.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Mango-Fresa",
            priceAgua: "$8.000 (Agua)",
            priceLeche: "$9.000 (Leche)",
            phrase: "La combinación perfecta de dulzura y frescura.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Maracuyá-Coco",
            priceAgua: "$8.000 (Agua)",
            priceLeche: "$9.000 (Leche)",
            phrase: "El equilibrio perfecto entre lo ácido y lo cremoso.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Maracuyá-Lulo",
            priceAgua: "$8.000 (Agua)",
            priceLeche: "$9.000 (Leche)",
            phrase: "Ácido y refrescante, una explosión de sabor.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Maracuyá-Mango",
            priceAgua: "$8.000 (Agua)",
            priceLeche: "$9.000 (Leche)",
            phrase: "La fusión tropical que te encantará.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Piña-Coco",
            priceAgua: "$8.000 (Agua)",
            priceLeche: "$9.000 (Leche)",
            phrase: "El sabor del caribe en tu paladar.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Piña-Yerbabuena",
            priceAgua: "$8.000 (Agua)",
            priceLeche: "$9.000 (Leche)",
            phrase: "Refrescante y digestivo, ideal para cualquier momento.",
            category: "jugos",
            subcategory: "combinaciones"
        },

        // ADICIONES
        {
            name: "Carne desmechada",
            price: "$4.000",
            phrase: "Dale un toque extra a tu comida.",
            category: "adiciones",
            iconClass: "fas fa-utensils" // O un ícono más específico para carne desmechada
        },
        {
            name: "Carne de hamburguesa",
            price: "$2.500",
            phrase: "Para los amantes de la carne.",
            category: "adiciones",
            iconClass: "fas fa-hamburger" // Ícono de hamburguesa
        },
        {
            name: "Chorizo coctelero",
            price: "$800",
            phrase: "Pequeño pero con gran sabor.",
            category: "adiciones",
            iconClass: "fas fa-hotdog" // Ícono de hotdog o salchicha
        },
        {
            name: "Huevo de codorniz",
            price: "$600",
            phrase: "Un toque especial para tu plato.",
            category: "adiciones",
            iconClass: "fas fa-egg" // Ícono de huevo
        },
        {
            name: "Queso",
            price: "$3.000",
            phrase: "El complemento perfecto.",
            category: "adiciones",
            iconClass: "fas fa-cheese" // Ícono de queso
        },
        {
            name: "Tocineta",
            price: "$3.000",
            phrase: "Crujiente y deliciosa.",
            category: "adiciones",
            iconClass: "fas fa-bacon" // Ícono de tocino
        },

        // OTRAS BEBIDAS
        {
            name: "Botella",
            price: "$35.000",
            phrase: "Botella de bebida para compartir.",
            category: "otras-bebidas",
            iconClass: "fas fa-wine-bottle"
        },
        {
            name: "Coctel Copa",
            price: "$4.500",
            phrase: "Refrescante cóctel en copa.",
            category: "otras-bebidas",
            iconClass: "fas fa-cocktail"
        },
        {
            name: "Milo",
            price: "$8.000",
            phrase: "El clásico Milo que todos aman.",
            category: "otras-bebidas",
            iconClass: "fas fa-coffee"
        }
    ];

    const categories = [
        {
            name: "Comidas Rápidas",
            id: "comidas-rapidas",
            iconHtml: '<i class="fas fa-hamburger fa-4x"></i><i class="fas fa-hotdog fa-4x"></i>',
        },
        {
            name: "Jugos",
            id: "jugos",
            iconHtml: '<i class="fas fa-cocktail fa-4x"></i>',
            subcategories: [
                {
                    name: "Jugos Tradicionales",
                    id: "jugos-tradicionales",
                    iconHtml: '<i class="fas fa-lemon fa-4x"></i>'
                },
                {
                    name: "Combinaciones",
                    id: "combinaciones",
                    iconHtml: '<i class="fas fa-blender fa-4x"></i>'
                }
            ]
        },
        // Nueva categoría para Adiciones
        {
            name: "Adiciones",
            id: "adiciones",
            iconHtml: '<i class="fas fa-plus-circle fa-4x"></i>' // Puedes cambiar el icono
        },
        // Nueva categoría para Otras Bebidas
        {
            name: "Otras Bebidas",
            id: "otras-bebidas",
            iconHtml: '<i class="fas fa-glass-martini fa-4x"></i>'
        }
    ];

    // Variables del carrito
    let cart = [];
    let currentProduct = null;
    let currentQuantity = 1;

    // Elementos del DOM
    const menuItemsContainer = document.getElementById('menu-items');
    const categoryCardsContainer = document.getElementById('category-cards');
    const currentMenuTitle = document.getElementById('current-menu-title');
    const mainSectionTitle = document.querySelector('.section-title');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const whatsappBtn = document.getElementById('whatsappBtn');
    const cartBtn = document.getElementById('cartBtn');
    const cartCount = document.getElementById('cartCount');
    const adicionesButtonContainer = document.getElementById('adiciones-button-container');
    const showAdicionesBtn = document.getElementById('show-adiciones-btn');
    const headerElement = document.querySelector('header');

    // Elementos de los modales
    const addToCartModal = document.getElementById('addToCartModal');
    const cartModal = document.getElementById('cartModal');
    const jugosModal = document.getElementById('jugosModal');
    const bebidasModal = document.getElementById('bebidasModal');
    const modalProductName = document.getElementById('modalProductName');
    const modalProductPrice = document.getElementById('modalProductPrice');
    const quantityDisplay = document.getElementById('quantityDisplay');
    const decreaseQuantity = document.getElementById('decreaseQuantity');
    const increaseQuantity = document.getElementById('increaseQuantity');
    const addToCartBtn = document.getElementById('addToCartBtn');
    
    // Elementos del modal de jugos
    const jugosModalProductName = document.getElementById('jugosModalProductName');
    const jugosModalProductPrice = document.getElementById('jugosModalProductPrice');
    const jugosQuantityDisplay = document.getElementById('jugosQuantityDisplay');
    const decreaseJugosQuantity = document.getElementById('decreaseJugosQuantity');
    const increaseJugosQuantity = document.getElementById('increaseJugosQuantity');
    const addJugosToCartBtn = document.getElementById('addJugosToCartBtn');
    
    // Elementos del modal de bebidas
    const bebidasModalProductName = document.getElementById('bebidasModalProductName');
    const bebidasModalProductPrice = document.getElementById('bebidasModalProductPrice');
    const bebidasQuantityDisplay = document.getElementById('bebidasQuantityDisplay');
    const decreaseBebidasQuantity = document.getElementById('decreaseBebidasQuantity');
    const increaseBebidasQuantity = document.getElementById('increaseBebidasQuantity');
    const addBebidasToCartBtn = document.getElementById('addBebidasToCartBtn');
    
    const cartItems = document.getElementById('cartItems');
    const orderSummary = document.getElementById('orderSummary');
    const clearCartBtn = document.getElementById('clearCartBtn');
    const sendWhatsAppBtn = document.getElementById('sendWhatsAppBtn');
    const customerName = document.getElementById('customerName');
    const customerPhone = document.getElementById('customerPhone');
    const customerAddress = document.getElementById('customerAddress');

    let currentParentCategory = null;

    // Crear un contenedor para los botones de regresar
    const backButtonContainer = document.createElement('div');
    backButtonContainer.classList.add('back-button-container');
    backButtonContainer.style.display = 'none';
    headerElement.insertAdjacentElement('afterend', backButtonContainer);

    // Función auxiliar para agregar el botón de regreso
    function addBackButton(callback, text = '← Volver', isPrimary = false) {
        const backButton = document.createElement('button');
        backButton.textContent = text;
        backButton.classList.add('back-button');
        backButton.addEventListener('click', callback);
        backButtonContainer.appendChild(backButton);
        backButtonContainer.style.display = 'flex';
    }

    // Función para limpiar todos los botones de regreso existentes
    function clearBackButtons() {
        backButtonContainer.innerHTML = '';
        backButtonContainer.style.display = 'none';
    }

    // Función para mostrar las categorías principales
    function showCategories() {
        clearBackButtons();
        adicionesButtonContainer.style.display = 'none';

        menuItemsContainer.style.display = 'none';
        currentMenuTitle.style.display = 'none';
        categoryCardsContainer.style.display = 'flex';
        mainSectionTitle.textContent = "Nuestras Categorías";
        mainSectionTitle.style.display = 'block';

        categoryCardsContainer.innerHTML = '';
        categories.forEach(category => {
            const categoryCardDiv = document.createElement('div');
            categoryCardDiv.classList.add('category-card');
            categoryCardDiv.dataset.categoryId = category.id;

            categoryCardDiv.innerHTML = `
                <div class="category-icon-wrapper">
                    ${category.iconHtml}
                </div>
                <h3>${category.name}</h3>
            `;
            categoryCardsContainer.appendChild(categoryCardDiv);

            categoryCardDiv.addEventListener('click', () => {
                if (category.subcategories) {
                    displaySubcategories(category.id, category.name, category.subcategories);
                } else {
                    displayProducts(category.id, category.name);
                }
            });
        });
        currentParentCategory = null;
    }

    // Función para mostrar subcategorías
    function displaySubcategories(parentId, parentName, subcategories) {
        clearBackButtons();
        adicionesButtonContainer.style.display = 'none';
        currentParentCategory = { id: parentId, name: parentName, subcategories: subcategories };

        menuItemsContainer.style.display = 'none';
        mainSectionTitle.style.display = 'none';

        categoryCardsContainer.style.display = 'flex';
        categoryCardsContainer.innerHTML = '';

        currentMenuTitle.textContent = `Subcategorías de ${parentName}`;
        currentMenuTitle.style.display = 'block';

        subcategories.forEach(subcat => {
            const subcategoryCardDiv = document.createElement('div');
            subcategoryCardDiv.classList.add('category-card');
            subcategoryCardDiv.dataset.subcategoryId = subcat.id;

            subcategoryCardDiv.innerHTML = `
                <div class="category-icon-wrapper">
                    ${subcat.iconHtml}
                </div>
                <h3>${subcat.name}</h3>
            `;
            categoryCardsContainer.appendChild(subcategoryCardDiv);

            subcategoryCardDiv.addEventListener('click', () => {
                displayProducts(subcat.id, subcat.name, parentId);
            });
        });

        // Botón de Home
        const homeButton = document.createElement('button');
        homeButton.innerHTML = '<i class="fas fa-home"></i> Inicio';
        homeButton.classList.add('back-button');
        homeButton.style.backgroundColor = '#4CAF50';
        homeButton.addEventListener('click', () => {
            showCategories();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        backButtonContainer.appendChild(homeButton);
        backButtonContainer.style.display = 'flex';
    }

    // Función para mostrar productos
    function displayProducts(displayId, displayName, parentCategoryId = null) {
        clearBackButtons();
        categoryCardsContainer.style.display = 'none';
        mainSectionTitle.style.display = 'none';

        menuItemsContainer.innerHTML = '';

        const filteredProducts = products.filter(product => {
            if (parentCategoryId) {
                return product.category === parentCategoryId && product.subcategory === displayId;
            } else {
                return product.category === displayId && !product.subcategory;
            }
        });

        if (filteredProducts.length > 0) {
            currentMenuTitle.textContent = `Productos de ${displayName}`;
            currentMenuTitle.style.display = 'block';
            menuItemsContainer.style.display = 'grid';

            filteredProducts.forEach(product => {
                let productName = product.name;
                let productSubtitle = '';
                const match = productName.match(/\((.*?)\)/);

                if (match && match[1]) {
                    productSubtitle = `<span class="product-subtitle">(${match[1]})</span>`;
                    productName = productName.replace(/\s*\(.*?\)/, '');
                }

                let priceHtml = '';
                if (product.priceAgua && product.priceLeche) {
                    priceHtml = `<p class="price">${product.priceAgua}<br>${product.priceLeche}</p>`;
                } else if (product.price) {
                    priceHtml = `<p class="price">${product.price}</p>`;
                }

                const menuItemDiv = document.createElement('div');
                menuItemDiv.classList.add('menu-item');

                menuItemDiv.innerHTML = `
                    <h3>${productName}</h3>
                    ${productSubtitle}
                    ${priceHtml}
                    <p class="phrase">"${product.phrase}"</p>
                `;

                // Agregar evento click para abrir modal según el tipo de producto
                menuItemDiv.addEventListener('click', () => {
                    openProductModal(product, displayId, parentCategoryId);
                });

                menuItemsContainer.appendChild(menuItemDiv);
            });
        } else {
            currentMenuTitle.textContent = `No hay productos en ${displayName}`;
            currentMenuTitle.style.display = 'block';
            menuItemsContainer.style.display = 'none';
        }

        // Lógica del botón de "Ver Adiciones"
        if (displayId === "comidas-rapidas") {
            adicionesButtonContainer.style.display = 'block';
            showAdicionesBtn.onclick = () => displayProducts("adiciones", "Adiciones");
        } else {
            adicionesButtonContainer.style.display = 'none';
        }

        // Botón de Home
        const homeButton = document.createElement('button');
        homeButton.innerHTML = '<i class="fas fa-home"></i> Inicio';
        homeButton.classList.add('back-button');
        homeButton.style.backgroundColor = '#4CAF50';
        homeButton.addEventListener('click', () => {
            showCategories();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        backButtonContainer.appendChild(homeButton);
        backButtonContainer.style.display = 'flex';

        // Botón de regreso principal
        if (parentCategoryId) {
            const parentCat = categories.find(cat => cat.id === parentCategoryId);
            if (parentCat) {
                addBackButton(() => {
                    displaySubcategories(parentCat.id, parentCat.name, parentCat.subcategories);
                }, `← Volver a Subcategorías de ${parentCat.name}`);
            }
        }
    }

    // Funciones del carrito
    function openProductModal(product, displayId, parentCategoryId) {
        currentProduct = product;
        currentQuantity = 1;
        
        // Determinar qué modal abrir según el tipo de producto
        if (displayId === "comidas-rapidas" || displayId === "adiciones") {
            // Modal completo para comidas rápidas y adiciones
            openAddToCartModal(product);
        } else if (parentCategoryId === "jugos") {
            // Modal de jugos (solo agua/leche y cantidad)
            openJugosModal(product);
        } else if (displayId === "otras-bebidas") {
            // Modal de bebidas (solo cantidad)
            openBebidasModal(product);
        }
    }

    function openAddToCartModal(product) {
        modalProductName.textContent = product.name;
        
        if (product.priceAgua && product.priceLeche) {
            modalProductPrice.textContent = `${product.priceAgua} / ${product.priceLeche}`;
        } else {
            modalProductPrice.textContent = product.price;
        }
        
        quantityDisplay.textContent = currentQuantity;
        
        // Limpiar checkboxes
        const checkboxes = addToCartModal.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => checkbox.checked = false);
        
        addToCartModal.style.display = 'block';
        
        // Asegurar que el modal siempre se muestre desde arriba
        const modalContent = addToCartModal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    }

    function openJugosModal(product) {
        jugosModalProductName.textContent = product.name;
        jugosModalProductPrice.textContent = `${product.priceAgua} / ${product.priceLeche}`;
        jugosQuantityDisplay.textContent = currentQuantity;
        
        // Resetear radio buttons
        const radioButtons = jugosModal.querySelectorAll('input[type="radio"]');
        radioButtons[0].checked = true; // Seleccionar "Agua" por defecto
        
        jugosModal.style.display = 'block';
        
        // Asegurar que el modal siempre se muestre desde arriba
        const modalContent = jugosModal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    }

    function openBebidasModal(product) {
        bebidasModalProductName.textContent = product.name;
        bebidasModalProductPrice.textContent = product.price;
        bebidasQuantityDisplay.textContent = currentQuantity;
        
        bebidasModal.style.display = 'block';
        
        // Asegurar que el modal siempre se muestre desde arriba
        const modalContent = bebidasModal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    }

    function closeModal(modal) {
        modal.style.display = 'none';
    }

    function addToCart() {
        if (!currentProduct) return;

        const selectedSalsas = Array.from(addToCartModal.querySelectorAll('input[value*="Rosada"], input[value*="Piña"], input[value*="BBQ"], input[value*="Mayonesa"], input[value*="Mostaza"], input[value*="Ketchup"], input[value*="Aguacate"]:checked')).map(cb => cb.value);
        const selectedAdiciones = Array.from(addToCartModal.querySelectorAll('input[value*="Carne desmechada"], input[value*="Carne de hamburguesa"], input[value*="Chorizo coctelero"], input[value*="Huevo de codorniz"], input[value*="Queso"], input[value*="Tocineta"]:checked')).map(cb => cb.value);
        const selectedQuitar = Array.from(addToCartModal.querySelectorAll('input[value*="Tomate"], input[value*="Lechuga"], input[value*="Cebolla"], input[value*="Queso"]:checked')).map(cb => cb.value);

        const cartItem = {
            id: Date.now(),
            product: currentProduct,
            quantity: currentQuantity,
            salsas: selectedSalsas.length > 0 ? selectedSalsas : ['Ninguna'],
            adiciones: selectedAdiciones.length > 0 ? selectedAdiciones : ['Ninguna'],
            quitar: selectedQuitar.length > 0 ? selectedQuitar : ['Ninguno'],
            tipo: null
        };

        cart.push(cartItem);
        updateCartCount();
        updateCartTotal();
        closeModal(addToCartModal);
        
        showNotification('Producto agregado al carrito');
    }

    function addJugosToCart() {
        if (!currentProduct) return;

        const selectedTipo = jugosModal.querySelector('input[name="jugoType"]:checked').value;

        const cartItem = {
            id: Date.now(),
            product: currentProduct,
            quantity: currentQuantity,
            salsas: ['No aplica'],
            adiciones: ['No aplica'],
            quitar: ['No aplica'],
            tipo: selectedTipo
        };

        cart.push(cartItem);
        updateCartCount();
        updateCartTotal();
        closeModal(jugosModal);
        
        showNotification('Jugo agregado al carrito');
    }

    function addBebidasToCart() {
        if (!currentProduct) return;

        const cartItem = {
            id: Date.now(),
            product: currentProduct,
            quantity: currentQuantity,
            salsas: ['No aplica'],
            adiciones: ['No aplica'],
            quitar: ['No aplica'],
            tipo: null
        };

        cart.push(cartItem);
        updateCartCount();
        updateCartTotal();
        closeModal(bebidasModal);
        
        showNotification('Bebida agregada al carrito');
    }

    function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    function calculateCartTotal() {
        let total = 0;
        cart.forEach(item => {
            let price = item.product.price;
            if (item.product.priceAgua && item.product.priceLeche) {
                price = item.tipo === 'Leche' ? item.product.priceLeche : item.product.priceAgua;
            }
            
            // Convertir el precio de string a número
            const priceNumber = parseInt(price.replace(/[^\d]/g, ''));
            total += priceNumber * item.quantity;
        });
        return total;
    }

    function updateCartTotal() {
        const total = calculateCartTotal();
        const cartTotalElement = document.getElementById('cartTotal');
        if (cartTotalElement) {
            cartTotalElement.innerHTML = `<strong>Total: $${total.toLocaleString()}</strong>`;
        }
    }

    function removeFromCart(itemId) {
        cart = cart.filter(item => item.id !== itemId);
        updateCartCount();
        updateCartDisplay();
        updateCartTotal();
    }

    function clearCart() {
        cart = [];
        updateCartCount();
        updateCartDisplay();
        updateCartTotal();
        closeModal(cartModal);
    }

    function updateCartDisplay() {
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; color: #666;">No hay productos en el carrito</p>';
            return;
        }

        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            
            let price = item.product.price;
            if (item.product.priceAgua && item.product.priceLeche) {
                price = item.tipo === 'Leche' ? item.product.priceLeche : item.product.priceAgua;
            }
            
            let details = '';
            if (item.tipo) {
                details = `Tipo: ${item.tipo}`;
            } else if (item.salsas[0] !== 'No aplica') {
                details = `
                    Salsas: ${item.salsas.join(', ')}<br>
                    Adiciones: ${item.adiciones.join(', ')}<br>
                    Quitar: ${item.quitar.join(', ')}
                `;
            }
            
            cartItemDiv.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.product.name} x${item.quantity}</div>
                    <div class="cart-item-details">${details}</div>
                    <div class="cart-item-price">${price}</div>
                </div>
                <div class="cart-item-actions">
                    <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            
            cartItems.appendChild(cartItemDiv);
        });
        
        updateCartTotal();
    }

    function generateOrderSummary() {
        if (cart.length === 0) {
            orderSummary.innerHTML = '<p>No hay productos en el carrito</p>';
            return;
        }

        let summary = '';
        cart.forEach((item, index) => {
            let price = item.product.price;
            if (item.product.priceAgua && item.product.priceLeche) {
                price = item.tipo === 'Leche' ? item.product.priceLeche : item.product.priceAgua;
            }
            
            summary += `<strong>${index + 1}. ${item.product.name}</strong><br>`;
            summary += `Cantidad: ${item.quantity}<br>`;
            
            if (item.tipo) {
                summary += `Tipo: ${item.tipo}<br>`;
            } else if (item.salsas[0] !== 'No aplica') {
                summary += `Salsas: ${item.salsas.join(', ')}<br>`;
                summary += `Adiciones: ${item.adiciones.join(', ')}<br>`;
                summary += `Quitar: ${item.quitar.join(', ')}<br>`;
            }
            
            summary += `Precio: ${price}<br><br>`;
        });

        orderSummary.innerHTML = summary;
        updateCartTotal();
    }

    function sendWhatsApp() {
        if (cart.length === 0) {
            alert('El carrito está vacío');
            return;
        }

        if (!customerName.value || !customerPhone.value || !customerAddress.value) {
            alert('Por favor completa toda la información de entrega');
            return;
        }

        let message = `Buen día,\n\n`;
        message += `Nombre: ${customerName.value}\n`;
        message += `Teléfono: ${customerPhone.value}\n`;
        message += `Dirección: ${customerAddress.value}\n\n`;

        cart.forEach((item, index) => {
            let price = item.product.price;
            if (item.product.priceAgua && item.product.priceLeche) {
                price = item.tipo === 'Leche' ? item.product.priceLeche : item.product.priceAgua;
            }
            
            message += `${index + 1}. ${item.product.name}\n`;
            message += `Cantidad: ${item.quantity}\n`;
            
            if (item.tipo) {
                message += `Tipo: ${item.tipo}\n`;
            } else if (item.salsas[0] !== 'No aplica') {
                message += `Salsas: ${item.salsas.join(', ')}\n`;
                message += `Adiciones: ${item.adiciones.join(', ')}\n`;
                message += `Quitar: ${item.quitar.join(', ')}\n`;
            }
            
            message += `Precio: ${price}\n\n`;
        });

        message += `Muchas gracias`;

        const phoneNumber = '573218663932';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #4CAF50;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 3000;
            font-weight: bold;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Event listeners
    cartBtn.addEventListener('click', () => {
        updateCartDisplay();
        generateOrderSummary();
        cartModal.style.display = 'block';
        
        // Asegurar que el modal siempre se muestre desde arriba
        const modalContent = cartModal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    });

    // Controles de cantidad para comidas rápidas
    decreaseQuantity.addEventListener('click', () => {
        if (currentQuantity > 1) {
            currentQuantity--;
            quantityDisplay.textContent = currentQuantity;
        }
    });

    increaseQuantity.addEventListener('click', () => {
        currentQuantity++;
        quantityDisplay.textContent = currentQuantity;
    });

    // Controles de cantidad para jugos
    decreaseJugosQuantity.addEventListener('click', () => {
        if (currentQuantity > 1) {
            currentQuantity--;
            jugosQuantityDisplay.textContent = currentQuantity;
        }
    });

    increaseJugosQuantity.addEventListener('click', () => {
        currentQuantity++;
        jugosQuantityDisplay.textContent = currentQuantity;
    });

    // Controles de cantidad para bebidas
    decreaseBebidasQuantity.addEventListener('click', () => {
        if (currentQuantity > 1) {
            currentQuantity--;
            bebidasQuantityDisplay.textContent = currentQuantity;
        }
    });

    increaseBebidasQuantity.addEventListener('click', () => {
        currentQuantity++;
        bebidasQuantityDisplay.textContent = currentQuantity;
    });

    addToCartBtn.addEventListener('click', addToCart);
    addJugosToCartBtn.addEventListener('click', addJugosToCart);
    addBebidasToCartBtn.addEventListener('click', addBebidasToCart);

    clearCartBtn.addEventListener('click', clearCart);

    sendWhatsAppBtn.addEventListener('click', sendWhatsApp);

    // Cerrar modales
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            closeModal(addToCartModal);
            closeModal(cartModal);
            closeModal(jugosModal);
            closeModal(bebidasModal);
        });
    });

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (event) => {
        if (event.target === addToCartModal) {
            closeModal(addToCartModal);
        }
        if (event.target === cartModal) {
            closeModal(cartModal);
        }
        if (event.target === jugosModal) {
            closeModal(jugosModal);
        }
        if (event.target === bebidasModal) {
            closeModal(bebidasModal);
        }
    });

    // Inicia mostrando las categorías cuando la página carga
    showCategories();

    // Lógica para el botón de "volver arriba"
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Funcionalidad del botón de WhatsApp
    whatsappBtn.addEventListener('click', function() {
        const phoneNumber = '573218663932';
        const message = 'Hola! Me gustaría hacer un pedido en Sabor Viral 🍔';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });

    // Hacer removeFromCart disponible globalmente
    window.removeFromCart = removeFromCart;

    // Hacer scroll automático a la parte superior cuando se actualiza la página
    window.addEventListener('beforeunload', function() {
        window.scrollTo(0, 0);
    });

    // También hacer scroll a la parte superior cuando se carga la página
    window.addEventListener('load', function() {
        window.scrollTo(0, 0);
    });

    // Bloqueo de clic derecho y atajos de teclado
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12') { e.preventDefault(); }
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') { e.preventDefault(); }
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'J') { e.preventDefault(); }
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') { e.preventDefault(); }
        if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) { e.preventDefault(); }
        if ((e.ctrlKey || e.metaKey) && e.key === 'S') { e.preventDefault(); }
    });

    // Hacer removeFromCart disponible globalmente
    window.removeFromCart = removeFromCart;
});