<template>
  <card>
    <template slot="header">
      <h5 class="card-title">
        {{ config.selectedDevice.name }} - {{ config.variableFullName }}
      </h5>
      <h3 class="card-title"></h3>
       <GmapMap
            :center="position"
            :zoom="10"
            map-type-id="terrain"
            style="width: 100%; height: 400px"
        >

          <GmapMarker 
        :position="position"
        :clickable="true"
        :draggable="false"
        >
        </GmapMarker> 
        </GmapMap>
       

    </template>
  </card>
</template>

<script>
    export default {
        name:"mapa",
        props: ['config'],
        data() {
          return{
            position:{lat:4.666127, lng:-74.09343}
          }
    },
     mounted(){
    const topic = this.config.userId + "/" + this.config.selectedDevice.dId + "/" + this.config.variable + "/sdata";
    this.$nuxt.$on(topic, this.processReceivedData);
  },
  beforeDestroy(){
    this.$nuxt.$off(this.topic);
  },

    methods:{
    processReceivedData(data){
      console.log("recibiendo ubicación")
      console.log(data)
      this.position=data
    }
  }
  }
  


</script>
