import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
 import { connect } from 'react-redux';
 import { addItem } from '../actions/itemActions';
 import { PropTypes } from 'prop-types';

 class ItemModal extends React.Component {
     constructor(props) {
         super(props);

         this.state = {
            modal: false,
            name: ''
         }

         this.toggle = this.toggle.bind(this);
         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
     }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        let shoppingItem = {
            id: 5,
            name: this.state.name
        }
        this.props.addItem(shoppingItem);
        this.toggle();
    }

    render() {
        return (
          <div>
            <Button color="dark"
                style={{marginBottom:'2rem', marginTop:'2rem', marginLeft: '1rem'}}
                onClick={this.toggle}
            >{this.props.buttonLabel}</Button>

            <Modal isOpen={this.state.modal} toggle={this.toggle} >
              <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
              <ModalBody>
                <Form onSubmit={this.onSubmit} >
                    <FormGroup>
                        <Input
                            type="text"
                            name="name"
                            id="item"
                            placeholder="Add Shopping Item"
                            onChange={this.onChange} />
                        <Button 
                            type="submit" 
                            size="xm" 
                            className="float-right" 
                            style={{marginTop: '2rem'}}
                        >Submit</Button>
                    </FormGroup>
                </Form>
              </ModalBody>
            </Modal>
          </div>
        );
      }

 }

 
ItemModal.propTypes = {}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);