import GameList from './pages/games/GameList.vue'
import GameForm from './pages/games/GameForm.vue'
import CategoryList from './pages/categories/CategoryList.vue'

export default [
    { path: '/', component: GameList },
    { path: '/games/create', component: GameForm },
    { path: '/categories', component: CategoryList }
]