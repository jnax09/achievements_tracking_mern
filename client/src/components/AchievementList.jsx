import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { getAchievements, deleteAchievement } from '../actions/achievementActions'

class AchievementList extends Component {
    componentDidMount() {
        this.props.getAchievements()
    }

    onDelete = (id) => {
        this.props.deleteAchievement(id)
    }

    render() {
        const { achievements } = this.props.achievement
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="achievements-list">
                        {achievements.map(({ _id, name }) => (
                            <CSSTransition
                                key={_id}
                                timeout={500}
                                classNames="fade"
                            >
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDelete.bind(this, _id)}
                                    >
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

AchievementList.propTypes = {
    achievement: PropTypes.object.isRequired,
    getAchievements: PropTypes.func.isRequired,
    deleteAchievement: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    achievement: state.achievement
})

export default connect(mapStateToProps, { getAchievements, deleteAchievement })(AchievementList)