<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>
div{
    min-height: 50px;
    display: flex;
    margin: 10px 10px;
    border-radius: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    justify-content: center;
    align-items: center;
    text-align:center;
}
div:hover{
    zoom: 1.05;
    cursor: pointer;
}
</style>