<template>
  <div class='container'>
    <h3 class='display-3 titulo'>Posteos</h3>
    <div class='center-list'>
      <ul>
        <li v-for='post in posts' :key='post.id' class='list-item'>
          <PostDisplay :post='post' />
        </li>
      </ul>
    </div>
  </div>

  <nav aria-label='Page navigation example'>
    <ul class='pagination'>
      <li class='page-item'>
        <router-link
          :to='"/?page=" + (page - 1)'
          class='page-link'
          :class=' {disabled: page === 1 }'
        >
          Previous
        </router-link>
      </li>
      <li class='page-item'><a class='page-link'>{{ page }}</a></li>
      <li class='page-item'>
        <router-link
          :to='"/?page=" + (page + 1)'
          class='page-link'
          :class=' {disabled: posts.length <= 0 }'
        >
          Next
        </router-link>
      </li>
    </ul>
  </nav>

</template>

<script>
import { getPosts, getUserPosts } from '@/services/api'
import PostDisplay from '@/components/PostDisplay.vue'
import Cookies from 'js-cookie'

export default {
  components: {
    PostDisplay
  },
  watch: {
    '$route': 'fetchPosts'
  },
  data() {
    return {
      username: null,
      posts: [],
      page: 1
    }
  },
  created() {
    this.fetchPosts()
  },
  methods: {
    async fetchPosts() {
      try {
        const url = window.location.href
        let currentPage = this.$route.query.page || 1 // Get the current page from the URL query parameter
        this.page = parseInt(currentPage) // Update the component's page variable

        if (url.includes('profile/me')) {
          this.posts = await getUserPosts(Cookies.get('user'))
        } else if (url.includes('profile/')) {
          this.posts = await getUserPosts(this.$route.params.user, this.page)
        } else {
          this.posts = await getPosts(this.page)
        }
      } catch (err) {
        console.error('Error obteniendo posteos', err)
      }
    }

  }
}
</script>

<style scoped>
.titulo {
    margin-bottom: 30px;
}

ul {
    list-style-type: none;
}

nav {
    display: flex;
    justify-content: center;
}

.disabled {
    opacity: 0.5;
    pointer-events: none;
}
</style>
