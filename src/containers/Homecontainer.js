import Container from "../components/Container";
import {connect} from 'react-redux'
import { addToCart } from '../service/Actions/action'

const mapStateToProps = state =>({
})

const mapDispatchToProps = dispatch =>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Container)