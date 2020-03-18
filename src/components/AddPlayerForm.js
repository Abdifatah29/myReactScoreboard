import React,{Component} from 'react';
import propTypes from 'prop-types';

class AddPlayerForm extends Component {
    static propTypes = {
        addPlayer: propTypes.func
    };

    playerInput = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value);
        e.currentTarget.reset();
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    ref={this.playerInput}
                    required
                    placeholder="Enter a player's name"
                 />
                 <input
                    type="submit"
                    value="Add player"
                 />
            </form>
        );
    }
}

export default AddPlayerForm;
