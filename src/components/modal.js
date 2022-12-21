import React, { useContext, useState, useEffect } from 'react'
import '../css/modal.modules.css'







const Modal = ({closeModal}) => {    
    
    return(<>
        <div className="modalBackground">
            <form class="modalContainer" >
                <div className="titleCloseBtn">
                <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="modTitle">
                    <textarea className="des-cc" type="text" name="description" placeholder="What's going on Isreal" ></textarea>
                </div>
                <div className="bodyy" >
                    <div className="upload-body">
                        <input type="button" value="Choose Video" className="upload" />
                        <input type="file" id='video' name="video" className='videoplayer' accept="video/*" />
                    </div>
                    <div className="upload-body-right">
                        <input type="button" value="Upload" className="upload" />
                    </div>
                </div>
            </form>
        </div>
    </>)
}
export default Modal