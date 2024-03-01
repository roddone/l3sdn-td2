<template>
  <div>
    <div v-for="category in items" :key="category.label">
      <h2>{{ category.label }}</h2>
      <ul>
        <li v-for="item in category.items" :key="item.id" @click="handleClick(item)">
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import { ref } from "vue";

const items = ref([
    {
        label: 'Iphone',
        items : [
            {
                label:'Iphone 9',
                type:'telephone',
                id :'1'
            },
            {
                label: 'Iphone 10',
                type:'telephone',
                id :'2'
            },
            {
                label: 'Iphone 11',
                type:'telephone',
                id :'3'
            }

        ]
    },
    {
        label: 'Samsung',

        items : [
            {
                label:'Samsung 9',
                type:'telephone',
                id :'4'
            },
            {
                label: 'Samsung 10',
                type:'telephone',
                id :'5'
            },
            {
                label: 'Samsung 11',
                type:'telephone',
                id :'6'
            }

        ]
    },
    {
        label: 'Lenovo',
        items : [
            {
                label:'Lenovo 9',
                type:'telephone',
                id :'7'
            },
            {
                label: 'Lenovo 10',
                type:'telephone',
                id :'8'
            },
            {
                label: 'Lenovo 11',
                type:'telephone',
                id :'9'
            }

        ]
    },
    {
        label: 'One plus',
        items : [
            {
                label:'One plus 9',
                type:'telephone',
                id :'10'
            },
            {
                label: 'One plus 10',
                type:'telephone',
                id :'11' 
            },
            {
                label: 'One plus 11',
                
            }

        ]
    }
]);


const handleClick = (items) => {
    router.push(`/Product/${items.type}/${items.id}`);
}

const router = useRouter();

</script>