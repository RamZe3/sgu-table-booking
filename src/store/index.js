import { createStore } from 'vuex'
import {globalModule} from "@/store/globalModule";

export default createStore({
  modules: {
    globalM : globalModule
  }
})
