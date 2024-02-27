<script>

const addToCart = () => {
    cart.add({
        id: 'chaise',
        name: 'Chaise',
        price: 29,
        quantity: 1
    })
};
</script>

<template>
    <div>
        <h1>Chaise</h1>
        <p>29,00€.</p>
        <button @click="addToCart">Ajouter au panier</button>
    </div>
</template>

<style>

</style>