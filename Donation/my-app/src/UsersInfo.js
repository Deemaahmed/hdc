import {observable , action} from 'mobx';


class UsersInfo{


	@observable all = [];	
	@observable isLoading = false;


	@action async fetchAll(){
		this.isLoading = false;
		const response = await fetch ('http://localhost:300/');
		const status = await response.status;

	}





}