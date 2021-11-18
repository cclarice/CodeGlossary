<template lang='html'>
  <div class="Sketch">
    <div v-if="loading" class="SketchLoader">
      <BaseLoader class="Loader"/>
    </div>
    <div v-else class="SketchFrame">
      <iframe class="SketchHidden" src="" id="api-frame" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" ></iframe>
    </div>
    <div class="SketchForm">
      <BaseInputText class="SketchField"/>
      <BaseButton text="Load" class="SketchButton"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import BaseLoader from '../../components/base/loaders/BaseLoader'
import BaseInputText from '../../components/base/input/BaseInputText'
import BaseButton from '../../components/base/button/BaseButton'

export default Vue.extend({
  name: 'TestSketchfab',
  components: {
    BaseButton,
    BaseInputText,
    BaseLoader
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {

  },
  mounted () {
    let iframe = document.getElementById( 'api-frame' );

    let uid = '2ec4e968688446878b23383769eca79f';
    let client = null;

    function loadmodel(){
      document.addEventListener('load', () => console.log( 'viewerready' ))

      // By default, the latest version of the viewer API will be used.
      let client = new Sketchfab(iframe);

      // Alternatively, you can request a specific version.
      // var client = new Sketchfab( '1.0.0', iframe );

      client.init( uid, {
        success: function onSuccess( api ){
          console.log( 'Success' );
          api.load();
          api.start();

          api.addEventListener( 'viewerready', function() {
            console.log( 'Viewer is ready' );
            // once the viewer is ready, show the iframe
            let $apiFrame = document.getElementById( 'api-frame' );
            $apiFrame.classList.remove( 'hidden' ); // Remove hidden class
          } );
        },
        error: function onError( callback ){
          console.log( this.error );
        }
      })
    }
    loadmodel()
  }
})
</script>

<style lang='scss' scoped>
.Sketch {
  width: 100%;
  height: 100%;
  .SketchFrame,
  .SketchLoader {
    width: 100%;
    height: calc(100% - 40px);
    display: flex;
    justify-content: center;
    align-items: center;
    .Loader {

    }
    .SketchHidden {
      height: 100%;
      width: 100%;
    }
  }
  .SketchForm {
    height: 40px;
    padding: 8px;
    display: flex;
    column-gap: 8px;
    .SketchField {
      flex-grow: 1;
    }
    .SketchButton {
      background-color: #FF45EDAA;
      color: white;
    }
  }
}
</style>