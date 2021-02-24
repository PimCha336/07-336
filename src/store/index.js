import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ticket: {
      products: null,
      total: 0,
    },
    counter: 0,

    cart: [],
    fields: ["#", "remove", "image", "name", "quantity", "price"],
    products: [
      {
          id:1,
          img:'@/assets/pic1.jpeg',
          name:'Pu erh Tea ',
          price:170,
          cart:false,
          quantity:1
         
      },
      {
          id:2,
          img:'@/assets/pic2.jpeg',
          name:'White Poneyn Tea',
          price:120,
          cart:false,
          quantity:1
      },
      {
          id:3,
          img:'@/assets/pic3.jpeg',
          name:'Smoky Lapsong Black Tea',
          price:150,
          cart:false,
          quantity:1
         
        
      },
      {
          id:4,
          img:'@/assets/pic1.jpeg',
          name:'Milk Oolong Tea',
          price:140,
          cart:false,
          quantity:1
         
      },
      {
          id:5,
          img:'@/assets/pic2.jpeg',
          name:'Long jing well Green Tea',
          price:160,
          cart:false,
          quantity:1
      },
      {
          id:6,
          img:'@/assets/pic3.jpeg',
           name:'Huo Shan Ya',
          price:180,
          cart:false,
          quantity:1
         
        
      }
  ],
  },
  getters: {

    add(product) {
      this.products[product.id - 1].cart = true;
      this.cart.push(product);
      this.counter++;
    },
    clean() {
      this.cart = [];

      for (const key in this.products) {
        this.products[key].cart = false;
        this.products[key].quantity = 1;
      }
      this.$refs["modal-1"].hide();
    },
    remove(id) {
      for (let index = 0; index < this.products.length; index++) {
        if (this.products[index].id == id) {
          this.products[index].cart = false;
        }
      }
      for (let index = 0; index < this.cart.length; index++) {
        if (this.cart[index].id == id) {
          this.cart.splice(index, 1);
        }
      }
    },
    buy() {
      this.ticket = {
        products: this.cart,
        total: this.total,
      };
      this.$refs["modal-1"].show();
    },
    increment(id) {
      for (let index = 0; index < this.cart.length; index++) {
        if (this.cart[index].id == id) {
          this.cart[index].quantity++;
        }
      }
    },
    decrement(id) {
      for (let index = 0; index < this.cart.length; index++) {
        if (this.cart[index].id == id) {
          this.cart[index].quantity--;
        }
      }
    },
   
},
buy(){
 this.ticket={
   products: this.cart,
   total: this.total
 }
 this.$refs['modal-1'].show()
 
}  ,
   increment(id){
     for (let index = 0; index < this.cart.length; index++) {
      if (this.cart[index].id == id) {
           this.cart[index].quantity++
      } 
   }
   },
   decrement(id){
     for (let index = 0; index < this.cart.length; index++) {
      if (this.cart[index].id == id) {
           this.cart[index].quantity--
      } 
   }
   },
  mutations: {
    // increment: (state) => {
    //   state.counter += 10
    // },
    increment(state, n) {
      if (n){
        state.counter += n
      }
      else
        state.counter += 10
    }
  },
 
  actions: {
    increment() {
      this.$store.commit('increment')
    },
  },
  modules: {
  }
})
