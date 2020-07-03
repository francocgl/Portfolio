<template>
    <section>
        <div class="error">
            <h1>Error</h1>
            <p>Parece que la url que solicitaste no existe.</p>
            <p>Para seguir navegando en la web haz click <a href="/">aqui</a>.</p>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style style="scss" scoped>
    .error{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        text-align: center;

    }
</style>