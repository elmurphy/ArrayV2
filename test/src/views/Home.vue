<template>
    <div>
        Github https://github.com/elmurphy/ArrayV2 <br />
        NPM https://www.npmjs.com/package/arrayv2 <br />
        <br />
        New type JavaScript array. <br />
        <br />
        Simple linq functions for javascript arrays! <br />
        <br />
        -Where <br />
        -OrderBy <br />
        -OrderByDesc <br />
        -Select <br />
        -SelectMany <br />
        -GroupBy <br />

        Every functions has a Set version, the Set function will return the end of your data and set your array(for view engines vue, react, angular...) <br />
        Use as "WhereSet", "OrderBySet",....  <br />

        <hr />

        arr: <span v-html="arrayVirtualizer(arr)"></span>
        <br />
        <br />
        arrV2: <span v-html="arrayVirtualizer(arrV2.Data)"></span>
        <br />
        <br />
        arrV2.Where(x => x.Id > 3): <span v-html="arrayVirtualizer(arrV2.Where(x => x.Id > 3))"></span>
        <br />
        <br />
        arrV2.OrderBy(x => x.expStr): <span v-html="arrayVirtualizer(arrV2.OrderBy(x => x.expStr))"></span>
        <br />
        <br />
        arrV2.OrderByDesc(x => x.Id): <span v-html="arrayVirtualizer(arrV2.OrderByDesc(x => x.Id))"></span>
        <br />
        <br />
        arrV2.Select('Id'): <span v-html="arrayVirtualizer(arrV2.Select('Id'))"></span>
        <br />
        <br />
        arrV2.SelectMany('Id', 'expBool'): <span v-html="arrayVirtualizer(arrV2.SelectMany('Id', 'expBool'))"></span>
    </div>
</template>

<script>
    // @ is an alias to /src
    //import HelloWorld from "@/components/HelloWorld.vue";
    import ArrayV2 from 'arrayv2';
    export default {
        name: "Test",
        data() {
            return {
                arr: [
                    { Id: 1, expStr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", expBool: true },
                    { Id: 2, expStr: "Mauris eget neque eu nulla molestie bibendum", expBool: true },
                    { Id: 3, expStr: "Vivamus consequat egestas suscipit.", expBool: false },
                    { Id: 4, expStr: "Donec varius eget massa dignissim elementum", expBool: true },
                    { Id: 5, expStr: "In a ornare massa, non eleifend risus", expBool: false },
                ],
                arrV2: null,
            };
        },
        created() {
            this.arrV2 = this.arr.AsV2();
        },
        methods: {
            arrayVirtualizer(arr) {
                let result = "[" + "<br>";
                for (const i in arr) if (typeof arr[i] == "object") result += JSON.stringify(arr[i]) + "<br>";
                result += "];";
                return result;
            }
        }
    };
</script>
