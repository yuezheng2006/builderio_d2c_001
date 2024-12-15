<template>
  <section class="stats-container">
    <StatCard
      title="Total Customers"
      value="5,423"
      trend="+16%"
      trend-type="positive"
      icon-src="https://cdn.builder.io/api/v1/image/assets/c3f12d55dfe8411e8f06a4c982cd5303/04fe9e1e58640608bf41103447c16dc343257bd750ff209ce3a8a93d4eeb3489?apiKey=c3f12d55dfe8411e8f06a4c982cd5303&"
    />

    <div class="divider" />

    <StatCard
      title="Members"
      value="1,893"
      trend="-1%"
      trend-type="negative"
      icon-src="https://cdn.builder.io/api/v1/image/assets/c3f12d55dfe8411e8f06a4c982cd5303/fb25895f937f2c6e262440f8d798fd3670fc77339a0174778d153a70c6b3c059?apiKey=c3f12d55dfe8411e8f06a4c982cd5303&"
    />

    <div class="divider" />

    <StatCard
      title="Active Now"
      value="189"
      icon-src="https://cdn.builder.io/api/v1/image/assets/c3f12d55dfe8411e8f06a4c982cd5303/e4ee83101ab617598c1ec6e8ccbf99115bc92dd16b4522a1dd2bb1e565d0eb1e?apiKey=c3f12d55dfe8411e8f06a4c982cd5303&"
      show-active-users
    />
  </section>
</template>

<script setup lang="ts">
import StatCard from './StatCard.vue'
</script>

<style scoped>
.stats-container {
  display: flex;
  justify-content: space-between;
  align-items: start;
  background-color: #fff;
  border-radius: 16px;
  padding: 32px 57px;
  box-shadow: 0px 10px 60px rgba(168, 176, 185, 0.5);
}

.divider {
  width: 1px;
  height: 87px;
  background-color: #b1a2a2;
}

@media (max-width: 991px) {
  .stats-container {
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }

  .divider {
    display: none;
  }
}
</style>
