import React, {PureComponent} from 'react';
import Counter from './Counter';
import Icon from './Icon';
import propTypes from 'prop-types';

class Player extends PureComponent {
    static propTypes = {
        changeScore: propTypes.func,
        removePlayer: propTypes.func,
        name: propTypes.string.isRequired,
        score: propTypes.number.isRequired,
        id: propTypes.number,
        index: propTypes.number
    }
    render(){
        const {
            name,
            id,
            score,
            index,
            removePlayer,
            changeScore
        } = this.props;

        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                    <Icon />
                    {name}
                </span>

                <Counter
                    score={score}
                    index={index}
                    changeScore={changeScore}
                />
            </div>
        );
    }
}

export default Player;
