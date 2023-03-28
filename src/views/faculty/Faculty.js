import Header from "../../components/header/Header";
import "./Faculty.css";
import images from './images/3135715.png';
import { useState } from "react";
import { ProfileInfo } from "../../components/Api/Api";
import { useQuery } from "react-query";
const Faculty = () => {
    const [isEditable, setIsEditable] = useState(false);

    const { data, isLoading, isError } = useQuery('profileInfo', ProfileInfo);

    if (isLoading) {
      return <div>Loading profile info...</div>;
    }
  
    if (isError) {
      return <div>Error fetching profile info</div>;
    }
  
    return <>
        <Header></Header>
        <div className="main-container">
            <div className="proflie"><img src={images} alt="profile" width={150} height={150} /></div>
            <div className="label-faculty">Faculty Profile</div>
            <div className="line">
     <div className="App">
      <h1>
        {isEditable}
      </h1>
      <table className="table">
        <tr>
          <td className="td">Full Name</td>
          <td >
            <input className="input" placeholder= {data.first_name}
              readOnly={!isEditable}
              style={{ background: !isEditable ? "#d5d5d5" : null }}
            />
          </td>
          <td>
            <input className="input" placeholder= {data.last_name}
              readOnly={!isEditable}
              style={{ background: !isEditable ? "#d5d5d5" : null }}
            />
          </td>
          <td>
            <input className="input" placeholder= {data.mi}
              readOnly={!isEditable}
              style={{ background: !isEditable ? "#d5d5d5" : null }}
            />
          </td>
        </tr>
        <tr>
          <td>Birthday</td>
          <td>
            <input className="input" placeholder= {data.birthdate}
              readOnly={!isEditable}
              style={{ background: !isEditable ? "#d5d5d5" : null }}
            />
          </td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>
            <input className="input" placeholder= {data.gender}
              readOnly={!isEditable}
              style={{ background: !isEditable ? "#d5d5d5" : null }}
            />
          </td>
        </tr>
        <tr>
          <td>Address</td>
          <td>
            <input className="input" placeholder= {data.address}
              readOnly={!isEditable}
              style={{ background: !isEditable ? "#d5d5d5" : null }}
            />
          </td>
        </tr>
      </table>
      <button onClick={() => setIsEditable(!isEditable)}>Edit Profile</button>
      <button onClick={() => setIsEditable(!isEditable)}>Save</button>
      </div>
    </div>
    </div>  
        
    </>
}

export default Faculty;