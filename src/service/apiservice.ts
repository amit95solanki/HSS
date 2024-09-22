import instance from "./axiosSetup";

class AdminService {
  async login(formData: any) {
    return instance.post("/user/login", formData);
  }

  async verifyUser(config: { headers: object }) {
    return instance.get("/user/user-profile", config); // Use `/user/profile` for verification, not `/user/login`
  }
}

export default new AdminService();
