type IArticle = {
  id: string
  isPublished: boolean
  isPinned: boolean
  title: string
  url: string
  description: string
  cover: any
  image: any
  articleBody: string
  authorID: string
  categoryID: string
  createdAt: string
  updatedAt: string
  category: {
    id: string
    title: string
    url: string
    createdAt: string
    updatedAt: string
  }
  _count: {
    comments: number
  }
}

type ArticleResponseProps = {
  data: IArticle[]
  limit: number
  offset: number
}

type ArticlesStateProps = {
  pinnedArticles: IArticle[]
  articlesFeed: IArticle[]
  isLoading: boolean
  limit: number | null
  offset: number | null
}

export const useArticlesStore = defineStore('articles', {
  state: (): ArticlesStateProps => ({
    pinnedArticles: [],
    articlesFeed: [],
    isLoading: false,
    limit: null,
    offset: null
  }),
  actions: {
    async fetchArticles() {
      this.isLoading = true

      const { data } = await useApi().get<ArticleResponseProps>('/articles')

      this.articlesFeed = data.data
      this.limit = data.limit
      this.offset = data.offset

      this.isLoading = false
    }
  }
})
