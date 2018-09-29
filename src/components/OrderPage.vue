<template>
  <div class="order-page">
    <section class="hero is-link">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2 has-text-warning">Singapore Airline</h1>
          <h2 class="subtitle has-text-warning">Delicious on-flight meals await!</h2>
        </div>
      </div>
    </section>

    <div class="tabs is-centered is-medium is-boxed">
      <ul>
        <li v-bind:class="{'is-active': ingredientType === 'protein' || ingredientType === ''}">
          <a v-on:click="setIngredientType('protein')">
            <span class="icon is-small"><i class="fas fa-fish" aria-hidden="true"></i></span>
            <span>Protein</span>
          </a>
        </li>
        <li v-bind:class="{'is-active': ingredientType === 'base'}">
          <a v-on:click="setIngredientType('base')">
            <span class="icon is-small"><i class="fas fa-concierge-bell" aria-hidden="true"></i></span>
            <span>Base</span>
          </a>
        </li>
        <li v-bind:class="{'is-active': ingredientType === 'vegetable'}">
          <a v-on:click="setIngredientType('vegetable')">
            <span class="icon is-small"><i class="fas fa-lemon" aria-hidden="true"></i></span>
            <span>Vegetable</span>
          </a>
        </li>
        <li v-bind:class="{'is-active': ingredientType === 'sides'}">
          <a v-on:click="setIngredientType('sides')">
            <span class="icon is-small"><i class="fas fa-utensils" aria-hidden="true"></i></span>
            <span>Sides</span>
          </a>
        </li>
        <li v-bind:class="{'is-active': ingredientType === 'drink'}">
          <a v-on:click="setIngredientType('drink')">
            <span class="icon is-small"><i class="fas fa-coffee" aria-hidden="true"></i></span>
            <span>Drink</span>
          </a>
        </li>
        <li v-bind:class="{'is-active': ingredientType === 'dessert'}">
          <a v-on:click="setIngredientType('dessert')">
            <span class="icon is-small"><i class="fas fa-cookie-bite" aria-hidden="true"></i></span>
            <span>Dessert</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="columns" v-show="ingredientType === 'protein' || ingredientType === ''">
      <div class="column">
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Smoked Salmon
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://genabell.com/wp-content/uploads/2015/04/Easy-Thai-Peanut-Salmon-Noodles-088-640x480.jpg" alt="Placeholder image">
            </figure>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-info" v-on:click="setProtein('salmon')" v-show="proteinType !== 'salmon'">
                <span class="icon is-small"><i class="fas fa-thumbs-up" aria-hidden="true"></i></span>
                <span>Select</span>
              </a>
              <a class="button is-success" v-on:click="setProtein('salmon')" v-show="proteinType === 'salmon'">
                <span class="icon is-small"><i class="fas fa-check" aria-hidden="true"></i></span>
                <span>Selected</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Sweet Pork
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://i2.wp.com/spicenpans.com/wp-content/uploads/2017/05/IMG_2923.jpg?fit=1200%2C900&w=640" alt="Placeholder image">
            </figure>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-info" v-on:click="setProtein('pork')" v-show="proteinType !== 'pork'">
                <span class="icon is-small"><i class="fas fa-thumbs-up" aria-hidden="true"></i></span>
                <span>Select</span>
              </a>
              <a class="button is-success" v-on:click="setProtein('pork')" v-show="proteinType === 'pork'">
                <span class="icon is-small"><i class="fas fa-check" aria-hidden="true"></i></span>
                <span>Selected</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              No Protein
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://anabolicminds.com/forum/content/attachments/44042-plate-1305.jpg/?cid=24" alt="Placeholder image">
            </figure>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-info" v-on:click="setProtein('none')" v-show="proteinType !== 'none'">
                <span class="icon is-small"><i class="fas fa-thumbs-up" aria-hidden="true"></i></span>
                <span>Select</span>
              </a>
              <a class="button is-success" v-on:click="setProtein('none')" v-show="proteinType === 'none'">
                <span class="icon is-small"><i class="fas fa-check" aria-hidden="true"></i></span>
                <span>Selected</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
      <div class="column">
      </div>
    </div>

    <div class="columns" v-show="ingredientType === 'base'">
      <div class="column">
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Brown Rice
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://myfavouritepastime.files.wordpress.com/2014/06/brown-rice-with-green-onions-cilantro-myfavouritepastime-com_1588.jpg?w=680&h=510" alt="Placeholder image">
            </figure>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-info" v-on:click="setBase('rice')" v-show="baseType !== 'rice'">
                <span class="icon is-small"><i class="fas fa-thumbs-up" aria-hidden="true"></i></span>
                <span>Select</span>
              </a>
              <a class="button is-success" v-on:click="setBase('rice')" v-show="baseType === 'rice'">
                <span class="icon is-small"><i class="fas fa-check" aria-hidden="true"></i></span>
                <span>Selected</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Italian Pasta
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://www.chefbikeski.com/wp-content/uploads/2012/05/pasta-with-pork-belly-culinary-bike-tours-italy.jpg" alt="Placeholder image">
            </figure>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-info" v-on:click="setBase('pasta')" v-show="baseType !== 'pasta'">
                <span class="icon is-small"><i class="fas fa-thumbs-up" aria-hidden="true"></i></span>
                <span>Select</span>
              </a>
              <a class="button is-success" v-on:click="setBase('pasta')" v-show="baseType === 'pasta'">
                <span class="icon is-small"><i class="fas fa-check" aria-hidden="true"></i></span>
                <span>Selected</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              No Base
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://anabolicminds.com/forum/content/attachments/44042-plate-1305.jpg/?cid=24" alt="Placeholder image">
            </figure>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-info" v-on:click="setBase('none')" v-show="baseType !== 'none'">
                <span class="icon is-small"><i class="fas fa-thumbs-up" aria-hidden="true"></i></span>
                <span>Select</span>
              </a>
              <a class="button is-success" v-on:click="setBase('none')" v-show="baseType === 'none'">
                <span class="icon is-small"><i class="fas fa-check" aria-hidden="true"></i></span>
                <span>Selected</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
      <div class="column">
      </div>
    </div>

    <div class="columns" v-show="ingredientType === 'vegetable'">
      <div class="column">
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Brocoli
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://www.ladydocscornercafe.com/recipies/117-broccoli-with-tarragon-dressing.JPG" alt="Placeholder image">
            </figure>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-info" v-on:click="setVegetable('brocoli')" v-show="vegetableType !== 'brocoli'">
                <span class="icon is-small"><i class="fas fa-thumbs-up" aria-hidden="true"></i></span>
                <span>Select</span>
              </a>
              <a class="button is-success" v-on:click="setVegetable('brocoli')" v-show="vegetableType === 'brocoli'">
                <span class="icon is-small"><i class="fas fa-check" aria-hidden="true"></i></span>
                <span>Selected</span>
              </a>
            </div>
          </footer>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Spinach
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://s-media-cache-ak0.pinimg.com/originals/cb/30/51/cb3051d12c15e8c38f39b6c94dd23000.jpg" alt="Placeholder image">
            </figure>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-info" v-on:click="setVegetable('spinach')" v-show="vegetableType !== 'spinach'">
                <span class="icon is-small"><i class="fas fa-thumbs-up" aria-hidden="true"></i></span>
                <span>Select</span>
              </a>
              <a class="button is-success" v-on:click="setVegetable('spinach')" v-show="vegetableType === 'spinach'">
                <span class="icon is-small"><i class="fas fa-check" aria-hidden="true"></i></span>
                <span>Selected</span>
              </a>
            </div>
          </footer>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              No Vegetable
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://anabolicminds.com/forum/content/attachments/44042-plate-1305.jpg/?cid=24" alt="Placeholder image">
            </figure>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-info" v-on:click="setVegetable('none')" v-show="vegetableType !== 'none'">
                <span class="icon is-small"><i class="fas fa-thumbs-up" aria-hidden="true"></i></span>
                <span>Select</span>
              </a>
              <a class="button is-success" v-on:click="setVegetable('none')" v-show="vegetableType === 'none'">
                <span class="icon is-small"><i class="fas fa-check" aria-hidden="true"></i></span>
                <span>Selected</span>
              </a>
            </div>
          </footer>
        </div>
      </div>

      <div class="column">
      </div>
    </div>

    <div class="columns" v-show="ingredientType === 'sides'">
      <div class="column">
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Buttered Bread
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://genabell.com/wp-content/uploads/2015/08/Date-Nut-Bread-with-Orange-Maple-Butter-067-640x480.jpg" alt="Placeholder image">
            </figure>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-info" v-on:click="setSides('bread')" v-show="sidesType !== 'bread'">
                <span class="icon is-small"><i class="fas fa-thumbs-up" aria-hidden="true"></i></span>
                <span>Select</span>
              </a>
              <a class="button is-success" v-on:click="setSides('bread')" v-show="sidesType === 'bread'">
                <span class="icon is-small"><i class="fas fa-check" aria-hidden="true"></i></span>
                <span>Selected</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Peanuts
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://wearenotfoodies.com/wp-content/uploads/2012/08/Contents-of-a-Bag-of-SWA-Lightly-Salted-Peanuts-640x480.jpg" alt="Placeholder image">
            </figure>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-info" v-on:click="setSides('peanut')" v-show="sidesType !== 'peanut'">
                <span class="icon is-small"><i class="fas fa-thumbs-up" aria-hidden="true"></i></span>
                <span>Select</span>
              </a>
              <a class="button is-success" v-on:click="setSides('peanut')" v-show="sidesType === 'peanut'">
                <span class="icon is-small"><i class="fas fa-check" aria-hidden="true"></i></span>
                <span>Selected</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              No Sides
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://anabolicminds.com/forum/content/attachments/44042-plate-1305.jpg/?cid=24" alt="Placeholder image">
            </figure>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-info" v-on:click="setSides('none')" v-show="sidesType !== 'none'">
                <span class="icon is-small"><i class="fas fa-thumbs-up" aria-hidden="true"></i></span>
                <span>Select</span>
              </a>
              <a class="button is-success" v-on:click="setSides('none')" v-show="sidesType === 'none'">
                <span class="icon is-small"><i class="fas fa-check" aria-hidden="true"></i></span>
                <span>Selected</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
      <div class="column">
      </div>
    </div>

    <div class="columns" v-show="ingredientType === 'drink'">
      <div class="column">
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Apple Juice
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://cdn.playbuzz.com/cdn//683b474b-33af-4c64-ac18-a7aad27d0979/097fffe3-0d38-4ad1-8fb4-7678ef1afee0.jpg" alt="Placeholder image">
            </figure>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-info" v-on:click="setDrink('juice')" v-show="drinkType !== 'juice'">
                <span class="icon is-small"><i class="fas fa-thumbs-up" aria-hidden="true"></i></span>
                <span>Select</span>
              </a>
              <a class="button is-success" v-on:click="setDrink('juice')" v-show="drinkType === 'juice'">
                <span class="icon is-small"><i class="fas fa-check" aria-hidden="true"></i></span>
                <span>Selected</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Coke
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://wokq.com/files/2017/07/coke-zero-Credit-2k.jpg" alt="Placeholder image">
            </figure>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-info" v-on:click="setDrink('coke')" v-show="drinkType !== 'coke'">
                <span class="icon is-small"><i class="fas fa-thumbs-up" aria-hidden="true"></i></span>
                <span>Select</span>
              </a>
              <a class="button is-success" v-on:click="setDrink('coke')" v-show="drinkType === 'coke'">
                <span class="icon is-small"><i class="fas fa-check" aria-hidden="true"></i></span>
                <span>Selected</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Wine
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://devourbarcelonafoodtours.com/wp-content/uploads/2017/07/DSC02630-640x480.jpg" alt="Placeholder image">
            </figure>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-info" v-on:click="setDrink('wine')" v-show="drinkType !== 'wine'">
                <span class="icon is-small"><i class="fas fa-thumbs-up" aria-hidden="true"></i></span>
                <span>Select</span>
              </a>
              <a class="button is-success" v-on:click="setDrink('wine')" v-show="drinkType === 'wine'">
                <span class="icon is-small"><i class="fas fa-check" aria-hidden="true"></i></span>
                <span>Selected</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
      <div class="column">
      </div>
    </div>

    <div class="columns" v-show="ingredientType === 'dessert'">
      <div class="column">
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Caramel Ice-cream
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://www.potentash.com/wp-content/uploads/2015/11/brown-bread-ice-cream-640x480.jpg" alt="Placeholder image">
            </figure>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-info" v-on:click="setDessert('ice cream')" v-show="dessertType !== 'ice cream'">
                <span class="icon is-small"><i class="fas fa-thumbs-up" aria-hidden="true"></i></span>
                <span>Select</span>
              </a>
              <a class="button is-success" v-on:click="setDessert('ice cream')" v-show="dessertType === 'ice cream'">
                <span class="icon is-small"><i class="fas fa-check" aria-hidden="true"></i></span>
                <span>Selected</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Flan Cake
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://lh3.ggpht.com/_FSdRRmGCNBQ/SRmE8Y6wd5I/AAAAAAAADs8/EFkus01Gwyw/w1200-h630-p-k-no-nu/DSCF3428.JPG" alt="Placeholder image">
            </figure>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-info" v-on:click="setDessert('flan cake')" v-show="dessertType !== 'flan cake'">
                <span class="icon is-small"><i class="fas fa-thumbs-up" aria-hidden="true"></i></span>
                <span>Select</span>
              </a>
              <a class="button is-success" v-on:click="setDessert('flan cake')" v-show="dessertType === 'flan cake'">
                <span class="icon is-small"><i class="fas fa-check" aria-hidden="true"></i></span>
                <span>Selected</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              No Dessert
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://anabolicminds.com/forum/content/attachments/44042-plate-1305.jpg/?cid=24" alt="Placeholder image">
            </figure>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-info" v-on:click="setDessert('none')" v-show="dessertType !== 'none'">
                <span class="icon is-small"><i class="fas fa-thumbs-up" aria-hidden="true"></i></span>
                <span>Select</span>
              </a>
              <a class="button is-success" v-on:click="setDessert('none')" v-show="dessertType === 'none'">
                <span class="icon is-small"><i class="fas fa-check" aria-hidden="true"></i></span>
                <span>Selected</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
      <div class="column">
      </div>
    </div>




    <footer class="footer has-background-link">
      <a class="button is-warning is-rounded is-large" v-on:click="submitOrder" v-bind:class="{ 'is-loading': isLoading }">
        <span class="icon is-small" v-show="!isLoading && !isDone"><i class="fas fa-smile-beam" aria-hidden="true"></i></span>
        <a v-show="!isLoading && !isDone">I'm done! Place order now</a>
        <a v-show="isDone">Your meal has been ordered!</a>
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'OrderPage',
  data () {
    return {
      ingredientType: "",
      proteinType: "",
      baseType: "",
      vegetableType: "",
      sidesType: "",
      drinkType: "",
      dessertType: "",
      isLoading: false,
      isDone: false,
    }
  },
  methods: {
    home() {
      this.$router.replace('hello-world')
    },

    setIngredientType(ingredientType) {
      this.ingredientType = ingredientType
    },

    setProtein(newType) {
      this.proteinType = newType
    },

    setBase(newType) {
      this.baseType = newType
    },

    setVegetable(newType) {
      this.vegetableType = newType
    },

    setSides(newType) {
      this.sidesType = newType
    },

    setDrink(newType) {
      this.drinkType = newType
    },

    setDessert(newType) {
      this.dessertType = newType
    },

    submitOrder() {
      this.isLoading = true
      setTimeout(() => {
        this.isDone = true
        this.isLoading = false
      }, 2000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
