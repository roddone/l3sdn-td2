
<template>
    <div class="container product-details" v-if="product">
      <h1>{{ product.name }}</h1>
      <img :src="product.image" alt="Product image" class="product-image" />
      <p>{{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
      <button @click="addToCart(product)">Add to Cart</button>
    </div>
  </template>
  
  <script>
  export default {
    inject: ['cart'],
    data() {
      return {
        product: null,
      };
    },
    mounted() {
      this.fetchProductDetails();
    },
    methods: {
      fetchProductDetails() {
        const products = [
        { id: 1, name: 'iPhone 14', price: 999, description: 'Open Box.', image: 'https://www.thekase.com/on/demandware.static/-/Sites-tk-product/default/dw75128615/38994748/164369_large.png' },
          { id: 2, name: 'iPhone 15', price: 999, description: 'Latest iPhone model.', image: 'https://fr.shopping.rakuten.com/photo/smartphone-apple-iphone-15-rose-128go-5g-4610656596_L_NOPAD.jpg' },
          { id: 3, name: 'Samsung QLED TV', price: 1200, description: 'High-quality QLED TV.', image: 'https://images.samsung.com/is/image/samsung/p6pim/fr/tq43q60cauxxc/gallery/fr-qled-tv-tq43q60cauxxc-front-black-535395113?$2052_1641_PNG$' },
          { id: 4, name: 'TV Crystal UHD 50', price: 1100, description: '4K, Smart TV.', image: 'https://images.samsung.com/is/image/samsung/p6pim/fr/ue50au7025kxxc/gallery/fr-uhd-4k-tv-ue50au7025kxxc-front-black-533819452?$2052_1641_PNG$' },
          { id: 5, name: 'Apple Watch', price: 399, description: 'Innovative smartwatch.', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT533_VW_34FR+watch-case-41-aluminum-midnight-nc-s9_VW_34FR+watch-face-41-aluminum-midnight-s9_VW_34FR_WF_CO_GEO_FR?wid=2560&hei=1640&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=S1U2SEU2alhNeVk4Q1VaR2R6bWwvUTFIM0ZOT1ByQ0sxNWF5bXpoTmY3RnRuT1pORXQ4MzFQNEEvN2RTck5TYlJ3NFM0VlhnUGJhMGcvZU1YOURYWXpma0RqeFFEQXJ5Zmt1MTAxOGVrWGFiYWVTQ2xwcUFlaFoxcEVwRXYyZnNmVVFWUXBSTXBZVHRhQ1YvNUdKUXQreGVReFFtSnVJNzFaK1JQakUwV1V0cmJ5Zm1VUmZXSk5iYjdQejhIbUpHaCs4UVV5TkpOb3R0SnE2K0FBUHR6dmFlTEFNaXZtd2VrWFBncGExNlNBSXU2NXpuVE9URGdwTVhKQU9LMjEwMA' },
          { id: 6, name: 'Samsung Galaxy Watch', price: 450, description: 'Galaxy Watch6 Bluetooth (40mm).', image: 'https://images.samsung.com/is/image/samsung/p6pim/fr/2307/gallery/fr-galaxy-watch6-r935-sm-r930nzeaxef-537420360?$1300_1038_PNG$' },
        ];
        const productId = Number(this.$route.params.id);
        this.product = products.find(product => product.id === productId);
      },
      addToCart(product) {
        this.cart.addProduct(product);
        alert(`${product.name} added to cart.`);
      },
    },
  };
  </script>