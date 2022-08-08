import { createStore } from "vuex";

import { alert } from "./alert.module";
import { authentication } from "./authentication.module";
import { user } from "./user.module";
// import { users } from "./users.module";

export const store = createStore({
  modules: {
    alert,
    authentication,
    user,
  },
});
