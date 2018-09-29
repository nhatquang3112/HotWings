<template>
  <div class="analytics">
    <section class="hero is-link">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">Food Consumption</h1>
          <h2 class="subtitle">Tracking and Analytics</h2>
        </div>
      </div>
    </section>

    <div class="field has-addons">
      <div class="control is-expanded has-icons-left">
        <input class="input" type="text" placeholder="Search with flight number">
        <span class="icon is-medium is-left">
          <i class="fas fa-search"></i>
        </span>
      </div>
      <div class="control">
        <a class="button is-info">
          Search
        </a>
      </div>
    </div>

    <div class="tabs is-centered">
      <ul>
        <li class="is-active"><a>All Flights</a></li>
        <li><a>Domestic Flights</a></li>
        <li><a>International Flights</a></li>
      </ul>
    </div>

    <div class="card">
  <header class="card-header">
    <span class="icon">
      <i class="fas fa-plane" aria-hidden="true"></i>
    </span>
    <p class="card-header-title">
      Flight number SQ907
    </p>
  </header>
  <div class="card-content">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
      <p class="subtitle is-5">
        <strong>46</strong> Smoked Salmons
      </p>
    </div>
      </div>
    </div>
      <progress class="progress is-primary" value="46" max="100">46%</progress>

      <div class="level">
        <div class="level-left">
          <div class="level-item">
        <p class="subtitle is-5">
          <strong>54</strong> Sweet Porks
        </p>
      </div>
        </div>
      </div>

<progress class="progress is-primary" value="54" max="100">30%</progress>

<div class="level">
  <div class="level-left">
    <div class="level-item">
  <p class="subtitle is-5">
    <strong>68</strong> Brocoli
  </p>
</div>
  </div>
</div>

<progress class="progress is-info" value="68" max="100">45%</progress>

<div class="level">
  <div class="level-left">
    <div class="level-item">
  <p class="subtitle is-5">
    <strong>32</strong> Spinach
  </p>
</div>
  </div>
</div>

<progress class="progress is-info" value="32" max="100">60%</progress>

<div class="level">
  <div class="level-left">
    <div class="level-item">
  <p class="subtitle is-5">
    <strong>14</strong> Rice
  </p>
</div>
  </div>
</div>
<progress class="progress is-warning" value="14" max="100">75%</progress>

<div class="level">
  <div class="level-left">
    <div class="level-item">
  <p class="subtitle is-5">
    <strong>86</strong> Pasta
  </p>
</div>
  </div>
</div>

<progress class="progress is-warning" value="90" max="100">90%</progress>
    </div>
  </div>
  <footer class="card-footer">

  </footer>
</div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
