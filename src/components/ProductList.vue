<template>
    <div class="products">
      <div v-for="product in filteredProducts" :key="product.id" class="product">
        <img :src="product.image" alt="Product image" class="product-image">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>${{ product.price }}</p>
        <button @click="discoverProduct(product.id)">Discover</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['genre'],
    inject: ['cart'], 
    data() {
      return {
        products: [
          { id: 1, genre: 'Phones', name: 'iPhone 14', price: 999, description: 'Open Box.', image: 'https://www.thekase.com/on/demandware.static/-/Sites-tk-product/default/dw75128615/38994748/164369_large.png' },
          { id: 2, genre: 'Phones', name: 'iPhone 15', price: 999, description: 'Latest iPhone model.', image: 'https://fr.shopping.rakuten.com/photo/smartphone-apple-iphone-15-rose-128go-5g-4610656596_L_NOPAD.jpg' },
          { id: 3, genre: 'TVs', name: 'Samsung QLED TV', price: 1200, description: 'High-quality QLED TV.', image: 'https://images.samsung.com/is/image/samsung/p6pim/fr/tq43q60cauxxc/gallery/fr-qled-tv-tq43q60cauxxc-front-black-535395113?$2052_1641_PNG$' },
          { id: 4, genre: 'TVs', name: 'TV Crystal UHD 50', price: 1100, description: '4K, Smart TV.', image: 'https://images.samsung.com/is/image/samsung/p6pim/fr/ue50au7025kxxc/gallery/fr-uhd-4k-tv-ue50au7025kxxc-front-black-533819452?$2052_1641_PNG$' },
          { id: 5, genre: 'Watches', name: 'Apple Watch', price: 399, description: 'Innovative smartwatch.', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT533_VW_34FR+watch-case-41-aluminum-midnight-nc-s9_VW_34FR+watch-face-41-aluminum-midnight-s9_VW_34FR_WF_CO_GEO_FR?wid=2560&hei=1640&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=S1U2SEU2alhNeVk4Q1VaR2R6bWwvUTFIM0ZOT1ByQ0sxNWF5bXpoTmY3RnRuT1pORXQ4MzFQNEEvN2RTck5TYlJ3NFM0VlhnUGJhMGcvZU1YOURYWXpma0RqeFFEQXJ5Zmt1MTAxOGVrWGFiYWVTQ2xwcUFlaFoxcEVwRXYyZnNmVVFWUXBSTXBZVHRhQ1YvNUdKUXQreGVReFFtSnVJNzFaK1JQakUwV1V0cmJ5Zm1VUmZXSk5iYjdQejhIbUpHaCs4UVV5TkpOb3R0SnE2K0FBUHR6dmFlTEFNaXZtd2VrWFBncGExNlNBSXU2NXpuVE9URGdwTVhKQU9LMjEwMA' },
          { id: 6, genre: 'Watches', name: 'Samsung Galaxy Watch', price: 450, description: 'Galaxy Watch6 Bluetooth (40mm).', image: 'https://images.samsung.com/is/image/samsung/p6pim/fr/2307/gallery/fr-galaxy-watch6-r935-sm-r930nzeaxef-537420360?$1300_1038_PNG$' },
        ],
      };
    },
    computed: {
      filteredProducts() {
        return this.products.filter(product => product.genre === this.genre);
      },
    },
    methods: {
    discoverProduct(productId) {
      this.$router.push({ name: 'product-details', params: { id: productId } });
    },
    },
  };
  </script>
  