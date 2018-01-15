<template>
  <div id="Choices">
        <div class="search-container">
            <label v-html="$t('message1.search')"></label>
        </div>
        <div class="sports flex">
            <span class="flex"><i class="icons8-rower-in-canoe"></i></span>
            <span class="flex"><i class="icons8-acrobatics"></i></span>
            <span class="flex"><i class="icons8-basketball-ball"></i></span>

            <span class="flex"><i class="icons8-cyclist"></i></span>
            <span class="flex"><i class="icons8-dumbbell"></i></span>
            <span class="flex"><i class="icons8-fight-gloves"></i></span>

            <span class="flex"><i class="icons8-handball"></i></span>
            <span class="flex"><i class="icons8-swimming"></i></span>
            <span class="flex"><i class="icons8-soccer-ball"></i></span>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Choices'
}
</script>

<style lang="scss">
@import "../assets/style/_colors.scss";

#Choices {
    width: 100%;
    height: 100%;
    background: rgba($color: #fff, $alpha: 0.6);

    .search-container {
        padding-top: 40%;
        border-bottom: 1px $pink solid;
        margin-right: 10px;
        margin-left: 10px;

        text-align: left;

        label {
            font-size: 16px;
            padding-bottom: 2px;
        }
    }

    .sports {
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        flex-flow: row wrap;
        margin-top: 10%;

        span {
            flex-grow: 1;
            width: 20%;

            margin: 3% 3% 3% 3%;
            justify-content: center;
            align-items: center;
            color: #fff;
            border-radius: 50px;
            background: $pink;
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
            
            i {
                font-size: 200%;
            }
        }

            span:before{
                content: "";
                display: block;
                padding-top: 100%;
            }

    }
}
</style>
