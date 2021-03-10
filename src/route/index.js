import { createRouter,createWebHashHistory} from 'vue-router'
import Invitations from '../views/Invitations'
import InvitationEdit from '../views/InvitationEdit'
import Topics from '../views/Topics'
import TopicEdit from '../views/TopicEdit'
import me from '../views/me'
import myJoined from '../views/myJoined'
import myInvitations from '../views/myInvitations'
import myTopics from '../views/myTopics'
import Login from '../views/Login'


let routes=[
    {
        path:'/',
        name:'Index',
        redirect:{name:"Login"}
    },{
        path:'/Invitations',
        name:'Invitations',
        component:Invitations

    },{
        path:'/Login',
        name:'Login',
        component:Login

    },{
        path:'/Topics',
        name:'Topics',
        component:Topics
    },{
        path:'/Topic/edit',
        name:'TopicEdit',
        component:TopicEdit
    },{
        path:'/Invitation/edit',
        name:'InvitationEdit',
        component:InvitationEdit
    },{
        path:'/me',
        name:'me',
        component:me,

    }, {
        path:'/myInvitations',
        name:'myInvitations',
        component:myInvitations
    },{
        path:'/myTopics',
        name:'myTopics',
        component:myTopics
    },{
        path:'/myJoined',
        name:'myJoined',
        component:myJoined
    }
]
 const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router