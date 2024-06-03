import React from 'react';

type ProfileStatusType = {
   status: string;
};

export class ProfileStatus extends React.Component<ProfileStatusType> {
   state = {
      editMode: false,
   };

   activateEditMode() {
      this.setState({ editMode: true });
   }
   deactivateEditMode() {
      this.setState({ editMode: false });
   }

   render() {
      return (
         <div>
            {this.state.editMode ? (
               <div>
                  <input autoFocus onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
               </div>
            ) : (
               <div>
                  <span onDoubleClick={this.activateEditMode.bind(this)}> {this.props.status} </span>
               </div>
            )}
         </div>
      );
   }
}