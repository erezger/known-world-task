<template>
  <div class="house_card" :style="{top:y + 'px',left:x+'px'}">
    <img class="house_image" :src="getImgUrl(house.flag)" :alt="house.name" @error="imageLoadError"/>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import House from '@/models/house';

@Component({})
export default class HouseItem extends Vue {
  @Prop() public house!: House;
  @Prop(Boolean) public isFullSize: boolean;

  public y = 0;
  public x = 0;

  public mounted() {
    this.housePosition(this.house);
  }

  @Watch('isFullSize')
  public isFullSizeChanged() {
    this.housePosition(this.house);
  }

  @Watch('house')
  public houseChanged() {
    this.housePosition(this.house);
  }

  public housePosition(house: House) {
    const ratio = this.isFullSize ? 2.5 : 1;
    this.y = this.house.position.y * ratio;
    this.x = this.house.position.x * ratio;
  }

  public getImgUrl(img: string) {
    return require('../assets/' + img);
  }

  public imageLoadError(event): void {
    // event.target.src = require('../assets/images/no-image.png')
    // this.noImage = true;
  }
}
</script>
<style lang="scss">
.house_card {
  position: absolute;
  width: 30px;
  transition: all ease-in-out;

  img {
    width: 100%;
  }
}
</style>
