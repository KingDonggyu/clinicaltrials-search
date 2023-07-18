import HttpClient from 'lib/HttpClient';
import { Sick } from 'sick';

class SickRepository extends HttpClient {
  async search(query: string) {
    const data = await this.get<Sick[]>('/sick', { params: { q: query } });
    return data.slice(0, 10);
  }
}

export default SickRepository;
