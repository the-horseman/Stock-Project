import React from 'react'
import { useNavigate } from "react-router-dom"

function Cross() {

    const navigate = useNavigate();

    return (
        <svg id="login-cross" data-name="Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" onClick={() => { navigate("/") }}>
            <rect id="Area_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE2_" data-name="Area [SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE2]" width="48" height="48" rx="24" fill="#eaf6ff" />
            <g id="Icon_ICON_feather_x_SIZE_MEDIUM_STATE_DEFAULT_STYLE_STYLE2_" data-name="Icon [ICON=feather/x][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]" transform="translate(14 14)">
                <rect id="Area_ICON:feather_x_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE2_" data-name="Area [ICON:feather/x][SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE2]" width="20" height="20" fill="rgba(21,101,192,0.32)" opacity="0" />
                <g id="Icon" transform="translate(-1 -1)">
                    <line id="_287c5a47-09c1-4468-9754-16d318a097a4" data-name="287c5a47-09c1-4468-9754-16d318a097a4" x1="20" y2="20" transform="translate(1 1)" fill="none" stroke="#1565c0" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.333" />
                    <line id="_3bde7bd3-912d-499a-845e-44f03595a038" data-name="3bde7bd3-912d-499a-845e-44f03595a038" x2="20" y2="20" transform="translate(1 1)" fill="none" stroke="#1565c0" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.333" />
                </g>
            </g>
        </svg>
    )
}

export default Cross