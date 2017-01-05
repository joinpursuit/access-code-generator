import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ChatBar from './ChatBar'
import {inputAction} from './chatBarActions'

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    inputAction,
  }, dispatch)
)

const mapStateToProps = state => ({
  input: state.chatBar.input
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatBar)