import CheckIn from './CheckIn'
import EventsNearYou from './EventsNearYou'
import ThisWeeksEvents from './ThisWeeksEvents'
import { CardWide } from '../context';

const Home = ({ events }) => {

    return (
        <div className= "Home">
        
        <h1 className="display-2 text-center">Welcome to Whosville!</h1>
          
        <div className="row">
          <div className="col">
          <CardWide 
          cardimage="../src/cotc-kids.jpeg"
          header="What's Happening"
          body={
              <>
              <ThisWeeksEvents events={events} /> 
          </>   
          }
          />
          </div>
          </div>
    </div>
)};

export default Home;