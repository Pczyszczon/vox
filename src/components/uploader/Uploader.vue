<template class="Uploader">
  <file-upload :url='url' :thumb-url='thumbUrl' :headers="headers" @change="onFileChange" accept=".jpg,.png,.pdf,.txt"></file-upload>
</template>

<script src="./Uploader.js"></script>
<style src="./Uploader.css"></style>
