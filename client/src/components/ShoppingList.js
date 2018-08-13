import React from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import { PropTypes } from 'prop-types';
import uuid from 'uuid';

class ShoppingList extends React.Component {

    componentDidMount() {
        this.props.getItems();
    }

    deleteItem = (id) => {
        this.props.deleteItem(id)
    }

    render() {
        const { items } = this.props.item;
        return(
            <Container>
                <ListGroup style={{ marginBottom: '2rem' }}>
                    {items.map(({ _id, name }) => (
                        <ListGroupItem>
                            <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={this.deleteItem.bind(this, _id)}
                            >
                                &times;
                            </Button>
                            {name}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);