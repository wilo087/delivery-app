interface Config {
  method?: string
  body?: any
  token?: string
}

const apiService = {
  async request(
    endpoint: string,
    { method = 'GET', body, token }: Config = {},
  ) {
    const headers: HeadersInit_ = {
      'Content-Type': 'application/json',
    }

    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    const config: RequestInit = {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    }

    const response = await fetch(
      `https://billet.delivery.aws.com${endpoint}`,
      config,
    )

    if (!response.ok) {
      const responseData = await response.json()
      const error = new Error(responseData.message)
      throw error
    }

    if (response.status !== 204) {
      // HTTP 204 means "No Content"
      const data = await response.json()
      return data
    }
  },
}

export default apiService
