import React from 'react';

function GenericModal() {
    return (
      <div className="modal fade" id="genericModal" tabIndex="-1" role="dialog" aria-labelledby="genericModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="genericModalLabel">Ups...</h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>            
          </div>
          <div className="modal-body">
            Under konstruktion :)
          </div>
            {/*<div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
            </div>*/}
        </div>
      </div>
    </div>   
    );
}

export default GenericModal;