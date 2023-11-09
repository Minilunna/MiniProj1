
<!-- HTML --><template>
  <div class="photo-container">
    <div class="photo"/>
  </div>
</template>

<!-- JavaScript -->
<script>
export default {
  name: 'PhotoComponent'
}
</script>

<!-- CSS -->
<style scoped>
.photo-container {
  height: 100%;
  overflow: hidden;
}

.photo {
  height: 100%;
  background-image: url('../assets/MainCP.png');
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
}
</style>
