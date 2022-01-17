<template>
  <div class="spin"></div>
</template>

<script>
export default {

}
</script>

<style>
    .spin {
        display: block;
        width: 40px;
        height: 40px;
        border: 3px solid transparent;
        border-radius: 50%;
        margin: 30px auto;
        border-top-color: crimson;
        animation: spin 1s ease infinite;

    }

    @keyframes spin {
        to {transform: rotateZ(360deg)}
    }
</style>