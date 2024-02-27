<template>
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-4xl font-bold mb-6">Bienvenue dans Mon Magasin</h1>
      <div class="space-y-2">
        <router-link to="/telephones" class="text-xl bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Téléphones</router-link>
        <router-link to="/tablettes" class="text-xl bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">Tablettes</router-link>
        <router-link to="/forfaits" class="text-xl bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">Forfaits</router-link>
        <router-link to="/marques" class="text-xl bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700 transition duration-300">Marques</router-link>
      </div>
    </div>
  </template>
  