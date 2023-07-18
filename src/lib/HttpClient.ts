import Axios, { AxiosRequestConfig } from 'axios';

export default class HttpClient {
  private axios;

  private readonly BASE_URL = import.meta.env.VITE_BASE_URL;

  constructor() {
    this.axios = Axios.create({ baseURL: this.BASE_URL });
    this.setResponseInterception();
  }

  protected async get<Response = unknown>(url: string, config?: AxiosRequestConfig) {
    const res = await this.axios.get<Response>(url, config);
    return res.data;
  }

  protected async post<Response = unknown, Request = any>(url: string, body?: Request, config?: AxiosRequestConfig) {
    const res = await this.axios.post<Response>(url, body, config);
    return res.data;
  }

  private setResponseInterception() {
    this.axios.interceptors.response.use(value => {
      console.info('calling api');
      return value;
    });
  }
}
