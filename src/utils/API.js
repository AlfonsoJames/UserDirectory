import axios from "axios";


// Export an object containing methods we'll use for accessing the API
export default {
    getRandomEmployees: function() {
        return axios.get('https://randomuser.me/api/?results=50');
      },
    getFilteredEmployees: function() {
        return axios.get('https://randomuser.me/api/?results=50');
      } 
};
  

