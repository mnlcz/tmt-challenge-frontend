<template>
  <div class='profile'>
    <h2>Profile</h2>
    <div>
      <strong>Username:</strong> <span>{{ username }}</span>
    </div>
    <div>
      <strong>Email:</strong> <span>{{ email }}</span>
    </div>
    <h3>Posts</h3>
    <ul>
      <li v-for='post in posts' :key='post.id'>
        <h4>{{ post.title }}</h4>
        <p>{{ post.content }}</p>
        <button @click='editPost(post.id)'>Edit</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'Change later',
      email: 'Change later',
      posts: [
        {
          id: '-1',
          title: 'Hardcoded post title 1',
          content: 'Bla bla bla bla content'
        },
        {
          id: '-2',
          title: 'Hardcoded post title 2',
          content: 'Bla bla bla bla content'
        },
        {
          id: '-3',
          title: 'Hardcoded post title 3',
          content: 'Bla bla bla bla content'
        }
      ]
    }
  },
  methods: {
    editPost(postId) {
      throw new Error(`TODO: ${postId}`)
    }
  },
  mounted() {
    // Assuming you have fetched the person's data from your API and stored it in a variable called 'person'
    /*
    this.username = person.username;
    this.email = person.email;
    this.posts = person.posts;
     */
  }
}
</script>

<style scoped>
.profile {
    /* Add your custom styles here */
}
</style>
