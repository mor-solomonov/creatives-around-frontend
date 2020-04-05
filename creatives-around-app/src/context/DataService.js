export default class DataService {
  constructor(app) {
    this.app = app;
    this.app.state = { user: null };
    this.setUp();
  }
  get data() {
    return this.app.state;
  }
  set data(newState) {
    this.app.setState(newState);
  }
  // SETTING UP CONTEXT
  async setUp() {
    const user = await this.fetchUser();
    if (!user) {
      return;
    }
    const rawLocation = await this.getLocation();
    const location = {
      lon: rawLocation.coords.longitude,
      lat: rawLocation.coords.latitude,
    };
    // ONLY FOR TESTING
    await this.updateLocation(location);
    this.app.setState({ ...this.app.state, user });
  }
  // FETCHIN LOGGED IN USER DATA
  async fetchUser() {
    try {
      const response = await fetch('/api/user');
      const user = await response.json();
      return user;
    } catch (error) {
      console.log('not ok');
    }
  }
  // CREATING USER
  async createUser(user) {
    try {
      await fetch('/api/user', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      console.log('User successfuly created');
    } catch (error) {
      console.error(error);
    }
  }
  // FETCHING ORHER USERS BASED ON FILTER
  async getUsers(filter) {
    try {
      const response = await fetch('/api/user/all', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(filter),
      });
      const users = await response.json();
      return users;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  // LOGOUT
  async logout() {
    try {
      await fetch('/api/auth/logout');
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }
  // GET CURRENT LOCATION OF USER
  async getLocation() {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          return res(position);
        },
        (err) => {
          rej(err);
        }
      );
    });
  }
  // UPDATE LOCATION
  async updateLocation(location) {
    try {
      await fetch('/api/user', {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ location }),
      });
    } catch (error) {
      console.error(error);
    }
  }
}
