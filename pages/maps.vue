<template>
    <div>
        <GmapMap
            :center="{lat:4.666127, lng:-74.09343}"
            :zoom="11.5"
            map-type-id="terrain"
            style="width: 100%; height: 600px"
        >
        </GmapMap>
    </div>
</template>
<script>
export default{
    middleware: 'authenticated'
}

</script>
