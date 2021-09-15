import _ from "lodash";

export default {
  data() {
    return {
      scrollPosition: 0
    };
  },
  watch: {
    watch: {
      $route() {
        console.log("route changed: ", this.$route);
        this.lmS.update();
      }
    },
    mounted() {
      this.$nextTick(
        function () {
          this.lmS = new this.locomotiveScroll({
            el: document.querySelector("#js-scroll"),
            smooth: true /* if false disable overflow: hidden on html, body */
          });
          console.log("mounted");

          this.lmS.on("scroll", _.throttle(this.onLmsScroll, 150));
          window.addEventListener(
            "resize",
            _.debounce(this.onLmsResize.bind(this), 100)
          );
        }.bind(this)
      );
    },
    destroyed() {
      console.log("destroy");
      this.lmS.destroy();
      window.removeEventListener("resize", this.onLmsResize);
    },
    methods: {
      onLmsScroll(obj) {
        this.scrollPosition = obj["scroll"]["y"];
      },
      onLmsResize() {
        this.lmS.update();
      }
    }
  }
}
