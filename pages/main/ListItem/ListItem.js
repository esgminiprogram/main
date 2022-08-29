// pages/wallet/history/ListItem/ListItem.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        itemData: {
            type: Object,
            value: {
                name: {
                    type: String,
                    value: "default"
                },
                revenue: {
                    type: String,
                    value: "default"
                },
                residenceTime: {
                    type: String,
                    value: "default"
                },
                score: {
                    type: Number,
                    value: "default"
                },
                billStatus: {
                    type: String,
                    value: "default"
                }
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        itemData:[]

    },

    /**
     * 组件的方法列表
     */
    methods: {
        
        
    },

    
})
