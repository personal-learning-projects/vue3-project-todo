<script setup lang="ts">
function reloadPage(): void {
  window.location.reload();
}
</script>

<template>
  <header>
    <div class="left-side" @click="reloadPage">
      <img class="left-side__logo" src="../assets/Todo-Logo.png" alt="Todo List Logo" />
      <div class="left-side__title">TODO LIST</div>
    </div>
    <div class="right-side">
      <a href="https://github.com/duttdutt" target="_blank" class="right-side__github">
        <img src="../assets/GitHub-Logo.svg" alt="GitHub Logo" />
      </a>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "../styles/variables.scss";

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7vh;
  padding: 0px 20px;
  background-color: #f6f6f8;
  user-select: none;

  .left-side {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    &__logo {
      width: 30px;
    }
  }

  .right-side {
    display: flex;
    align-items: center;
    gap: 20px;

    &__github {
      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }

      img {
        width: 30px;
      }
    }
  }
}
</style>
