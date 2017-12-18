import Typer from '@/store/typer'
import User from '../mutation.type'

export default Typer({
    mod:'System',
    parent:[User.mod],
    INIT : 'INIT'
})
