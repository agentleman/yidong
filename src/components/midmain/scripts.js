export default {
    data() {
        return {}
    },
    methods: {
        barOption() {
            return {
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '6%',
                    right: '6%',
                    bottom: '6%',
                    top: '8%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['安享百万', '合安', '简易人生', '红福宝', '购房信贷',],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        barWidth: '22%',
                        data: [200, 334, 390, 330, 220]
                    }
                ]
            };
        },

        barTOption() {
            return {
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '6%',
                    right: '6%',
                    bottom: '6%',
                    top: '8%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['安享百万', '合安'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        barWidth: '12%',
                        data: [200, 334],
                        itemStyle: {
                            normal: {
                                color: '#9682FF'
                            }
                        },
                    }
                ]
            };
        },

        mapOption() {
            return {
                tooltip: {
                    show: false
                },

                geo: {
                    map: "china",
                    roam: false,// 一定要关闭拖拽
                    zoom: 1.23,
                    center: [105, 36], // 调整地图位置
                    label: {
                        normal: {
                            show: false, //关闭省份名展示
                            fontSize: "10",
                            color: "rgba(0,0,0,0.7)"
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    regions: [{
                        name: "南海诸岛",
                        normal: {
                            itemStyle: {
                                // 隐藏地图
                                normal: {
                                    opacity: 0, // 为 0 时不绘制该图形
                                }
                            },
                            label: {
                                show: false // 隐藏文字
                            }
                        },
                    }],
                    itemStyle: {
                        normal: {
                            areaColor: "#0d0059",
                            borderColor: "#389dff",
                            borderWidth: 1, //设置外层边框
                            shadowBlur: 5,
                            shadowOffsetY: 8,
                            shadowOffsetX: 0,
                            shadowColor: "#01012a"
                        },
                        emphasis: {
                            areaColor: "#184cff",
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowBlur: 0,
                            borderWidth: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)"
                        }
                    }
                },
                series: [
                    {
                        type: "map",
                        map: "china",
                        roam: false,
                        zoom: 1.23,
                        center: [105, 36],
                        // geoIndex: 1,
                        // aspectScale: 0.75, //长宽比
                        showLegendSymbol: false, // 存在legend时显示
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: "#fff"
                                }
                            }
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter(value) {
                                console.log(value)
                                return value.data.name + ':' + value.data.value;
                            },
                            show: true
                        },
                        itemStyle: {
                            normal: {
                                areaColor: "#FFFAB6",
                                borderColor: "#389dff",
                                borderWidth: 0.5
                            },
                            emphasis: {
                                areaColor: "#FFDEA8",
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                shadowBlur: 5,
                                borderWidth: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)"
                            }
                        },
                        data: [
                            { name: "北京", value: 177 },
                            { name: "天津", value: 42 },
                            { name: "河北", value: 102 },
                            { name: "山西", value: 81 },
                            { name: "内蒙古", value: 47 },
                            { name: "辽宁", value: 67 },
                            { name: "吉林", value: 82 },
                            { name: "黑龙江", value: 66 },
                            { name: "上海", value: 24 },
                            { name: "江苏", value: 92 },
                            { name: "浙江", value: 114 },
                            { name: "安徽", value: 109 },
                            { name: "福建", value: 116 },
                            { name: "江西", value: 91 },
                            { name: "山东", value: 119 },
                            { name: "河南", value: 137 },
                            { name: "湖北", value: 116 },
                            { name: "湖南", value: 114 },
                            { name: "重庆", value: 91 },
                            { name: "四川", value: 125 },
                            { name: "贵州", value: 62 },
                            { name: "云南", value: 83 },
                            { name: "西藏", value: 9 },
                            { name: "陕西", value: 80 },
                            { name: "甘肃", value: 56 },
                            { name: "青海", value: 10 },
                            { name: "宁夏", value: 18 },
                            { name: "新疆", value: 67 },
                            { name: "广东", value: 123 },
                            { name: "广西", value: 59 },
                            { name: "海南", value: 14 }
                        ],
                    }
                ]
            }
        },
        lineOption() {
            return {

                // tooltip: {
                //     formatter: function (params) {
                //         var data = params.data || [0, 0];
                //         return data[0].toFixed(2) + ', ' + data[1].toFixed(2);
                //     }
                // },
                grid: {
                    left: '6%',
                    right: '8%',
                    bottom: '6%',
                    top: '10%',
                    containLabel: true
                },
                xAxis: {
                    // min: -60,
                    // max: 20,
                    type: 'category',
                    axisLine: { onZero: false },
                    data: ['1月', '二月', '三月', '四月', '五月']
                },
                yAxis: {
                    min: 0,
                    max: 40,
                    type: 'value',
                    axisLine: { onZero: false }
                },
                series: [
                    {
                        id: 'a',
                        type: 'line',
                        smooth: true,
                        symbolSize: 15,
                        data: [10, 15, 19, 18, 39]
                    }
                ]
            };
        },

        mgOption() {
            return {
                grid: {
                    left: '6%',
                    right: '8%',
                    bottom: '6%',
                    top: '10%',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    left: 'center',
                    // top: 'bottom',
                    bottom: 10,
                    data: ['rose1', 'rose2', 'rose3', 'rose5', 'rose6',]
                },

                series: [
                    {
                        name: '面积模式',
                        type: 'pie',
                        radius: [20, 70],
                        center: ['50%', '45%'],
                        roseType: 'area',
                        data: [
                            { value: 10, name: 'rose1' },
                            { value: 5, name: 'rose2' },
                            { value: 15, name: 'rose3' },
                            { value: 20, name: 'rose5' },
                            { value: 35, name: 'rose6' },

                        ]
                    }
                ]
            };
        },


        initCharts() {
            var chaina_map = this.$echarts.init(document.getElementById('map'));
            var bar_f = this.$echarts.init(document.getElementById('bar-f'));
            var bar_s = this.$echarts.init(document.getElementById('bar-s'));
            var line_f = this.$echarts.init(document.getElementById('line-f'));
            var pie_f = this.$echarts.init(document.getElementById('pie-f'));
            var bar_t = this.$echarts.init(document.getElementById('bar-t'))
            chaina_map.setOption(this.mapOption())
            bar_f.setOption(this.barOption())
            bar_s.setOption(this.barOption())
            line_f.setOption(this.lineOption())
            pie_f.setOption(this.mgOption())
            bar_t.setOption(this.barTOption())
            window.onresize = function () {
                chaina_map.resize();
                bar_f.resize();
                bar_s.resize();
                line_f.resize();
                pie_f.resize();
                bar_t.resize();
            }
        },


        midTilClick: function (event) {
            console.log(event)
            this.$emit('titleClick', event.target.innerText);
        }




    },
    beforeRouteEnter: (to, from, next) => {
        console.log(to, from)
        next()
    },
    beforeRouteUpdate: (to, form, next) => {
        // console.log(to,from)
        next()

    },
    beforeRouteLeave: (to, from, next) => {
        console.log('leave')
        next()
    },
    mounted() {
        this.initCharts()
    }
}