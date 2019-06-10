/**
 * Created by chalosalvador on 2019-06-09
 */

const TaskAPI = jest.genMockFromModule( '../TaskAPI' );

TaskAPI.getAll = () => (new Promise( ( resolve, reject ) => (
    resolve( [
        {
          'project': 2,
          'description': 'Substitute Crème fraîche with evaporated milk in ice-cream products',
          'start date': '2013-12-28T00:00:00+00:00',
          'category': 'Office supplies',
          'responsible': 'Clark Kent',
          'savings amount': 3722.41684,
          'currency': 'NULL',
          'complexity': 'Moderate'
        },
        {
          'project': 1,
          'description': 'Decrease production related non-categorized side costs',
          'start date': '2013-06-14T00:00:00+00:00',
          'category': 'Dairy',
          'responsible': 'Daisy Milks',
          'savings amount': 5583.62526,
          'currency': 'USD',
          'complexity': 'Hazardous'
        }
      ]
    )
  )
));

export default TaskAPI;