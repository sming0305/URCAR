import { defineStore } from 'pinia'
import axios from 'axios'

const { VITE_API_PATH, VITE_API_URL } = import.meta.env

export default defineStore('articleStore', {
  state: () => ({
    articleList: [],
    allArticleList: [],
    getAll: false,
    articleTemp: {},
    articlePagination: {},
    currentRoute: '',
    currentTag: '',
    category: 'all'
  }),
  actions: {
    getArticles(route, page) {
      if (this.allArticleList.length === 0) {
        this.getAll = false
      }

      this.currentRoute = ''
      axios
        .get(`${VITE_API_URL}api/${VITE_API_PATH}/articles?page=${page}`)
        .then((res) => {
          this.articleList = res.data.articles
          this.articlePagination = res.data.pagination
          this.currentRoute = route
          if (this.articlePagination.total_pages > 1 && this.getAll === false) {
            this.getAllArticle(this.articlePagination.total_pages)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getAllArticle(totalPage) {
      for (let i = 0; i < totalPage; i++) {
        axios
          .get(`${VITE_API_URL}api/${VITE_API_PATH}/articles?page=${i + 1}`)
          .then((res) => {
            res.data.articles.forEach((article) => this.allArticleList.push(article))
          })
          .catch((err) => {
            console.log(err)
          })
        this.getAll = true
      }
    },
    toDate(timestamp) {
      const date = new Date(timestamp * 1000)

      const dateString = date.toLocaleDateString()

      return dateString
    },
    switchCategory(category) {
      this.category = category
    },
    getTargetArticle(id) {
      this.articleTemp = {}
      axios
        .get(`${VITE_API_URL}api/${VITE_API_PATH}/article/${id}`)
        .then((res) => {
          this.articleTemp = res.data.article
          this.currentTag = res.data.article.tag[0]
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  getters: {
    showArticleList: ({ articleList, currentRoute, currentTag, category, allArticleList }) => {
      const sortArticle = articleList.sort(function (a, b) {
        if (a.create_at < b.create_at) {
          return 1
        } else {
          return -1
        }
      })

      if (currentRoute === 'articlelist') {
        if (category === 'all') {
          return sortArticle
        } else {
          const list = allArticleList.filter((article) => article?.tag[0] === category)
          return list
        }
      } else if (currentRoute === 'home') {
        // 隨機選擇一個元素
        const randomIndex1 = Math.floor(Math.random() * sortArticle.length)
        // 隨機選擇另一個元素，直到它與第一個元素不同
        let randomIndex2
        do {
          randomIndex2 = Math.floor(Math.random() * sortArticle.length)
        } while (randomIndex2 === randomIndex1)
        const randomItems = [sortArticle[randomIndex1], sortArticle[randomIndex2]]
        return randomItems
      } else if (currentRoute === 'article') {
        const list = allArticleList.filter((article) => article?.tag[0] === currentTag)
        return list
      }
    },
    articleConvert: ({ articleTemp }) => {
      let convertText = articleTemp.content
      convertText = convertText
        .replace(/\/n/g, '<br/><br/>')
        .replace(/\/p/g, '<p>')
        .replace(/\/[^/]*$/, '')
      return convertText
    }
  }
})
