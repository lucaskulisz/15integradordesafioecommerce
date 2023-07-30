    let cart = {}; // Objeto para almacenar los productos en el carrito

    // Función para agregar productos al carrito
    function addToCart(productId) {
      if (cart[productId]) {
        cart[productId]++;
      } else {
        cart[productId] = 1;
      }
      updateCartTotal();
      updateStock(productId, -1);
    }

    // Función para actualizar el total del carrito
    function updateCartTotal() {
      let total = 0;
      for (const productId in cart) {
        // Aquí podrías realizar una consulta a la base de datos para obtener el precio del producto
        // y multiplicarlo por la cantidad en el carrito
        total += cart[productId] * getProductPrice(productId);
      }
      document.getElementById("cart-total").textContent = total.toFixed(2);
    }

    // Función para actualizar el stock de un producto
    function updateStock(productId, quantity) {
      const stockElement = document.getElementById("stock-product" + productId);
      let stock = parseInt(stockElement.textContent);
      stock += quantity;
      stockElement.textContent = stock;
    }

    // Esta función es solo para simular la obtención del precio de un producto desde la base de datos
    function getProductPrice(productId) {
      // Aquí podrías realizar una consulta a la base de datos para obtener el precio real del producto
      // En este ejemplo, retornamos un precio ficticio
      const prices = {
        1: 19.99,
        2: 24.99
      };
      return prices[productId];
    }

    // Función para procesar el checkout (simulación)
    function checkout() {
      // Aquí podrías enviar los datos del carrito al servidor para procesar el pedido y realizar el pago
      // En este ejemplo, mostramos una alerta con los productos y sus cantidades
      let checkoutItems = "";
      for (const productId in cart) {
        const quantity = cart[productId];
        checkoutItems += `Producto ${productId}: ${quantity}\n`;
      }
      alert("Productos en el carrito:\n" + checkoutItems);
      // Reiniciamos el carrito y actualizamos el stock
      cart = {};
      updateCartTotal();
      updateStock(1, 10); // Restauramos el stock inicial del Producto 1 (ejemplo)
      updateStock(2, 15); // Restauramos el stock inicial del Producto 2 (ejemplo)
}

