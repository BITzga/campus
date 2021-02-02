import VueRouter from 'vue-router'
import Invitations from '../views/Invitations'
import Invitation from '../views/Invitation'
import InvitationEdit from '../views/InvitationEdit'
import Topics from '../views/Topics'
import Topic from '../views/Topic'
import TopicEdit from '../views/TopicEdit'
import Login from  '../views/Login'

const routes=[
    {
        path:'/',
        name:'Index',
        redirect:{name:"Invitations"}
    },{
        path:'/Invitations',
        name:'Invitations',
        component:Invitations

    },{
        path:'/Invitation/:invitationId',
        name:'Invitation',
        component:Invitation

    },{
        path:'/Topics',
        name:'Topics',
        component:Topics
    },{
        path:'/Topic/:topicId',
        name:'Topic',
        component:Topic
    },{
        path:'/Topic/edit',
        name:'TopicEdit',
        component:TopicEdit
    },{
        path:'/Invitation/edit',
        name:'InvitationEdit',
        component:InvitationEdit
    },{
        path:'/Login',
        name:'Login',
        component:Login
    }
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory,
    routes,
})

export default router