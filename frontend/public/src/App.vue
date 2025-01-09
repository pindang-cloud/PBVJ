<template>
  <div>
    <nav>
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/about" class="link">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
}
.link {
  text-decoration: none;
  color: #42b983;
}
.link:hover {
  color: #2c3e50;
}
</style>
