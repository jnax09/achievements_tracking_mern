import React, {
    Component
} from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'
import {
    connect
} from 'react-redux'
import PropTypes from 'prop-types'

import {
    addAchievement
} from '../actions/achievementActions'

class AchievementModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const newAchievement = {
            name: this.state.name
        }

        //Add achievement via addAchievement action
        this.props.addAchievement(newAchievement)

        //Close the modal
        this.toggle()
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Button color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >
                    Add Achievement
                </Button>


                <Modal isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        What's your exploit today?
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="achievement" > Achievement </Label>
                                <Input type="text"
                                    name="name"
                                    id="achievement"
                                    placeholder="Add Your Exploit"
                                    onChange={this.onChange}
                                />
                                <Button color="dark"
                                    style={{ marginTop: '2rem' }}
                                    block
                                >
                                    Add Achievement
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

AchievementModal.protoTypes = {
    addAchievement: PropTypes.func.isRequired
}

export default connect(null, {
    addAchievement
})(AchievementModal)