<template>
  <div class='col-lg-12'>
    <div class='card card-margin'>
      <div class='card-header no-border'>
        <h5 class='card-title'>{{ post.title }}</h5>
      </div>
      <div class='card-body pt-0'>
        <div class='widget-49'>
          <div class='widget-49-title-wrapper'>
            <div class='widget-49-date-primary'>
              <span class='widget-49-date-day'>{{ formatDate(post.creationdate) }}</span>
              <span class='widget-49-date-month'>{{ formatMonth(post.creationdate) }}</span>
            </div>
            <div class='widget-49-post-creator'>
              <router-link :to="'/profile/' + post.username" class='widget-49-post-user link-primary'>Creador: {{ post.username }}
              </router-link>
              <span class='widget-49-post-creationtime'>{{ formatHour(post.creationdate) }}</span>
            </div>
          </div>
          <div class='widget-49-post-content'>
            <p class='widget-49-post-content-text'><span>{{ post.content }}</span></p>
          </div>
          <div class='widget-49-action'>
            <router-link :to="'/editpost/' + post.id" class='btn btn-sm btn-flash-border-primary'>Editar</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import { getUserPosts } from '@/services/api'

export default {
  data() {
    return {
      userPost: false
    }
  },
  created() {
    this.checkUserPost()
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    async checkUserPost() {
      const id = this.post.id
      const user = Cookies.get('user')
      const logueado = user !== undefined
      if (!logueado) {
        this.userPost = false
      } else {
        const posts = await getUserPosts(user)
        this.userPost = posts.some(p => p["id"] === id && p["username"] === user)
      }
    },
    formatDate(date) {
      const formattedDate = new Date(date)
      return formattedDate.getDate() // Get the day number
    },
    formatMonth(date) {
      const formattedMonth = new Date(date)
      return formattedMonth.toLocaleString('default', { month: 'short' })
    },
    formatHour(date) {
      const formattedTime = new Date(date)
      const hour = formattedTime.getHours()
      const minutes = formattedTime.getMinutes()

      // Format the hour and minutes with leading zeros if necessary
      const formattedHour = hour.toString().padStart(2, '0')
      const formattedMinutes = minutes.toString().padStart(2, '0')

      return `${formattedHour}:${formattedMinutes}`
    }
  }
}
</script>

<style scoped>
body {
    background: #F4F7FD;
    margin-top: 20px;
}

.card-margin {
    margin-bottom: 1.875rem;
}

.card {
    border: 0;
    box-shadow: 0 0 10px 0 rgba(82, 63, 105, 0.1);
    -webkit-box-shadow: 0 0 10px 0 rgba(82, 63, 105, 0.1);
    -moz-box-shadow: 0 0 10px 0 rgba(82, 63, 105, 0.1);
    -ms-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #ffffff;
    background-clip: border-box;
    border: 1px solid #e6e4e9;
    border-radius: 8px;
}

.card .card-header.no-border {
    border: 0;
}

.card .card-header {
    background: none;
    padding: 0 0.9375rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    min-height: 50px;
}

.card-header:first-child {
    border-radius: calc(8px - 1px) calc(8px - 1px) 0 0;
}

.widget-49 .widget-49-title-wrapper {
    display: flex;
    align-items: center;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-primary {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #edf1fc;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-primary .widget-49-date-day {
    color: #4e73e5;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-primary .widget-49-date-month {
    color: #4e73e5;
    line-height: 1;
    font-size: 1rem;
    text-transform: uppercase;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-secondary {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fcfcfd;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-secondary .widget-49-date-day {
    color: #dde1e9;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-secondary .widget-49-date-month {
    color: #dde1e9;
    line-height: 1;
    font-size: 1rem;
    text-transform: uppercase;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-success {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #e8faf8;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-success .widget-49-date-day {
    color: #17d1bd;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-success .widget-49-date-month {
    color: #17d1bd;
    line-height: 1;
    font-size: 1rem;
    text-transform: uppercase;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #ebf7ff;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-info .widget-49-date-day {
    color: #36afff;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-info .widget-49-date-month {
    color: #36afff;
    line-height: 1;
    font-size: 1rem;
    text-transform: uppercase;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-warning {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: floralwhite;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-warning .widget-49-date-day {
    color: #FFC868;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-warning .widget-49-date-month {
    color: #FFC868;
    line-height: 1;
    font-size: 1rem;
    text-transform: uppercase;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-danger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #feeeef;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-danger .widget-49-date-day {
    color: #F95062;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-danger .widget-49-date-month {
    color: #F95062;
    line-height: 1;
    font-size: 1rem;
    text-transform: uppercase;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-light {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fefeff;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-light .widget-49-date-day {
    color: #f7f9fa;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-light .widget-49-date-month {
    color: #f7f9fa;
    line-height: 1;
    font-size: 1rem;
    text-transform: uppercase;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-dark {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #ebedee;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-dark .widget-49-date-day {
    color: #394856;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-dark .widget-49-date-month {
    color: #394856;
    line-height: 1;
    font-size: 1rem;
    text-transform: uppercase;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-base {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #f0fafb;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-base .widget-49-date-day {
    color: #68CBD7;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1;
}

.widget-49 .widget-49-title-wrapper .widget-49-date-base .widget-49-date-month {
    color: #68CBD7;
    line-height: 1;
    font-size: 1rem;
    text-transform: uppercase;
}

.widget-49 .widget-49-title-wrapper .widget-49-post-creator {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
}

.widget-49 .widget-49-title-wrapper .widget-49-post-creator .widget-49-post-user {
    color: #3c4142;
    font-size: 15px;
}

.widget-49 .widget-49-title-wrapper .widget-49-post-creator .widget-49-post-creationtime {
    color: #B1BAC5;
    font-size: 13px;
}

.widget-49 .widget-49-post-content {
    font-weight: 500;
    font-size: 15px;
    margin-top: .5rem;
}

.widget-49 .widget-49-post-content .widget-49-post-content-text {
    margin-top: 25px;
    color: #727686;
}

.widget-49 .widget-49-post-content .widget-49-post-content-text span {
    margin-left: .5rem;
}

.widget-49 .widget-49-action {
    text-align: right;
}

.widget-49 .widget-49-action a {
    text-transform: uppercase;
}
</style>