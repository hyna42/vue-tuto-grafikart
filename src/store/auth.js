import { defineStore } from "pinia"
import { ref } from "vue"

export const useAuth = defineStore('auth', () => {
    const user = ref(null)
    
    const authentificate = () => {
        user.value = {
            username: 'Baye Niass'
        }
    }


  return { user,authentificate}
})