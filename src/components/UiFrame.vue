<template>
    <section>
        <div class='ui-frame'>
            <img src="../assets/images/transparent.png" alt="transparent background">
            <div class="screen">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'UiFrame'
}
</script>


<style lang="scss">
section {
    width:100%;
    height:100%;
    text-align: right;

    .ui-frame {
        display:inline-block;
        height: 100%;

        border-radius: 50px;
        border: 1px solid rgba(255,255,255,.3);
        box-shadow: 5px 10px 20px 0 rgba(0,0,0,.15);
        position: relative;


        img {
            display:block;
            height:100%;
            width:auto;
        }
    }

    .screen {
        width: 90%;
        height: 80%;
        position: absolute;
        top: 10%;
        left: 5%;
    }
}
</style>