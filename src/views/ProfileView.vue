<template>
  <div class='profile'>
    <h2>Profile</h2>
    <div>
      <strong>Username:</strong> <span>{{ username }}</span>
    </div>
    <div>
      <strong>Email:</strong> <span>{{ email }}</span>
    </div>
    <PostList></PostList>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import PostList from '@/components/PostList.vue'
import { getUserInfo } from '@/services/api'

export default {
  components: {
    PostList
  },
  data() {
    return {
      username: '',
      email: ''
    }
  },
  created() {
    this.fetchUserInfo()
  },
  methods: {
    async fetchUserInfo() {
      try {
        const urlParam = this.$route.params.user
        if (urlParam === 'me') {
          const cookie = Cookies.get('user')
          if (cookie) {
            const userInfo = await getUserInfo(cookie)
            this.username = userInfo.username
            this.email = userInfo.email
          }
        } else {
          const userInfo = await getUserInfo(urlParam)
          this.username = userInfo.username
          this.email = userInfo.email
        }
      } catch (err) {
        console.error('Error obtaining user information', err)
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
.profile {
    /* Add your custom styles here */
}
</style>
