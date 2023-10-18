import axios from 'axios';

const LIST_API_URL = 'http://localhost:8080';
const userID = document.cookie;
const USER_API_URL = '${LIST_API_URL}/user/{userid}';

class ChangeRequestDataService {
    // For retrieving all changeRequests
    getAllChangeRequests() {
        return axios.get('${LIST_API_URL}/changerequest');
    }
    // For retrieving all changeRequests by the userID
    getChangeRequests(userID) {
        return axios.get('{USER_API_URL}/changerequest');
    }

    // For retrieving all userIDs (just one or none) by the userID
    findByID(userID) {
        return axios.get('${USER_API_URL}');
    }

    // For creating changeRequests
    create(userid, changeRequest) {
        return axios.post('{USER_API_URL}/changerequest/', changeRequest);
    }
}

export default new ChangeRequestDataService();