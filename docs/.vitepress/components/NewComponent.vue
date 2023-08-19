<template>
    <div class="container">
        <div class="row">
            <div class="col">
                hello
            </div>
            <div class="col">
                hello
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>hello 1</div>
            </div>
            <div class="col">
                <div>hello 1</div>
            </div>
            <div class="col">
                <div>hello 1</div>
            </div>
            <div class="col">
                <div>hello 1</div>
            </div>
            <div class="col">
                <div>hello 1</div>
            </div>
        </div>
    </div>
</template>

<script>


</script>

<style scoped>
:root {
    --custom-col-nums: 50%;
}


.container {
    display: flex;
    width: 100%;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
}


.row {
    display: flex;
    width: 100%;

    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    flex-wrap: wrap;
    /* border: 1px solid red; */
}

.col {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid blue;
    width: 100%
}


@media (min-width: 576px) and (max-width: 768px) {
  .col {
    width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .col {
    width: 50%;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  .col {
    width: 25%;
  }
}

</style>