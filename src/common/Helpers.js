/**
 * Created by chalosalvador on 2019-06-08
 */

/**
 * Makes sure strings "NULL" are rendered as null values or empty
 * @param value
 * @returns any
 */
const checkNull = ( value ) => value === 'NULL'
  ? null
  : value;

/**
 * Checks the status of the response and returns the JSON or throws the error
 * @param response
 * @returns {never|any|Promise<any>}
 */
const checkStatus = ( response ) => {
  if( response.ok ) {
    return response.json();
  }
  const error = new Error( `HTTP Error ${ response.statusText }` );
  error.status = response.statusText;
  error.response = response;
  console.log( error ); // eslint-disable-line no-console
  throw error;
};

/**
 * Receives an array of fields and returns the respective columns ready to render the table
 * @param fields
 * @param customParameters
 * @returns {Array}
 */
const getTableColumnsFromFields = ( fields, customParameters = {} ) => {

  let columns = fields.map( ( field ) => {
    const { customRender, ...customFieldParameters } = customParameters[ field ] || {};
    return {
      title: field.toUpperCase(),
      dataIndex: field,
      key: field,
      render: ( value ) => {
        value = checkNull( value );
        if( customRender ) {
          value = customRender( value );
        }
        return value;
      },
      ...customFieldParameters
    };
  } );

  return columns;
};

/**
 * Receives an array of objects and filters it by the specified field and searchText (string)
 *
 * @param rows
 * @param field
 * @param searchText
 * @returns Array
 */
const filterRows = ( rows, field, searchText ) => rows.filter( ( row ) => {
  const value = row[ field ].toLowerCase();
  return value.includes( searchText.toLowerCase() );
} );

const Helpers = {
  checkStatus,
  getTableColumnsFromFields,
  filterRows
};
export default Helpers;