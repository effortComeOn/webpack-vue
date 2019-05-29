import mutil from '@/config'

export default {
  RECORD_USERINFO(state, info) {
		let user = {
			name: 'zj'
		}
		state.login = true;
		mutil.setStore('login', user)
	},
}