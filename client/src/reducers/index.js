import { combineReducers } from 'redux';
import { reducer as formReducer  } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer
<<<<<<< HEAD
});
=======
});
>>>>>>> 9c30277 (fix route error)
