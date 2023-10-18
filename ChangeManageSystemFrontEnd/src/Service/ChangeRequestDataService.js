import http from "../http-common";

class ChangeRequestDataService {
    get(id) {
        return http.get(`/users/${id}`);
    }
}

export default new ChangeRequestDataService();