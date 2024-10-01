import React from "react";
import { useSelector } from "react-redux";
import "./DashView.css";
import { add, dotmenu } from '../../icons_FEtask'
import Card from "../Card/Card";
import { assignIcon, priorityIcon } from "../../Utils";
import {getAvailabilityById} from '../../Utils'

const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );
  const { allTickets, allUser } = useSelector(
    (state) => state.DataReducer
  );


  return (
    selectedData && (
      <div className="dashContainer">
        {selectedData?.map((elem, index) => {
          const icon = assignIcon(elem[index]?.title)
          return (
            <div key={index} className="dashCardContainer">
              <div className="dashCardHeading flex-sb">
                <div className="leftView">
                  {!user ? (
                    <span className='icon' >
                      <img src={icon} alt="" />
                    </span>
                  ) : (
                    <>
                      <span
                        className="imageContainer relative"
                        style={{ width: "15px", height: "15px", display: 'inline-block' }}
                      >
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                          }}
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                          alt="UserImage"
                        />
                        <div className={`${getAvailabilityById(elem.id, allTickets, allUser) && 'online'} userStatus`}/>
                      </span>
                    </>
                  )}
                  <span style={{fontSize: 'small'}}>
                    {elem[index]?.title} {elem[index]?.value?.length}
                  </span>
                </div>
                <div className="rightView">
                  <img src={add} alt="add" />
                  <img src={dotmenu} alt="dotmenu" />
                </div>
              </div>
              <div className="dashList flex-gap-10">
                {elem[index]?.value?.map((elem, ind) =>
                (
                  <Card 
                    key={ind} 
                    id={elem.id} 
                    title={elem.title} 
                    tag={elem.tag} 
                    status={getAvailabilityById(elem.id, allTickets, allUser)}
                    priority={priorityIcon(elem.priority)}
                    />
                )

                )}
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default DashView;
