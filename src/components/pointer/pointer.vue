<template>
    <div class="pointer">

    </div>  

</template>

<script>
import $ from 'jquery';

export default {
    mounted(){
        $(document).mousemove( function (e) {
                $('.pointer').css({left: e.pageX, top:e.pageY})
            
        })
    }
}
</script>

<style style="scss" scoped>
   .cursor {
    position: absolute;
    background: white;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    z-index: 1;
    transition: 0.5s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
        0.2s cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity;
    user-select: none;
    pointer-events: none;
    transform: scale(0.8);
}

.cursor::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background-image: url("http://mirkozeppieri.emanuelepapale.com/wp-content/uploads/2018/07/project-hover-cursor.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    opacity: 0;
}
</style>