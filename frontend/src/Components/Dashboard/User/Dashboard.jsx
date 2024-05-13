import './Dashboard.css'
import UserNav from '../../userDashboard/UserNav';
import Chart from '../dashComponents/Chart'
import CircularProgressBar from '../dashComponents/ProgressBar';
import ReminderList from './ReminderList';
import ReactCalendar from '../dashComponents/Calendar';
import dailyimg from "../../../assets/images/User.png"
import { IoLocationSharp } from "react-icons/io5";
const Dashboard = () => {
  const profileinfo=[
    {name:"Chris Evan" , age:30, Location : "Delhi, india"},
  ]
  const reminders = [
    { time: '10:05 PM', activity: 'Gardening' },
    { time: '10:05 PM', activity: 'Gardening' },
    { time: '10:05 PM', activity: 'Gardening' },
    { time: '10:05 PM', activity: 'Gardening' },
    { time: '10:05 PM', activity: 'Gardening' },
    { time: '10:05 PM', activity: 'Gardening' },
    { time: '10:05 PM', activity: 'Gardening' },
  ];
     return (
        <div className="dashboard">
          <UserNav/>
       <div className="left-side">
       <div className="row-one">
          <div className="row-one-card-one">
            <h5> <strong>Welcome Back...</strong> </h5>
            <div className="lower-side">
            <p>Have a nice day and don't forget take your pills...</p>
              <div className="img-container">
                <img src= {dailyimg}alt="" />
              </div>
            </div>
          </div>
          <div className="row-one-card-two">
          <div className="circle-das">

         </div>
          <div className="details-das">
                  {profileinfo.map((profile,index)=>(
              <div className="card-user" key={index}><div className="card-body">
                <h6><strong>{profile.name}</strong></h6>
                <p>Age: {profile.age}</p>
                <p><IoLocationSharp /> {profile.Location}</p>
              </div></div>
            ))}
            </div>
          </div>
        </div>
         <div className="row-one-chart">
          <div className="row-one-card-one-dashboard">
            <Chart/>
          </div>
        </div>
           <div className="row-three">
        <div className="row-three-card">
          <h5 id='progres'>Progress</h5>
          <div className="box-left-top">
              <div><CircularProgressBar value={55} /> </div> <br />
            </div>
        </div>
        <div className="row-three-card">
          <h5 id='about'>About User</h5>
        </div>
        </div>

       </div>
       <div className="right-side">
        <div className="right-card-one">
          <ReactCalendar/>

        </div>
        <div className="right-card-two">
        <ReminderList reminders={reminders} />
        </div>
       </div>
      </div>
     );
  };
  export default Dashboard;