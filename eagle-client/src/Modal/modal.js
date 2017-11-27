import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment, Modal, Icon, Table } from 'semantic-ui-react'
var axios = require('axios');

var PopUp = observer(class PopUp extends Component {
  constructor() {

    super()
    this.modalDelete = this.modalDelete.bind(this)
  }

  modalDelete() {
    this.props.fancyCalendarDelete()
    this.props.handleClose()
  }

  render() {
    if(this.props.userStore.user){
    console.log(this.props.userStore.retrieveUser.user.admin); 
    if (this.props.userStore.retrieveUser.user.admin === "true") {
      return (
        <div>

          <Modal open={this.props.shiftStore.modalPopUp} onClose={this.props.handleClose} closeIcon>
            <Header content='Eagle Mount' />
            <Modal.Content>
              <p>Thanks for volunteering! We need someone to cover this shift:</p>
              <Table collapsing>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Date and Time</Table.HeaderCell>
                    <Table.HeaderCell>Shift</Table.HeaderCell>
                    <Table.HeaderCell>Skill Required</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>{this.props.shiftStore.selectedShift.date}</Table.Cell>
                    <Table.Cell>{this.props.shiftStore.selectedShift.time}</Table.Cell>
                    <Table.Cell>{this.props.shiftStore.selectedShift.title}</Table.Cell>
                  </Table.Row>

                </Table.Body>

              </Table>
            </Modal.Content>
            <Modal.Actions>
              <Button color='red' onClick={this.modalDelete} >
                <Icon name='remove' /> Delete This Shift
                                </Button>
              
            </Modal.Actions>
          </Modal>
        </div>
      )
    }else {
          return (
            <div>
    
              <Modal open={this.props.shiftStore.modalPopUp} onClose={this.props.handleClose} closeIcon>
                <Header content='Eagle Mount' />
                <Modal.Content>
                  <p>Thanks for volunteering! We need someone to cover this shift:</p>
                  <Table collapsing>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Date and Time</Table.HeaderCell>
                        <Table.HeaderCell>Shift</Table.HeaderCell>
                        <Table.HeaderCell>Skill Required</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
    
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>{this.props.shiftStore.selectedShift.date}</Table.Cell>
                        <Table.Cell>{this.props.shiftStore.selectedShift.time}</Table.Cell>
                        <Table.Cell>{this.props.shiftStore.selectedShift.title}</Table.Cell>
                      </Table.Row>
    
                    </Table.Body>
    
                  </Table>
                </Modal.Content>
                <Modal.Actions>
                 
                  <Button color='blue' onClick={this.props.shiftStore.claimShift}>
                    <Icon name='checkmark' /> Claim This Shift
                              </Button>
                </Modal.Actions>
              </Modal>
            </div>
          );
        }
  } else {
    return (
      <div> Please Log in </div>
    )
  }
}
})

 





export default withRouter(inject('shiftStore', 'userStore')(PopUp));


