
//import Balance from '../components/signIned/Balance'
import {Appbar} from "../components/signIned/Appbar"
import { Users } from "../components/signIned/Users"
import  { Balance } from '../components/signIned/Balance'

export const Dashboard = () => {
  return <div>
     <Appbar></Appbar>
      <div className="m-8">
          <Balance value={"10,000"} />
          <Users></Users>
      </div>
  </div>
}