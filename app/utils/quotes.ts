interface QuoteResponse {
  text: string
  author: string
}

export const quoteRepository = () => ({
  get() {
    return useSanctumFetch<QuoteResponse>('/api/quote')
  },
})
