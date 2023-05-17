<template>
  <div>
    <h2>Posteos</h2>
    <ul>
      <li v-for='post in posts' :key='post.id'>
        {{post.id}}
        {{post.username}}
        {{post.creationdate}}
        {{ post.title }}
        {{post.content}}
      </li>
    </ul>
  </div>
</template>

<script>
import { getPosts } from '@/services/api'

export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    this.fetchPosts()
  },
  methods: {
    async fetchPosts() {
      try {
        this.posts = await getPosts() // TODO: fix, test if makes the call
      } catch (err) {
        console.error('Error obteniendo posteos', err)
      }
    }
  }
}
</script>