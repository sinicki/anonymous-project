import React from "react";
import ProjectController from './projectController.js'
import DonateController from './donateController'

export default () => {

    let fundName = "gyms"

    return  (
        <div>
            <DonateController fundName = {fundName}></DonateController>
            <ProjectController fundName = {fundName}></ProjectController>
        </div>
    )

}
