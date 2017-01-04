import {connect} from 'react-redux'
import ChatBar from './ChatBar'

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
)

const mapStateToProps = state => {

}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBar)