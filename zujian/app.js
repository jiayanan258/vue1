Vue.component("com-input", {
    // 有效，因为是在正确的作用域内
    props:["status","conner"],
    template: `
<input type="text" class="input" v-model="conner" @focus="focus">
      `,
    methods:{
        focus(){
            this.$emit("comp");
        },
    }
})
Vue.component("com-title", {
    // 有效，因为是在正确的作用域内
    props:["status","datas"],
    template: `
 <ul class="do" v-show="status==true">
        <li v-for="item in datas" @click="blur(item.title)">
            {{item.title}}
        </li>
    </ul>`,
    methods:{
        blur(val){
            this.$emit("comp",val);
        },
    }
})