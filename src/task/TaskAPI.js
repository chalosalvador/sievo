/**
 * Created by chalosalvador on 2019-06-02
 */

import Helpers from '../common/Helpers';

/**
 * Gets all tasks and returns a JSON object
 * @returns {Promise<never|any|Promise<any>>}
 */
const getAll = async() => {
  let response = await fetch( `https://sievo-react-assignment.azurewebsites.net/api/data`, {
    accept: 'application/json'
  } );
  return Helpers.checkStatus( response );
};

const TaskAPI = {
  getAll
};
export default TaskAPI;