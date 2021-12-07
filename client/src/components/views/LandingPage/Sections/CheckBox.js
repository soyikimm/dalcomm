import React, { useState } from 'react'
import { Collapse, Checkbox } from 'antd';

const { Panel } = Collapse;

function CheckBox(props) {

    const [Checked, setChecked] = useState([]);

    const handleToggle = (value) => {

            // check된 index를 구함
            const currentIndex = Checked.indexOf(value) //없는 값을 넣으면 -1이나옴
            
            // 체크를 두번누르면 삭제
            const newChecked = [...Checked]
            
            //state를 넣어줌.
            if(currentIndex === -1) {
                newChecked.push(value)
            } else { //빼줌
                newChecked.splice(currentIndex, 1)
            }
            setChecked(newChecked)
            props.handleFilters(newChecked)
    }

    const renderCheckBoxLists = () => props.list && props.list.map((value, index) => (
        <React.Fragment key={index}>
            <Checkbox onChange={() => handleToggle(value._id)}
                checked={Checked.indexOf(value._id) === -1 ? false : true} />
            <span>{value.name}</span>
        </React.Fragment>
    ))

    return (
        <div>
             <Collapse defaultActiveKey={['1']} >
                <Panel header="This is panel header 1" key="1">

                    {renderCheckBoxLists()}
                    
                </Panel>
            </Collapse>
        </div>
    )
}

export default CheckBox