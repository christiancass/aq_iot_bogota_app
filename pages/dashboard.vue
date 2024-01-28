<template>


    
  <div class="row" v-if="$store.state.devices.length > 0">

    <div
      v-for="(widget, index) in $store.state.selectedDevice.template.widgets"
      :key="index"
      :class="[widget.column]"
      
    >

      <Rtnumberchart
        v-if="widget.widget == 'numberchart'"
        :config="fixWidget(widget)"
      ></Rtnumberchart>

      <Iotswitch
        v-if="widget.widget == 'switch'"
        :config="fixWidget(widget)"
      ></Iotswitch>

      <Iotbutton
        v-if="widget.widget == 'button'"
        :config="fixWidget(widget)"
      ></Iotbutton>

      <Iotindicator
        v-if="widget.widget == 'indicator'"
        :config="fixWidget(widget)"
      ></Iotindicator>
      <IotMap
        v-if="widget.widget == 'mapa'"
        :config="fixWidget(widget)"
      ></IotMap>
    </div>
  </div>

  <div v-else>
    Select a Device...
  </div>

</template>

<script>

import { Table, TableColumn } from "element-ui";
import { Select, Option } from "element-ui";
import Iotindicator from '@/components/Widgets/Iotindicator.vue/'
import Iotbutton from '@/components/Widgets/Iotbutton.vue/'
import Iotswitch from '@/components/Widgets/Iotswitch.vue/'
import Rtnumberchart from '@/components/Widgets/Rtnumberchart.vue/'
import IotMap from '@/components/Widgets/IotMap.vue/'
import Json from '@/components/Json/'


export default {
  middleware: 'authenticated',
  name: 'Dashboard',
  components: {
        [Table.name]: Table,
        [TableColumn.name]: TableColumn,
        [Option.name]: Option,
        [Select.name]: Select,
        Iotindicator,
        Iotbutton,
        Iotswitch,
        Rtnumberchart,
        IotMap,
        Json,
    },
  data() {
    return {


    } 
  },

  mounted() {
  

  },

  methods: {

    fixWidget(widget){
      var widgetCopy = JSON.parse(JSON.stringify(widget));
      widgetCopy.selectedDevice.dId = this.$store.state.selectedDevice.dId;
      widgetCopy.selectedDevice.name = this.$store.state.selectedDevice.name;
      widgetCopy.userId = this.$store.state.selectedDevice.userId;
      
      if (widget.widget =="numberchart"){
        widgetCopy.demo = false;
      }
      
      return widgetCopy;
    }

  }

};
</script>