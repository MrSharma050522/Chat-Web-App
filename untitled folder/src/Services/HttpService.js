import axios from "axios";
import Config from "./Config";

const BackendApiUrl = Config.chatAppBackend;
const HttpService = {
    createNewUser: function (data) {
        console.log("createNewUser", data);
        return axios.post(`${BackendApiUrl}users/createNewUser`, data);
    },
    userLogin: function (data) {
        console.log("userLogin", data);
        return axios.post(`${BackendApiUrl}users/userLogin`, data);
    },
    getAllUser: function (data) {
        console.log("getAllUser", data);
        return axios.get(`${BackendApiUrl}users/getAllUser`, data);
    },
    createNewChatGroup: function (data) {
        console.log("createNewChatGroup", data);
        return axios.post(`${BackendApiUrl}chat-group/createNewChatGroup`, data);
    },
    getAllChatGroup: function (data) {
        console.log("getAllChatGroup", data);
        return axios.get(`${BackendApiUrl}chat-group/getAllChatGroup`, data);
    },
    getChatGroupDetailsById: function (id) {
        console.log("getChatGroupDetailsById", id);
        return axios.get(
            `${BackendApiUrl}chat-group/getChatGroupDetailsById/${id}`
        );
    },
    // chatMessage : function (data) {
    //     return axios.post(`${chat}/messages`, data);
    // },
    // getGroupWiseMessage : function(groupId){
    //     return axios.get(`${chat}/chat/${groupId}`);
    // }
};
export default HttpService;
