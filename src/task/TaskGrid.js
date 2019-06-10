/**
 * Created by chalosalvador on 2019-06-08
 */
import React from 'react';
import { Col, Input, Row, Table } from 'antd';
import Helpers from '../common/Helpers';
import TaskAPI from './TaskAPI';
import './Task.css';
import moment from 'moment';


const Search = Input.Search;

class TaskGrid extends React.Component {
  state = {
    loading: true,
    filteredTasks: [],
    allTasks: []
  };


  componentDidMount() {
    TaskAPI.getAll()
      .then( ( allTasks ) => {
        this.setState( {
          allTasks,
          filteredTasks: allTasks,
          loading: false
        } );
      } )
      .catch( ( error ) => console.log( 'error', error ) );
  }

  handleSearch = searchText => {
    const filteredTasks = Helpers.filterRows( this.state.allTasks, 'description', searchText );

    this.setState( {
      filteredTasks
    } );
  };

  handleChange = $event => {
    this.handleSearch( $event.target.value );
  };

  render() {
    let uniqueKey = 0;
    const { filteredTasks, allTasks } = this.state;
    const fields = Object.keys( allTasks[ 0 ] || {} );
    const columns = Helpers.getTableColumnsFromFields( fields, {
      'project': {
        width: 100,
        sorter: ( a, b ) => a.project - b.project
      },
      'start date': {
        render: ( value ) => {
          if( value ) {
            return moment( value ).format( 'DD.MM.YYYY' );
          }
        }
      },
      'savings amount': {
        render: ( number ) => {
          if( number ) {
            return number.toFixed( '2' );
          }
        }
      }
    } );

    return <div className='task-grid'>
      <Row type='flex' justify='end' className='task-grid__search'>
        <Col>
          <Search
            placeholder='Enter Description'
            onSearch={ this.handleSearch }
            onChange={ this.handleChange }
            size='large'
          />
        </Col>
      </Row>

      <Row type='flex' justify='center' className='task-grid__grid'>
        <Col span={ 24 }>
          <Table dataSource={ filteredTasks }
                 columns={ columns }
                 scroll={ { x: 800 } }
                 pagination={ false }
                 rowKey={ () => ++uniqueKey }
                 loading={ this.state.loading }
                 title={ () => 'TASKS' } />
        </Col>
      </Row>
    </div>;
  }
}

export default TaskGrid;