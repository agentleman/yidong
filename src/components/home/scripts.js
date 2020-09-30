
export default {
    data() {
        return {
            restaurants: [],
            menu_show: true,
            state: '',
            timeout: null,
            imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601033958584&di=0ca95f6b63c2b73aebc8750db6cf804d&imgtype=0&src=http%3A%2F%2Fpic43.photophoto.cn%2F20170506%2F0470102348231008_b.jpg",
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            fits: "contain",
            logourl: require("../../assets/logo.png"),
        }
    },
    watch: {
        '$route': function (to, from) {
            this.herfName = '#' + to.fullPath
            this.herfNameTop = to.fullPath

            this.$nextTick(() => {
                if (this.hashTop) {
                    this.hashTop.click()
                }
            })
        }
    },
    methods: {
        loadAll() {
            return [
                { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },

            ];
        },
        querySearchAsync(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                cb(results);
            }, 3000 * Math.random());
        },
        createStateFilter(queryString) {
            return (state) => {
                return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        handleSelect(item) {
            console.log(item);
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);

        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        childEvent(data) {
            console.log('home接受' + data)
            this.menu_show = data;
            this.$router.push('/deminfilter')
        },
        selceted(index){
            console.log(index)
        }

    },
    mounted() {
        this.restaurants = this.loadAll();
    },
    beforeRouteEnter: (to, from, next) => {
        this.menu_show = true;
        next()
    },
    beforeRouteUpdate: (to, form, next) => {
        // if(form.name == 'deminfilter'){
        //     this.menu_show = true;
        // }else{
        //     this.menu_show = false;
        // } 
        next()
    },
    beforeRouteLeave: (to, from, next) => {
        next()
    }

};