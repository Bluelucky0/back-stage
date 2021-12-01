export default{
    state:{
        isCollapse:false,
        currentMenu:null,
        tabsList:[
            {
            path:'/',
            name:'home',
            label:'首页',
            icon:'icon'
            }
            
        ]
    },
    mutations:{
        changeMenu(state){
            state.isCollapse = !state.isCollapse
        }
    }
}