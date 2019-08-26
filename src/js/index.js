
import store from "../js/store/index";

import { getCustomers } from "../js/actions/index";
import { getUser } from "../js/actions/index";

window.store = store;

window.getCustomers = getCustomers;
window.getUser = getUser;