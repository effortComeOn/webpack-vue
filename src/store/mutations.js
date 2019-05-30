import mutil from '@/config'

export default {
  RECORD_USERINFO(state, info) {
		let user = {
			name: 'zj'
		}
		state.login = true;
		mutil.setStore('login', user)
	},

	LOG_OUT(state, info) {
		state.login = false;
		mutil.removeStore('login')
	},
}