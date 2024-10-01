import axios from 'axios';

export const fetchAllData = () => async (dispatch) =>{
    const value = localStorage.getItem('data');
    if(value!== null){
        return dispatch({type : 'DATA_SUCCESS', payload : JSON.parse(value)});
    }
    try {
        dispatch({type : 'DATA_REQUEST'})
    
        const {data} = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment/");


        localStorage.setItem('data' , JSON.stringify(data))
        dispatch({type : 'DATA_SUCCESS', payload : data});

    } catch (error) {
        console.log(error.message);
        dispatch({type : 'DATA_FAILURE'})
    }
}

export const selectData = (group, allTickets, orderValue) => async (dispatch) =>{
    try {
        dispatch({type : 'SELECT_DATA_REQUEST'})

        let user = false;
        let mySet = new Set();
        let arr = [], selectedData = [];

        if(group === 'status'){
            let status_list = ["Todo", "In progress", "Backlog", "Done", "Cancelled"];
            status_list.forEach((elem) => {
                mySet.add(elem);
            })
    
            arr = [...mySet];
    
            arr.forEach((elem, index) => {
                let arr = allTickets.filter((fElem) => {
                    return elem === fElem.status;
                })
                selectedData.push({
                    [index] : {
                        title : elem,
                        value : arr
                    }
                })
            })
        }else if(group === 'user'){
            user = true;
            allTickets?.allUser?.forEach((elem, index) => {
                arr = allTickets?.allTickets?.filter((Felem) => {
                    return elem.id === Felem.userId;
                })

                selectedData.push({
                    [index] : {
                        title : elem.name,
                        value : arr
                    }
                })
            })
        }else{
            let prior_list = ["No Priority", "Low", "Medium", "High", "Urgent"];

            prior_list.forEach((elem, index) => {
                arr = allTickets.filter((fElem) => {
                    return index === fElem.priority;
                })

                selectedData.push({
                    [index] : {
                        title : elem,
                        value : arr
                    }
                })
            })
        }

        if(orderValue === "title"){
            selectedData.forEach((elem, index) => {
                elem[index]?.value?.sort((a, b) => a.title.localeCompare(b.title))
            })
        }

        if(orderValue === "priority"){
            selectedData.forEach((elem, index) => {
                elem[index]?.value?.sort((a, b) => b.priority - a.priority)
            })
        }
        
        dispatch({type : 'SELECT_DATA_SUCCESS', payload : {selectedData, user}});

    } catch (error) {
        dispatch({type : 'SELECT_DATA_FAILURE', payload : error.message})
    }
}
