import React from 'react';

type ProfileStatusType = {
   status: string;
   updateStatusThunkCreator: (status: string) => void;
};

export class ProfileStatus extends React.Component<ProfileStatusType> {
   state = {
      editMode: false,
      status: this.props.status,
   };

   activateEditMode = () => {
      this.setState({ editMode: true });
   };
   deactivateEditMode = () => {
      this.setState({ editMode: false });

      this.props.updateStatusThunkCreator(this.state.status);
   };

   onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ status: e.currentTarget.value });
   };

   componentDidUpdate(prevProps: ProfileStatusType, prevState: ProfileStatusType) {
      if (prevProps.status !== this.props.status) {
         this.setState({ status: this.props.status });
      }
   }

   render() {
      return (
         <div>
            {this.state.editMode ? (
               <div>
                  <input
                     onChange={this.onStatusChange}
                     autoFocus
                     onBlur={this.deactivateEditMode}
                     value={this.state.status}
                  />
               </div>
            ) : (
               <div>
                  <span onDoubleClick={this.activateEditMode}> {this.state.status || 'no status '}</span>
               </div>
            )}
         </div>
      );
   }
}
