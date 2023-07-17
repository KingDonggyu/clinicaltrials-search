import Axios, { AxiosRequestConfig } from 'axios';

class HttpClient {
  private axios;

  constructor() {
    this.axios = Axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
    });
  }

  protected async get<Response = unknown>(url: string, config?: AxiosRequestConfig) {
    const res = await this.axios.get<Response>(url, config);
    return res.data;
  }

  protected async post<Response = unknown, Request = any>(url: string, body?: Request) {
    const res = await this.axios.post<Response>(url, body);
    return res.data;
  }
}

export default HttpClient;
