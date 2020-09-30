export default {
  data() {
    return {
      url: "ewrewrwer",
      search_form: {
        theme: '',
        idicate: '',
        dimension: ''
      },
      inst_form: {
        branch: '',
        mid_branch: '',
        third_branch: ''
      },
      yewu_form: {
        area: '',
        part: '',
        room: ''
      },


      //日期选择
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value1: '',
      value2: '',
      //模糊搜索
      restaurants: [],
      state: '',
      timeout: null,

      //维度联动flag
      from_info_f: false,
      form_inst_f: false,
      form_area_f: false,

      //表格
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普'
      }]



    }
  },
  methods: {
    deminClickBack: function () {
      // this.$emit('titleClick','返回');
      this.$router.push('/midmain')
    },
    onSubmit() {
      console.log('submit!');
    },
    dimenChose(name) {
      console.log(name)
      let flagArr = ['form_info_f', 'form_inst_f', 'form_area_f'];
      flagArr.forEach(function (value, index, arr) {
        console.log(value, index, arr)
      })
    },




    loadAll() {
      return [
        { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
        { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
        { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
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
    //报表查询
    getConditions(){
      
    }



  },
  mounted() {
    this.restaurants = this.loadAll();

  },





































  beforeRouteEnter: (to, from, next) => {
    console.log('deminfilter')
    next()
  },
  beforeRouteUpdate: (to, form, next) => {
    // console.log(to,from)
    next()

  },
  beforeRouteLeave: (to, from, next) => {
    console.log('deminfilterleave')
    next()
  }
}